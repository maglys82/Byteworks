import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";

export async function validateLoginData(data) {
  try {
    const response = await axios.post(ENDPOINT.login, data, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.data.success) {
      window.sessionStorage.setItem('token', response.data.token);
      window.alert('User identified succesfully .');
      return true;
    } else {
      window.alert(`${response.data.error} .`);
      return false;
    }
  } catch (error) {
    console.error('Error during login:', error);
    window.alert('Error during login '); 
    return false;
  }
}


