import Logo from "../imgs/Logo.jpg"


export default function Navbar () {
  return <nav className="nav">
    <a href="/" className="siteTitle" style={{ backgroundImage:`url(${Logo})`,backgroundRepeat:"no-repeat"}}></a>
    <ul>
      <li>
        <a className="active" href="SignIn">SignIn</a>
      </li>
      <li>
        <a className="active" href="/SignUp">SignUp</a>
      </li>
    </ul>
  </nav>
}