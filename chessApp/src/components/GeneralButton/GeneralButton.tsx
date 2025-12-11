import React from 'react'
import "./generalbutton.css"
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children?: React.ReactNode;
  margin?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  type?: ButtonType;
}

const GeneralButton = ({
  children,
  margin = "0px",
  width = "370px",
  height = "44px",
  fontSize = "14px",
  type = "button",
}: ButtonProps) => {
  return (
    <button className='btn'
      type={type}
      style={{ margin, width, height, fontSize }}
    >
      {children}
    </button>
  )
}

export default GeneralButton;