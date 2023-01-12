import './Header.css'

export default function Header(props: any) {
    return (
        <>
            <div id="header">
                <img id="header-image" src={props.image} />
                <div id="header-container">
                    <h1 id="header-title">{props.title} Ingot</h1>
                    <div id="header-input-container">
                        <input type="text" id="header-input" />
                        <button id="header-input-button">GO!</button>
                    </div>
                </div>
            </div>
        </>
    )
}