import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useAuth } from "../contexts/AuthContext";
import PropTypes from "prop-types";

const CitiesContext = createContext();

const BASE_URL =
  "https://1b0472dd-3dc8-49ed-ab19-1cbaa46b29c8-00-xbqkp0co6wyg.spock.replit.dev";
// const BASE_URL = "http://localhost:8000";
// const BASE_URL = "https://api-worldwise.onrender.com";

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    async function fetchCities() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        // ✅ Ensure `data.cities` is always an array
        const allCities = Array.isArray(data.cities) ? data.cities : [];

        // ✅ Filter cities for the logged-in user only
        const userCities = allCities.filter((city) => city.userId === user.uid);

        console.log("User Cities:", userCities); // Debugging log
        dispatch({ type: "cities/loaded", payload: userCities });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities",
        });
      }
    }

    fetchCities();
  }, [user]);

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;

      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: `There was an error loading city: ${error.message}`,
        });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    dispatch({ type: "loading" });

    try {
      const cityWithUser = { ...newCity, userId: user.uid };

      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(cityWithUser),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error creating city",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`, { method: "DELETE" });
      if (res.ok) {
        dispatch({ type: "city/deleted", payload: id });
      } else {
        throw new Error("Failed to delete city");
      }
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting city",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
