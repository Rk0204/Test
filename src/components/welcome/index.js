import React, { Component } from "react";
import styled from "styled-components";
import Img from "../../static/img";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 900px;
  background: url(${props => props.image});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 992px) {
    height: 650px;
  }
`;

const Title = styled.div`
  > p {
    font-size: 35px;
    font-weight: bolder;
    color: #fff;
    text-align: center;
  }
`;

const Button = styled.div`
  height: 70px;
  width: 160px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #00ff99 0%, #00ffff 100%);
  cursor: pointer;
  > p {
    font-size: 16px;
    font-weight: bolder;
    color: #000;
    margin-bottom: 0px;
  }
`;

class Welcome extends Component {
  render() {
    return (
      <Wrapper image={Img.Background}>
        <Title>
          <p>Welcome to FindMyFreelancer</p>
        </Title>
        <Link to="/home">
          <Button>
            <p>Visit</p>
          </Button>
        </Link>
      </Wrapper>
    );
  }
}

export default Welcome;
