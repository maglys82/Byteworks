export const URLBASE = 'http://localhost:3000'

export const ENDPOINT = {
  register: `${URLBASE}/register`,
  login: `${URLBASE}/login`,
  users: `${URLBASE}/users`,
  business: `${URLBASE}/enterprise`,
}
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/