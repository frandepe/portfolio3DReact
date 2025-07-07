import React from "react";
import "./Button.css";
import { GradientButton } from "../ui/gradient-button";

interface ButtonProps {
  title: string;
  href?: string;
  bgColor?: string;
  color?: string;
  download?: string;
  disabled?: boolean;
  variant: "default" | "variant";
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  href,
  variant,
  download,
  disabled = false,
  type = "button",
  onClick,
}) => {
  return (
    <a href={href} download={download}>
      <GradientButton
        variant={variant}
        disabled={disabled}
        type={type}
        // style={{ backgroundColor: bgColor, color: color }}
        // className="buttonDesign"
        onClick={onClick}
      >
        {title}
      </GradientButton>
    </a>
  );
};

export default Button;
