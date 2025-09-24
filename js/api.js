class API {
  constructor() {
    this.results = [];
    this.recipe = {};
  }

  async getResults(query) {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );

    const data = await response.json();

    console.log(data);

    this.results = data.recipes;
  }
}

export default API;
