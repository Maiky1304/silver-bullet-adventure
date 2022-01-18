import { useRef } from "react";
import styled from "styled-components";
import useImage from "./context/ImageContext";
import locations from "./constants/locations";

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

const LocationDisplay = styled.h3`
  margin-top: 30px;
  font-weight: light;
`;

const NavigationButtons = styled.nav`
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

const NavButton = styled.button`
  padding: 5px;
`;

// const ToolsButton = styled.button`
//   width: 35px;
//   height: 35px;
//   background-color: #bdc3c7;
//   border: none;
//   border-radius: 25px;
//   font-weight: 700;
//   font-size: 20px;
//   color: #303841;
//   transition: 0.8s all;

//   &:hover {
//     cursor: pointer;
//     transform: scale(1.08);
//   }

//   &.current {
//     background-color: #113f67;
//     color: #fff;
//   }
// `;

const InputWrapper = styled.div``;

const Footer = styled.div`
  margin-top: 25px;
  opacity: 0.5;
`;

function App() {
  const [image, setImage] = useImage();
  const data = locations[image];

  return (
    <Container>
      <Card>
        <Image height="600px" src={data.image} />
        <ToolsSection>
          <ToolsHeading>Silver Bullet Adventure</ToolsHeading>
          <LocationDisplay>{data.title}</LocationDisplay>
          <NavigationButtons>
            {Object.keys(data.directions).map((direction) => {
              return (
                <NavButton
                  onClick={() => {
                    setImage(data.directions[direction]);
                  }}
                >
                  {direction}
                </NavButton>
              );
            })}
          </NavigationButtons>
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
