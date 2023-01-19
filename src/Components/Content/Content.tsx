import { useState } from 'react'
import './Content.css'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'

export default function Content() {
    const [material, setMaterial] = useState<string>('')
    const [globalQuantity, setGlobalQuantity] = useState<number>(0)

    const handleChange = (e: string) => {
        setMaterial(e)
    }

    const handleSubmit = (quant: number) => {
        setGlobalQuantity(quant)
        console.log('quant is ', quant)
    }

    return (
        <>
            <div id="content">
                <Sidebar handleChange={handleChange} />
                {material &&
                    <Main material={material} handleSubmit={handleSubmit} globalQuant={globalQuantity} />
                }
                {!material &&
                    <h1 id="loading">
                        Select the final product you would like to craft
                    </h1>
                }

            </div>
        </>
    )
}