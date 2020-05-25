import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
// import { TelegramIcon } from "react-share";

const Wrapper = styled.div`
  background: #000;
  fill: #2a2a30;
  font-family: sans-serif;
  /* @media (max-width: ${props => props.theme.bpsm}) {
    margin: auto;
  } */
`;

const Container = styled.div`
  border-top: 1px solid #ddd;
  display: flex;
  width: 100%;
  @media (max-width: ${props => props.theme.bpsm}) {
    flex-direction: column;
  }
`;
const LeftBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: ${props => props.theme.bpsm}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  > a {
    width: 320px;
    margin-top: 20px;
    /* width: 100%; */
    > img {
      width: 83%;
    }
  }
`;

const SimpleText = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-bottom: 0px;
  color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  width: 270px;
  margin-left: 13px;
  margin-top: 10px;
  @media (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <LeftBox>
            <LogoContainer>
              <Link to="/">
                <a>
                  <img
                    src={"../static/img/logo.png"}
                    alt={"Findmyfreelancer"}
                  />
                </a>
              </Link>
            </LogoContainer>
            <SimpleText>
              Realtime Deals, Price Drops and offer updates from all offline and
              online stores!
            </SimpleText>
          </LeftBox>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer;
