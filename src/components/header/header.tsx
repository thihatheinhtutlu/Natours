import './header.css';
import logowhite1 from '../../asset/img/logo-white.png'
import Button from '../button/button';

function Header() {
    return (
        <header className='header'>
            <div className='logo-box'>
                <img src={logowhite1} alt='Logo' className='logo'/>
            </div>

            <div className='text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary-main'>Outdoors</span>
                    <span className='heading-primary-sub'> is where life happens</span>
                </h1>
                <Button/>
            </div>
        </header>
    );
}

export default Header;