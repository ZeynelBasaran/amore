import { navbarInfo } from "../../../../public/kesfetdata";

const Personals = () => {
    return (
        <aside className="w-[988px] h-[792px] flex flex-wrap gap-4">
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
                            className="font-semibold text-lg
"
                        >
                            {item.city}
                            <span></span>
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