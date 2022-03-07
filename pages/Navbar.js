import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Third Link</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Fourth Link</a>
                    </nav>
                    
                </div>
            </header>

        </div>
    )
}

export default Navbar;