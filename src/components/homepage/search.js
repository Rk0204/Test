import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Img from "../../static/img";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  > input {
    border: 1px solid #999;
    padding: 0.5rem;
    width: 100%;
    height: 16%;
  }
  @media only screen and (max-width: 992px) {
    width: 60%;
  }
`;

const SelectTitle = styled.div`
  display: flex;
  > p {
    font-size: 16px;
    font-weight: bolder;
    margin-bottom: 0px;
  }
`;

const SelectOption = styled.ul`
  background-color: #fff;
  list-style-type: none;
  > li {
    font-size: 16px;
    font-weight: bolder;
    border-bottom: 1px dotted #888;
    padding: 5px;
    background: #fff;
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
    width: 22%;
  }
`;

// const menu = (
//   <Menu onClick={onClick}>
//     <Menu.Item key="1">1st menu item</Menu.Item>
//     <Menu.Item key="2">2nd memu item</Menu.Item>
//     <Menu.Item key="3">3rd menu item</Menu.Item>
//   </Menu>
// );

class Search extends Component {
  //   static propTypes = {
  //     suggestions: PropTypes.instanceOf(Array)
  //   };

  //   static defaultProps = {
  //     suggestions: []
  //   };

  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       // The active selection's index
  //       activeSuggestion: 0,
  //       // The suggestions that match the user's input
  //       filteredSuggestions: [],
  //       // Whether or not the suggestion list is shown
  //       showSuggestions: false,
  //       // What the user has entered
  //       userInput: "",
  //       showSelect: false,
  //       selected: ""
  //     };
  //   }

  //   // Event fired when the input value is changed
  //   onChange = e => {
  //     const { suggestions } = this.props;
  //     const { selected } = this.props;
  //     const userInput = e.currentTarget.value;
  //     let filteredSuggestions = [];
  //     // Filter our suggestions that don't contain the user's input
  //     if (selected == "First") {
  //       filteredSuggestions = suggestions.filter(
  //         suggestion =>
  //           suggestion.first_name.toLowerCase().indexOf(userInput.toLowerCase()) >
  //           -1
  //       );
  //     } else if (selected == "Last") {
  //       filteredSuggestions = suggestions.filter(
  //         suggestion =>
  //           suggestion.last_name.toLowerCase().indexOf(userInput.toLowerCase()) >
  //           -1
  //       );
  //     } else {
  //       filteredSuggestions = suggestions.filter(
  //         suggestion =>
  //           suggestion.email.toLowerCase().indexOf(userInput.toLowerCase()) > -1
  //       );
  //     }

  //     // Update the user input and filtered suggestions, reset the active
  //     // suggestion and make sure the suggestions are shown
  //     this.setState({
  //       activeSuggestion: 0,
  //       filteredSuggestions,
  //       showSuggestions: true,
  //       userInput: e.currentTarget.value
  //     });
  //   };

  //   // Event fired when the user clicks on a suggestion
  //   onClick = e => {
  //     // Update the user input and reset the rest of the state
  //     this.setState({
  //       activeSuggestion: 0,
  //       filteredSuggestions: [],
  //       showSuggestions: false,
  //       userInput: e.currentTarget.innerText
  //     });
  //   };

  //   // Event fired when the user presses a key down
  //   onKeyDown = e => {
  //     const { activeSuggestion, filteredSuggestions } = this.state;
  //     const { selected } = this.props;

  //     // User pressed the enter key, update the input and close the
  //     // suggestions
  //     if (e.keyCode === 13) {
  //       console.log(selected, "suggestion");
  //       if (selected == "First") {
  //         this.setState({
  //           activeSuggestion: 0,
  //           showSuggestions: false,
  //           userInput: filteredSuggestions[activeSuggestion].first_name
  //         });
  //       } else if (selected == "Last") {
  //         this.setState({
  //           activeSuggestion: 0,
  //           showSuggestions: false,
  //           userInput: filteredSuggestions[activeSuggestion].last_name
  //         });
  //       } else if (selected == "Email") {
  //         this.setState({
  //           activeSuggestion: 0,
  //           showSuggestions: false,
  //           userInput: filteredSuggestions[activeSuggestion].email
  //         });
  //       }
  //     }
  //     // User pressed the up arrow, decrement the index
  //     else if (e.keyCode === 38) {
  //       if (activeSuggestion === 0) {
  //         return;
  //       }

  //       this.setState({ activeSuggestion: activeSuggestion - 1 });
  //     }
  //     // User pressed the down arrow, increment the index
  //     else if (e.keyCode === 40) {
  //       if (activeSuggestion - 1 === filteredSuggestions.length) {
  //         return;
  //       }

  //       this.setState({ activeSuggestion: activeSuggestion + 1 });
  //     }
  //   };

  //   handleSelect = () => {
  //     this.setState({
  //       showSelect: !this.state.showSelect
  //     });
  //   };

  render() {
    const {
      onChange,
      userInput,
      onKeyDown,
      suggestionsListComponent
    } = this.props;

    const { selected } = this.props;

    // let suggestionsListComponent;

    // if (showSuggestions && userInput) {
    //   if (filteredSuggestions.length) {
    //     suggestionsListComponent = (
    //       <ul class="suggestions">
    //         {filteredSuggestions.map((suggestion, index) => {
    //           let className;

    //           // Flag the active suggestion with a class
    //           if (index === activeSuggestion) {
    //             className = "suggestion-active";
    //           }
    //           if (selected == "First") {
    //             return (
    //               <li className={className} key={index} onClick={onClick}>
    //                 {suggestion.first_name}
    //               </li>
    //             );
    //           } else if (selected == "Last") {
    //             return (
    //               <li className={className} key={index} onClick={onClick}>
    //                 {suggestion.last_name}
    //               </li>
    //             );
    //           } else if (selected == "Email") {
    //             return (
    //               <li className={className} key={index} onClick={onClick}>
    //                 {suggestion.email}
    //               </li>
    //             );
    //           }
    //         })}
    //       </ul>
    //     );
    //   } else {
    //     suggestionsListComponent = (
    //       <div class="no-suggestions">
    //         <em>No suggestions, you're on your own!</em>
    //       </div>
    //     );
    //   }
    // }

    return (
      <Fragment>
        <Container>
          <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          {suggestionsListComponent}
        </Container>

        <SearchButton onClick={this.props.handleSearch}>
          <img src={Img.Search} />
        </SearchButton>
      </Fragment>
    );
  }
}

export default Search;

{
  /* <SelectOption>
<li onClick={() => this.selectFilter("First")}>First name</li>
<li onClick={() => this.selectFilter("Last")}>Last Name</li>
<li onClick={() => this.selectFilter("Email")}>Email</li>
</SelectOption> */
}
