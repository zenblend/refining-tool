import { useState } from 'react'
import './Content.css'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'

export default function Content() {
    const [material, setMaterial] = useState<string>('')
    console.log('content rendered and mat is ', material)

    const handleChange = (e: string) => {
        setMaterial(e)
    }

    return (
        <>
            <div id="content">
                <Sidebar handleChange={handleChange} />
                {material &&
                    <Main material={material} />
                }
                {!material &&
                    <h1>Loading...</h1>
                }

            </div>
        </>
    )
}