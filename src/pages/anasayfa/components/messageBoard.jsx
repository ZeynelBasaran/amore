import Image32 from "../../../../public/AnasayfaLogo/Image32.jpeg";
import Image33 from "../../../../public/AnasayfaLogo/Image33.jpeg";
import Image34 from "../../../../public/AnasayfaLogo/Image34.jpeg";
import Image35 from "../../../../public/AnasayfaLogo/Image35.jpeg";

const personalList = [
    {
        name: "Candan",
        surname: "Akay",
        message: "Çok güzel değil mi?",
        image: Image32,
        fullname: function () {
            return `${this.name} ${this.surname}`;
        },
    },
    {
        name: "Selin",
        surname: "Genç",
        message: "Bir sonraki ne olacak, soru?",
        image: Image33,
        fullname: function () {
            return `${this.name} ${this.surname}`;
        },
    },
    {
        name: "Ahu",
        surname: "Tuğ",
        message: "Gerçekten harikasın",
        image: Image34,
        fullname: function () {
            return `${this.name} ${this.surname}`;
        },
    },
    {
        name: "Ahde",
        surname: "Vefa",
        message: "Özledim seni canım",
        image: Image35,
        fullname: function () {
            return `${this.name} ${this.surname}`;
        },
    },
];



const MessageBoard = ({ componentType }) => {
    return (
        <section className="bg-white w-[403px] h-[588px] p-6 rounded-2xl">
            <div className="flex justify-between text-lg font-semibold mb-10">
                <p className="">{componentType}</p>
                <p className="text-secondary flex justify-center items-center">
                    Tümünü Gör
                    <svg
                        className="ml-2"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.0249 3.83336L10.6246 8.50003L6.0249 13.1667"
                            stroke="#E64997"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </p>
            </div>

            <div className="w-[322px] h-[436px] flex flex-col justify-between">

                {personalList.map((item, i) => (
                    <div key={`${item.name}${componentType}`}>
                        <div className="flex ">
                            <div className=" w-[64px]">
                                <img
                                    src={item.image}
                                    className="h-[64px] w-[64px] rounded-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="flex-grow flex flex-col justify-center ml-4 ">
                                <p className="text-lg font-semibold">{item.fullname()}</p>
                                {componentType === "Hızlı Mesajlar" ? (
                                    <span
                                        className="text-sm font-light
"
                                    >
                                        {item.message}
                                    </span>
                                ) : (
                                    <span
                                        className="text-sm font-light
"
                                    >{`${item.name} seni beğendi`}</span>
                                )}
                            </div>

                            {componentType === "Hızlı Mesajlar" ? (
                                <div className="flex flex-col justify-center mb-6">
                                    <span className="text-sm font-light">14:03</span>
                                </div>
                            ) : (
                                <div className="flex flex-col justify-center">
                                    <svg
                                        width="23"
                                        height="22"
                                        viewBox="0 0 23 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.7144 1.18644C15.2691 0.396609 13.0396 1.05461 11.3666 3.03328C9.6924 1.05228 7.46289 0.397775 5.01989 1.18644C1.93172 2.18044 0.00555668 4.96994 -0.00844332 8.46527C-0.0364433 14.4549 5.72806 19.1473 11.1309 21.5413L11.3677 21.6463L11.6046 21.5413C17.0086 19.1473 22.7707 14.4549 22.7416 8.46527C22.7276 4.96994 20.8014 2.18044 17.7144 1.18644Z"
                                            fill="#B0B0B0"
                                        />
                                    </svg>
                                </div>
                            )}


                        </div>


                        <div />
                        {i !== personalList.length - 1 && (
                            <div
                                className="mt-8 border-b border-[rgba(0,0,0,1)] border-[0.5px] opacity-[15%]"

                            ></div>
                        )}


                    </div>

                ))}

            </div>
        </section>
    );
};

export default MessageBoard;
