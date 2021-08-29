import CustomTheme from './styles/Theme';
import {ThemeProvider} from '@material-ui/core';
import FullHeightWrapper from './components/FullHeightWrapper';
import ParallaxContent from './components/ParallaxContent';
import {ParallaxProvider} from 'react-scroll-parallax';
import LandingPage from './components/LandingPage';
import hansImg from './assets/IMG_9921_matte_look_1440.jpeg'
import useBreakPoint from './hooks/useBreakPoint';

function App() {
  const downSm = useBreakPoint('down', 'sm');
  return (
    <ThemeProvider theme={CustomTheme}>
      <ParallaxProvider>
        <FullHeightWrapper backgroundColor="#48484a" backgroundImg={hansImg} height={downSm ? "150vh" : "920px"} ><LandingPage /></FullHeightWrapper>
        <FullHeightWrapper backgroundColor="white">
          <ParallaxContent yOffset={downSm ? [-40 - (window.visualViewport.width - 375) / 8, 40 - (window.visualViewport.width - 375) / 8] : [-50, 70]}>
            <h1>
              I am a <span>software architect</span> passionate about <i>web development</i> and <i><label>frontend desgin</label></i>.
            </h1>
            <h2 style={{color: "#48484a"}}>
              Besides programming, I enjoy 📸, 🚴‍♂️, good 🍷 and outdoor 🌿.
            </h2>
          </ParallaxContent>
        </FullHeightWrapper>
        <FullHeightWrapper backgroundColor="#48484a">
          <ParallaxContent yOffset={[-50, 50]}>
            <h1>Works 📸</h1>
            <h2 >
              As my preferred techstack I'm using <span>React</span> with <span>Typescript</span> and <span>Material-UI</span> 💻.
            </h2>
          </ParallaxContent>
        </FullHeightWrapper>
        <FullHeightWrapper backgroundColor="black"><ParallaxContent yOffset={[-200, 200]}><h1>Experience 🔬</h1></ParallaxContent></FullHeightWrapper>
        <FullHeightWrapper backgroundColor="white"><ParallaxContent yOffset={[-200, 200]}><h1>Contact & Download CV 🎙</h1></ParallaxContent></FullHeightWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
