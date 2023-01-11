

function Header({logo}) {
    return (
        <header className="header">
            <img src={logo} alt="Место" className="header__logo" />
        </header>
    )
}

export default Header