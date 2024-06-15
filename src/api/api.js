import axios from "axios";
import AuthAPI from "./api.auth";
import PostsAPI from "./api.posts";
import UsersAPI from "./api.users";

const JWT_BASE_URL = "https://moneyfulpublicpolicy.co.kr";

const JSON_BASE_URL = "https://industrious-clammy-narwhal.glitch.me";

class API {
  #jwtClient;
  #jsonClient;
  auth;
  posts;
  users;
  constructor() {
    this.#jwtClient = axios.create({
      baseURL: JWT_BASE_URL,
    });
    this.#jsonClient = axios.create({
      baseURL: JSON_BASE_URL,
    });
    this.auth = new AuthAPI(this.#jwtClient);
    this.posts = new PostsAPI(this.#jsonClient);
    this.users = new UsersAPI(this.#jwtClient);
  }
  setAccessToken(token) {
    this.#jwtClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  }
}

const api = new API();

const localAcessToken = localStorage.getItem("accessToken");
if (localAcessToken) {
  api.setAccessToken(localAcessToken);
}

export default api;
