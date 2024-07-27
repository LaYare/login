'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaShoppingBag, FaUser, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import styles from './Header.module.scss';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  return (
    <header className={styles.Header}>
      <div className={styles.Header__Container}>
        <div className={styles.Header__Logo}>
          <Image
            src="/logo.png"
            alt="Logo"
            layout="intrinsic"
            width={31}
            height={38}
          />
        </div>
        <nav className={styles.Header__Nav}>
          {!isAuthenticated && (
            <Link href="/">
              <span className={pathname === '/' ? styles.active : ''}>
                <FaUser className={styles.icon} />
                <b>Iniciar sesión</b>
              </span>
            </Link>
          )}
          <Link href="/dashboard">
            <span className={pathname === '/dashboard' ? styles.active : ''}>
              <FaHeart className={styles.icon} />
              <b>Favoritos</b>
            </span>
          </Link>
          <Link href="/dashboard">
            <span className={pathname === '/car' ? styles.active : ''}>
              <FaShoppingBag className={styles.icon} />
              <b>Carrito</b>
            </span>
          </Link>
          {isAuthenticated && (
            <span onClick={logout} className={styles.logoutButton}>
              <FaSignOutAlt className={styles.icon} />
              <b>Logout</b>
            </span>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
