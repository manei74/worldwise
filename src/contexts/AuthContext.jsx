import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import PropTypes from "prop-types";
import { auth } from "../hooks/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  // ✅ Added prop validation
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch({ type: "login", payload: currentUser });
      } else {
        dispatch({ type: "logout" });
      }
    });

    return () => unsubscribe();
  }, []);

  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: "login", payload: userCredential.user });
    } catch (error) {
      setError(error.message);
      console.error("Login Error:", error.message);
    }
  }

  async function loginWithGoogle() {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch({ type: "login", payload: result.user });
    } catch (error) {
      setError(error.message);
    }
  }

  async function register(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);
      console.log("Verification email sent!");
      dispatch({ type: "login", payload: user });
    } catch (error) {
      setError(error.message);
      console.error("Registration Error:", error.message);
    }
  }

  async function passwordreset(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent!");
      setError("Password reset email sent!");
    } catch (error) {
      setError(error.message);
    }
  }

  async function logout() {
    await signOut(auth);
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        loginWithGoogle,
        register,
        passwordreset,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Prop validation for children
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
