//import Image1 from "public/Image1.png"


const HeroSection = () => {
    return (<>
        <header className="text-white bg-background-primary h-[960px] flex flex-col items-center p-10">

            <nav className="bg-fourth w-[751px] h-[66px] rounded-3xl">
                <ul className="w-[751px] h-[66px] flex items-center justify-between text-sm px-4">
                    <li className="color-secondary text-sm "><a href="#" className="flex items-center">
                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.9382 0.615398C4.89292 1.69873 1.75116 4.76123 0.45749 8.9279C-0.38442 11.6362 -0.014801 15.2404 1.38154 18.0946C1.87436 19.0946 18.5278 36.1154 19.0206 36.1154C19.3491 36.1154 31.1975 24.0946 34.6473 20.2612C36.6186 18.0737 37.3168 16.8029 37.789 14.5112C38.1587 12.7196 38.1587 11.5946 37.789 9.82373C37.3578 7.69873 36.3927 5.8654 34.8937 4.2404C32.5322 1.69873 30.1502 0.532066 26.9058 0.344566C24.5854 0.219566 22.8605 0.594566 20.6633 1.7404L19.0617 2.57373L17.3368 1.6779C16.3922 1.19873 15.1191 0.677898 14.5236 0.532066C13.0656 0.19873 10.3551 0.240398 8.9382 0.615398ZM20.15 10.6779C19.534 14.8446 19.3697 14.6571 23.2096 14.6571H25.9818L26.3925 15.3237C26.6183 15.6987 26.8031 16.1571 26.8031 16.3654C26.8031 16.5529 26.2282 17.3862 25.5505 18.2404C23.2096 21.0737 17.6653 27.3654 17.5216 27.3654C17.2957 27.3654 17.2957 27.2821 17.8707 23.6987C18.4867 19.8862 18.4662 19.9904 18.0555 19.5737C17.8091 19.3029 17.2136 19.2404 15.078 19.2404C12.5112 19.2404 12.388 19.2196 11.9157 18.7196C11.3202 18.1362 11.2791 17.6571 11.7514 16.9487C12.1416 16.3654 17.1109 10.3862 19.1849 8.01123C20.8482 6.1154 20.8482 6.13623 20.15 10.6779Z" fill="#E64997" />
                        </svg>
                        <span className="text-xl text-secondary ml-1 euclid font-semibold">Amore</span>
                    </a></li>
                    <li className=""><a href="#">Amore Hakkında</a></li>
                    <li className=""><a href="#">Amore Nedir?</a></li>
                    <li className="bg-secondary w-[125px] h-[48px] rounded-4xl flex justify-center items-center"><a href="#">Oturum Aç</a></li>
                    <li className="bg-primary w-[125px] h-[48px] rounded-4xl flex justify-center items-center"><a href="#" className="">Kayıt Ol</a></li>
                </ul>
            </nav>

            <section className="mt-20 flex flex-col items-center">
                <h2 className="text-black text-6xl font-thin">Tadı Damağında Kalacak</h2>
                <h2 className="text-black text-6xl font-bold mt-4">Sohbet Et ve Flörtleş</h2>
                <div className="flex gap-4 mt-10">
                    <div className="bg-black flex justify-center items-center h-[55px] w-[182.5px] text-xs rounded-2xl" >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.947 9.02977C20.833 9.10004 18.3257 10.5598 18.3542 13.5967C18.3857 17.2291 21.5385 18.4387 21.5747 18.4525C21.5465 18.5389 21.0706 20.1753 19.9128 21.8653C18.9122 23.3294 17.8757 24.7852 16.2397 24.8156C14.6324 24.845 14.1144 23.8619 12.2783 23.8619C10.441 23.8619 9.86598 24.7852 8.34606 24.845C6.76699 24.9047 5.56479 23.264 4.5568 21.808C2.49616 18.8282 0.920645 13.3869 3.0362 9.71482C4.08647 7.89114 5.96372 6.73578 8.00058 6.70593C9.5518 6.67662 11.0147 7.74875 11.9636 7.74875C12.8989 7.74875 14.5751 6.49894 16.551 6.64511C17.3254 6.70251 19.5238 6.93363 20.947 9.02977ZM15.3318 4.67806C16.171 3.66387 16.7356 2.25144 16.5801 0.846588C15.3724 0.894485 13.9116 1.65109 13.0453 2.66464C12.2696 3.56248 11.5883 5.00047 11.7733 6.37665C13.1194 6.48067 14.4934 5.69287 15.3318 4.67806Z" fill="white" />
                        </svg>
                        <span className="ml-2">App Store</span>

                    </div>
                    <div className="bg-black flex justify-center items-center h-[55px] w-[182.5px] text-xs rounded-2xl">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8748 12.3081L1.93982 22.8524C1.94075 22.8543 1.94075 22.8571 1.94169 22.859C2.24682 24.0039 3.29192 24.8465 4.53297 24.8465C5.02939 24.8465 5.49502 24.7122 5.8944 24.477L5.92613 24.4583L17.1087 18.0058L11.8748 12.3081Z" fill="#EA4335" />
                            <path d="M21.9254 10.5126L21.916 10.5061L17.088 7.70767L11.6489 12.5478L17.1076 18.0047L21.9095 15.2343C22.7512 14.7789 23.3232 13.8915 23.3232 12.8688C23.3232 11.8517 22.7596 10.9689 21.9254 10.5126Z" fill="#FBBC04" />
                            <path d="M1.93959 2.8397C1.87987 3.05992 1.84814 3.29133 1.84814 3.53021V22.1628C1.84814 22.4017 1.87987 22.6331 1.94052 22.8524L12.2161 12.5778L1.93959 2.8397Z" fill="#4285F4" />
                            <path d="M11.9481 12.8465L17.0896 7.70592L5.9201 1.23003C5.51419 0.986487 5.04016 0.846519 4.53348 0.846519C3.29242 0.846519 2.24546 1.691 1.94032 2.83687L1.93939 2.83967L11.9481 12.8465Z" fill="#34A853" />
                        </svg>
                        <span className="ml-2">Play Store</span>
                    </div>
                </div>
            </section>

            <section className="">
                <div>

                </div>
                

                <div className="bg-primary">
                    <h5 className="text-3xl">Sadece Gerçek İnsanlar</h5>
                    <p className="text-sm">Amore&apos;da sahte hesaplara yer yok</p>
                </div>
                <div className="bg-secondary w-[307px] h-[152px] rounded-3xl flex flex-col items-center justify-center">
                    <h5 className="text-2xl font-light">Tanış,Konuş,Görüş</h5>
                    <p className="text-2xl font-normal">Aşka açılan kapı</p>
                </div>

            </section>

        </header>
    </>);
}

export default HeroSection;