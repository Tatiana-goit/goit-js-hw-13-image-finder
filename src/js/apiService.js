import {BASE_URL, API_KEY} from './constans';
import "@babel/polyfill";

export default class ApiService {
    constructor() {
      this.page = 1;
      this.searchQuery = '';
      this.perPage = 12;
    }
  
    async fetchImg() {
      
      const response = await fetch(
        `${BASE_URL}&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${API_KEY}`,
      );
  
      const data = await response.json();
  
      this.incrementPage();
  
      return data.hits;
    }

    incrementPage() {
      this.page += 1;
    }
  
    resetPage() {
      this.page = 1;
    }
  
    get query() {
      return this.searchQuery;
    }
  
    set query(value) {
      this.searchQuery = value;
    }
  }
