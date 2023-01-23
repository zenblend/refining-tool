import { forwardRef, Ref } from 'react'
import './Result.css'

const Result = forwardRef((props: any, ref: Ref<HTMLDivElement>) => {

    const getResults = (total: number, title: string) => {
        if (title === 'Orichalcum') {
            return (
                <div className='result-header'>
                    <h2 id="orichalcum">Orichalcum Ore: {total * 8}</h2>
                    <h2 id="starmetal">Starmetal Ore: {total * 12}</h2>
                    <h2 id="iron">Iron Ore: {total * 24}</h2>
                </div>
            )
        } else if (title === 'Starmetal') {
            return (
                <div className='result-header'>
                    <h2 id="starmetal">Starmetal Ore: {total * 6}</h2>
                    <h2 id="iron">Iron Ore: {total * 24}</h2>
                </div>
            )
        } else if (title === 'Steel') {
            return (
                <div className='result-header'>
                    <h2 id="iron">Iron Ore: {total * 12}</h2>
                </div>
            )
        } else {
            return (
                <div className='result-header'>
                    <h2 id="iron">Iron Ore: {total * 4}</h2>
                </div>
            )
        }
    }

    return (
        <div ref={ref} id="result">
            {getResults(props.quantity, props.title)}
        </div>
    )
})

export default Result