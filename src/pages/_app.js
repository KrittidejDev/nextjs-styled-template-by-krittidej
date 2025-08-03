import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { appWithTranslation } from "next-i18next";
import theme from "@/styles/theme.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Modals } from "@/components";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
          <ToastContainer />
          {/* <Modals.Alert /> */}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(App);
