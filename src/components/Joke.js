import React, { useState } from 'react'

const Joke = () => {
    const Arr = [
        {
            Setup: "sahiolckmnsadfl;sadflsm dsfjwf fihdf;kal foiHFILK AKWURYH etoiuhj aeoriugfjc  KHKM kihokonfe ",
            Punchline: "jsdifuys airh ahse anef wei jhwei hr jy R "
        },
        {
            Setup: "sahiolckmnsadfl;sadflsm dsfjwf fihdf;kal foiHFILK AKWURYH etoiuhj aeoriugfjc  KHKM kihokonfe ",
            Punchline: "jsdifuys airh ahse anef wei jhwei hr jy R "
        },
        {
            Setup: "sahiolckmnsadfl;sadflsm dsfjwf fihdf;kal foiHFILK AKWURYH etoiuhj aeoriugfjc  KHKM kihokonfe ",
            Punchline: "jsdifuys airh ahse anef wei jhwei hr jy R "
        },
        {
            Setup: "sahiolckmnsadfl;sadflsm dsfjwf fihdf;kal foiHFILK AKWURYH etoiuhj aeoriugfjc  KHKM kihokonfe ",
            Punchline: "jsdifuys airh ahse anef wei jhwei hr jy R "
        },
        {
            Setup: "sahiolckmnsadfl;sadflsm dsfjwf fihdf;kal foiHFILK AKWURYH etoiuhj aeoriugfjc  KHKM kihokonfe ",
            Punchline: "jsdifuys airh ahse anef wei jhwei hr jy R "
        }
    ]


    const [isShown, setIsShown] = useState(true)
    const toggleShown = () => {
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {Arr.map((value, index) => {
                return <div key={index}>
                 {value.Setup &&<p>Setup: {value.Setup} </p> }
                 { isShown && <p>Punchline: {value.Punchline}</p>}
                   <button type='button' className='bg-blue-500 border-4-black' onClick={toggleShown} >{isShown ?"show":"hide"} PunchLine</button>
                    <hr />
                    </div>
            })}
        </div>
    )
}

export default Joke
