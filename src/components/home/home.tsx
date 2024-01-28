import './home.scss';
import Button from '../button/button';

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
                    Image composition
                </div>
            </div>

            {/* <div className='row'>
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
                </div> */}
            {/* </div> */}
            </section>
        </main>
    )
}

export default Home;