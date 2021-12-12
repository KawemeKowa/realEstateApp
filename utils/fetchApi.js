import axios from 'axios';

export const baseUrl = process.env.BASEURL;

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': process.env.HOST,
      'x-rapidapi-key': process.env.KEY
    }
  });

  return data;
};
