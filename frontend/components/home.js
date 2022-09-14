import { motion } from "framer-motion";
import { useRef } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import "./homestyle.module.css";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  const prevT = useRef(0);
  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;

    const timeDelta = t - prevT.current;
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="">
      <motion.div
        className="font-semibold uppercase text-6xl flex flex-nowrap whitespace-nowrap"
        style={{ x }}
      >
        <span className="block mr-0">{children} </span>
        <span className="block mr-0">{children} </span>
        <span className="block mr-0">{children} </span>
        <span className="block mr-0">{children} </span>
      </motion.div>
    </div>
  );
}

export default function Homepage() {
  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });

  return (
    <div className="relative">
      <div className="flex flex-wrap w-full">
        <div className="pt-16 mt-28 mx-20 w-4/5">
          <motion.div
            animate={{ x: 100 }}
            transition={{ type: "spring", stiffness: 20, delay: 0.7 }}
          >
            <p className="text-white text-6xl font-bold uppercase max-w-1/2 font-gfont">
              Mirror Pay
            </p>
          </motion.div>
          <div className="text-white">
            <p></p>
          </div>
          <br />
          <motion.div
            animate={{ x: 100 }}
            transition={{ type: "spring", stiffness: 20, delay: 0.7 }}
          >
            <p className="text-white text-3xl max-w-1/2">
              Mirror Pay is an open source, De-Fi platform that allows companies
              to pay workers internationally in crypto.{" "}
            </p>
          </motion.div>
          <br />
          <div className="flex items-start justify-start py-6 mx-28">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="pl-3 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                  Get Started &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-white h-2 w-1/5 float-right py-16 my-28">hello</p>
        </div>
      </div>
      <br />
      <div className="text-white tracking-tight font-bold font-yofont py-40 leading-3 m-0 whitespace-nowrap flex-nowrap">
        <ParallaxText baseVelocity={-5}>More Security</ParallaxText>
        <ParallaxText baseVelocity={5}>More Transparency</ParallaxText>
      </div>
      <br />
      <div className="flex flex-wrap w-full">
        <div className="w-1/2 float-left ml-20">
          <p className="text-white text-4xl font-extrabold tracking-wide uppercase">
            The{" "}
            <span
              className="bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text"
            >
              De
            </span>{" "}
            <span className="line-through">Centralised</span> global payroll
            solution
          </p>
          <br />
          <p className="text-white text-xl tracking-wide">
            MirrorPay unifies global contractor payments, employer of record
            services, and payroll management for your international entities in
            one platform.
          </p>
        </div>
        <div className="w-1/3 float-right ml-16">
          <img src="../images/pic.png" alt="Just a pic" />
        </div>
      </div>
      <br />
      <br />
      <div className="flex justify-center pt-16 items-center">
        <p className="text-white text-4xl font-extrabold tracking-wide uppercase">
          What is{" "}
          <span className="underline decoration-blue-500">Different ?</span>
        </p>
      </div>
      <br />
      <div className="flex flex-wrap flex-row pt-20 items-stretch mx-24">
        <div className="md:basis-1/2 float-right flex-auto">
          <div className="">
            <img
              src="../images/Security.png"
              alt="security.png"
              className="object-contain w-full h-80"
            />
          </div>
        </div>
        <div className="md:basis-1/2 float-left flex-auto">
          <div className="flex md:justify-start justify-center">
            <p
              className="text-white text-4xl font-extrabold tracking-wide uppercase bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-500  to-blue-600
            animate-text"
            >
              Better Security
            </p>
          </div>
          <br />
          <p className="text-white text-xl tracking-wide pt-4 m-auto">
            In contrast to centralized solutions, decentralized systems ensure
            private data remains immutable and secure and is only able to be
            shared when outlined users consent to provide information.
          </p>
        </div>
      </div>
      <br />
      <div className="flex flex-wrap flex-row pt-32 items-stretch mx-24">
        <div className="md:basis-1/2 float-left flex-auto mx-auto">
          <div className="flex md:justify-start justify-center">
            <p
              className="text-white text-4xl font-extrabold tracking-wide uppercase bg-gradient-to-r bg-clip-text  text-transparent 
            from-yellow-500  to-red-300
            animate-text"
            >
              More Transparency
            </p>
          </div>
          <br />
          <p className="text-white text-xl tracking-wide pt-4 mx-auto md:mr-6">
            We are a decentralized system, which by definition means, an
            immutable distributed ledger that allows everyone to view every
            single transaction. So no more hiding!!
          </p>
        </div>
        <div className="md:basis-1/2 float-right flex-auto justify-center">
          <div className="">
            <img
              src="../images/Question-mark.png"
              alt="question-mark"
              className="w-2/3 h-80"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-wrap flex-row pt-40 items-stretch mx-24">
        <div className="md:basis-1/2 float-right flex-auto">
          <div className="">
            <img
              src="../images/Payroll.png"
              alt="payroll"
              className="w-full h-80"
            />
          </div>
        </div>
        <div className="md:basis-1/2 float-left flex-auto">
          <div className="flex md:justify-start justify-center">
            <p
              className="text-white text-4xl font-extrabold tracking-wide uppercase bg-gradient-to-r bg-clip-text  text-transparent 
            from-white via-pink-300 to-blue-400
            animate-text"
            >
              Manage Payroll
            </p>
          </div>
          <br />
          <p className="text-white text-xl tracking-wide pt-4 m-auto">
            Reduce admin tasks by your in-house team. Work with Remote to manage
            payroll across multiple countries where you have local entities,
            without in-house administration.
          </p>
        </div>
      </div>
      <br />
      <div className="pt-20">
        <footer class="p-4 bg-gray-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span class="text-sm text-white sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="" class="">
              MirrorPay™
            </a>
            . All Rights Reserved.
          </span>
          <span className="text-sm text-white dark:text-gray-400">
            Built with 💜 by<span className="mr-3">:</span>
            <a href="" className="mr-3 text-white">
              Adam
            </a>{" "}
            <a href="https://twitter.com/Arcsh7" className="mr-3 text-white">
              Archit
            </a>{" "}
            <a href="" className="text-white">Chiaki</a>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-lg text-white dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://github.com/Architsharma7/Mirror-Pay"
                class="mr-4 hover:text-blue-500 md:mr-6 text-white"
              >
                Github
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:text-blue-500 md:mr-6 text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:text-blue-500 md:mr-6 text-white">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-500 text-white">
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
