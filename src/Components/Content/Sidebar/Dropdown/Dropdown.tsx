import './Dropdown.css'

export default function Dropdown(props: any) {
    return (
        <>
            <div id="dropdown">
                <select id="dropdown-select" onChange={(e) => props.handleChange(e.target.value)}>
                    <option className={'dropdown-option'} hidden defaultChecked>Select Material</option>
                    <option className={'dropdown-option'} value={'Orichalcum'}>Orichalcum</option>
                    <option className={'dropdown-option'} value={'Starmetal'}>Starmetal</option>
                    <option className={'dropdown-option'} value={'Steel'}>Steel</option>
                    <option className={'dropdown-option'} value={'Iron'}>Iron</option>
                </select>
            </div>
        </>
    )
}