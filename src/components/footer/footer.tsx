import './footer.scss';

import logoGreen from '../../asset/img/logo-green-2x.png'

function Footer(){
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logoGreen} alt="Full logo" className='footer__logo' />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Carriers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <a href="#" className="footer__link">Thomas</a> for his job <a href="" className="footer__link"> something</a>
                    </p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;