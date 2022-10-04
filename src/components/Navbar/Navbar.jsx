import styleNav from './Navbar.module.css'
import emojiIcon from '../../assets/emoji-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
let Navbar = () => {
  return(
    <nav className={styleNav.navbar}>
      <img style={{marginRight : 8}} className={styleNav.navIcon} src={emojiIcon} alt="Emoji icon" />
      <img style={{marginTop : 3}} className={styleNav.navIcon} src={searchIcon} alt="search Icon" />
      <span className={styleNav.navTitle}>Er</span>
    </nav>
  )
}
export default Navbar;