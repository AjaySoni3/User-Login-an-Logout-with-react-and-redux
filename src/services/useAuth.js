import { useEffect, useState } from 'react';

function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  function login(token) {
    localStorage.setItem('access_token', token);
    setLoggedIn(true);
  }

  function logout() {
    localStorage.removeItem('access_token');
    setLoggedIn(false);
  }

  return { loggedIn, login, logout };
}
