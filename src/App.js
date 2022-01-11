import { useRef } from "react";
import styled from "styled-components";
import useImage from "./context/ImageContext";

const images = [
  require("./images/0.jpg"),
  require("./images/1.jpg"),
  require("./images/2.jpg"),
  require("./images/3.jpg"),
  require("./images/4.jpg"),
  require("./images/5.jpg"),
  require("./images/6.jpg"),
  require("./images/7.jpg"),
  require("./images/8.jpg"),
  require("./images/9.jpg"),
  require("./images/10.jpg"),
  require("./images/11.jpg"),
];

const Container = styled.div`
  background-color: #cdcdcd;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Spline Sans", sans-serif;
`;

const Image = styled.img`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  transition: 0.8s all;

  &:hover {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`;

const Card = styled.div`
  background-color: white;
  width: 900px;
  height: 600px;
  border-radius: 25px;
  box-shadow: 0px 0px 20px 5px #f2f2f2;

  display: flex;
`;

const ToolsSection = styled.div`
  padding: 25px;
`;

const ToolsHeading = styled.h1`
  position: relative;
  &::after {
    content: "";
    width: 50px;
    height: 5px;
    position: absolute;
    bottom: -10px;
    left: 0;
    background-color: black;
    border-radius: 25px;
  }
`;

const ToolsButtons = styled.div`
  padding-top: 35px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

const ToolsButton = styled.button`
  width: 35px;
  height: 35px;
  background-color: #bdc3c7;
  border: none;
  border-radius: 25px;
  font-weight: 700;
  font-size: 20px;
  color: #303841;
  transition: 0.8s all;

  &:hover {
    cursor: pointer;
    transform: scale(1.08);
  }

  &.current {
    background-color: #113f67;
    color: #fff;
  }
`;

const Footer = styled.div`
  margin-top: 25px;
  opacity: 0.5;
`;

function App() {
  const [image, setImage] = useImage();

  return (
    <Container>
      <Card>
        <Image height="600px" src={images[image]} />
        <ToolsSection>
          <ToolsHeading>Silver Bullet Adventure</ToolsHeading>
          <ToolsButtons>
            {images
              .map((_v, index) => index)
              .map((num) =>
                image === num ? (
                  <ToolsButton
                    className="current"
                    onClick={() => setImage(num)}
                  >
                    {num}
                  </ToolsButton>
                ) : (
                  <ToolsButton onClick={() => setImage(num)}>{num}</ToolsButton>
                )
              )}
          </ToolsButtons>
        </ToolsSection>
      </Card>
      <Footer>
        <span>
          Maiky Perlee - SD1C &bull;{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Maiky1304"
          >
            GitHub
          </a>
        </span>
      </Footer>
    </Container>
  );
}

export default App;
