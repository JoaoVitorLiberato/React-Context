
import MenuButton from '../MenuButton';
import {Container} from './style'

const Header = () => (
    <Container>
        <div className="wrapper">
            <strong>Play the Game</strong>
            <MenuButton />
        </div>
    </Container>
);


export default Header;