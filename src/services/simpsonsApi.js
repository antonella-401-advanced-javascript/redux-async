export default function getQuote() {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      return res.json();
    });
}