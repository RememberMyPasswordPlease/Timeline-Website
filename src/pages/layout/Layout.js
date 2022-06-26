import { Outlet, Link, useLocation } from 'react-router-dom'
import './Layout.css'


const Layout = () => {

    const location = useLocation()
    
    return (
        <>
        <div className='Layout'>

            <div className='Nav-Bar'>

                <div className='Icon-Row'>
                    <div className='Nav-Icon' id="Home-Icon">
                        <Link to="/">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" />
                        </Link>
                    </div>
                    <div className='Nav-Icon' id="Biblio-Icon">
                        <Link to="bibliography">
                            <img src="https://cdn-icons-png.flaticon.com/512/4107/4107909.png" alt="Bibliography" />
                        </Link>
                    </div>
                    <div className='Nav-Icon' id="Timeline-Icon">
                        <Link to="timeline">
                            <img src="https://cdn-icons.flaticon.com/png/512/527/premium/527995.png?token=exp=1656232256~hmac=14276d8d2dcc9dc7babdd5b573d80427" alt="Timeline" />
                        </Link>
                    </div>
                </div>
                
                <div className='Nav-Title'>
                    Life cycle of Stars
                </div>

            </div>
            
            <Outlet />

            { location.pathname !== "/timeline" ?
            <div className="Section Footer">
                <div className="Footer-Half" id="About-Us">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="Footer-Half" id="Contact">
                    <h2>Contact</h2>
                    <div className='Contact-Detail'>    
                        <h4>Arif Mohamad</h4>

                        <div className='Social-Bar'>
                            <a href="https://github.com/RememberMyPasswordPlease"><i class="fa fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/pedro.rodriguez2009/"><i class="fa fa-brands fa-instagram"></i></a>
                        </div>

                    </div>

                    <div className='Contact-Detail'>    
                        <h4>Haseeb Mohebi</h4>

                        <div className='Social-Bar'>
                            
                        </div>

                    </div>
                    <ul>
                        
                    </ul>

                </div>
            </div>
            : null }
            
        </div>
        </>


    )
}

export default Layout