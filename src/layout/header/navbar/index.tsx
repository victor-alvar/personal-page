import styles from './styles.module.scss'
// import logo from '/public/images/logo-horizontal.png'

const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav
        className={`${styles.primary__nav}`}
        role="navigation"
        aria-label="Primary Navigation"
      >
        {/* <Link
          href="/"
          data-clog-click
          aria-label="Atalaso"
          data-qa="logo"
          onClick={() => setOpen(false)}
          className={styles.logo__link}
        >
           <Image
            src={logo}
            alt="Atalaso logo"
            width={200}
            quality={100}
            className="desktop"
          /> 
        </Link> */}
      </nav>
    </header>
  )
}

export default Navbar
