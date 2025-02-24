import Image51 from "../../../../public/mesajlar/Image51.png";
import { personalList } from "../../../../public/AnasayfaLogo/mesajlar/personel";

const Searchbar = () => {
  return (
    <section className="bg-white h-[791px] w-[416px] rounded-xl flex flex-col justify-center items-center">
      <div className="w-[363px]">
        <div className="flex items-center relative">
          <svg
            className="absolute left-4"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4655 3.69287C16.0478 3.69287 19.7622 7.46134 19.7622 12.1104C19.7622 16.7595 16.0478 20.5289 11.4655 20.5289C6.8831 20.5289 3.1687 16.7595 3.1687 12.1104C3.1687 7.46134 6.8831 3.69287 11.4655 3.69287Z"
              stroke="#18181C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.1123 18.2769L20.4882 21.6931"
              stroke="#18181C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            type="text"
            className="rounded-lg bg-bg-buton h-[58px] w-full py-4 px-14 font-semibold text-lg"
            placeholder="Araştır"
          />
        </div>
      </div>

      <div className=" h-[112px] w-full flex items-center relative bg-bg-whatapps px-6 mt-2">
        <div className="">
          <img
            src={Image51}
            alt=""
            className="w-[64px] h-[64px] rounded-full"
          />
        </div>
        <div className="flex items-center ">
          <div className="ml-2">
            <p className="font-semibold text-lg">Whatapps Destek</p>
            <p className="text-sm font-light">Destek için hemen yaz</p>
          </div>
          <div className="absolute right-4">
            <svg
            className="text-black"
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
          </div>
        </div>

      </div>


      <div className="w-full">
        {personalList.map((item, i) => (
          <div key={`${item.name}${i}`} className={`p-5 custom-top-border ${item.name === "Ahde" ? "bg-bg-chat custom-left-border" : ""}`}>
            <div className="flex ">
              <div className=" w-[64px] relative">
                <img
                  src={item.image}
                  className="h-[64px] w-[64px] rounded-full object-cover"
                  alt=""
                />
               {item.name === "Candan" || item.name === "Ahu" || item.name === "Ahde" ?  <span className="inline-block w-2 h-2 rounded-full bg-[rgba(28,231,97,1)] border border-white absolute right-1 bottom-1"></span> : ""}
              </div>
              <div className="flex-grow flex flex-col justify-center ml-4 ">
                <p className="text-lg font-semibold">{item.fullname()}</p>

                <span
                  className="text-sm font-light mt-2 text-text-buton
"
                >
                  {item.message}
                </span>
              </div>

              <div className="flex flex-col justify-center mb-6">
                <span className="text-sm font-light">14:03</span>
              </div>
            </div>

            <div />

          </div>
        ))}
      </div>

    </section>
  );
};

export default Searchbar;


