import Header from './Header/Header'
import Item from './Item/Item'
import './Main.css'

export default function Main() {
    return (
        <>
            <div id="main">
                <Header />
                <Item />
                <Item />
            </div>
        </>
    )
}