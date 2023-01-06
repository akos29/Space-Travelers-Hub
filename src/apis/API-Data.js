import http from './Base-API';

const getMissions = () => http.get('/missions');

const Data = {
  getMissions,
};
console.log(getMissions);
export default Data;
