import Explore from '../views/pages/explore';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Explore, // default page
  '/explore': Explore,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
