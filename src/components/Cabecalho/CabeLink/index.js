import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.modules.css'; 

// Neste código, estabelecemos que cada um fosse para uma URL diferente, e estamos enviando como atributo o 
// valor url.
function CabecalhoLink({ url, children }) {
    return (
        <Link to={url} className={styles.Link}> 
            {children}
        </Link>
    )
}

export default CabecalhoLink; 