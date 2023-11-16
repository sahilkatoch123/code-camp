import React from 'react'

const Card = (props) => {
    let textBadge
    if(props.openSpots === 0){
        textBadge='SOLD OUT'
    }else if(props.loc === "online"){
        textBadge = "ONLINE"
    }
    else{
        textBadge=""
    }
    return (
        <>
            <div className='flex justify-center items-center py-7 max-w-sm'>
                <div className=" bg-white border relative border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/">
                        {textBadge && <span className='border-solid border-2 border-slat-500 p-2 w-15 mb-80 font-semibold bg-slate-200'>{textBadge}</span>}
                        
                        <img className="rounded-t-lg w-full h-f" src={props.img} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : {props.name}</h5>
                        </a>
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Email : {props.email}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Contact : {props.contact}</p>
                        <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card
