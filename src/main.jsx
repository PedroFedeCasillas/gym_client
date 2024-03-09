import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
// import { dotenv } from "dotenv";
// dotenv.config();
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const domain = "https://pedrofede-react-ex.us.auth0.com";
const clientId = "bBFX86HthkfFdLRDaHRw0QhNz8PXRf7W";

// const domain = porcess.env.REACT_APP_DOMAIN;
// const clientId = process.env.REACT_APP_CLIENT_ID ;


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();

