import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const navigate = useNavigate();
    const loginAction = async (data) => {
        try {
            const response = await fetch("localhost:80/admin/connexion", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            });
            const res = await response.json();
            if (res.data) {
                setUser(res.data.firstname);
                setToken(res.data.token);
                localStorage.setItem("token", token);
                navigate("/admin/entity/collection/attraction");
                return;
            }
            throw new Error(res.message);
        } catch (err) {
            console.error(err);
        }
    };
    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/admin/connexion");
    };
    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
