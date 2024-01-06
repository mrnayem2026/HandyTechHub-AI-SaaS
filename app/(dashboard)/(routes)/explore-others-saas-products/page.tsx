"use client";
import { Anton, Roboto } from "next/font/google";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

import "../explore-others-saas-products/explore-others-saas-products.css";
import Image from "next/image";

// Google Font initalize Start
const anton = Anton({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});
// Google Font initalize end

// React Hot Toast

const inform = () =>
  toast("This project is ongoing!", {
    icon: "🚧",
  });

const ExploreOthersSaasPage = () => {
  return (
    <div className="px-14 py-6">
      {/* Heading Section Start  */}
      <h1
        className={`${anton.className} text-xl text-center text-[--primaryColer] md:text-3xl lg:text-6xl `}
      >
        Explore My Others SaaS Products
      </h1>
      {/* Heading Section End */}

      {/* SaaS Products Cards Start  */}
      <div className="flex flex-col pl-8 lg:pl-0 lg:flex-row gap-10 pt-40 justify-center items-center ">
        {/* First Tow Card  */}
        <div className="">
          {/* SaaS Product Card 1  */}
          <div className="cardContainer">
            <div className="wholeCard w-96 bg-[#FFC436] shadow-[0px_0px_32px_0px_#FFC436] rounded-xl">
              <figure className="cardImage relative">
                <Image
                  src="https://img.freepik.com/free-photo/young-adult-programmer-typing-computer-office-generated-by-ai_188544-20410.jpg"
                  alt="CodeGeneration"
                  className="absolute -top-28 left-12 w-72 h-52 rounded-xl"
                ></Image>
              </figure>
              <div>
                <h1
                  className={`cardHeading relative top-36 left-[70px] ${anton.className}  text-4xl font-bold`}
                >
                  Code Generation
                </h1>
                <div className="card-body cardContent">
                  <h2 className={` ${anton.className}  text-4xl font-bold`}>
                    Code Generation
                  </h2>
                  <p className={`${roboto.className} text-base`}>
                    Code Generation Streamline your development process.
                    Automate repetitive tasks, accelerate coding, and ensure
                    consistency. Unlock efficiency and precision with our
                    cutting-edge code generation tools, empowering developers
                    like never before.
                  </p>

                  {/* Explore Button  */}

                  {/*  TODO : Again Build This Button  */}
                  <div className="wrapper cursor-pointer" onClick={inform}>
                    <Link className="exploreLink" href="#">
                      <span
                        className={` ${anton.className}  uppercase font-bold`}
                      >
                        Explore
                      </span>
                      <span>
                        <svg
                          width="66px"
                          height="43px"
                          viewBox="0 0 66 43"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="arrow"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <path
                              className="one"
                              d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                            <path
                              className="two"
                              d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                            <path
                              className="three"
                              d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Toaster />
          </div>

          {/* SaaS Product Card 2  */}
          <div className="cardContainer mt-40">
            <div className="wholeCard w-96 bg-[#00A9FF] shadow-[0px_0px_32px_0px_#00A9FF] rounded-xl">
              <figure className="cardImage relative">
                <Image
                  src="https://img.freepik.com/premium-photo/music-class-full-swing-with-students-playing-different-instruments-harmonizing-melody_741910-52355.jpg"
                  className="absolute -top-28 left-12 w-72 h-52 rounded-xl"
                  alt="Music Generation"
                ></Image>
              </figure>
              <div>
                <h1
                  className={`cardHeading relative top-36 left-[70px] ${anton.className} text-white text-4xl font-bold`}
                >
                  Music Generation
                </h1>
                <div className="card-body cardContent">
                  <h2
                    className={` ${anton.className} text-white text-4xl font-bold`}
                  >
                    Music Generation
                  </h2>
                  <p className={`${roboto.className} text-white text-base`}>
                    Music Generation Dive into the world of creativity! Our
                    innovative tools and vast libraries empower you to compose,
                    remix, and produce music, making your musical dreams come
                    alive.Explore the realm of creativity with our cutting-edge
                    tools and extensive libraries.
                  </p>

                  {/* Explore Button  */}

                  {/*  TODO : Again Build This Button  */}
                  <div className="wrapper cursor-pointer" onClick={inform}>
                    <Link className="exploreLink" href="#">
                      <span
                        className={` ${anton.className}  uppercase font-bold`}
                      >
                        Explore
                      </span>
                      <span>
                        <svg
                          width="66px"
                          height="43px"
                          viewBox="0 0 66 43"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="arrow"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <path
                              className="one"
                              d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                            <path
                              className="two"
                              d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                            <path
                              className="three"
                              d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Toaster />
          </div>
        </div>

        {/* Second Tow Card  */}
        <div className="mt-40 lg:mt-0">
          {/* SaaS Product Card 3  */}
          <div className="cardContainer">
            <div className="wholeCard w-96 bg-[#FB416B] shadow-[0px_0px_32px_0px_#FB416B] rounded-xl">
              <figure className="cardImage relative">
                <Image
                  src="https://img.freepik.com/premium-photo/focused-videographer-editing-movie-professional-computer-sitting-desk-business-office_148840-11501.jpg"
                  alt="Video Generation"
                  className="absolute -top-28 left-12 w-72 h-52 rounded-xl"
                ></Image>
              </figure>
              <div>
                <h1
                  className={`cardHeading relative top-36 left-[70px] ${anton.className} text-white text-4xl font-bold`}
                >
                  Video Generation
                </h1>
                <div className="card-body cardContent ">
                  <h2
                    className={` ${anton.className} text-white text-4xl font-bold`}
                  >
                    Video Generation
                  </h2>
                  <p className={`${roboto.className} text-white text-base`}>
                    Video Generation: Revolutionize content creation with our
                    advanced platform. Effortlessly generate stunning videos,
                    from concept to final edit, and bring your vision to life
                    with ease and creativity.Transform content creation using
                    our state-of-the-art platform.
                  </p>

                  {/* Explore Button  */}

                  {/*  TODO : Again Build This Button  */}
                  <div className="wrapper cursor-pointer" onClick={inform}>
                    <Link className="exploreLink" href="#">
                      <span
                        className={` ${anton.className}  uppercase font-bold`}
                      >
                        Explore
                      </span>
                      <span>
                        <svg
                          width="66px"
                          height="43px"
                          viewBox="0 0 66 43"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="arrow"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <path
                              className="one"
                              d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                            <path
                              className="two"
                              d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                            <path
                              className="three"
                              d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Toaster />
          </div>

          {/* SaaS Product Card 4  */}
          <div className="cardContainer mt-40">
            <div className="wholeCard w-96 bg-[#F875AA] shadow-[0px_0px_32px_0px_#F875AA] rounded-xl">
              <figure className="cardImage relative">
                <Image
                  src="https://img.freepik.com/premium-photo/room-with-large-bookcase-couch-with-pillows-lamp-table_924629-4025.jpg"
                  alt="CodeGeneration"
                  className="absolute -top-28 left-12 w-72 h-52 rounded-xl"
                ></Image>
              </figure>
              <div>
                <h1
                  className={`cardHeading relative top-36 left-[70px] ${anton.className}  text-4xl font-bold`}
                >
                  Image Generation
                </h1>
                <div className="card-body cardContent">
                  <h2 className={` ${anton.className}  text-4xl font-bold`}>
                    Image Generation
                  </h2>
                  <p className={`${roboto.className} text-base`}>
                    Image Generation: Unlock endless visual possibilities. Our
                    tools enable you to craft stunning images, from art to
                    design, effortlessly. Harness the power of creativity with
                    ease and precision.Embark on a journey of limitless visual
                    possibilities with our Image Generation tools.
                  </p>

                  {/* Explore Button  */}

                  {/*  TODO : Again Build This Button  */}
                  <div className="wrapper cursor-pointer" onClick={inform}>
                    <Link className="exploreLink" href="#">
                      <span
                        className={` ${anton.className}  uppercase font-bold`}
                      >
                        Explore
                      </span>
                      <span>
                        <svg
                          width="66px"
                          height="43px"
                          viewBox="0 0 66 43"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="arrow"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <path
                              className="one"
                              d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                            <path
                              className="two"
                              d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                            <path
                              className="three"
                              d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                              fill="#FFFFFF"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
      {/* SaaS Products Cards End  */}
    </div>
  );
};

export default ExploreOthersSaasPage;
