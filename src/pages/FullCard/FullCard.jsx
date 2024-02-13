import { useParams } from 'react-router-dom';
import './fullcard.css';
import projects from '../../assets/projets.json';

function FullCard() {
  const { id } = useParams();
  const card = projects.find((card) => card.id === id);


  return (
    <main>
      


    </main>
  );
}

export default FullCard;
