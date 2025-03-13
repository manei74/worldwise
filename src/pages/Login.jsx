import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { user, login, loginWithGoogle, error, passwordreset } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/app");
    }
  }, [user, navigate]);

  // Handle Login
  async function handleLogin(e) {
    e.preventDefault();
    await login(email, password);
  }

  async function handlePasswordReset(e) {
    e.preventDefault();

    await passwordreset(email);
    // console.log("Password reset email sent!");
  }

  async function handleSignup(e) {
    e.preventDefault();
    navigate("/register");
  }

  async function handleGoogleLogin() {
    await loginWithGoogle();
  }

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleLogin}>
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
          <Button typeStyle="primary" onClick={handleLogin}>
            Login
          </Button>

          <Button typeStyle="back" onClick={handlePasswordReset}>
            Forgot password?
          </Button>
        </div>
        <div className={styles.orsignup}>or sign up with</div>
        <Button typeStyle="primary" onClick={handleGoogleLogin}>
          <img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt="Google Logo"
            width="20"
            style={{ marginRight: "10px" }}
          />
          Sign in with Google
        </Button>
      </form>
      <div className={styles.signup}>
        <h3>Don’t have an account?</h3>
        <Button typeStyle="primary" onClick={handleSignup}>
          Sign up
        </Button>
      </div>
    </main>
  );
}
