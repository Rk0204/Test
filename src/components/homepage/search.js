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

class Search extends Component {
  render() {
    const {
      onChange,
      userInput,
      onKeyDown,
      suggestionsListComponent
    } = this.props;

    const { selected } = this.props;

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
