import casinoRaptor from "../assets/casinoRaptor.png"
const Logo = () => {


    return (
        <a href="" className="flex items-center">
            <img className="max-w-[80px] md:max-w-[120px] h-auto transition-transform duration-300 hover:scale-105"  src={casinoRaptor} alt="Logo"></img>
        </a>
    );

}

export default Logo;