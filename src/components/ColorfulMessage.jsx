import React from "react";

const ColorfulMessage = (props) => {
  //分割代入でコードをすっきり
  const { color, children } = props;
  const contentStyle = {
    //プロパティ名=オブジェクト名のとき省略可能
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
