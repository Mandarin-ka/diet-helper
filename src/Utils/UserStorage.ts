import { UserI } from './../API/UserAPI/UserI';

export function getUserFromLS() {
  return JSON.parse(localStorage.getItem('user') || '');
}

export function setUserToLS(user: UserI | null) {
  localStorage.setItem('user', JSON.stringify(user));
}
