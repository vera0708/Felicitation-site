import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchHolidays } from '../../../store/holidaysSlice';
import { fetchImage } from '../../../store/imageSlice';
import { fetchText } from '../../../store/textSlice';
import style from './Choices.module.css';

const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);
    const { holidays, loading } = useSelector(state => state.holidays);
    const dispatch = useDispatch();
    const { holiday } = useParams();


    const toggleChoices = () => {
        if (loading !== 'success') return
        setIsOpenChoices(!isOpenChoices)
    }

    useEffect(() => {
        dispatch(fetchHolidays())
        if (holiday) {
            dispatch(fetchText(holiday));
            dispatch(fetchImage(holiday));
        }
    }, [dispatch, holiday])

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoices}>
                {loading !== 'success'
                    ? 'Загрузка...'
                    : holidays[holiday] || 'Выбрать праздник'}
            </button>

            {isOpenChoices && (
                <ul className={style.list}>
                    {Object.entries(holidays).map(item => (
                        <li
                            className={style.item}
                            key={item[0]}
                            onClick={() => {
                                toggleChoices();
                            }}
                        >
                            <Link
                                to={`card/${item[0]}`}
                            >{item[1]}
                            </Link>
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    )
}

export default Choices;