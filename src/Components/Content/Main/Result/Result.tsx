import './Result.css'

export default function Result(props: any) {

    const getResults = (total: number, title: string) => {
        if (title === 'Orichalcum') {
            return (
                <>
                    <h2 id="orichalcum">Orichalcum Ore: {total * 8}</h2>
                    <h2 id="starmetal">Starmetal Ore: {total * 12}</h2>
                    <h2 id="iron">Iron Ore: {total * 24}</h2>
                </>
            )
        } else if (title === 'Starmetal') {
            return (
                <>
                    <h2 id="starmetal">Starmetal Ore: {total * 6}</h2>
                    <h2 id="iron">Iron Ore: {total * 24}</h2>
                </>
            )
        } else if (title === 'Steel') {
            return (
                <>
                    <h2 id="iron">Iron Ore: {total * 12}</h2>
                </>
            )
        } else {
            return (
                <>
                    <h2 id="iron">Iron Ore: {total * 4}</h2>
                </>
            )
        }
    }

    return (
        <div id="result">
            {getResults(props.quantity, props.title)}
        </div>
    )
}