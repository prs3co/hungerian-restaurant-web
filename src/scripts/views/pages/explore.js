import { DbSource } from '../../data/db-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
    <div class="jumbotron">
    <picture>
      <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
      <img src='./images/heros/hero-image_4-large.jpg'>
      <div class='jumbotron__text'>
        <h1>Don't let your hungry be dreams</h1>
        <p>JUST DO IT</p>
      </div>
    </picture>
    </div>
    <section class="content">
      <div class="contents">
        <h1 class="content__heading ">Explore Restaurant</h1>
        <div id="restaurants" class="restaurants"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await DbSource.restaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Explore;
