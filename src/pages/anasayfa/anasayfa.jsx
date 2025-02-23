
import Image30 from "../../../public/AnasayfaLogo/Image30.jpeg";
import Image31 from "../../../public/AnasayfaLogo/Image31.jpeg";
import MessageBoard from "./components/messageBoard";
import PremiumCard from "./components/premiumCard";
import Navbar from "../navbar/navbar";


const Anasayfa = () => {
  return (
    <>
      <div className="bg-bg-main flex">
      
        <Navbar/>
        <PremiumCard />

        <section >
          <div className="max-w-[547px] max-h-[589px] rounded-3xl">
            <img src={Image30} alt=" rounded-3xl" />
          </div>


          <div className="w-[547px] h-[330px] p-5 bg-white">
            <p>Ben Kimim?</p>
            <p>Ben 19 yaşında İzmir&apos;de yaşayan bir genç kızım.Yeni insanlarla tanışmak,görüşmek ve ilişkiler kurmak istiyorum.Bu yüzden burdayım.</p>
            <div
              className="mt-8 border-b border-[rgba(0,0,0,1)] border-[0.5px] opacity-[15%]"

            ></div>
            <div className="flex flex-wrap gap-4 mt-5">
              <span className="w-[100px] h-[57px] flex items-center justify-center rounded-2xl border border-border-2 ">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M10.3632 25.4794V19.658M7.98043 23.2652H12.7187M6.02238 17.8877C3.66197 15.5273 3.66197 11.7001 6.02238 9.33971C8.38279 6.97929 12.21 6.97929 14.5703 9.33971C16.9308 11.7001 16.9308 15.5273 14.5703 17.8877C12.21 20.2493 8.38279 20.2493 6.02238 17.8877Z" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22.2843 5.23242H25.8903M25.8903 5.23242V8.83854M25.8903 5.23242L21.8045 9.32044M11.4647 13.6139C11.4647 10.2755 14.1714 7.56893 17.5096 7.56893C20.8479 7.56893 23.5533 10.2755 23.5533 13.6139C23.5533 16.9521 20.8479 19.6576 17.5096 19.6576C14.1714 19.6576 11.4647 16.9521 11.4647 13.6139Z" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                Kadın</span>
              <span className="w-[135px] h-[57px] flex items-center justify-center rounded-2xl border border-border-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6819 23.8726H12.7837L14.7325 21.861L16.6819 23.8726Z" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.4747 27.2151C13.0873 24.4899 15.6325 23.8729 15.6325 23.8729" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22.667 12.9136C22.667 17.2974 19.1132 21.861 14.7294 21.861C10.3455 21.861 6.79175 17.2974 6.79175 12.9136C6.79175 8.52981 10.3455 4.97601 14.7294 4.97601C19.1132 4.97601 22.667 8.52981 22.667 12.9136Z" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.9734 12.8362C10.9734 10.9394 12.511 9.40173 14.4078 9.40173" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23.7198 23.0114C22.6612 22.909 21.7201 23.6841 21.6177 24.7427" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.2395 18.603C3.90441 19.3522 4.24005 20.2312 4.98919 20.5662L5.14342 20.6352C5.80738 20.9322 6.10487 21.7112 5.80787 22.3751L5.74297 22.5202C5.48182 23.1041 5.74341 23.789 6.32723 24.0502" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24.6899 6.30169C24.7007 6.29798 24.6983 6.29259 24.6846 6.28967" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.24771 5.00751C5.65929 5.95473 5.22505 7.05625 4.27783 7.46782" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                19 Yaşında</span>
              <span className="w-[116px] h-[57px] flex items-center justify-center rounded-2xl border border-border-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.36963 11.4796V21.9079C6.36963 23.9418 8.01878 25.591 10.0527 25.591H20.7266C22.7606 25.591 24.4098 23.9418 24.4098 21.9079V11.4796" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M26.2079 12.8989L17.161 5.73739C16.1224 4.91631 14.6556 4.91631 13.617 5.73739L4.57007 12.8989" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22.2024 6.87311V9.70228" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.5562 25.5909V21.1208C12.5562 20.1583 12.5562 19.6771 12.7351 19.3061C12.9123 18.9387 13.2087 18.6421 13.5761 18.4651C13.9473 18.2861 14.4285 18.2861 15.3909 18.2861C16.3533 18.2861 16.8345 18.2861 17.2056 18.4651C17.573 18.6421 17.8695 18.9387 18.0466 19.3061C18.2256 19.6771 18.2256 20.1583 18.2256 21.1208V25.5909" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                İstanbul</span>
              <span className="w-[152px] h-[57px] flex items-center justify-center rounded-2xl border border-border-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.2988 20.6789V17.6292" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.7455 7.03912C24.7771 7.03912 26.412 8.68601 26.412 10.7176V14.8528C23.4548 16.5838 19.5479 17.6297 15.2925 17.6297C11.0371 17.6297 7.14223 16.5838 4.18506 14.8528V10.7055C4.18506 8.67398 5.83194 7.03912 7.8635 7.03912H22.7455Z" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.5062 7.03388V6.59391C19.5062 5.12734 18.3161 3.93726 16.8495 3.93726H13.7481C12.2815 3.93726 11.0914 5.12734 11.0914 6.59391V7.03388" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.2146 19.2439L4.4418 22.26C4.59567 24.2927 6.28943 25.8639 8.327 25.8639H22.2702C24.3078 25.8639 26.0015 24.2927 26.1554 22.26L26.3826 19.2439" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                Öğretmen</span>
              <span className="w-[188px] h-[57px] flex items-center justify-center rounded-2xl border border-border-2">
                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.17773 25.8335H25.8156" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.5667 25.8381V21.6216C12.5667 21.1141 12.9843 20.6965 13.4918 20.6965H16.5025C17.0089 20.6965 17.4264 21.1141 17.4264 21.6216V25.8381" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.48193 25.8367V17.5804C5.48193 16.6225 6.25973 15.8553 7.20712 15.8553H8.5709" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.4133 15.8553H22.9245C23.8719 15.8553 24.6496 16.6225 24.6496 17.5804V25.8367" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.4165 25.8372V13.5878C21.4165 12.9831 21.0948 12.4229 20.5708 12.1188L15.8515 9.37485C15.3228 9.06841 14.6713 9.06841 14.1438 9.37485L9.42327 12.1188C8.89928 12.4229 8.57764 12.9831 8.57764 13.5878V25.8372" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.9968 9.14351V4.27557H18.5432V7.02066H14.9968" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.0133 15.2642H14.9365M14.9969 15.5759C14.8238 15.5759 14.6833 15.4355 14.6833 15.2624C14.6833 15.0891 14.8238 14.949 14.9969 14.949C15.17 14.949 15.3102 15.0891 15.3102 15.2624C15.3102 15.4355 15.17 15.5759 14.9969 15.5759Z" stroke="#18181C" strokeWidth="1.80316" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                Okul Bilgisi Yok</span>
            </div>

          </div>
        </section>




        <div className="">
          <MessageBoard componentType={"Hızlı Mesajlar"} />
          <MessageBoard componentType={"Beğeniler"} />
        </div>
      </div>
    </>
  );
};

export default Anasayfa;


