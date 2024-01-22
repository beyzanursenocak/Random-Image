import axios from 'axios';
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID mDh2H9NvXUFZ3c04wJJ834YTKf-VG319CHh-jnnsLtw',
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
