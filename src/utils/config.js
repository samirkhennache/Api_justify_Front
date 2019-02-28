const port = "http://localhost:3001";
const route = {
  register: `${port}/auth/register`,
  check: `${port}/auth`,
  auth: `${port}/auth/signIn`,
  signInFacebook: `${port}/auth/signIn/facebook`,
  signInGoogle: `${port}/auth/signIn/google`,
  authFacebook: `${port}/auth/facebook`,
  authGoogle: `${port}/auth/google`,
  home: `${port}/home`
};

export default route;
