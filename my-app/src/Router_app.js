import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavouritePage from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetup';
import Layout from './component/layout/Layout';

function Router_app() {
  return (
      <Layout>

          <Switch>
          <Route path='/' exact>
              <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup'>
              <NewMeetupsPage />
          </Route>
          <Route path='/Favourites'>
              <FavouritePage />
          </Route>
          </Switch>
      </Layout>

  );
}

export default Router_app;
