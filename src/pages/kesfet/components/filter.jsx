

import Person from "./person";

const Filter = () => {
    return (
        <aside className="w-[266px] h-[786px] bg-white flex flex-col justify-between p-4 rounded-2xl">
            <section>
                
                <Person />


                <div className="w-[210px] h-[41px] my-6">
                    <div className="font-normal text-xs flex justify-between">
                        <p>Mesafe</p>
                        <p>100 km</p>
                    </div>

                    <input type="range" value={30} className="w-full text-secondary bg-secondary" />
                </div>


                <div className="w-[210px] h-[41px]">
                    <div className="font-normal text-xs flex justify-between">
                        <p>Yaş</p>
                        <p>18-90</p>
                    </div>
                    <input type="range" value={18} min={18} max={90} className="w-full" />
                </div>

                <div className="my-6">
                    <p className="font-normal text-xs mb-4">Cinsiyet</p>
                    <div className="w-[216px] h-[38px] flex gap-x-2">
                        <button className="w-[64px] h-[38px] bg-secondary text-white rounded-lg font-normal text-xs">Kadın</button>
                        <button className="w-[64px] h-[38px] bg-bg-buton text-text-buton rounded-lg font-normal text-xs border border-color-2">Erkek</button>
                        <button className="w-[64px] h-[38px] bg-bg-buton text-text-buton rounded-lg font-normal text-xs border border-color-2">Tümü</button>
                    </div>
                </div>
                <div>
                    <p className="font-normal text-xs mb-4">Kullanıcıların Durumu</p>
                    <div className="w-[162px] h-[118px] flex flex-wrap">
                        <button className="w-[68px] h-[38px] bg-secondary text-white rounded-lg font-normal text-xs">Online</button>
                        <button className="w-[68px] h-[38px] bg-bg-buton text-text-buton rounded-lg font-normal text-xs ml-2 border border-color-2">Offline</button>
                        <button className="w-[140px] h-[38px] bg-bg-buton text-text-buton rounded-lg font-normal text-xs border border-color-2">Yakın zamanda aktif</button>
                    </div>
                </div>

            </section>
            <button className="w-[232px] h-[53px] bg-secondary text-white rounded-2xl text-sm font-semibold">Filtreyi Uygula</button>
        </aside>
    )
}

export default Filter;