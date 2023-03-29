import { GlobalStylesProvider } from "config/libs/styles-provider";
import { Provider } from "react-redux";
import { RootLayout } from "components/root-layout";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "store/store";
import { ErrorBoundary } from "components/error-boundary";
import "config/libs/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStylesProvider />
      <BrowserRouter>
        <ErrorBoundary>
          <RootLayout>
            <App />
          </RootLayout>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
