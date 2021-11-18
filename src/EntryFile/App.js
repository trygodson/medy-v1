import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './Route';
import RouteGuard from './RouteGuard';
// import '../assets/css/bootstrap.min.css';
// import '../assets/js/bootstrap.min.js';
// import '../assets/js/jquery-3.2.1.min.js';
// import '../assets/js/popper.min.js';

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        {routes.map((route, i) => {
          return route.guarded ? <RouteGuard key={i} /> : <Route key={i} {...route} />;
        })}
      </Switch>
    </Suspense>
  );
}

export default App;
