import axios from "axios";
export default () => {
  const options = {
    baseURL: `${process.env.VUE_APP_BASE_API_URL}`,
  };

  const instance = axios.create(options);

  return instance;
};
