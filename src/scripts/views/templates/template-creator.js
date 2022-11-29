import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="restaurant-detail">
    <div class="restaurant-detail__img">
      <label class="restaurant-detail__label">${restaurant.city}</label>
      <picture>
        <source media="(max-width: 600px)" srcset="${CONFIG.SMALL_IMAGE_URL + restaurant.pictureId}">
        <img class="restaurant-detail__thumbnail lazyload" data-src="${CONFIG.LARGE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      </picture>
    </div>
    <div class="restaurant-detail__content">
      <h1 class="restaurant-detail__name"><a href="#">${restaurant.name}</a></h1>
      <p class="restaurant-detail__rating">Rating: ${restaurant.rating}⭐️</p>
      <p class="restaurant-detail__description">${restaurant.description}</p>
      <div class="restaurant-detail__menu">
        <h2>Menu</h2>
        <div class="restaurant-detail__menu-item">
          <div class="restaurant-detail__drink">
            <h3>Minuman</h3>
            <div class="menus" id="menus">
              ${restaurant.menus.drinks.map((drink) => `<p class="menu-list">${drink.name}</p>`).join('')}
            </div>
          </div>
          <div class="restaurant-detail__food">
            <h3>Makanan</h3>
            <div class="menus" id="menus">
              ${restaurant.menus.foods.map((food) => `<p class="menu-list">${food.name}</p>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="restaurant-detail__review">
        <h2>Reviews</h2>
        <div class="restaurant-detail__review-item">
          ${restaurant.customerReviews.map((customerReview) => `<div class="review-item"><div class="review-item__name"><p>${customerReview.name}</p></div><div review-item__review><p>${customerReview.review}</p></div><div review-item__date><span>${customerReview.date}</span></div></div>`).join('')}
        </div>
      </div>
    </div>
  </article>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <div class="restaurant-item__img">
      <label class="restaurant-item__label">${restaurant.city}</label>
      <picture>
        <source media="(max-width: 600px)" srcset="${CONFIG.SMALL_IMAGE_URL + restaurant.pictureId}">
        <img class="restaurant-item__thumbnail lazyload" data-src="${CONFIG.MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      </picture>
    </div>
    <div class="restaurant-item__content">
      <p class="restaurant-item__rating">Rating: ${restaurant.rating}⭐️</p>
      <h1 class="restaurant-item__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
