import "../HeaderMenor/HeaderMenor.css"
import logo from '../../assets/img/logo.svg'


function HeaderMenor() {

  return (
    <>
      <header>
        <nav className="nav-menor">
          <a href="#"><img src={logo} alt="logo" /></a>
        </nav>
      </header>
    </>
  );
}

export default HeaderMenor