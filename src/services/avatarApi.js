export default function getCharacters(page) {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`)
    .then(res => {
      return res.json();
    });
}