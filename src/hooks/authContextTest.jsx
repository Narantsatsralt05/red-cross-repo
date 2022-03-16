import React, { useState } from 'react';
import { useAuthContext } from '../providers/authContext';

export const AuthContextTest = () => {
  const { user, login, signUp, logOut, forgetPass } = useAuthContext();
  const [form, setForm] = useState({
    email: '',
    email2: '',
    password: '',
    password1: '',
    password2: '',
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  return (
    <div>
      {user ? (
        <>
          <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <button onClick={logOut}>logOut</button>
            <button onClick={() => forgetPass(form.email, form.password)}>forgetPass</button>
          </div>
        </>
      ) : (
        <>
          <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            login
            <input onChange={handleChange} value={form.email} id="email" placeholder="email" />
            <input onChange={handleChange} value={form.password} id="password" placeholder="password" type="password" />
            <button onClick={() => login(form.email, form.password)}>login</button>
            signUp
            <input onChange={handleChange} value={form.email2} id="email2" placeholder="email2" />
            <input
              onChange={handleChange}
              value={form.password1}
              id="password1"
              placeholder="password1"
              type="password"
            />
            <input
              onChange={handleChange}
              value={form.password2}
              id="password2"
              placeholder="password2"
              type="password"
            />
            <button onClick={() => signUp(form.email2, form.password1, form.password2)}>signUp</button>
          </div>
        </>
      )}
    </div>
  );
};

//index deeree duudaj ajluulaaj shalgaj bolno
//made by Tuugii
