import { useSelector } from 'react-redux';
import style from './Felicities.module.css';


const Felicities = () => {
    const { text, loading } = useSelector(state => state.text)

    return (
        <p className={style.felicities}>
            {loading === 'loading'
                ? 'Загрузка...'
                : text === ''
                    ? 'Выберите праздник для поздравления'
                    : text}
        </p>
    )
}

export default Felicities;