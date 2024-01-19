"use client";

import { JSX, useState, } from "react";
import styles from "./page.module.css";
import { UsersList } from "../components/UserList";
import { LoginForm } from "../components/LoginForm";

export default function Home(): JSX.Element {
  const [showText, setShowText] = useState(false);
  
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <button type="button">Click Me</button>

      <div>
        <label htmlFor="randomText">Enter Random Text: </label>
        <input type="text" id="randomText" />
      </div>

      <div>
        {showText && <span>This is a text</span>}
        <button type="button" onClick={() => setTimeout(() => setShowText(prev => !prev), 3000)}>Show Text</button>
      </div>

      <UsersList />

      <LoginForm />
    </main>
  );
}
