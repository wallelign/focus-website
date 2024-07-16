"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import AboutUsImage from "../../../public/images/about/imageTwo.jpg"
import ModalVideo from "react-modal-video";
import { FaCircleArrowRight } from "react-icons/fa6";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="ABOUT US"
          paragraph="Trusted Remote Project Implementation Team dedicated to executing diverse projects with precision and expertise. Our commitment to excellence ensures seamless implementation, tailored to exceed customer expectations."
          center
          mb="80px"
        />

       <div className="  flex ">
            <div className=" ml-24 pt-8 ">
                <div className="flex w-96">
                <FaCircleArrowRight/>
                <span className=" text-base font-bold"> Professional Staff one</span>
                </div>
                <div className=" mt-8  w-96 flex">
                <FaCircleArrowRight/>
                   <span className=""> Professional Staff two</span>
                </div>
           </div>
           <div className=" -ml-20 pt-8" >
             <div className=" flex w-72">
             <FaCircleArrowRight/>
             <span className=""> Professional Staff three</span>
             </div>
              <div className=" flex mt-8">
              <FaCircleArrowRight/>
                <span className=" "> Professional Staff four</span>
              </div>
           </div>
        <div className=" -mt-22">
         <Image src={AboutUsImage} width={600} height={600} alt="no_image"/>
          </div>
       </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
