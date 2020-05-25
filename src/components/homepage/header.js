import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import _ from "lodash";
import Img from "../../static/img";
import { Input, Dropdown, Icon, Menu, Drawer, AutoComplete } from "antd";

const Wrapper = styled.div`
  background: #fff;
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
        width: 40px;
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
            <LogoContainer>
              <a>
                <img src={Img.Logo} />
                <p>findmyfreelancers</p>
              </a>
            </LogoContainer>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
