import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";

export function RegisterUserService(data) {
  if (!data.password) {
    alert('Password is required');
    return;
  }

  axios.post(ENDPOINT.people, data)
    .then(res => {
      if (res.data.success) {
        history.push('/');
      } else {
        alert('User registered succesfully!');
      }
    })
    .catch(err => {
      console.error(err);
      alert('An error occurred while registering');
    });
}
