import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 150px;
  width: 35%;
  border-radius: 20px;
  border: 1px solid #aaa;
  padding: 10px;
  display: flex;
  margin-bottom: 20px;
  margin-left: 20px;
  background: #fff;
  @media only screen and (max-width: 992px) {
    width: 100%;
    margin-left: unset;
  }
`;
const LeftPart = styled.div`
  width: 150px;
  height: 100%;
  border-right: 2px dotted #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 100px;
    border-radius: 50px;
  }
`;

const RightPart = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  > p {
    font-size: 16px;
    font-weight: bolder;
    color: #000;
    margin-bottom: 0px;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  > p {
    font-size: 14px;
    color: #777;
    margin-bottom: 0px;
  }
`;

class Card extends Component {
  render() {
    const { data } = this.props;
    return (
      <Wrapper>
        <LeftPart>
          <ImageContainer>
            <img src={data.avatar} />
          </ImageContainer>
        </LeftPart>
        <RightPart>
          <NameContainer>
            <p>
              {data.first_name} {data.last_name}
            </p>
          </NameContainer>
          <EmailContainer>
            <p>{data.email}</p>
          </EmailContainer>
        </RightPart>
      </Wrapper>
    );
  }
}

export default Card;
