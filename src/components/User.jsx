import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  if (!user) return <p>Loading...</p>; // Prevents null errors

  return (
    <div className={styles.user}>
      <span>Welcome, {user.email}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
