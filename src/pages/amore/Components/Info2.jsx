import Image15 from "../../../../public/Image15.jpeg";
import Image16 from "../../../../public/Image16.jpeg";
import Image17 from "../../../../public/Image17.jpeg";
import Image18 from "../../../../public/Image18.jpeg";
import Image19 from "../../../../public/Image19.jpeg";
import Image20 from "../../../../public/Image20.jpeg";

const Info2 = () => {
    return (
        <>
            <aside className="container">
                <section className="h-[654px] back py-15 px-20">
                    <h3 className="text-5xl font-bold text-white mb-10 w-[658px] leading-[52px]">
                        Tamemen gerçek insanlarla sohbet et
                    </h3>
                    <div className="max-w-[1280px] max-h-[400px] flex justify-between gap-2">
                        <div>
                            <img
                                src={Image15}
                                className="rounded-3xl w-[416px] max-h-[400px] object-cover object-top"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src={Image16}
                                className="rounded-3xl w-[416px] max-h-[400px] object-cover object-top"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src={Image17}
                                className="rounded-3xl w-[416px] max-h-[400px] object-cover object-left"
                                alt=""
                            />
                        </div>
                    </div>
                </section>

                <section className="px-30 py-40 flex flex-col items-center justify-center bg-bg-main">
                    <div className="font-normal flex-col flex items-center justify-center ">
                        <h5 className="text-4xl">Diğer Dating&apos;lerden Farklıyız</h5>
                        <p className="text-6xl font-bold
 text-secondary mt-2">Çünkü</p>
                        <p className="font-poppins text-base w-[490px] leading-[24px] text-center mt-6">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
                            qui, sed numquam sint beatae ratione eum neque dolorem dolorum
                            quod blanditiis error hic accusantium doloremque ipsam doloribus
                            sunt consequuntur assumenda, ab fugit omnis. Dolor voluptatem.
                        </p>
                    </div>
                    <div className="my-12 flex gap-x-6">
                        <div className="">
                            <img src={Image18} alt="" className="rounded-3xl max-w-[314px] max-h-[487px]" />
                        </div>
                        <div className=" ">
                            <img src={Image19} alt="" className="rounded-3xl max-w-[314px] max-h-[487px]" />
                        </div>
                        <div className=" ">
                            <img src={Image20} alt="" className="rounded-3xl max-w-[314px] max-h-[487px]" />
                        </div>


                    </div>

                </section>
            </aside>
        </>
    );
};

export default Info2;
