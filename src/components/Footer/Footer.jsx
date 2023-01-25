import Container from '../Container/Container';
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as PinterestIcon } from '../../img/pinterest.svg';
import { ReactComponent as StumbtIcon } from '../../img/stumbleupon.svg';

const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href='https://t.me/Mrshamalloww' target="_blank">Anastasia Ilina</a></p>
                    <p>Сoder: <a href='https://t.me/Vera_07_08' target="_blank">Vera Deeva</a></p>
                    <p>© HBCard, 2022</p>
                </div>
                <ul className={style.social}>
                    <li className={style.item}>
                        <a href='https://vk.com/methed' className={style.link}>
                            <VKIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='https://t.me/methed_chat_frontend' className={style.link}>
                            <TGIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='https://pinterest.com' className={style.link}>
                            <PinterestIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='https://stumbleupon.com' className={style.link}>
                            <StumbtIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
)

export default Footer;