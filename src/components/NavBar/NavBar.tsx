import IconoCarro from "./CartWidget";
import Logo from "./logo";
import Nav from "./Nav";
import { INav } from './Nav';


const NavBar = () => {
    const navs: INav[] = [
        {
            text: "Casino",
            handleClick: () => window.alert("Casino clicked!")
        },
        {
            text: "Nuevo",
            handleClick: () => window.alert("Nuevo clicked!")
        },
        {
            text: "Juegos Exclusivos",
            handleClick: () => window.alert("Juegos Exclusivos clicked!")
        },
        {
            text: "En vivo",
            handleClick: () => window.alert("En vivo clicked!")
        }
    ];

    return (

        <header className="bg-black text-white">
            <nav className="flex items-center justify-between px-4 py-3">
                <Logo/>
                <ul className="flex space-x-6">
                    {navs.map((nav, index) => (
                        <Nav key={index} text={nav.text} handleClick={nav.handleClick} />
                    ))}
                </ul>
                <IconoCarro/>
            </nav>
        </header>
    )

}

export default NavBar;