import './Dropdown.css'

export default function Dropdown() {
    return (
        <>
            <div id="dropdown">
                <select id="dropdown-select">
                    <option className={'dropdown-option'} disabled selected hidden>Select Material</option>
                    <option className={'dropdown-option'} value={'Starmetal'}>Starmetal</option>
                    <option className={'dropdown-option'} value={'Orichalcum'}>Orichalcum</option>
                </select>
            </div>
        </>
    )
}