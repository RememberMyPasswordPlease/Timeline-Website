import { Link } from "react-router-dom"
import "./Home.css"


const Home = () => {

    const linkStyle = {
        "textDecoration": "none", 
        "color": "white",
        "fontSize": "18px"
    }


    return (
        <><div className="Home">

            <div className="Section" id="Top">
                <div className="Content-Section">
                    <img src="" alt="Top"/>
                    <div className="Content-Text">
                        <h2>Lorem</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris eros, consectetur quis elementum eget, gravida id augue. Ut vitae arcu et lorem fermentum tristique. Pellentesque est metus, consectetur convallis vehicula viverra, pretium non diam. Duis tempor feugiat metus in egestas. Nam consectetur ipsum a sapien porta blandit. Suspendisse eu velit sit amet justo consectetur mattis id eu nunc. Pellentesque risus metus, ultrices suscipit dignissim vel, iaculis vel lorem.
                    </div>

                </div>
            </div>

            <div className="Section" id="Middle">
                <div className="Content-Section">
                    <div className="Content-Text">
                        <h2>Lorem</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris eros, consectetur quis elementum eget, gravida id augue. Ut vitae arcu et lorem fermentum tristique. Pellentesque est metus, consectetur convallis vehicula viverra, pretium non diam. Duis tempor feugiat metus in egestas. Nam consectetur ipsum a sapien porta blandit. Suspendisse eu velit sit amet justo consectetur mattis id eu nunc. Pellentesque risus metus, ultrices suscipit dignissim vel, iaculis vel lorem.
                    </div>
                    <img src="" alt="Middle"/>
                </div>
            </div>

            <div className="Section" id="Bottom">
                <div className="Content-Section">
                    <img src="" alt="Bottom"/>
                    <div className="Content-Text">
                        <h2>Lorem</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris eros, consectetur quis elementum eget, gravida id augue. Ut vitae arcu et lorem fermentum tristique. Pellentesque est metus, consectetur convallis vehicula viverra, pretium non diam. Duis tempor feugiat metus in egestas. Nam consectetur ipsum a sapien porta blandit. Suspendisse eu velit sit amet justo consectetur mattis id eu nunc. Pellentesque risus metus, ultrices suscipit dignissim vel, iaculis vel lorem.
                    </div>
                </div>
                <div id="Timeline-Button">
                    <Link to="timeline" style={linkStyle}>Timeline</Link>
                </div>
            </div>

        </div></>
    )  
}

export default Home