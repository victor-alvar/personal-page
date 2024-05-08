import Link from 'next/link'
import styles from './styles.module.scss'
import logo from '/public/images/logo.png'
import Image from 'next/image'

const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav
        className={`${styles.primary__nav}`}
        role="navigation"
        aria-label="Primary Navigation"
      >
        <Link
          href="/"
          data-clog-click
          aria-label="Victor Alvarenga"
          data-qa="logo"
          className={styles.logo__link}
        >
          <Image
            src={logo}
            alt="Victor Alvarenga logo"
            width={200}
            quality={100}
            className={styles.logo}
          />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
