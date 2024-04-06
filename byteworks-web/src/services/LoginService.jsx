import axios from 'axios';

export function login(formData) {
    axios.post('/login', {formData})
    .then(res => {
       if (res.data.success) {
        //  localStorage.setItem('token', res.data.token);
         history.push('/');
       } else {
         alert('Invalid email or password');
       }
     })
    .catch(err => {
       console.error(err);
       alert('An error occurred while logging in');
     });
}