'use client'
import React, { useEffect, useState } from 'react'

import styles from './page.module.css'

function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:5000/api/login/email=${email}&pass=${password}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data) {
      setSuccess(true);
      console.log(data);
      window.location.href = '/admin';
    }
  }
  

  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Page;
