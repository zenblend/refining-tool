import Dropdown from './Dropdown/Dropdown'
import './Sidebar.css'

export default function Sidebar() {
    return (
        <>
            <div id="sidebar">
                <Dropdown />
                <button>GO!</button>
            </div>
        </>
    )
}