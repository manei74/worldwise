import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { user, register, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/app");
    }
  }, [user, navigate]);

  // Handle Registration
  async function handleRegister(e) {
    e.preventDefault();
    await register(email, password);
  }

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleRegister}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.line}>
          <Button typeStyle="primary" onClick={handleRegister}>
            Create account
          </Button>
        </div>
      </form>
    </main>
  );
}
