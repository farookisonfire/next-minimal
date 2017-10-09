export default function getBaseUrl() {
  return process.env.NODE_ENV === 'production' ? 'https://midnight-prophet-api.herokuapp.com' : 'https://775afa87.ngrok.io'; // 'http://localhost:1337';
}
