import { Team } from "@/types/blog";
import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";
const SingleBlog = ({ team }: { team: Team }) => {
  const { title,name, image, } = team;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <div
          className="relative block aspect-[37/22] w-full"
        >
       
          <Image src={image} alt="image" fill />
        </div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3 className=" ml-12 -mt-4 mb-4 block text-xl font-bold text-black hover:text-gray-900 dark:text-white dark:hover:text-primary sm:text-xl">
             
              { name}
          </h3>
          <VscVerifiedFilled className=" mx-10" />
          <span className="mb-4 block text-xl sm:text-base   ml-16 -mt-5 text-black hover:text-gray-800 dark:text-white dark:hover:text-primary">
              {title}
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
