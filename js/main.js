import API from "./api.js";
import {uiElement} from "./ui.js";

const api = new API();
const handleSubmit = (e) => {
  e.preventDefault();

  const query = e.target[0].value;

  api.getResults(query).then(() => {
    console.log(api.results);
  });
};
uiElement.form.addEventListener("submit", handleSubmit);
