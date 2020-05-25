import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import _ from "lodash";
import Img from "../static/img";
import { Input, Dropdown, Icon, Menu, Drawer, AutoComplete } from "antd";

const Wrapper = styled.div`
  background: ${props => props.theme.white};
  @media only screen and (max-width: ${props => props.theme.bpsm}) {
    margin-left: unset;
  }
`;

const Container = styled.div`
  height: 70px;
  display: flex;
  padding: 0 24px;
  margin: 0 auto;
  @media only screen and (max-width: ${props => props.theme.bpsm}) {
    padding: 0;
    height: 50px;
    overflow: hidden;
    > span {
      display: block;
    }
  }
  > div {
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  > a {
    display: flex;
    align-items: center;
    > img {
      width: 80px;
      margin-right: 10px;
    }
    > p {
      font-size: 18px;
      font-weight: bolder;
      text-transform: capitalize;
      color: #000;
      margin-bottom: 0px;
    }
  }

  @media (max-width: ${props => props.theme.bpsm}) {
    > a {
      > img {
        width: 80px;
        margin-bottom: 10px;
      }
      > span {
        font-size: 16px;
        font-family: "Roboto", sans-serif;
      }
    }
  }
`;

const Nav = styled.ul`
  display: flex;
  margin: 0;
  margin-right: 60px;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  > li {
    margin-right: 16px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: ${props => props.theme.bpsm}) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  width: 200px;
  height: 70px;
  border-radius: 5px;
  display: flex;
  margin-top: 40px;
`;
const MobileView = styled.div`
  display: none;
  width: 200px;
  @media only screen and (max-width: ${props => props.theme.bpsm}) {
    display: flex;
  }
`;

const SearchButton = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;
`;
const SearchButton1 = styled.div`
  display: none;
  padding: 10px;
  cursor: pointer;
  @media only screen and (max-width: ${props => props.theme.bpsm}) {
    display: flex;
  }
`;

class Header extends Component {
  state = {
    subHeader: true,
    visible: false,
    searchVisible: false
  };

  logoutHandler = () => {
    this.props.logout();
  };

  handleChange = e => {
    console.log(e);
    // for (var i = 0; i < SearchData.length; i++) {
    //   if (e === SearchData[i].name) {
    //     this.setState({
    //       name: e,
    //       link: SearchData[i].link
    //     });
    //   }
    // }
  };

  handleSearch = () => {
    window.open(this.state.link, "_self");
  };

  searchIconHandler = () => {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  };

  render() {
    const { searchVisible } = this.state;
    return (
      <Wrapper>
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%"
            }}
          >
            {searchVisible ? (
              <SearchContainer>
                <AutoComplete
                  onChange={data => this.handleChange(data)}
                  // onSearch={this.handleSearch}
                  style={{ width: 250 }}
                  //   dataSource={SearchData.map((data, item) => data.name)}
                  // value={name}
                  dropdownClassName="antd-dropdown"
                  autoFocus
                  onSearch={this.handleSearch}
                  placeholder="Search store,category,city etc"
                  filterOption={(inputValue, option) =>
                    option.props.children
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
                <SearchButton1 onClick={this.handleSearch}>
                  <Icon
                    type="search"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      position: "relative",
                      top: "-5px"
                    }}
                  />
                </SearchButton1>
                <Icon
                  type="close-circle"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    position: "relative",
                    top: "6px",
                    color: "red"
                  }}
                  onClick={this.searchIconHandler}
                />
              </SearchContainer>
            ) : (
              <>
                <LogoContainer>
                  <a>
                    <img src={Img} />
                    <p>findmyfreelancers</p>
                  </a>
                </LogoContainer>
                <MobileView>
                  <Icon
                    type="search"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bolder",
                      marginTop: "5px",
                      marginLeft: "50px"
                    }}
                    onClick={this.searchIconHandler}
                  />
                </MobileView>
              </>
            )}

            <Nav>
              <li>
                <SearchContainer>
                  <AutoComplete
                    onChange={data => this.handleChange(data)}
                    // onSearch={this.handleSearch}
                    style={{ width: 250 }}
                    // dataSource={SearchData.map((data, item) => data.name)}
                    // value={name}
                    dropdownClassName="antd-dropdown"
                    autoFocus
                    onSearch={this.handleSearch}
                    placeholder="Search store,category,city etc"
                    // filterOption={(inputValue, option) =>
                    //   option.props.children
                    //     .toUpperCase()
                    //     .indexOf(inputValue.toUpperCase()) !== -1
                    // }
                  />
                  <SearchButton onClick={this.handleSearch}>
                    <Icon
                      type="search"
                      style={{ fontSize: "20px", fontWeight: "bolder" }}
                    />
                  </SearchButton>
                </SearchContainer>
              </li>
            </Nav>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
