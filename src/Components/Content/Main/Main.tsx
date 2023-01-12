import { ReactElement, useEffect, useState } from 'react'
import Header from './Header/Header'
import Item from './Item/Item'
import './Main.css'
import { targets, recipes, Target, Recipe } from '../../../Data/Data'

export default function Main(props: any) {
    console.log('main rendered')
    const currentMaterial = props.material

    const [items, setItems] = useState<ReactElement[]>([])
    const [target, setTarget] = useState<Target>({
        headerTitle: '',
        headerImage: ''
    })

    useEffect(() => {
        const currentTarget = targets.filter(element => element.headerTitle === currentMaterial)[0]
        setTarget(currentTarget)
        console.log('set target called and target is ', currentTarget)
    }, [])

    //map through recipes starting at index of === headerTitle
    useEffect(() => {
        const newItems = recipes.map((recipe: Recipe, idx: number) => {
            return <Item key={idx} recipe={recipe.ingredients} />
        })
        setItems(newItems)
        console.log('set items called and items are ', newItems)
    }, [currentMaterial])

    return (
        <>
            <div id="main">
                {target &&
                    <>
                        <Header image={target.headerImage} title={target.headerTitle} />
                        {items}
                    </>
                }
                {!target && <h1>Loading...</h1>}

            </div>
        </>
    )
}