export default function getAvatars() {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => {
      return res.json();
    });
}