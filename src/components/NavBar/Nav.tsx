export interface INav {
    text: string;
    handleClick: () => void;
}

function Nav({text="nav", handleClick}:INav) {

    return (
        <li><a href="" onClick={handleClick} className="text-lg hover:text-gray-400 transition">{text}</a></li>
    );

}

export default Nav;