class AuthAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }

  async signUp(formData) {
    const path = "/register";
    const data = {
      id: formData.email,
      password: formData.password,
      nickname: formData.nickname,
    };
    try {
      const response = await this.#axios.post(path, data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async logIn(formData) {
    const path = "login";
    const data = {
      id: formData.email,
      password: formData.password,
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
