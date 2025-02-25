import { navbarInfo } from "../../../../public/kesfetdata";

const Personals = () => {
    return (
        <aside className="w-[988px] h-[792px] flex flex-wrap gap-3">
            {navbarInfo.map((item) => (
                <article
                    key={`${item.name}i`}
                    className="w-[234px] h-[387px] relative"

                >
                    <figure className="rounded-2xl w-[234px] h-[387px]">
                        <img src={item.img} alt={item.name} className="rounded-2xl w-full h-full object-cover object-center" />
                    </figure>
                    <div className="bottom-3 left-7 text-white absolute">
                        <div className="flex">
                            <span className="inline-block w-2 h-2 rounded-full bg-[rgba(28,231,97,1)] absolute -left-3 top-2"></span>
                            <h5 className="text-2xl font-bold object-contain object-left-top">
                                {item.name}, {item.age}
                            </h5>
                        </div>

                        <p
                            className="font-semibold text-lg flex 
"
                        >
                            {item.city}
                            <span className="mx-1">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.2194 12.3945C9.95752 12.3945 8.93067 11.3127 8.93067 9.98239C8.93067 8.65204 9.95752 7.56942 11.2194 7.56942C12.4812 7.56942 13.5072 8.65204 13.5072 9.98239C13.5072 11.3127 12.4812 12.3945 11.2194 12.3945ZM15.9138 4.5984C14.6336 3.20633 12.9662 2.43933 11.2194 2.43933C9.47085 2.43933 7.80346 3.20633 6.52238 4.59928C5.22208 6.01338 4.50795 7.91325 4.56398 9.81224C4.72202 15.1936 10.7344 19.3839 10.9911 19.5593L11.216 19.7136L11.4435 19.562C11.6993 19.3909 17.7159 15.302 17.8748 9.81136C17.93 7.91325 17.215 6.0125 15.9138 4.5984Z" fill="white" />
                                </svg>


                            </span>
                            {item.distance} km
                        </p>
                        <button
                            className="text-secondary bg-white font-semibold text-sm flex justify-center items-center w-[178px] h-[45px] rounded-xl mt-4
"
                        >
                            Mesaj Gönder
                        </button>
                    </div>
                </article>
            ))}
        </aside>
    )
}

export default Personals