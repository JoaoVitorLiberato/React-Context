import { FaGamepad } from 'react-icons/fa'

import { Button } from './style'
import { useMenu } from '../../contexts/MainContext'


const MenuButton = () => {
     const {handleToggleMenu, showMenu} = useMenu()
     const colorIcon = showMenu ? '#20b2aa' : '#FF6347'
     return (
          <Button onClick={handleToggleMenu}>
               <FaGamepad size={32} color={colorIcon} />
          </Button>
     );
}

export default MenuButton;