import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Women&apos;s Business Club</title>
      </Head>
      <div className="bg-[url('/home/homepage.jpg')] bg-cover xbg-gray-600 bg-lighter-dark-blue bg-blend-soft-light">
        <Header />
        <div className="md:max-w-5xl flex flex-col gap-5  items-center w-full lg:items-start lg:text-left mx-auto mt-8 mb-12 md:mt-12 md:mb-24 lg:mt-36 lg:mb-24">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
            Empowering ambitious
            <br />
            women to succeed
          </h1>
          <Link href="/membership" passHref>
            <button className="w-fit flex gap-2 items-center drop-shadow-lg  bg-brand-violet text-white py-2 text-sm md:text-base md:py-3 px-2 md:px-5  rounded-md">
              <span>Explore Membership</span>
            </button>
          </Link>
        </div>
        <div className="w-full">
          <Image
            src="/home/website-background-border.svg"
            alt=""
            className="w-full "
            height={10}
            width={100}
          />
        </div>
      </div>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-12 md:max-w-3xl lg:max-w-6xl xl:mx-auto mt-8 md:mt-16 mx-8 md:mx-0">
          <div className=" mt-6 md:col-start-2 md:col-span-5 md:text-right md:mr-3">
            <h1 className="text-5xl font-bold text-dark-blue">
              <br />
              Established
              <br />
              in 2013
            </h1>
          </div>
          <div className="col-span-5 lg:col-span-5 mt-2 md:ml-3 text-2xl text-dark-blue md:col-span-6">
            <p className="">
              Women&apos;s Business Club is a private member network dedicated
              to connecting, supporting and empowering female entrepreneurs and
              corporate executives. Our mission is to foster collaboration,
              innovation, and success through a vibrant online and offline
              community, a comprehensive resource hub, engaging events, and
              thought leadership initiatives.
            </p>
          </div>
        </div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-20 mx-auto">
            <div className="text-center mb-12">
              <h1 className="h1 text-dark-blue">What we do</h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 sm:w-1/2 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg bg-gray-50 flex flex-col relative overflow-hidden z-10">
                  <div className="mb-5 rounded p-10">
                    <Image
                      src="/img/icons/award-solid.svg"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <h1 className="text-xl font-bold text-dark-blue mb-3 leading-none">
                    Awards
                  </h1>
                  <h2 className="text-sm tracking-widest title-font mb-24 font-medium">
                    Elevating and celebrating the achievements of exceptional
                    businesswomen
                  </h2>
                  <Link
                    href="/awards"
                    className="cursor-pointer flex items-center mt-auto text-black bg-brand-pink border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-dark-pink transition-all rounded"
                  >
                    Get nominating
                    <IoIosArrowRoundForward />
                  </Link>
                </div>
              </div>

              <div className="p-4 sm:w-1/2 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg bg-gray-50 flex flex-col relative overflow-hidden z-10">
                  <div className="mb-5 rounded p-10">
                    <Image
                      src="/img/icons/microphone-solid.svg"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <h1 className="text-xl font-bold text-dark-blue mb-3 leading-none">
                    Conference
                  </h1>
                  <h2 className="text-sm tracking-widest title-font mb-24 font-medium">
                    An opportunity for women in all walks of business, to
                    connect and be empowered from an all-female lineup of
                    experts.
                  </h2>
                  <Link
                    href="/conference"
                    className="cursor-pointer flex items-center mt-auto text-white bg-brand-pink border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-dark-pink transition-all rounded"
                  >
                    Find out more
                    <IoIosArrowRoundForward />
                  </Link>
                </div>
              </div>

              <div className="p-4 sm:w-1/2 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg bg-gray-50 flex flex-col relative overflow-hidden z-10">
                  <div className="mb-5 rounded p-10">
                    <Image
                      src="/img/icons/events-icon.svg"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <h1 className="text-xl font-bold text-dark-blue mb-3 leading-none">
                    Events
                  </h1>
                  <h2 className="text-sm tracking-widest title-font mb-24 font-medium">
                    Building your intentional community & strategic support
                    system as a professional women. Events are suitable both for
                    women in business and women in the workplace.
                  </h2>
                  <Link
                    href="/events"
                    className="cursor-pointer flex items-center mt-auto text-white bg-brand-pink border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-dark-pink transition-all rounded"
                  >
                    Find your peers
                    <IoIosArrowRoundForward />
                  </Link>
                </div>
              </div>
              <div className="p-4 sm:w-1/2 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg bg-gray-50 flex flex-col relative overflow-hidden z-10">
                  <div className="mb-5 rounded p-10">
                    <Image
                      src="/img/icons/my-success-story-icon.svg"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <h1 className="text-xl font-bold text-dark-blue mb-3 leading-none">
                    Membership
                  </h1>
                  <h2 className="text-sm tracking-widest title-font mb-24 font-medium">
                    For women starting, growing or scaling a small business and
                    female founders & directors running high turnover
                    businesses.
                  </h2>
                  <Link
                    href="/membership"
                    className="cursor-pointer flex items-center mt-auto text-white bg-brand-pink border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-dark-pink transition-all rounded"
                  >
                    Find Success
                    <IoIosArrowRoundForward />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="image-wave-1-container ">
          <Image
            src="/img/separator-bg.png"
            className="image-wave-1  w-full relative z-0 sm:mt-[-250px] lg:mt-[-450px]"
            alt=""
            height={10}
            width={100}
          />
        </div>
      </main>
    </div>
  );
}
