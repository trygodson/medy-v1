import { Suspense, lazy } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { routes } from './Route';
import RouteGuard from './RouteGuard';
const LandingPage = lazy(() => import('../pages/LandingPage/landingPage'));

function App() {
  console.log(routes);
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        {/* <Route path="/" component={LandingPage} /> */}
        {routes.map((route, i) => {
          route.guarded ? <RouteGuard key={i} /> : <Route key={i} {...route} />;
        })}
      </Switch>
      {/* <Redirect
        to={{
          pathname: '/',
          state: {
            from: '/',
          },
        }}
      /> */}
    </Suspense>
  );
}

export default App;
