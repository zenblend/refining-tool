import { useEffect, ReactElement, useState, forwardRef, Ref } from 'react'
import Ingredient from './Ingredient/Ingredient'
import './Item.css'

const Item = forwardRef((props: any, ref: Ref<HTMLDivElement>) => {

    const [combined, setCombined] = useState<ReactElement[]>([])

    useEffect(() => {
        const newItems: ReactElement[] = props.recipe.map((ingredient: any, idx: number) => {
            return <Ingredient key={'ingredient' + ingredient.imgage + idx} image={ingredient.image} quantity={ingredient.quantity} />
        })
        setCombined(newItems)
    }, [])

    return (
        <div id="item" ref={ref}>
            {combined}
        </div>
    )
})

export default Item