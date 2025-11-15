import { useContext } from "react";
import { UserContext } from "./UserContext";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  const { user, theme, toggleTheme } = useContext(UserContext);

  return (
    <div className={styles[theme]}>
      <img src={user.avatar} alt="avatar" className={styles.avatar} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}
