import Axios from 'axios';

export default Axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 61b9f118f280c488ba191fdb0bad4bed46f878aca57a139481709ac433c7fbb5'
  }
});
