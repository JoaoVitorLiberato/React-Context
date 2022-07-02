import { NavMenu } from './style'

import { useMenu } from './../../contexts/MainContext/index';

const Menu = () => {
    const {showMenu} = useMenu()
    return (
        <NavMenu showMenu={showMenu}>
            <ul>
                <li>Playstation</li>
                <li>Xbox</li>
                <li>Nintendo Switch</li>
                <li>PC</li>
            </ul>
        </NavMenu>
    );
}

export default Menu;