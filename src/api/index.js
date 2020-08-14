import axios from "axios";

const BASE_URL = "https://backend-storeapi.herokuapp.com/";

  const getProducts = async () => {
    try {

      const response = await axios.get(BASE_URL);
      return response.data;

    } catch (error) {
      console.error(error);
      return error;
    }
  }


export default {getProducts}