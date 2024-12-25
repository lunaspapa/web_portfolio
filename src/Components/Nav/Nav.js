import "./Nav.css"

function Nav() {
  return (
    <nav id="wp_nav">
      <ul id="wp_nav_list">
        <li>
          <a id="who_i_am" className="wp_nav_item">Who I Am</a>
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

export default Nav
