import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import { Container } from './Components/Style/Container.style';
import { GlobalStyles } from './Components/Style/Global';

const theme = {
  colors: {
    mainColor: '#ff7d1b',
    secondaryColor: '#ffa05a',
    textColor: '#1e1e26',
    subColor: '#94979e',
  },
  mobile: '768px',
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
