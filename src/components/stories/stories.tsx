import './stories.scss'

import Button from '../button/button';

import nat8 from '../../asset/img/nat-8.jpg';
import nat9 from '../../asset/img/nat-9.jpg';

import video1 from '../../asset/video/video.mp4';
import video2 from '../../asset/video/video.webm';

function Story(){
    return (
        <section className="section-stories">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={video1} type='video/mp4'></source>
                    <source src={video2} type='video/webm'></source>
                    Your browser is not supported!
                </video>
            </div>

             <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        We make people genuinely happy
                    </h2>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={nat8} alt="Person on a tour" className='story__img'/>
                        <figcaption className="story__caption">
                            Mary Smith
                        </figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            I had the best week ever with my family 
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ea voluptates earum labore sunt, illo, quibusdam exercitationem nostrum sequi libero nihil. Esse soluta nulla dolores neque alias aliquid ea quas?
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={nat9} alt="Person on a tour" className='story__img'/>
                        <figcaption className="story__caption">
                            Jack Wilson
                        </figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            WOW! My life is completely different now
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ea voluptates earum labore sunt, illo, quibusdam exercitationem nostrum sequi libero nihil. Esse soluta nulla dolores neque alias aliquid ea quas?
                        </p>
                    </div>
                </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <Button buttonType='text'>Read all stories &rarr;</Button>
            </div>

        </section>
    )
};

export default Story;