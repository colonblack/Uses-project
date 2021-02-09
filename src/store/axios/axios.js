import axios from 'axios';

export default axios.create({
    baseURL: "https://dummyapi.io/data/api/",
    headers: {
      "Content-type": "application/json",
      'app-id': "6022560df15048df7f6697f6"
    }
  });
