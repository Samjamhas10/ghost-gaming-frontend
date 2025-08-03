const CLIENT_ID = "";
const ACCESS_TOKEN = "5lq2fhnbnv7w8vu4iuujsayijpv98w"; // move to .env
const API_URL = "https://api.igdb.com/v4/games ";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

function searchGames(gameTitle) {
  return fetch(
    `http://localhost:3004/games/search?gameTitle=${encodeURIComponent(
      gameTitle
    )}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Client-ID": "1wsoeud8986qp5or7yfy7442oggme9",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  )
    .then(checkResponse)
    .then((games) => {
      console.log(games);
      return games.filter((game) => {
        return game.name.toLowerCase().includes(gameTitle.toLowerCase());
      });
    });
}

function getRecentlyPlayedGames() {
  return fetch("http://localhost:3004/games", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Client-ID": "1wsoeud8986qp5or7yfy7442oggme9",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }).then(checkResponse);
}

function getGamesByGenre() {
  const query = `fields name, summary, rating, cover.url, genres.name, platforms.name`;
  return fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "1wsoeud8986qp5or7yfy7442oggme9",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: query,
  }).then(checkResponse);
}

const api = {
  searchGames,
  getRecentlyPlayedGames,
  getGamesByGenre,
};

export default api;
