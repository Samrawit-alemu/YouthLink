import { createContext, useContext } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <AuthContext.Provider value={{ user, loading, error }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};