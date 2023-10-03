import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>

            </nav>
        </header>
    )
}

export default Cabecalho;