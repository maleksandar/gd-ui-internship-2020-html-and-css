import axios from 'axios';

export default axios.create({
  baseURL:'https://my-json-server.typicode.com/vstefanovic-grid/trelloDB',
  responseType: "json"
})