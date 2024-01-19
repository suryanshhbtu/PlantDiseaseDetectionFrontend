import { useState } from 'react';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>

            {/* Logo and Name */}
            <div className={styles.logoContainer}>
                <img src={'/images/PlantcareLogo-circular.png'} alt="NyayMitra Logo" className={styles.logo} />
                <span className={styles.logoName}>PLANTCARE  </span>
            </div>
            {menuOpen && <br />}
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></div>
                <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></div>
                <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></div>
            </div>


            <div className={`${styles.left} ${menuOpen ? styles.show : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="/">Home</a></li>
                    <li className={styles.navItem}><a href="/about">About</a></li>
                    <li className={styles.navItem}><a href="/contact">Contact</a></li>
                    <li className={styles.navItem}><a href="/signin">Sign In</a></li>
                    <li className={styles.navItem}><a href="/register">Register</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNavigation;