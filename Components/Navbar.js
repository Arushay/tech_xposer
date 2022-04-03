import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center m-2">

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/"><a className="mr-5 hover:text-gray-900 cursor-pointer font-bold">Home</a></Link>
                    <Link href="/about"><a className="mr-5 hover:text-gray-900 cursor-pointer font-bold">About</a></Link>
                    <Link href="/blog"><a className="mr-5 hover:text-gray-900 cursor-pointer font-bold">Blog</a></Link>
                    <Link href="/contact"><a className="mr-5 hover:text-gray-900 cursor-pointer font-bold">Contact</a></Link>
                    </nav>
                    
                </div>
            </header>

        </div>
    )
}

export default Navbar;