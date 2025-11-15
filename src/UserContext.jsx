import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const [user] = useState({
    name: "Hager Mahmoud",
    email: "hager@example.com",
    avatar: "https://i.pravatar.cc/150?img=5"
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <UserContext.Provider value={{ user, theme, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
}
