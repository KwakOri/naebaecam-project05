class PostsAPI {
  #axios;
  constructor(axios) {
    this.#axios = axios;
  }
  async postRecord(record) {
    const path = "/records";
    const response = await this.#axios.post(path, record);
    return response.data;
  }

  async getRecords() {
    const path = "/records";
    const response = await this.#axios.get(path);
    console.log(response);
    return response.data;
  }

  async getRecord(recordId) {
    const path = `/records/${recordId}`;
    const response = await this.#axios.get(path);
    console.log(response);
    return response.data;
  }

  async overwriteRecord(recordId, record) {
    console.log(recordId, record);
    const path = `/records/${recordId}`;
    const response = await this.#axios.put(path, record);
    return response.data;
  }

  async deleteRecord(recordId) {
    const path = `/records/${recordId}`;
    const response = await this.#axios.delete(path);
    return response.data;
  }
}

export default PostsAPI;
