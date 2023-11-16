import React, { useState } from 'react'
import Datas from './Datas'

const Form = () => {


    // const [memeImage, setMemeImage] = useState('https://th.bing.com/th/id/OIP.nJ6Tr1jvQXEW5XsSspJJBAHaHa?pid=ImgDet&rs=1')

    const [meme, setMeme] = useState(
        {
            topText: '',
            bottomText: '',
            randomImage: 'https://th.bing.com/th/id/OIP.nJ6Tr1jvQXEW5XsSspJJBAHaHa?pid=ImgDet&rs=1'
        }
    )
    const [allMemeImages, setAllMemeImages] = useState(Datas)

    const getImage = () => {
        const memesArr = allMemeImages.data.memes
        const randomNo = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomNo].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage:url
        }))
    }
    return (
        <div>

            <form>

                <div className="flex mt-6 justify-between item-between mx-20">
                    <input type="text" id="textT" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mr-2 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="TOP TEXT" required />

                    <input type="text" id="textB" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BOTTOM TEXT" required />
                </div>
                <div className='flex justify-center items-center'>
                    <button type="submit" onClick={getImage} className="px-72 py-4 text-base font-medium mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get a New Memer Image</button>
                </div>
            </form>
            <div className='flex justify-center items-center mt-3 overflow-hidden'>
                <img className='w-5/12 h-2/12 overflow-hidden' src={meme.randomImage} alt="" />
            </div>
        </div>
    )
}

export default Form
