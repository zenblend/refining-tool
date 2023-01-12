import Dropdown from './Dropdown/Dropdown'
import './Sidebar.css'

export default function Sidebar(props: any) {
    return (
        <>
            <div id="sidebar">
                <Dropdown handleChange={props.handleChange} />
            </div>
        </>
    )
}