export const SecondsCounter = (props) => {
    const { seedCounter } = props

    return (
        <div className="counter">
            <div><i className="fa-solid fa-clock"></i></div>
             <div>{Math.floor((seedCounter / 100000) % 10)}</div>
            <div>{Math.floor((seedCounter / 10000) % 10)}</div>
            <div>{Math.floor((seedCounter / 1000) % 10)}</div>
            <div>{Math.floor((seedCounter / 100) % 10)}</div>
            <div>{Math.floor((seedCounter / 10) % 10)}</div>
            <div>{(seedCounter / 1) % 10}</div>
        </div>
    )
}
