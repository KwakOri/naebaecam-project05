class UsersAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }
  async updateProfile(formData) {
    const path = "/profile";
    const response = await this.#axios.patch(path, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }
}

export default UsersAPI;
