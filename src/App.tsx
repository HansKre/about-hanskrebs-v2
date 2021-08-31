import CustomTheme from './styles/Theme';
import {ThemeProvider} from '@material-ui/core';
import FullHeightWrapper from './components/FullHeightWrapper';
import LandingPage from './components/LandingPage';
import hansImg from './assets/IMG_9921_matte_look_1440.jpeg'
import useBreakPoint from './hooks/useBreakPoint';
import MarginsLeftRight from './components/MarginsLeftRight';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Photography from './components/Photography';

function App() {
  const downPhone = !useBreakPoint('up', 'phone', undefined, CustomTheme);
  return (
    <ThemeProvider theme={CustomTheme}>
      <FullHeightWrapper backgroundColor="#48484a" backgroundImg={hansImg} height={downPhone ? "100vh" : "100vh"} >
        <LandingPage />
      </FullHeightWrapper>
      <FullHeightWrapper backgroundColor="white">
        <MarginsLeftRight >
          <AboutMe />
        </MarginsLeftRight>
      </FullHeightWrapper>
      <FullHeightWrapper backgroundColor="#48484a" height={`${window.visualViewport.height * 6.8}px`} >
        <MarginsLeftRight >
          <Works />
        </MarginsLeftRight>
      </FullHeightWrapper>
      <FullHeightWrapper backgroundColor="black" height={`${window.visualViewport.height * 1.7}px`}>
        <MarginsLeftRight >
          <Photography />
        </MarginsLeftRight>
      </FullHeightWrapper>
    </ThemeProvider>
  );
}

export default App;
