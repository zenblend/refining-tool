import './Ingredient.css'

export default function Ingredient(props: any) {
    return (
        <div id="ingredient">
            <img className='ingredient-img' src={props.image} />
            <h2 className='ingredient-quantity'>x {props.quantity}</h2>
        </div>
    )
}