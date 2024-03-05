import { NavLink } from "react-router-dom"
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h1>Meus gatos</h1>
      <ul className={styles.ul}>
        <li><NavLink className={({isActive}) => (isActive ? styles.active: styles.navItem)} to='/'>Ver miaus</NavLink></li>
        <li><NavLink className={({isActive}) => (isActive ? styles.active: styles.navItem)} to='/create'>Criar Gatos</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
