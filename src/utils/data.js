let logged = false;
function isLogged() {
  return logged;
}
function login() {
  logged = true;
}

function logout() {
  logged = false;
}

export { isLogged, login, logout };
