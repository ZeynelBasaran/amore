import Image35 from "../../../../public/AnasayfaLogo/Image35.jpeg";
import Person from "../../kesfet/components/person"

const ChatPage = () => {
  return (
    <section className='bg-white h-[791px] w-[840px] rounded-xl flex flex-col '>
      <div className="flex justify-between p-6 custom-bottom-border-chat">
        <div className="w-[142px] h-[48px] flex justify-center items-center">
          <div className="relative">
            <img src={Image35} alt="ahde vefa" className="w-[48px] h-[48px] rounded-full object-cover" />
            <span className="inline-block w-2 h-2 rounded-full bg-[rgba(28,231,97,1)] border border-white absolute right-1 bottom-1"></span>
          </div>
          <div className="ml-2">
            <p className="font-semibold text-lg">Ahde Vefa</p>
            <p className="font-light text-sm text-bg-cevrim">Çevrimiçi</p>
          </div>
        </div>

        <Person />
      </div>

      <div className="flex flex-col flex-grow justify-end p-5 font-light text-sm">

        <div className="w-[568px] h-[84px] flex">
          <div>
            <img src={Image35} alt="ahde vefa" className=" w-[40px] h-[40px] rounded-full object-cover" />
          </div>

          <p className="ml-4 w-[508px] bg-bg-buton flex items-center justify-center rounded-2xl p-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque consequuntur neque quasi eum libero illo odit ducimus doloremque sunt, ut ex sapiente beatae labore maxime, magni expedita!</p>
        </div>

        <div className="w-full flex justify-end h-[84px] mt-4">
          <p className="ml-4 w-[508px] bg-secondary flex items-center justify-center rounded-2xl p-5 font-semibold text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta recusandae minima, hic at dolor consequuntur commodi debitis eligendi dignissimos!</p>
        </div>

        <div className="w-full flex justify-end h-[66px] mt-4">
          <p className="ml-4 w-[199px] bg-secondary flex items-center justify-center rounded-2xl p-5 font-semibold text-white">Lorem ipsum dolor sit.</p>
        </div>

        <div className="w-[568px] h-[84px] flex">
          <div>
            <img src={Image35} alt="ahde vefa" className=" w-[40px] h-[40px] rounded-full object-cover" />
          </div>

          <p className="ml-4 w-[508px] bg-bg-buton flex items-center justify-center rounded-2xl p-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, iste dolore corrupti fuga illo quo?</p>
        </div>

        <div className="w-full flex justify-end h-[84px] mt-4">
          <p className="ml-4 w-[508px] bg-secondary flex items-center justify-center rounded-2xl p-5 font-semibold text-white">Due six Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur beatae aliquid quae iusto pariatur omnis perspiciatis? Officiis!</p>
        </div>
      </div>

      <div className="flex items-center justify-center relative mb-5">
        <input type="text" className="w-[793px] h-[56px] border border-border-2 rounded-2xl p-5 font-light text-sm" placeholder="Canım birazdan yazacağım, küçük bir işim çıktı." />

        <svg className="absolute top-4 right-10" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.97643 4.57899L15.5343 1.39302C19.8236 -0.036719 22.1539 2.30491 20.7354 6.59413L17.5495 16.152C15.4105 22.5802 11.8981 22.5802 9.75907 16.152L8.8134 13.315L5.97643 12.3694C-0.451779 10.2304 -0.451779 6.72923 5.97643 4.57899Z" stroke="#E64997" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.02686 12.8307L13.0572 8.78918" stroke="#E64997" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </div>
    </section>
  )
}

export default ChatPage;