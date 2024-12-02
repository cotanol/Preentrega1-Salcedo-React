import { BsCart4 } from "react-icons/bs";

const IconoCarro = () => {

    return (
        <div className="relative flex items-center">
            <a href=""><BsCart4 className="text-white text-2xl"/></a>
            <p className="absolute top-[-5px] right-[-5px] bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</p>
        </div>
        
    )

}

export default IconoCarro;