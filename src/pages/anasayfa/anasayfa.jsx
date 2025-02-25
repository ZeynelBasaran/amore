
import Poster from "./components/poster";
import MessageBoard from "./components/messageBoard";
import PremiumCard from "./components/premiumCard";
import Navbar from "../navbar/navbar";



const Anasayfa = () => {
  



  return (


    <main className="container bg-bg-main flex gap-6  p-12 h-[1256px] overflow-hidden">

      <Navbar />
      <PremiumCard />

      <Poster />

      <section className="flex flex-col gap-y-5">
        <MessageBoard componentType={"Hızlı Mesajlar"} />
        <MessageBoard componentType={"Beğeniler"} />
      </section>
    </main>


  );
};

export default Anasayfa;


/*

        */