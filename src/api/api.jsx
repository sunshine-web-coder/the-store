import axios from 'axios';

const fetchAutoCompleteData = async () => {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: { q: 'game of thr' },
    headers: {
      'X-RapidAPI-Key': 'e968bdb76fmsh69564426b90af49p193ea5jsn89091d2fb858',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to handle it in the component.
  }
};

export default fetchAutoCompleteData;
