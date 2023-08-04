import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Navbar.module.css';
import { CATEGORIES } from '../../constants/categories';
import newsIcon from '../../assets/news-icon.svg';

const Navbar = () => {
    const [selected, setSelected] = useState('')
    return (
        <nav className={styles.nav}>
            <div className={styles.navIconWrapper}>
                <img className={styles.navIcon} src={newsIcon} alt="Icon" />
                <h1 className={styles.navTitle}>NEWS</h1>
            </div>

            <div className={styles.categories}>
                {CATEGORIES.map((category, index) => (
                    <Link
                        key={index}
                        onClick={() => setSelected(category.name)}
                        to={`/${category.slug}`}
                        className={classNames(styles.category, {
                            [styles.selected]: selected === category.name
                        })}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>

        </nav>
    )
}

export default Navbar;