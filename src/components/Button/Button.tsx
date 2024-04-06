import React from "react";
import styles from "./styles.module.scss";

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ className, children, onClick }) => {
  const composedClassName = className ? styles[className] : "";
  return (
    <button
      className={`${styles.button} ${composedClassName}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
