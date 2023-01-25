import style from './Card.module.css';
import ImageCard from './ImageCard/ImageCard';
import Felicities from './Felicities/Felicities';

const Card = () => (
    <div className={style.card}>
        <div className={style.wrapper}>
            <div className={style.image}>
                <ImageCard />
                <Felicities />
            </div>
        </div>
    </div>
)

export default Card;