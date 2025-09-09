import { useEffect, useState } from "react"

export const SecondsCounter = () => {

    // Hook useState 
    const [counter, setcounter] = useState(0)
    const [stopCounter, setStopCounter] = useState(false)


    useEffect(() => {
        if (stopCounter) return
        const interval = setInterval(() => {
            setcounter((prev) => prev + 1)
        }, 1000)

        return () => clearInterval(interval)

    }, [counter, stopCounter])


    return (
        <>
            <div className="counter">
                <div><i className="fa-solid fa-clock"></i></div>
                <div>{Math.floor((counter / 10000) % 10)}</div>
                <div>{Math.floor((counter / 1000) % 10)}</div>
                <div>{Math.floor((counter / 100) % 10)}</div>
                <div>{Math.floor((counter / 10) % 10)}</div>
                <div>{(counter / 1) % 10}</div>
            </div>

            <div className="container mt-3 text-center">
                <button
                    className={`btn ${stopCounter ? "btn-success" : "btn-danger"}`}
                    onClick={() => setStopCounter(!stopCounter)}
                >{stopCounter ? "Start" : "Stop"}</button>
            </div >
        </>
    )
}