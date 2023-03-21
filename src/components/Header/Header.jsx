import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { Container, Logo } from './styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    function handleHome() {
        navigate('/');
    }

    return (
        <Container>
            <Logo onClick={handleHome}>
                <FontAwesomeIcon icon={faComputer} size="2x" />
                <h4>MoX</h4>
            </Logo>
        </Container>
    );
};

export default Header;