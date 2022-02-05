import { useState } from 'react'

const Clicker = ({ stock }) => {

    const [clicks, setClicks] = useState(0)

    const sumarClick = () => {
        if (stock > clicks) {
            setClicks(clicks + 1)
        } else {
            alert("no hay mas stock")
        }
    }

    const restarClick = () => {
        if (clicks > 1) {
            setClicks(clicks - 1);
        } else {
            alert("No se puede disminuir mas")
        }
    }




    return (
        <div>
            <p>El contador va : {clicks} </p>
            <button onClick={sumarClick} className="material-icons">add</button>
            <button onClick={restarClick} className="material-icons">remove</button>
        </div>
    )

}

export default Clicker



