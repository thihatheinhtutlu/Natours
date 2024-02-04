import './tours.scss';

import Card from '../card/card';
import Button from '../button/button';

function Tours() {
    return (
        <section className="section-tours">
             <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Most popular tours
                    </h2>
            </div>
            <Card/>

            <div className="u-center-text u-margin-top-huge">
                <Button buttonType='green'>Discover all tours</Button>
            </div>
        </section>
    )
}

export default Tours;