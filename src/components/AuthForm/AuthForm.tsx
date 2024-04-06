import React, { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { login } from "@/pages/lib/features/authSlice";
import { useAppDispatch } from "@/pages/lib/hooks/hooks";
import styles from "./styles.module.scss";

const AuthForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  const router: NextRouter = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(login(data.token));
      if (router.pathname === "/cart") {
        return;
      } else {
        router.push("/profile");
      }
    } else {
      const errorData = await res.json();
      setError(errorData.message);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <div className={styles.form__wrapper}>
        <div className={styles.form__title}>Login In</div>
        <div className={styles.form__item}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className={styles.form__submit}>
          Log in
        </button>
        {error && <div className={styles.form__error}>{error}</div>}
      </div>
    </form>
  );
};

export default AuthForm;
