import styles from "./Button.module.css";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Button({ children, onClick, typeStyle }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[typeStyle]}`}>
      {children}
    </button>
  );
}

export default Button;
