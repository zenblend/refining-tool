import { ReactElement, useEffect, useState } from 'react'
import Header from './Header/Header'
import Item from './Item/Item'
import './Main.css'
import { targets, recipes, Target, Recipe } from '../../../Data/Data'
import Result from './Result/Result'
import { motion } from 'framer-motion'

export default function Main(props: any) {
    console.log('main rendered')
    const currentMaterial = props.material
    const handleSubmit = props.handleSubmit
    const globalQuant = props.globalQuant

    const MotionItem = motion(Item)

    const [items, setItems] = useState<ReactElement[]>([])
    const [target, setTarget] = useState<Target>({
        headerTitle: '',
        headerImage: ''
    })

    useEffect(() => {
        const currentTarget = targets.filter(element => element.headerTitle === currentMaterial)[0]
        setTarget(currentTarget)
    }, [currentMaterial])

    useEffect(() => {
        const startIndex = recipes.findIndex(recip => recip.title === target.headerTitle)

        let duration = 2
        let initialDistance = -20

        const newItems = recipes
            .slice(startIndex)
            .map((recipe: Recipe, idx: number) => {

                duration -= .25
                initialDistance -= 100

                return <MotionItem
                    key={'item' + target.headerTitle + idx}
                    recipe={recipe.ingredients}
                    initial={{ y: initialDistance }}
                    animate={{ y: 0 }}
                    transition={{ type: 'tween', duration: duration }}
                />
            })
        setItems(newItems)
    }, [target])

    return (
        <>
            <div id="main">
                {target &&
                    <>
                        <Header image={target.headerImage} title={target.headerTitle} handleSubmit={handleSubmit} />
                        {items}
                        <Result quantity={globalQuant} title={target.headerTitle} />
                    </>
                }
                {!target && <h1>Loading...</h1>}

            </div>
        </>
    )
}