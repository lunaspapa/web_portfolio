import "./Nav.css"
import { Link } from "react-router-dom"
import navLogo from "../../images/l_logo_nav.png"

function Nav() {
  return (
    <nav id="wp_nav">
      <img id="l_logo_nav" src={navLogo} alt="logo" />
      <ul id="wp_nav_list">
        <li>
          <Link to="/who" id="who_i_am" className="wp_nav_item">Who I Am</Link>
        </li>
        <li>
          <a id="my_skills" className="wp_nav_item">My Skills</a>
        </li>
        <li>
          <a id="why_me" className="wp_nav_item">Why Me?</a>
        </li>
        <li>
          <a id="my_stuff" className="wp_nav_item">My Stuff</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
