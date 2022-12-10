import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FavouriteContainer, HomeContainer } from './containers';
import { HomeLayout } from './layouts';
import { themeConfig } from './theme';


function App() {
  const [theme, setTheme] = useState<string>("light");
  return (
    <ThemeProvider theme={themeConfig[theme as keyof typeof themeConfig]}>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={(
          <HomeLayout theme={theme} setTheme={setTheme}>
            <HomeContainer />
          </HomeLayout>
        )} />
        <Route path="/favourite" element={(
          <HomeLayout theme={theme} setTheme={setTheme}>
            <FavouriteContainer />
          </HomeLayout>
        )} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
