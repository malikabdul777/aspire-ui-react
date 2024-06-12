import styles from "./Button.module.css";

const Button = ({
  children,
  onClick = () => {},
  style = {},
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${styles.customButton} ${className}`}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
