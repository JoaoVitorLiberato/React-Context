
import { GlobalStyle } from './Globals/style'
import Header from './components/Header/index';
import Menu from './components/Menu/index';
import { MainContextProvider } from './contexts/MainContext';


function App() {
  return (
      <MainContextProvider>
        <>
          <GlobalStyle />
          <Header />
          <Menu />
        </>
      </MainContextProvider>
    
  )
}

export default App
