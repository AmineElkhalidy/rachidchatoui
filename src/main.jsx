import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import App from "./App";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
