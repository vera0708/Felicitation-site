import { useContext } from 'react';
import { textContext } from '../../../context/textContextProvider';
import style from './Felicities.module.css';


const Felicities = () => {
    const { text } = useContext(textContext)

    return (
        <p className={style.felicities}>
            {text ?? 'Выберите праздник для поздравления'}
        </p>
    )
}

export default Felicities;