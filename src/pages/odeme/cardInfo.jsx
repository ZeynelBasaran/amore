

const CardInfo = () => {
    return (
        <section className="w-[782px] h-[792px] bg-white rounded-3xl px-25 py-30">
            <form action="" className="text-sm">
                <div className="mb-8">
                    <label htmlFor="cardNumber" className="font-semibold">Kartın Üzerindeki İsim</label>
                    <p className="font-light text-text-buton mb-2">Kart üzerindeki ismi yazınız</p>
                    <input type="text" id="cardNumber" className="w-full h-[69px] rounded-xl border border-[#D9D9D9] px-5 bg-border-2" placeholder="Kart Sahibi" />
                </div>
                <div className="mb-8 relative">
                    <label htmlFor="cardNumber" className="font-semibold">Kartın Numarası</label>
                    <p className="font-light text-text-buton mb-2">Kart üzerindeki 16 haneli kart numarasını girin</p>
                    <input type="text" id="cardNumber" className="w-full h-[69px] rounded-xl border border-[#D9D9D9] px-5 bg-border-2" placeholder="Kart Numarası" />
                    <svg className="absolute right-4 bottom-5" width="44" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9536 3.5957H28.6827V24.386H15.9536V3.5957Z" fill="#FF5F00" />
                        <path d="M17.2647 13.9921C17.2631 11.9901 17.7169 10.0141 18.5918 8.21344C19.4667 6.41281 20.7397 4.83477 22.3144 3.59874C20.364 2.0659 18.0217 1.11272 15.5551 0.84813C13.0886 0.583543 10.5974 1.01823 8.36618 2.10251C6.135 3.18678 4.25388 4.87691 2.93781 6.97971C1.62174 9.08252 0.923828 11.5132 0.923828 13.9939C0.923828 16.4745 1.62174 18.9052 2.93781 21.008C4.25388 23.1108 6.135 24.8009 8.36618 25.8852C10.5974 26.9695 13.0886 27.4042 15.5551 27.1396C18.0217 26.875 20.364 25.9218 22.3144 24.389C20.7392 23.1526 19.4659 21.5739 18.591 19.7726C17.7161 17.9713 17.2626 15.9945 17.2647 13.992V13.9921Z" fill="#EB001B" />
                        <path d="M43.7071 13.9922C43.707 16.473 43.0089 18.9039 41.6926 21.0067C40.3763 23.1096 38.4949 24.7997 36.2634 25.8838C34.032 26.9679 31.5405 27.4023 29.0738 27.1374C26.6071 26.8724 24.2647 25.9187 22.3145 24.3854C23.8886 23.1483 25.1612 21.5698 26.0363 19.7691C26.9114 17.9684 27.3661 15.9924 27.3661 13.9903C27.3661 11.9882 26.9114 10.0122 26.0363 8.2115C25.1612 6.41077 23.8886 4.8323 22.3145 3.59518C24.2648 2.06184 26.6071 1.10818 29.0738 0.843211C31.5405 0.578239 34.032 1.01265 36.2635 2.09677C38.4949 3.1809 40.3763 4.87101 41.6926 6.9739C43.0089 9.07679 43.707 11.5076 43.7071 13.9885V13.9922Z" fill="#F79E1B" />
                    </svg>
                </div>

                <div className="flex mb-8">
                    <div className="w-[200px]">
                        <label htmlFor="cardDate" className="font-semibold">CCV Number</label>
                        <p className="font-light  text-text-buton">3 haneli numarayı girin</p>

                    </div>
                    <input type="text" id="cardDate" className=" h-[69px] rounded-xl border border-[#D9D9D9] px-5 bg-border-2 ml-5 w-[386px]" placeholder="CCV" />
                </div>

                <div className="flex ">
                    <div className="flex flex-col justify-center w-full">
                        <label htmlFor="cardDate" className="font-semibold">Son Kullanma Tarihi</label>
                        <p className="font-light  text-text-buton">Son kullanma tarihini girin</p>

                    </div>
                    <div className="flex w-[386px]">
                        <input type="text" id="cardDate" className="block w-[177px] h-[69px] rounded-xl border border-[#D9D9D9] px-5 bg-border-2 text-center mr-4" placeholder="00" />
                        <input type="text" id="cardDate" className="block w-[177px] h-[69px] rounded-xl border border-[#D9D9D9] px-5 bg-border-2 text-center" placeholder="00"/>
                    </div>
                </div>

            </form>
            <button className="bg-secondary text-white rounded-2xl w-[582px] h-[69px] mt-8">Ödeme Yap</button>

        </section>
    )
}

export default CardInfo;