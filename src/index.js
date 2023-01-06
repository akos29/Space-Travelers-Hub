import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './index.css';
import store from './redux/configureStore';
import Root, { loader as rootLoader } from './routes/root';
import ErrorPage from './error-page';
import Rockets from './components/Rockets';
import Mission from './components/Mission';
import MyProfile from './components/MyProfile';
import Store, { store } from './redux/store';
import { getRockets } from './redux/rockets/rocketSlice';

store.dispatch(getRockets());

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Rockets />} />
        <Route
          path="/rockets"
          element={<Rockets />}
        />
        <Route
          path="/missions"
          element={<Mission />}

        />
        <Route
          path="myprofile"
          element={<MyProfile />}
        />

      </Route>
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
