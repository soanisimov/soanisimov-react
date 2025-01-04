import {useState} from "react";

import {RiCloseFill, RiMenu3Fill,RiTranslate2} from "@remixicon/react";

export const LINKS = [
    { href: "#about", label: "Про мене" },
    { href: "#experience", label: "Навички" },
    { href: "#work", label: "Проекти" },
    { href: "#contact", label: "Контакти" },
    // { href: "#", label: <RiTranslate2></RiTranslate2> },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleLinkClick = () => {
            setMenuOpen(false)
    }

    return (

        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center my-2 max-w-[77rem] mx-auto p-4 md:rounded-xl 0 bg-transparent  backdrop-blur-[50px] opacity-100 bg-[radial-gradient(rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:3px_3px]">
                <div className="text-white font-semibold text-lg ">
                    <a href="#">Сергій Анісімов
                    </a>
            </div>
                <div className="hidden md:flex space-x-8">
                    {LINKS.map((link, index) => (
                        <a href={link.href} key={index}
                           className="text-white hover:text-stone-400 transition duration-300">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
                        {menuOpen ? (
                            <RiCloseFill className="w-6 h-6"/>
                        ) : (
                            <RiMenu3Fill className="w-6 h-6"/>
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div
                    className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
                    {LINKS.map((link, index) => (
                        <a href={link.href} key={index}
                           className="text-white hover:text-stone-400 transition duration-300"
                           onClick={handleLinkClick}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>

    )
}
export default Navbar