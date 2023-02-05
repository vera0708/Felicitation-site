import style from './Card.module.css';
import ImageCard from './ImageCard/ImageCard';
import Felicities from './Felicities/Felicities';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTextid } from '../../store/textSlice.js';
import { fetchImageid } from '../../store/imageSlice.js';

const Card = () => {
    const { idText, idImg } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (idText && idImg) {
            dispatch(fetchTextid(idText));
            dispatch(fetchImageid(idImg));
        }
    })

    return (
        <div className={style.card}>
            <div className={style.wrapper}>
                <div className={style.image}>
                    <ImageCard />
                    <Felicities />
                </div>
            </div>
        </div>
    )
}

export default Card;