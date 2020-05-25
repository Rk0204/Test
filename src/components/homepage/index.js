import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";
import Card from "../repeated/customCard";
import Search from "./search";
import _ from "lodash";

import { Select, Spin } from "antd";

const { Option } = Select;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  height: 1020px;
  background: linear-gradient(to bottom, #ff9933 0%, #ff5050 100%);
  @media only screen and (max-width: 992px) {
    height: 1300px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  > h1 {
    font-size: 20px;
    font-weight: bolder;
    color: blue;
  }
`;
const SelectContainer = styled.div`
  display: flex;
  height: 34px;
  width: 140px;
  border: 1px solid #aaa;
  background: #fff;
`;

const CardContainer = styled.div`
  width: 80%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  @media only screen and (max-width: 992px) {
    width: 100%;
    flex-flow: unset;
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* padding: 38px 48px; */
`;
const SearchBar = styled.input`
  font-size: 18px;
  width: 45%;
  height: 16%;
  padding: 14px 0px;
  font-size: 15px;
  border: 1px solid #000;
  :focus {
    border: none;
  }
  ::placeholder {
    color: #999999;
  }
`;
const SearchButton = styled.button`
  width: 5%;
  border-radius: 0px 5px 5px 0px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: linear-gradient(to right, #00ff00 0%, #00ffff 100%);
  > img {
    width: 50%;
  }
  @media only screen and (max-width: 992px) {
    width: 20%;
  }
`;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: this.props.profileData,
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",
      showSelect: false,
      showAll: false,
      selected: "",
      term: ""
    };
  }

  componentDidMount = () => {
    this.props.getProfile();
  };

  // Event fired when the input value is changed
  onChange = e => {
    // const { suggestions } = this.props;
    const { selected } = this.state;
    const { profileData } = this.props;
    const userInput = e.currentTarget.value;
    let filteredSuggestions = [];
    // Filter our suggestions that don't contain the user's input
    if (selected == "First") {
      filteredSuggestions = profileData.filter(
        suggestion =>
          suggestion.first_name.toLowerCase().indexOf(userInput.toLowerCase()) >
          -1
      );
    } else if (selected == "Last") {
      filteredSuggestions = profileData.filter(
        suggestion =>
          suggestion.last_name.toLowerCase().indexOf(userInput.toLowerCase()) >
          -1
      );
    } else {
      filteredSuggestions = profileData.filter(
        suggestion =>
          suggestion.email.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
    }

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      showAll: true,
      userInput: e.currentTarget.value
    });
  };

  // Event fired when the user clicks on a suggestion
  onClick = e => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    const { selected } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      console.log(selected, "suggestion");
      if (selected == "First" && filteredSuggestions.length > 0) {
        this.setState({
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: filteredSuggestions[activeSuggestion].first_name
        });
      } else if (selected == "Last" && filteredSuggestions.length > 0) {
        this.setState({
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: filteredSuggestions[activeSuggestion].last_name
        });
      } else if (selected == "Email" && filteredSuggestions.length > 0) {
        this.setState({
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: filteredSuggestions[activeSuggestion].email
        });
      }
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  handleSelect = () => {
    this.setState({
      showSelect: !this.state.showSelect
    });
  };

  handleChange = e => {
    this.setState({
      selected: e
    });
  };

  handleSearch = () => {
    const { selected, userInput } = this.state;
    const { profileData } = this.props;
    this.setState({
      showAll: true
    });
    if (selected == "First") {
      this.setState({
        filteredSuggestions: _.filter(profileData, { first_name: userInput })
      });
    } else if (selected == "Last") {
      this.setState({
        filteredSuggestions: _.filter(profileData, { last_name: userInput })
      });
    } else if (selected == "Email") {
      this.setState({
        filteredSuggestions: _.filter(profileData, { email: userInput })
      });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
        selected,
        showAll
      }
    } = this;
    const { profileData } = this.props;
    // console.log("data=====", this.props.profileData);
    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }
              if (selected == "First") {
                return (
                  <li className={className} key={index} onClick={onClick}>
                    {suggestion.first_name}
                  </li>
                );
              } else if (selected == "Last") {
                return (
                  <li className={className} key={index} onClick={onClick}>
                    {suggestion.last_name}
                  </li>
                );
              } else if (selected == "Email") {
                return (
                  <li className={className} key={index} onClick={onClick}>
                    {suggestion.email}
                  </li>
                );
              }
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }
    if (!profileData) {
      return <Spin />;
    }

    return (
      <>
        <Header />
        <Wrapper>
          <Container>
            {/* <Title>
              <h1>Find here</h1>
            </Title> */}
            <SelectContainer>
              <Select
                defaultValue="Search By"
                style={{ width: 120 }}
                onChange={this.handleChange}
              >
                <Option value="First">First Name</Option>
                <Option value="Last">Last Name</Option>
                <Option value="Email">Email</Option>
              </Select>
            </SelectContainer>
          </Container>
          <Container>
            <Search
              onChange={onChange}
              onKeyDown={onKeyDown}
              userInput={userInput}
              suggestionsListComponent={suggestionsListComponent}
              handleSearch={this.handleSearch}
            />
          </Container>
          <MainContainer>
            {showAll ? (
              <CardContainer>
                {filteredSuggestions.map((item, index) => (
                  <Card data={item} />
                ))}
              </CardContainer>
            ) : (
              <CardContainer>
                {profileData.map((item, index) => (
                  <Card data={item} />
                ))}
              </CardContainer>
            )}
          </MainContainer>
        </Wrapper>
      </>
    );
  }
}

export default HomePage;
