import Image3 from "../../../../public/Image3.jpeg"
import Image4 from "../../../../public/Image4.jpeg"
import Image5 from "../../../../public/Image5.jpeg"
import Image6 from "../../../../public/Image6.jpeg"
import Image7 from "../../../../public/Image7.jpeg"
import Image8 from "../../../../public/Image8.jpeg"
import Image9 from "../../../../public/Image9.jpeg"
import Image10 from "../../../../public/Image10.png"
import Image11 from "../../../../public/Image11.png"
import Image12 from "../../../../public/Image12.jpeg"
import Image13 from "../../../../public/Image13.jpeg"
import "../amore.css"

const users = [
    { id: 1, name: "Ahsen", image: Image3 },
    { id: 2, name: "Burçin", image: Image4 },
    { id: 3, name: "Damla", image: Image5 },
    { id: 4, name: "Ayça", image: Image6 },
    { id: 5, name: "Aleyna", image: Image7 },
    { id: 6, name: "Ateş", image: Image8 },
    { id: 7, name: "Alev", image: Image9 },
];

const Info = () => {
    return (
        <aside className='container p-20 bg-bg-main'>
            <section>
                <p className='text-3xl text-center font-bold'>40.000&apos;den fazla <span className='text-secondary'>kullanıcı</span></p>

                <ul className="flex justify-between mt-10">
                    {users.map((user, i) => (
                        <li key={`${i}${user.name}`}>
                            <img src={user.image} alt={user.name} className="w-[130px] h-[130px] rounded-full object-cover" />
                            <p className="text-center mt-5 font-semibold text-lg text-font-1">{user.name}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="grid grid-cols-2 gap-10 mt-15 ">

                <div className="flex flex-col justify-center">
                    <h3 className="text-6xl font-normal leading-[64px]">
                        Dating`den <span className="text-secondary font-bold">Çooooook</span>
                    </h3>
                    <h3 className="text-6xl font-normal ">Daha fazlası</h3>
                    <p className="mr-30 text-sm text-font-1 mt-5 leading-[24px] font-poppins">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sequi nihil cupiditate, dolor animi ad magni nisi voluptatum! Magnam assumenda aspernatur expedita natus, omnis ipsa labore voluptas maxime quod nihil, officiis recusandae iste earum id dolorum vitae esse ratione mollitia.</p>

                    <button className="w-[153px] h-[48px] bg-secondary text-white rounded-4xl mt-5 text-base"><a href="#">Hemen İndir</a></button>
                </div>

                <div className="flex justify-center ml-40  relative">
                    <div className="absolute  bottom-11 -left-7 ">
                        <div className="relative">
                            <p className="grid place-items-center text-xs bg-fifth text-white absolute w-[65px] h-[30px] -top-5 left-13 rounded-lg border-3 border-border-1">İstanbul</p>

                            <img src={Image10} alt="" className="w-[168px] h-[220px] rounded-2xl" />

                            <div className="absolute top-20 left-20">
                                <img src={Image13} alt="" className="w-[40px] h-[40px] rounded-full object-cover" />

                                <div className="absolute -bottom-2 left-1 z-0">
                                    <div className="speech-bubble"></div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <img src={Image11} alt="" className="w-[225px] h-[457px]" />

                    <div className="absolute top-13 -right-3 rounded-full">

                        <img src={Image12} alt="" className="w-[160px] h-[217px] rounded-lg" />
                        <p className="grid place-items-center bg-fifth text-white h-[40px] absolute w-[160px] bottom-0 rounded-bl-lg rounded-br-lg">Kahve içiyorum</p>

                    </div>

                </div>

            </section>
        </aside>
    )
}

export default Info;

