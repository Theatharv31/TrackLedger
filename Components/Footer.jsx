import {Fot1, Fot2} from "../Components/index";
import Image from "next/image";
import logo from './logo.png'; 


export default function Footer() {
  const footerNavs = [
    {
      href: "#",
      name: "Terms",
    },
    {
      href: "#",
      name: "License",
    },
    {
      href: "#",
      name: "Privacy",
    },
    {
      href: "#",
      name: "About us",
    },
  ];

  return (
    <footer className="pt-10">
      <div 
      className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
          <Image
              src={logo}         // Use the imported image as src
              width={100}         // Specify width
              height={40}         // Specify height
              alt="Float UI logo" // Add alt text for accessibility
            />            <p className="max-w-md">
              Hey Guys, i am Full Stack web3 developer, I like to Solve real Life Problems. Open For Collaboration...           </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx)=> (
                <li className="text-gray-800 hover:text-gray-500 duration-150">
                    <a key={idx} href={item.href}>
                      {item.name}

                    </a>
                </li>
              ))}

            </ul>

          </div>
          <div className="mt-6">
            <p className="text-gray-700 font-semibold"> Get the App

            </p>
            <div className="flex items-center gap-3 mt-3 sm:block">
              <a href="javascript:void()">
                <Fot1 />


              </a>
              <a  className="mt-0 block sm:mt-3">
                <Fot2 />

              </a>

            </div>

          </div>

        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>@ 2024 Atharv Isapure. all rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
