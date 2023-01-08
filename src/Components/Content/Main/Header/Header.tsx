import './Header.css'

export default function Header() {
    return (
        <>
            <div id="header">
                <img id="header-image" src='/src/Images/starmetal_ingot.png' />
                <div id="header-container">
                    <h1 id="header-title">Starmetal Ingot</h1>
                    <div id="header-input-container">
                        <input type="text" id="header-input" />
                        <button id="header-input-button">GO!</button>
                    </div>
                </div>
            </div>
        </>
    )
}