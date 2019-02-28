import axios from "axios";
import url from "./config";

export const checkAuth = {
  isAuthenticated: false,
  authenticate() {
    axios
      .get(url.check, {
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Expose-Headers": "x-access-token",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
      })
      .then(res => {
        if (res.status === 200) this.isAuthenticated = true;
        else this.isAuthenticated = false;
      })
      .catch(err => {
        this.isAuthenticated = false;
      });
    this.isAuthenticated = true;
  }
};
