import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization:
          "Client-ID 6e5fd3f738c12f606825ec4a5f5ba0551bd7b936e3df68ae14f518d5f0dcb443",
        page: 1,
        per_page: 30
      }
});