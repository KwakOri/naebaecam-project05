import axios from "axios";
import AuthAPI from "./api.auth";
import PostsAPI from "./api.posts";
import UsersAPI from "./api.users";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

class API {
  #client;
  auth;
  posts;
  users;
  constructor() {
    this.#client = axios.create({
      baseURL: BASE_URL,
    });
    this.auth = new AuthAPI(this.#client);
    this.posts = new PostsAPI(this.#client);
    this.users = new UsersAPI(this.#client);
  }
  setAccessToken(token) {
    this.#client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}

const api = new API();

const localAcessToken = localStorage.getItem("accessToken");
if (localAcessToken) {
  api.setAccessToken(localAcessToken);
}

export default api;
