import { createContext, useState, useContext } from 'react'

interface MainContextData {
    showMenu: boolean;
    handleToggleMenu: () => void;
}

interface propsMain{
    children: JSX.Element
}

export const MainContext = createContext({} as MainContextData)

export const MainContextProvider = (props: propsMain) => {

    const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu((state) => !state)
  }

    return(
        <MainContext.Provider value={{
            handleToggleMenu, 
            showMenu,
          }}>{props.children}</MainContext.Provider>
    );
}

export const useMenu = () => useContext(MainContext);