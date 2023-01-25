import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import {Link, Navigate} from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import React from 'react'

const Landing = () => {
    const { user } = useAppContext()
    return (
        <React.Fragment>
            {user && <Navigate to='/'/>}
            <Wrapper>
                <nav>
                    <Logo/>
                </nav>
                <div className="container page">
                    {/* info */}
                    <div className="info">
                        <h1>job <span>tracking</span> app</h1>
                        <p>I'm baby banh mi pop-up literally, trust fund la croix lumbersexual waistcoat cray. Bitters you probably haven't heard of them keytar 3 wolf moon, twee sus +1 lo-fi craft beer man braid. Lomo kitsch fanny pack hammock, neutra meditation taxidermy williamsburg vape humblebrag normcore letterpress gochujang listicle. Enamel pin fingerstache raw denim organic, letterpress gentrify activated charcoal salvia gastropub artisan lomo hammock.</p>
                        <Link to='/register' className='btn btn-hero'>
                            Login/Register
                        </Link>
                    </div>
                    <img src={main} alt='job hunt' className='img main-img' />
                </div>
            </Wrapper>
        </React.Fragment>
    )
}



export default Landing