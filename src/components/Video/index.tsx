"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import AboutUsImage from "../../../public/images/about/imageTwo.jpg"
import ModalVideo from "react-modal-video";
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

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
                  <FaCircleArrowRight />
                  <span className=" text-xl text-gray-700 pl-4 -mt-2 "> Professional Staff</span>
                </div>
                <div className=" mt-8  w-96 flex">
                  <FaCircleArrowRight />
                    <span className="text-xl text-gray-700 pl-4 -mt-2 "> 24/7 Support</span>
                </div>
           </div>
           <div className=" -ml-20 pt-8" >
             <div className=" flex w-40">
              <FaCircleArrowRight />
              <span className=" text-xl text-gray-700 pl-4 -mt-2 "> Fair Prices </span>
             </div>
              <div className=" flex mt-8">
                <FaCircleArrowRight />
                  <span className="text-xl text-gray-700 pl-4 -mt-2  "> Quality Code</span>
              </div>
           </div>
        <div className="-mt-22">
         <Image src={AboutUsImage} width={500} height={400} alt="no_image"/>
          </div>
       </div>
       <div className=" grid grid-cols-2  ml-24" style={{marginTop:"-330px", marginBottom:"400px"}}>
         <IoCall className=" w-8 h-8 "/>
        <h4 className=" text-xl  text-blue-400 " style={{marginLeft:"-480px"}}>Call to ask any question</h4>
        <span className=" mx-14 pt-1 text-xl text-gray-900"> +251 961197371</span>
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
