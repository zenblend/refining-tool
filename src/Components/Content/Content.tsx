import './Content.css'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'

export default function Content() {
    return (
        <>
            <div id="content">
                <Sidebar />
                <Main />
            </div>
        </>
    )
}