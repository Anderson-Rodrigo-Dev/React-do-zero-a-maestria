const Events = ({children}) => {

    const handleMyEvent = (e) => {
        console.log(e.target)
    }

    const renderSomething = (x) => {
        if(x) {
            return <h2>Renderizando Isso</h2>
        }else {
            return <h2>Renderizando Aquilo</h2>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>{children}</button>
            </div>
            <div>
                <button onClick={() => console.log('cliquei')}>Clique Aqui Também!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;