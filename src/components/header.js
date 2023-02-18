import logoImg from "../images/TrollFace.png"

function Header(){
    return(
        <header className="headerContainer">
            <div className="logoContainer">
                <img src={logoImg} alt=""></img>
                <h4>Meme Generator</h4>
            </div>
            <nav className="menuContainer">
                <p>React Course - Project 3</p>
            </nav>
        </header>
    )
}

export default Header;