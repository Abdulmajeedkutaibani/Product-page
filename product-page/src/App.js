import { ThemeProvider } from 'styled-components';
import { Container } from './Components/Style/Container.style';
import { GlobalStyles } from './Components/Style/Global';
const theme = {
  colors: {
    mainColor: '#ff7d1b',
    secondaryColor: '#ffa05a',
    textColor: '#1e1e26',
    subColor: '#94979e',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>iwuehgiwerhghieehr</Container>
    </ThemeProvider>
  );
}

export default App;
