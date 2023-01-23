import { useState } from 'react'
import './Header.css'

export default function Header(props: any) {

    const [headerQuantity, setHeaderQuantity] = useState<number>(0)

    const handleChange = (e: any) => {
        setHeaderQuantity(e)
    }

    return (
        <div id="header">
            <img id="header-image" src={props.image} />
            <div id="header-container">
                <h1 id="header-title">{props.title} Ingot</h1>
                <div id="header-input-container">
                    <input
                        type="text"
                        id="header-input"
                        maxLength={6}
                        onChange={(e) => handleChange(e.target.value)}
                        value={headerQuantity}
                    />
                    <button
                        id="header-input-button"
                        onClick={() => props.handleSubmit(headerQuantity)}
                    >Calculate</button>
                </div>
            </div>
        </div>
    )
}