import './home.scss';

import Button from '../button/button';
import Features from '../features/features';
import Tours from '../tours/tours';
import Story from '../stories/stories';
import Booking from '../booking/booking';


import nat1 from '../../../src/asset/img/nat-1-large.jpg'
import nat2 from '../../../src/asset/img/nat-2-large.jpg'
import nat3 from '../../../src/asset/img/nat-3-large.jpg'

function Home() {
    return (
        <main>
            <section className="section-about">

                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventuurous people
                    </h2>
                </div>

                <div className='row'>
                    <div className='col-1-of-2'>
                        <h3 className="heading-tertiary u-margin-bottom-small">You are going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores ad molestias pariatur distinctio sint ipsum vel sit nisi consequuntur, quos ex, explicabo magni aliquid sed dolorum saepe, consequatur nemo.
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores ad molestias pariatur distinctio sint ipsum vel sit nisi consequuntur, quos ex, explicabo magni aliquid sed dolorum saepe, consequatur nemo.
                        </p>

                        <Button buttonType='text'>Learn more &rarr;</Button>
                    </div>

                    <div className='col-1-of-2'>
                        <div className="composition">
                        
                            <img src={nat1} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src={nat2} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                            <img src={nat3} alt="Photo 3" className="composition__photo composition__photo--p3"/>

                        </div>
                    </div>
                </div>
            </section>
            <Features/>
            <Tours/>
            <Story/>
            <Booking/>
        </main>

            /* <div className='row'>
                <div className='col-1-of-3'>
                    Col 1 of 3
                </div>
                <div className='col-1-of-3'>
                    Col 1 of 3
                </div>
                <div className='col-1-of-3'>
                    Col 1 of 3
                </div>
            </div>

            <div className='row'>
                <div className='col-1-of-3'>
                    Col 1 of 3
                </div>
                <div className='col-2-of-3'>
                    Col 2 of 3
                </div>
            </div>

            <div className='row'>
                <div className='col-1-of-4'>
                    Col 1 of 4
                </div>
                <div className='col-1-of-4'>
                    Col 1 of 4
                </div>
                <div className='col-1-of-4'>
                    Col 1 of 4
                </div>
                <div className='col-1-of-4'>
                    Col 1 of 4
                </div>
            </div>

            <div className='row'>
                <div className='col-1-of-4'>
                    Col 1 of 4
                </div>
                <div className='col-1-of-4'>
                    Col 1 of 4
                </div>
                <div className='col-2-of-4'>
                    Col 2 of 4
                </div>
            </div>

            <div className='row'>
                <div className='col-1-of-4'>
                    Col 1 of 4
                </div>
                <div className='col-3-of-4'>
                    Col 3 of 4
                </div> */
            /* </div> */
            
    )
}

export default Home;