import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHolidays, setHoliday } from '../../../store/holidaysSlice';
import { fetchImage } from '../../../store/imageSlice';
import { fetchText } from '../../../store/textSlice';
import style from './Choices.module.css';

const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);
    const { holiday, holidays, loading } = useSelector(state => state.holidays);
    const dispatch = useDispatch()

    const toggleChoices = () => {
        if (loading !== 'success') return
        setIsOpenChoices(!isOpenChoices)
    }

    useEffect(() => {
        dispatch(fetchHolidays())
    }, [dispatch])

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
                                dispatch(setHoliday(item[0]));
                                dispatch(fetchText(item[0]));
                                dispatch(fetchImage(item[0]));
                                toggleChoices();
                            }}
                        >
                            {item[1]}
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    )
}

export default Choices;