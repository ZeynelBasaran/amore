
import { navbarInfo } from "../../../public/navbarInfo";

const Navbar = () => {
    return (
        <nav className="bg-white p-2">
            <ul className="flex flex-col items-center">
                {
                    navbarInfo.map((item, i) => (<li key={`${i}${item.name}i`} dangerouslySetInnerHTML={{ __html: item.image }} />

                    ))
                }
                <li className=" border-[#EBE9E1] border-t-[1px] ">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.32532 24.2517C4.32532 21.7913 6.26686 18.7287 11.86 18.7287C17.4532 18.7287 19.3948 21.7694 19.3948 24.2308" stroke="#4B164C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.6737 10.3988C16.6737 13.0566 14.5193 15.212 11.8604 15.212C9.20256 15.212 7.04822 13.0566 7.04822 10.3988C7.04822 7.74095 9.20256 5.58551 11.8604 5.58551C14.5193 5.58551 16.6737 7.74095 16.6737 10.3988Z" stroke="#4B164C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.6177 14.9716H19.166M22.4182 12.7815L24.6165 14.9709L22.4182 17.1603" stroke="#4B164C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;