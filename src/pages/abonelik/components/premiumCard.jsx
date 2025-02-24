import { premiumPlans } from "../../../../public/premiumPlans"


const PremiumCard = () => {

    return (
        <section className="flex justify-center gap-7 mt-12 relative">
            <span className="absolute text-sm bg-primary text-white w-[181px] h-[27px] flex items-center justify-center rounded-t-xl -top-6">En çok tercih edilen</span>
            {premiumPlans.map((item, i) => (
                <div key={`${i}-${item.price}`} className="w-[307px] h-[539px] p-8 bg-white rounded-2xl">
                    <div className={`w-full h-[120px] relative ${item.bg}`}>
                        <h3 className="text-2xl font-bold">{item.duration}</h3>
                        <p className="text-lg font-semibold text-basitplan">{item.name}</p>
                        <span dangerouslySetInnerHTML={{ __html: item.svg }} className="absolute right-0" />
                    </div>
                    <div className="w-full custom-bottom-border-chat">
                        <p className="text-3xl font-bold">
                            {item.price} <span className="text-sm font-semibold">/ Hafta</span>
                        </p>
                        <p className="text-sm text-basitplan mb-4 mt-3">{item.description}</p>
                    </div>

                    <ul className="">


                        {item.features?.map((feature, i) => (


                            <li key={`${i}${feature}`} className="flex items-center font-light text-lg
">
                                <svg className="mx-3 my-5" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.51587 4.07774L4.17202 6.77134L9.48203 1.38403" stroke="#18181C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                {feature}

                            </li>
                        ))}
                    </ul>

                    <button className={`bg-secondary text-white rounded-2xl text-sm font-semibold w-full h-[54px] relative ${item.discount ? 'pr-[60px] pt-[20px]' : ''}`}>Planı Seç  {item.discount && <span className="absolute font-normal text-ss rounded-3xl py-2 px-3 bg-white text-secondary right-7 bottom-1">{item.discount}</span>}</button>

                   
                </div>
            ))}

        </section>


    )
}

export default PremiumCard;

/*

 {item.features.map(feature, i) => <li key={`${i}${item.feature}`} className="text-lg font-light
"> {feature}</li>)}


*/