const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const API_URL = import.meta.env.VITE_API_URL;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

function searchGames(gameTitle, token) {
  return fetch(
    `${BACKEND_URL}/games/search?gameTitle=${encodeURIComponent(gameTitle)}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Client-ID": CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then(checkResponse)
    .then((games) => {
      return games.filter((game) => {
        return game.name.toLowerCase().includes(gameTitle.toLowerCase());
      });
    });
}

function getRecentlyPlayedGames(token) {
  return fetch(`${BACKEND_URL}/games`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Client-ID": CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function getSavedGames(token) {
  return fetch(`${BACKEND_URL}/games/saved`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Client-ID": CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function updateProfile({ token, username, bio, avatarUrl }) {
  return fetch(`${BACKEND_URL}/users`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Client-ID": CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ username, bio, avatarUrl }),
  }).then(checkResponse);
}

const api = {
  searchGames,
  getRecentlyPlayedGames,
  getSavedGames,
  updateProfile,
};

export default api;
