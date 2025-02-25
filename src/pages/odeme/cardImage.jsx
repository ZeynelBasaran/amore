import Card from "./card";


const cardImage = () => {
    return (
        <section className="w-[584px] flex items-end">
            <div className="h-[564px] w-full gradient-box rounded-2xl relative flex items-end p-6">

                <Card/>
                <div className="flex flex-col  text-white">
                    <div>
                        <p className="text-center text-sm font-semibold mb-12">Alışveriş Bilgileri</p>
                    </div>
                    <div className="w-100 text-sm font-semibold mb-15">
                        <p className="flex justify-between custom-bottom-odeme-chat pb-2">3 Aylık Abonelik <span className="">59$ Hafta</span></p>
                        <p className="flex justify-between custom-bottom-odeme-chat py-2">3 Ay için toplam <span>708$</span></p>
                        <p className="flex justify-between custom-bottom-odeme-chat py-2">%20 İndirim <span>141$</span></p>
                    </div>

                    <div className="custom-bottom-odeme-dashed relative">
                        <div className="w-6 h-6 rounded-full bg-bg-main absolute -left-10 -top-3"></div>
                        <div className="w-6 h-6 rounded-full bg-bg-main absolute -right-11 -top-3"></div>
                    </div>
                    <div className="">
                        <p className="flex justify-between text-lg font-semibold">
                            Sonuç tutar
                            <span>567$</span>
                        </p>

                    </div>

                </div>

            </div>


        </section>
    )
}

export default cardImage;