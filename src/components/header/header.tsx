import './header.scss'
import logowhite1 from '../../asset/img/logo-white.png'
import Button from '../button/button';

function Header() {
    return (
        <header className='header'>
            <div className='header__logo-box'>
                <img src={logowhite1} alt='Logo' className='header__logo'/>
            </div>

            <div className='header__text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary--main'>Outdoors</span>
                    <span className='heading-primary--sub'> is where life happens</span>
                </h1>
                <Button buttonType='white'>Discover more</Button>
            </div>
        </header>
    );
}

export default Header;