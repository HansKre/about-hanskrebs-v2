import CustomTheme from './styles/Theme';
import {ThemeProvider} from '@material-ui/core';
import FullHeightWrapper from './components/FullHeightWrapper';
import LandingPage from './components/LandingPage';
import hansImg from './assets/IMG_9921_matte_look_1440.jpeg'
import useBreakPoint from './hooks/useBreakPoint';

function App() {
  const downPhone = !useBreakPoint('up', 'phone', undefined, CustomTheme);
  return (
    <ThemeProvider theme={CustomTheme}>
      <FullHeightWrapper backgroundColor="#48484a" backgroundImg={hansImg} height={downPhone ? "100vh" : "100vh"} >
        <LandingPage />
      </FullHeightWrapper>
    </ThemeProvider>
  );
}

export default App;
