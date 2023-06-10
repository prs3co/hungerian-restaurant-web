import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length) {
      return `
      <div class="content">
        <h1 class="content__heading">Your Liked Restaurants</h1>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
      `;
    }
    return `
      <div class="content">
        <h1 class="content__heading">Your Liked Movie</h1>
        <div id="restaurants" class="restaurants">
          <div class="restaurant__not__found">There are no restaurants to display</div>
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
