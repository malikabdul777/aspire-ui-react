import styles from "./Card.module.css";

const Card = ({ children, style = {}, className = "", ...props }) => {
  return (
    <div
      style={style}
      className={`${styles.customCard} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
