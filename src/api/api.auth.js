class AuthAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }

  async signUp() {
    const path = "/register";
    const data = {
      id: "hellonaebaecam461721",
      password: "hellonaebaecam",
      nickname: "hellonaebaecam",
    };
    try {
      const response = await this.#axios.post(path, data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default AuthAPI;
