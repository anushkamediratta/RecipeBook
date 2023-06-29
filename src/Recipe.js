import Styles from './Recipe.module.css'

const Recipe = (props)=>{
    return <div className={Styles.recipe}>
        <h1>{props.recipelist.recipe.label}</h1>
        <img src={props.recipelist.recipe.image} className={Styles.image}/>
        <h3>{props.recipelist.recipe.calories} k/cal </h3>

    </div>

}

export default Recipe