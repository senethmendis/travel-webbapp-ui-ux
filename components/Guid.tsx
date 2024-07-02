import Image from "next/image";
import React from "react";

const Guid = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container w-full pb-24">
        <Image src="./camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase rehular-18 mt-1 mb-3 text-green-50">
          We are Here For You
        </p>
        <div className="flex flex-wrap gap-5 justify-between lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] capitalize ">
            Guid You to easy Path
          </h2>
          <p className="regular-16 xl:max-w-[520px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, voluptatem suscipit quibusdam delectus illo sequi libero
            vel provident facilis cupiditate voluptatibus quas incidunt nesciunt
            modi voluptas accusantium inventore id. Officiis?
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full ">
        <Image
          src={"/boat.png"}
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            alt="meter"
            src={"/meter.svg"}
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween  flex-col">
            <div className="flex w-full  flex-col ">
              <div className="flexBetween w-full ">
                <p className="regular-16 text-gray-20">Destinatoin</p>
                <p className="text-green-50 bold-16 ">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientus</p>
            </div>
            <div className="flex w-full  flex-col ">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2">Wonorjo Pasuruan </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guid;
