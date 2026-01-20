"use client";
import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";

const Second = () => {
  return (
    <section className="bg-[#f9f9f9] min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT – from LEFT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <p className="text-blue-500 font-semibold tracking-wide mb-4 text-2xl">
            LETS START YOUR CAREERS HERE!
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Looking for a career <br />
            change? Browse our job <br />
            listings now!
          </h1>

          <p className="text-gray-600 leading-relaxed mb-8">
            Mus vehicula dignissim quis si lorem libero cras pulvinar orci dapibus.
            Sagittis quisque orci pretium donec elit platea porta integer maecenas
            risus lobortis.
          </p>

         <Link href="job/jobcategory">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-3 rounded-md transition w-fit">
            BROWSE JOB
          </button>
         </Link>
        </motion.div>

        {/* RIGHT IMAGE – from RIGHT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full -z-10" />
          <div className="absolute w-[550px] h-[550px] bg-[#0f2a35] rounded-full -z-20" />

          <Image
            src="/images/second.png"
            alt="Job Hero"
            width={620}
            height={720}
            className="object-contain rounded-3xl border border-white/40"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Second;
