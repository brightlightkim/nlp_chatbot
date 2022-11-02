import './navbar.css'

export default function Navbar(){
    const logo =  require("../../static/logo.png")

    return (

        <div className="header">
            <img className='logo' src={logo} alt="Logo" />
            <div className='menu'>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>                    
            </div>
        </div>

    )
}