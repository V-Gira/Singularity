import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Fade from "@mui/material/Fade";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React, { Suspense, useContext } from "react";
import ReactDom from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { SettingsContext, useSettings } from "./contexts/SettingsContext";
import { Navbar } from "./Navbar";
import { darkTheme, lightTheme } from "./theme";
import { getDefaultInjections } from "./services/injections";
import { InjectionsContext } from "./contexts/InjectionsContext"

const injections = getDefaultInjections();

const ProductPage = React.lazy(() => import("./pages/ProductPage/ProductPage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = React.lazy(
  () => import("./pages/NotFoundPage/NotFoundPage")
);
const ShopAuthorPage = React.lazy(
  () => import("./pages/ShopPage/ShopAuthorPage")
);
const ShopAuthorProductPage = React.lazy(
  () => import("./pages/ShopPage/ShopAuthorProductPage")
);

function AppProviders(props: { children: any }) {
  const settingsManager = useSettings();
  return (
    <SettingsContext.Provider value={settingsManager}>
      <Suspense fallback={null}>
      <InjectionsContext.Provider value={injections}>
      {props.children}
      </InjectionsContext.Provider>
      </Suspense>
    </SettingsContext.Provider>
  );
}

function App() {
  const settingsManager = useContext(SettingsContext);
  return (
    <>
      <HelmetProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider
            theme={
              settingsManager.state.themeMode === "light"
                ? lightTheme
                : darkTheme
            }
          >
            <CssBaseline />
            <Router>
              <ScrollToTop />
              <Navbar />
              <ErrorBoundary>
                <Suspense
                  fallback={
                    <Fade in>
                      <Container maxWidth="md">
                        <Box
                          display="flex"
                          justifyContent="center"
                          margin="3rem 0"
                        >
                          <CircularProgress />
                        </Box>
                      </Container>
                    </Fade>
                  }
                >
                  {renderRedirects()}
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/search" component={SearchPage} />

                    <Route
                      exact
                      path="/:language/:type/:author/:game/:chapter?"
                      component={ProductPage}
                    />
                    <Route
                      exact
                      path={"/browse/:authorSlug/"}
                      render={() => {
                        return <ShopAuthorPage />;
                      }}
                    />
                    <Route
                      exact
                      path={"/browse/:authorSlug/:productSlug"}
                      render={() => {
                        return <ShopAuthorProductPage />;
                      }}
                    />
                    <Route
                      path="*"
                      render={() => {
                        return <NotFoundPage />;
                      }}
                    />
                  </Switch>
                </Suspense>

                <Box mb="50vh" />
              </ErrorBoundary>
            </Router>
          </ThemeProvider>
        </StyledEngineProvider>
      </HelmetProvider>
    </>
  );

  function renderRedirects() {
    return (
      <>
        <Route
          path="*"
          render={(routeProps) => {
            if (routeProps.match.url.includes("fari-games")) {
              return (
                <>
                  <Redirect
                    to={routeProps.match.url
                      .split("fari-games")
                      .join("fari-rpgs")}
                  />
                </>
              );
            }
            return null;
          }}
        />
      </>
    );
  }
}

ReactDom.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
