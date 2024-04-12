import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";

export async function validateLoginData(email, password) {
  try {
    const data = {
      email,
      password,
    };

    const response = await axios.post(ENDPOINT.login, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const { success, token, error } = response.data;
      if (success && token) {
        localStorage.setItem('token', token);
        return true;
      } else {
        alert(`Login failed: ${error}`);
        return false;
      }
    } else {
      alert('Unexpected server response.');
      return false;
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('Error during login.');
    return false;
  }
}

