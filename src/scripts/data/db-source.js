import API_ENDPOINT from '../globals/api-endpoint';

const spinner = document.getElementById('spinner');
const content = document.getElementById('mainContent');

function displayLoading() {
  spinner.removeAttribute('hidden');
  content.setAttribute('hidden', '');
  // to stop loading after some time
  setTimeout(() => {
    spinner.setAttribute('hidden', '');
    content.removeAttribute('hidden');
  }, 5000);
}

function hideLoading() {
  spinner.setAttribute('hidden', '');
  content.removeAttribute('hidden');
}

class DbSource {
  static async restaurants() {
    displayLoading();
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    hideLoading();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    displayLoading();
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    hideLoading();
    return responseJson.restaurant;
  }
}

export {
  DbSource,
  displayLoading,
  hideLoading,
};
