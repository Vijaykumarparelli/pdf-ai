import axios from 'axios';

class Api {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url = 'http://localhost:8000';
    this.sendBack = {
      loading: false,
      isSuccessMsg: false,
      successMsg: '',
      status: null,
      data: null,
      error: null,
      errorMsg: null,
      singleLoader: false,
    };
  }
  init = (options) => {
    const { headers = {}, ...rest } = options;

    if (this.api_token) {
      headers['X-Access-Token'] = `${this.api_token}`;
    }
    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 10000,
      headers: headers,
      ...rest,
    });
    return this.client;
  };
  req = async (end_point, options) => {
    const { method = 'get', data, singleLoader, ...rest } = options;
    this.sendBack = {
      ...this.sendBack,
      loading: true,
    };
    if (singleLoader) {
      this.sendBack = {
        ...this.sendBack,
        singleLoader,
      };
    }
    try {
      let res = await this.init(rest)[method](end_point, data);
      console.log('res res', res);
      this.sendBack = {
        status: res.status,
        data: res.data,
        error: null,
        errorMsg: null,
      };
      return this.sendBack;
    } catch (error) {
      this.sendBack = {
        status: error?.response?.status,
        data: null,
        error: true,
        errorMsg: error.message,
        apiMsg: error?.response?.data?.data?.message,
      };
      return this.sendBack;
    }
  };
}

const api = new Api();
export default api;
