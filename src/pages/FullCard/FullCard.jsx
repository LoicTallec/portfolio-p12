import { useParams } from 'react-router-dom';
import './fullcard.css';
import projects from "../../assets/projets.js";
import Slideshow from '../../components/Slideshow/Slideshow';

function FullCard() {
  const { id } = useParams();
  const card = projects.find((card) => card.id === id);

  console.log(id);
  if (!card) {
    return <div>Aucune carte trouvée pour cet ID.</div>;
  }

  return (
    <main>
      <Slideshow images={card.picture} />

    </main>
  );
}

export default FullCard;
