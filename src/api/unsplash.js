import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID e72c8c0a6f692e7f7bf53efc9bc0aba0732da3d5df6b8277abafa501f4dff581'
  }
});