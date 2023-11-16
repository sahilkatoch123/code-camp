import React from 'react'

const Header = () => {
    return (
        <div>

            <nav className="bg-white border-gray-200 dark:bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="flex items-center">
                        <img src="https://indianmemetemplates.com/wp-content/uploads/troll-face.jpg" className="h-12 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Memer Ceater</span>
                    </div>
                    <div className="flex items-center">
                        <p className="mr-6 text-xl  text-gray-500 dark:text-white">react course </p>
                        <p className="text-xl  text-blue-600 dark:text-white">project-3</p>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
