import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabeLink from "components/CabeLink/CabeLink";


function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>

            <nav>
                <CabeLink url="./"> Home </CabeLink>

                <CabeLink url="./Favoritos">    Favoritos   </CabeLink>
            </nav>
        </header>
    )
}

export default Cabecalho;