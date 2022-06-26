import './Biblio.css'

const Biblio = () => {
    const data = require("./references.json")

    return (
        <><div className='Biblio'>
            <div className='Biblio-Content'>
                <h1>Bibliography</h1>
                <ul>{data.map(item => <li>{item}</li>)}</ul>
            </div>

        </div></>
    )


}

export default Biblio;