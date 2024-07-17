import { Feature } from "@/types/feature";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SiHostinger } from "react-icons/si";
import { IoMdAnalytics } from "react-icons/io";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { MdPayments } from "react-icons/md";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaLaptopCode className=" w-8 h-6"/>,
    title: "Web Development",
    paragraph:
      "Our remote web development team combines expertise and innovation to deliver high-quality digital solutions. With a focus on flexibility and collaboration, we ensure your projects are completed efficiently and effectively, no matter where you are.",
  },
  {
    id: 1,
    icon: <MdOutlinePhoneIphone className=" w-12 h-8"/>,
    title: "Apps Development",
    paragraph:
      "Our remote mobile development team uses cutting-edge technology and creativity to build exceptional mobile applications. We ensure your projects are executed efficiently and deliver outstanding user experiences through flexibility and seamless collaboration",
  },
  {
    id: 1,
    icon:<SiHostinger className=" w-10 h-8"/>,
    title: "Web Hosting",
    paragraph:
      "Our  team provides reliable, secure hosting solutions. We ensure your websites run smoothly with optimal performance, uptime, and exceptional customer support.",
  },
  {
    id: 1,
    icon: < IoMdAnalytics className=" w-10 h-8" />,
    title: "Data Analytics",
    paragraph:
      "Our team leverages advanced technology and analytical expertise to deliver insightful solutions. With a focus on efficiency and collaborative synergy, we ensure your data projects yield valuable insights and strategic advantages.",
  },
  {
    id: 1,
    icon: <SiGooglecontaineroptimizedos className=" w-10 h-8" />,
    title: "SEO Optimization",
    paragraph:
      "Through SEO optimization, our team enhances online visibility and drives organic traffic growth. We tailor strategies to maximize search engine rankings and improve overall website performance.",
  },
  {
    id: 1,
    icon: <MdPayments className=" w-10 h-8"/>,
    title: "Payment Integration",
    paragraph:
      "Our team specializes in seamless payment integration with platforms like PayPal, Wise,stripe,Chapa,TeleBirr,CBE Birr and other, ensuring secure and efficient transactions for your business. We customize solutions to enhance user experience and streamline payment processes.",
  },
];
export default featuresData;
