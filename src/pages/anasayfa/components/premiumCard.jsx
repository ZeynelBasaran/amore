import kalp from "../../../../public/AnasayfaLogo/Heart.png";
import ok from "../../../../public/AnasayfaLogo/Group 166123.png";
import noktalar from "../../../../public/AnasayfaLogo/Frame 2608934.png";

const PremiumCard = () => {
    return (
        <section className="w-[280px] h-[395px] bg-gradient-to-r from-[#462D7B] to-[#412A78] text-white rounded-2xl p-4 flex flex-col items-center">
            <p
                className="text-lg font-semibold mt-2
"
            >
                Hemen Premium Ol
            </p>
            <img src={kalp} alt="" className="my-5" />
            <p
                className="text-sm font-semibold
"
            >
                Seni Beğenenleri Gör
            </p>
            <p
                className="text-sm font-light text-center mt-3
"
            >
                Premium&apos;a geçerek kimlerle eşleştiğini gör. Sana ilgi duyanları
                hemen keşfet
            </p>

            <img src={ok} alt="" />
            <img src={noktalar} className="mt-3 mb-2" />
            <button className="bg-secondary w-[250px] h-[44px] rounded-2xl text-sm font-semibold">
                Premium Ol
            </button>
        </section>
    )
}

export default PremiumCard;