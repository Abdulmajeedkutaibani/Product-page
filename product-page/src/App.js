import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Product from './Components/Product';
import { Container } from './Components/Style/Container.style';
import { GlobalStyles } from './Components/Style/Global';
import { NavList } from './Components/Style/Header.style';
import { MenuStyled } from './Components/Style/Menu.styled';
import Menu from './Components/Menu';

const theme = {
  colors: {
    mainColor: '#ff7d1b',
    secondaryColor: '#ffa05a',
    textColor: '#1e1e26',
    subColor: '#94979e',
    PaleOrange: 'hsl(25, 100%, 94%)',
  },
  mobile: '768px',
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Menu />
        <Header />
        <Product />
      </Container>
    </ThemeProvider>
  );
}

export default App;
