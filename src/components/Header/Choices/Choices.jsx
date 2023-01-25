import style from './Choices.module.css';

const holiday = {
    newyear: 'Новый год',
    birthdayWoman: 'День рождения  Ж',
    birthdayMan: 'День рождения  М',
    womanday: '8 марта',
    knowledgeday: 'День знаний',
};

const Choices = () => {
    return (
        <div className={style.wrapper}>
            <button className={style.button}>Выбрать праздник</button>
            <ul className={style.list}>
                {Object.entries(holiday).map(item => (
                    <li className={style.item} key={item[0]}>{item[1]}</li>
                ))}
            </ul>
        </div>
    )
}

export default Choices;