import { useEffect, ReactElement, useState } from 'react'
import Ingredient from './Ingredient/Ingredient'
import './Item.css'

export default function Item(props: any) {

    const [combined, setCombined] = useState<ReactElement[]>([])

    useEffect(() => {
        const newItems: ReactElement[] = props.recipe.map((ingredient: any, idx: number) => {
            return <Ingredient key={idx} image={ingredient.image} quantity={ingredient.quantity} />
        })
        setCombined(newItems)
    }, [])

    return (
        <div id="item">
            {combined}
        </div>
    )
}