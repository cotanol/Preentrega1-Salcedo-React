
interface IGreeting {
    saludo: string;
}


const Greeting =  ({saludo = "Bievenido"}: IGreeting) => {

    return  (
        <div>
            <h1> {saludo} </h1>
        </div>

    )

}

export default Greeting;