class AuthAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }

  async signUp(formData) {
    const path = "/register";
    const data = {
      id: formData.accountId,
      password: formData.password,
      nickname: formData.nickname,
    };

    const response = await this.#axios.post(path, data);
    return response.data;
  }

  async logIn(formData) {
    const path = "login";
    const data = {
      id: formData.accountId,
      password: formData.password,
    };
    const response = await this.#axios.post(path, data);
    return response.data;
  }

  async getUser() {
    const path = "/user";
    const response = await this.#axios.get(path);
    return response.data;
  }
}

export default AuthAPI;
