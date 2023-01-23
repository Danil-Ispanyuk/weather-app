import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Favourite, Home } from "./containers";
import { HomeLayout } from "./layouts";
import { store } from "./store/store";
import { themeConfig } from "./theme";

function App() {
  const activeTheme = JSON.parse(localStorage.getItem("theme") || "true") ? "dark" : "light";
  const [theme, setTheme] = useState<string>(activeTheme);
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeConfig[theme as keyof typeof themeConfig]}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/home">
              <Route
                path="/home/:id"
                element={
                  <HomeLayout theme={theme} setTheme={setTheme}>
                    <Home />
                  </HomeLayout>
                }
              />
              <Route
                path="/home"
                element={
                  <HomeLayout theme={theme} setTheme={setTheme}>
                    <Home />
                  </HomeLayout>
                }
              />
            </Route>
            <Route
              path="/favourite"
              element={
                <HomeLayout theme={theme} setTheme={setTheme}>
                  <Favourite />
                </HomeLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
