const Challenge = () => {
    
    const a = 5
    const b = 7
    
    return (
        <div>
            <h1>O primeiro valor é {a} e o segundo valor é {b}</h1>
            <button onClick={()=> console.log(a+b)}>Some os valores!</button>
        </div>
    )
}

export default Challenge