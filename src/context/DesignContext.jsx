import { createContext, useState } from "react";

export const DesignContext = createContext();

const DesignContextProvider = ({ children }) => {
  // State
  const [design, setDesign] = useState({
    shirtColor: "turquoise",
    url: "https://letsdesign.co.il/wp-content/uploads/2018/05/let-s-design-logo-dskt-footer.svg",
    text1: "140cm",
    text1Color: "#888",
    text2: "110cm",
    text2Color: "#888",
    textSize: 20
  });

  // handle change design
  const changeshirtColor = (shirtColor) => {
    setDesign({
      ...design,
      shirtColor: shirtColor,
    });
  };
  const changeUrl = (url) => {
    setDesign({
      ...design,
      url: url,
    });
  };
  const changeText1 = (text1) => {
    setDesign({
      ...design,
      text1: text1,
    });
  };
  const changeText2 = (text2) => {
    setDesign({
      ...design,
      text2: text2,
    });
  };
  const changeText1Color = (text1Color) => {
    setDesign({
      ...design,
      text1Color: text1Color,
    });
  };
  const changeText2Color = (text2Color) => {
    setDesign({
      ...design,
      text2Color: text2Color,
    });
  };
  const changeTextSize = (textSize) => {
    setDesign({
      ...design,
      textSize: textSize,
    });
  };

  // context data
  const designContextData = {
    design,
    changeshirtColor,
    changeUrl,
    changeText1,
    changeText2,
    changeText1Color,
    changeText2Color,
    changeTextSize
  };

  // return provider
  return (
    <DesignContext.Provider value={designContextData}>
      {children}
    </DesignContext.Provider>
  );
};

export default DesignContextProvider;
