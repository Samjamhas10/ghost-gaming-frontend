const CLIENT_ID = "1wsoeud8986qp5or7yfy7442oggme9";
const ACCESS__TOKEN = "5lq2fhnbnv7w8vu4iuujsayijpv98w";
const API_URL = "https://api.igdb.com/v4/games";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

function searchGames(gameTitle) {
  const query = `
    fields name, summary, rating, cover.url, genres.name, platforms.name;
    search "${gameTitle}";
    where rating != null;
    limit 15;
  `;
  return fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "1wsoeud8986qp5or7yfy7442oggme9",
      Authorization: `Bearer ${ACCESS__TOKEN}`,
    },
    body: query,
  }).then(checkResponse);
}

function getRecentlyPlayedGames() {
  const query = `
  fields name, summary, rating, cover.url, genres.name, platforms.name; 
  where rating > 80 & rating count > 10;
  limit 20`;
  return fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "1wsoeud8986qp5or7yfy7442oggme9",
      Authorization: `Bearer ${ACCESS__TOKEN}`,
    },
    body: query,
  }).then(checkResponse);
}

function getNewestGames() {
  const query = ``;
  return fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "1wsoeud8986qp5or7yfy7442oggme9",
      Authorization: `Bearer ${ACCESS__TOKEN}`,
    },
    body: query,
  }).then(checkResponse);
}
function getTopRatedGames() {
  const query = ``;
  return fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "1wsoeud8986qp5or7yfy7442oggme9",
      Authorization: `Bearer ${ACCESS__TOKEN}`,
    },
    body: query,
  }).then(checkResponse);
}
function getGamesByGenre() {
  const query = ``;
  return fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "1wsoeud8986qp5or7yfy7442oggme9",
      Authorization: `Bearer ${ACCESS__TOKEN}`,
    },
    body: query,
  }).then(checkResponse);
}

const api = {
  searchGames,
  getRecentlyPlayedGames,
  getNewestGames,
  getTopRatedGames,
  getGamesByGenre,
};

export default api;
