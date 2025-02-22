import Image3 from "../../../../public/Image3.jpeg"
import Image4 from "../../../../public/Image4.jpeg"
import Image5 from "../../../../public/Image5.jpeg"
import Image6 from "../../../../public/Image6.jpeg"
import Image7 from "../../../../public/Image7.jpeg"
import Image8 from "../../../../public/Image8.jpeg"
import Image9 from "../../../../public/Image9.jpeg"

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
        <aside className='container p-14'>
            <section>
                <p className='text-3xl text-center font-bold'>40.000&apos;den fazla <span className='text-secondary'>kullanıcı</span></p>

                <ul className="flex justify-between mt-10">
                    {users.map((user, i) => (
                        <li key={`${i}${user.name}`}>
                            <img src={user.image} alt="Ahsen" className="w-[130px] h-[130px] rounded-full object-cover" />
                            <p className="text-center mt-5 font-semibold text-lg">{user.name}</p>
                        </li>
                    ))}


                </ul>
            </section>

            <section></section>
        </aside>
    )
}

export default Info;