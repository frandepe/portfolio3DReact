import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  href?: string;
  bgColor?: string;
  color?: string;
  download?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  href,
  bgColor,
  color = "white",
  download,
  disabled = false,
  type = "button",
  onClick,
}) => {
  return (
    <a href={href} download={download}>
      <button
        disabled={disabled}
        type={type}
        style={{ backgroundColor: bgColor, color: color }}
        className="buttonDesign"
        onClick={onClick}
      >
        {title}
      </button>
    </a>
  );
};

export default Button;
