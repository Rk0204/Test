import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const Wrapper = styled.div`
  width: 100%;
`;

class LayoutCover extends Component {
  state = {
    collapsed: false
  };

  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <Header />
        {children}
        {/* <Footer /> */}
      </Wrapper>
    );
  }
}

export default LayoutCover;
