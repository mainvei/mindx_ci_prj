import { Row } from "antd";
import React, { useContext } from "react";
import "./Display.Module.css";
import { DesignContext } from "../../context/DesignContext";
import BlackShirt from "../../asset/img/black.png";
import BlueShirt from "../../asset/img/blue.png";
import GrayShirt from "../../asset/img/gray.png";
import GreenShirt from "../../asset/img/green.png";
import LightGrayShirt from "../../asset/img/lightgray.png";
import OrangeShirt from "../../asset/img/orange.png";
import PinkShirt from "../../asset/img/pink.png";
import PurpleShirt from "../../asset/img/purple.png";
import RedShirt from "../../asset/img/red.png";
import TurquoiseShirt from "../../asset/img/turquoise.png";
import WhiteShirt from "../../asset/img/white.png";
import YellowShirt from "../../asset/img/yellow.png";
// eslint-disable-next-line
import Shadow1 from "../../asset/img/shadow1.png";
// eslint-disable-next-line
import Shadow25 from "../../asset/img/shadow25.png";
// eslint-disable-next-line
import Shadow33 from "../../asset/img/shadow33.png";

const Display = () => {
  const { design } = useContext(DesignContext);
  const { shirtColor, text1, text2, text1Color, text2Color, textSize, url } =
    design;

  let displayColor = BlackShirt;

  switch (shirtColor) {
    case "black":
      displayColor = BlackShirt;
      break;
    case "green":
      displayColor = GreenShirt;
      break;
    case "blue":
      displayColor = BlueShirt;
      break;
    case "gray":
      displayColor = GrayShirt;
      break;
    case "lightgray":
      displayColor = LightGrayShirt;
      break;
    case "orange":
      displayColor = OrangeShirt;
      break;
    case "pink":
      displayColor = PinkShirt;
      break;
    case "purple":
      displayColor = PurpleShirt;
      break;
    case "red":
      displayColor = RedShirt;
      break;
    case "turquoise":
      displayColor = TurquoiseShirt;
      break;
    case "white":
      displayColor = WhiteShirt;
      break;
    case "yellow":
      displayColor = YellowShirt;
      break;
    default:
      displayColor = GrayShirt;
      break;
  }

  return (
    <Row className="designTshirt">
      {shirtColor === "white" ? (
        <div className="shadowTshirt upperShadow">
          <img src={Shadow1} alt="tshirt-shadow" />
        </div>
      ) : (
        <>
          <div className="shadowTshirt upperShadow">
            <img src={Shadow33} alt="tshirt-shadow" />
          </div>
          <div className="shadowTshirt underShadow">
            <img src={Shadow25} alt="tshirt-shadow" />
          </div>
        </>
      )}

      <div className="imgTshirt">
        <img src={displayColor} alt="tshirt-only" />
      </div>
      <div className="designItems" style={{ fontSize: `${textSize}px` }}>
        <div className="text1">
          <p style={{ color: `${text1Color}` }}>{text1}</p>
        </div>
        {/* {url === "" ? <img src={Logo} alt="logoimg" /> : <img src={url} alt="logoimg" />} */}
        <img src={url} alt="logoimg" />
        <div className="text2">
          <p style={{ color: `${text2Color}` }}>{text2}</p>
        </div>
      </div>
    </Row>
  );
};

export default Display;
