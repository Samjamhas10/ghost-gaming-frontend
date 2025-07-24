export function searchGames(gameTitles) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          _id: "game1",
          title: "Super Mario Bros",
          url: "some-image-url.jpg",
          description: "Classic platformer game",
          rating: 87,
        },
        {
          _id: "game2",
          title: "Call of Duty Mobile",
          url: "some-image-url.jpg",
          description: "",
          rating: 96,
        },
        {
          _id: "game3",
          title: "Fortnite",
          url: "some-image-url.jpg",
          description: "Classic platformer game",
          rating: 94,
        },
        {
          _id: "game4",
          title: "",
          url: "",
          description: "",
          rating: 79,
        },
        {
          _id: "game5",
          title: "",
          url: "some-image-url.jpg",
          description: "",
          rating: 67,
        },
        {
          _id: "game6",
          title: "",
          url: "some-image-url.jpg",
          description: "",
          rating: 95,
        },
      ]);
    }, 1000);
  });
}

export function getPopularGames() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          _id: "game1",
          title: "",
          url: "some-image-url.jpg",
          description: "",
          rating: 95,
        },
        {
          _id: "game2",
          title: "Call of Duty Mobile",
          url: "some-image-url.jpg",
          description: "",
          rating: 96,
        },
        {
          _id: "game3",
          title: "Fortnite",
          url: "some-image-url.jpg",
          description: "Classic platformer game",
          rating: 94,
        },
      ]);
    }, 800);
  });
}

const api = {
  searchGames,
  getPopularGames,
};

export default api;
