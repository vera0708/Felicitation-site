import style from './Card.module.css';
import ImageCard from './ImageCard/ImageCard';
import Felicities from './Felicities/Felicities';
import CardBG from '../../img/card-bg.jpg'
const Card = () => (
    <div className={style.card}>
        <div className={style.wrapper}>
            <div className={style.image}>
                <ImageCard img={CardBG} />
                <Felicities />
            </div>
        </div>
    </div>
)

export default Card;