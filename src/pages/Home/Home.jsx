import { useState, useEffect } from "react";
import "./home.css";
import Projects from "../../assets/projets.json"
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(Projects)
  } , [])

  console.log(cards)

  return (
    <main>
      <article className="introduction">
        <h2>Mon parcourt</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloribus itaque quia, ipsum, ratione, rem corporis quis tempora ullam harum deleniti accusamus tempore aliquid a aspernatur! Repellat maiores quos aut?</p>
      </article>
      
      <section>
        <ul className='allcards'>
        <h3>Mes projets réaliser</h3>
          {Projects.map((card) => (
            <li key={card.id}>
              <Link to={`/fullCard/${card.id}`}>
              <Card src={card.picture} alt={card.title} content={card.name} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}


export default Home;
