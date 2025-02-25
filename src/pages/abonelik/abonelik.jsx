import Navbar from "../navbar/navbar";
import PremiumCard from "./components/premiumCard";

const Abonelik = () => {
  return (
    <main className="bg-bg-main container flex gap-5 p-12">
      <Navbar />
      <aside className="w-[1290px]">
        <section className="text-center mt-5">
          <h5 className="text-3xl font-bold">Premium Dünyasına </h5>
          <p
            className="font-light text-4xl mt-3
"
          >
            Hoş Geldin
          </p>
        </section>

        <PremiumCard />

        <div className="text-sm text-center font-semibold text-basitplan mt-12
">Hangi premium seçenek sana daha uygun ?</div>
      </aside>
    </main>
  );
};

export default Abonelik;
