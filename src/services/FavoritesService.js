// src/services/favoritesService.js
let favorites = [];

export function addFavorite(technician) {
  if (!favorites.find((fav) => fav.id === technician.id)) {
    favorites.push(technician);
  }
  return favorites;
}

export function removeFavorite(id) {
  favorites = favorites.filter((fav) => fav.id !== id);
  return favorites;
}

export function getFavorites() {
  return favorites;
}
