/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('There are no restaurants to display', '.restaurant__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('There are no restaurants to display', '.restaurant__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant-item__name a');

  const firstRestaurant = locate('.restaurant-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  // I.wait(3);
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__name a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking restaurant', async ({ I }) => {
  I.see('There are no restaurants to display', '.restaurant__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant-item__name a');
  I.click(locate('.restaurant-item__name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  I.click(locate('.restaurant-item__name a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('There are no restaurants to display', '.restaurant__not__found');
});

Scenario('liking multiple restaurants', async ({ I }) => {
  I.see('There are no restaurants to display', '.restaurant__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant-item__name a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant-item__name a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.restaurant-detail__name a'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  for (let i = 1; i <= 3; i++) {
    const visibleRestaurant = locate('.restaurant-item__name a').at(i);
    const visibleRestaurantName = await I.grabTextFrom(visibleRestaurant);
    assert.strictEqual(visibleRestaurantName, names[i - 1]);
  }
});
