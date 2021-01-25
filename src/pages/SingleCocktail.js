import React from "react"
import ReactPlayer from "react-player/youtube"
import Loading from "../components/Loading"
import { useParams, Link } from "react-router-dom"
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data)
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strVideo: video,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            video,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>
  }
  const {
    name,
    image,
    category,
    info,
    glass,
    video,
    instructions,
    ingredients,
  } = cocktail
  return (
    <section className="section cocktail-section">
      {/* back home button was here */}
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img className="single-drink" src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item},</span> : null
            })}
          </p>
        </div>
      </div>
      <div className="drink-video-container">
        <p>
          <span className="drink-data">video :</span>
        </p>
        <ReactPlayer className="drink-video" url={video} />
      </div>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </section>
  )
}

export default SingleCocktail
