import { navbarInfo } from "../../../public/navbarInfo";

import MessageBoard from "./components/messageBoard";
import PremiumCard from "./components/premiumCard";


const Anasayfa = () => {
  return (
    <>
      <div className="bg-bg-main flex">
        <nav className="bg-white p-2">
          
          
        </nav>





        <PremiumCard />

        <div className="">
          <MessageBoard componentType={"Hızlı Mesajlar"} />
          <MessageBoard componentType={"Beğeniler"} />
        </div>
      </div>
    </>
  );
};

export default Anasayfa;


/*
{navbarInfo.map((item) => (
            <div key={`${item.id}${item.name}${item.id}`} className="flex flex-col">
              <img
                src={item.image}
                alt=""
                className="w-[28px] h-[28px] text-secondary"
              />
            </div>
          ))}

*/