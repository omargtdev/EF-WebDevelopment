import { useState } from "react";
import { Link } from "react-router-dom";

const MainNav = () => {

    const [open, setOpen] = useState(false);

    const links = [
        { name: "Demos", path: "/" }, 
        { name: "Pages", path: "#" }, 
        { name: "Portfolio", path: "#" }, 
        { name: "Blog", path: "#" }, 
        { name: "Shop", path: "#" }, 
        { name: "Elements", path: "#" }, 
        { name: "Extra", path: "#" }
    ]

    return (
        <div className='shadow-md w-full sticky top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Arial]
                                text-gray-800'>
                    <span className='text-3xl text-black-600 mr-1 pt-2'>
                        <Link to={"/"}>VIVA</Link>
                    </span>
                </div>

                <div onClick={
                        () => setOpen(!open)
                    }
                    className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {/* @ts-ignore */}
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={
                    `md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? 'top-20 ' : 'top-[-490px]'
                    }`
                }>
                    {
                    links.map((link) => (
                        <li key={
                                link.name
                            }
                            className='md:ml-8 text-base font-bold md:my-0 my-7'>
                            <a href={
                                    link.path
                                }
                                className='text-gray-400 hover:text-gray-800 duration-500'>
                                {
                                link.name
                            }</a>
                        </li>
                    ))
                }
                    <Link className='bg-indigo-600 text-white font-[Arial] py-4 px-8 rounded-xl md:ml-8 hover:bg-indigo-400 
                        duration-500 font-bold' to={"/cart"}>
                            Carrito de compras
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default MainNav;
