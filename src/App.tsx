import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { HomeContainer } from './containers';
import { HomeLayout } from './layouts';
import { themeConfig } from './theme';


function App() {
  const [theme, setTheme] = useState<string>("light");
  return (
    <ThemeProvider theme={themeConfig[theme as keyof typeof themeConfig]}>
      <HomeLayout theme={theme} setTheme={setTheme}>
        <HomeContainer theme={theme} />
      </HomeLayout>
    </ThemeProvider>
  );
}

export default App;
