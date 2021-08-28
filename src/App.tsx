import CustomTheme from './styles/Theme';
import {ThemeProvider} from '@material-ui/core';
import FullHeightWrapper from './components/FullHeightWrapper';
import RandomContent from './components/RandomContent';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <FullHeightWrapper color="green"><RandomContent /></FullHeightWrapper>
      <FullHeightWrapper color="blue"><RandomContent /></FullHeightWrapper>
      <FullHeightWrapper color="red"><RandomContent /></FullHeightWrapper>
    </ThemeProvider>
  );
}

export default App;
