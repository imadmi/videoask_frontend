"use client";

import { RxVideo } from "react-icons/rx";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";

const GoToProfile = () => {
  const control = useAnimationControls();

  const handleonMouseEnter: any = () => {
    control.start("visible");
  };
  const handleonMouseLeave: any = () => {
    control.start("hidden");
  };

  return (
    <Link href={"/profile"} className="flex items-center">
      <div className="flex flex-row items-center text-white font-sans">
        <RxVideo
          onMouseEnter={handleonMouseEnter}
          onMouseLeave={handleonMouseLeave}
          size="60"
          className="p-3 rounded-full bg-[#407bff] z-10"
        />
        <motion.div
          initial="hidden"
          transition={{ duration: 0.5, ease: "easeOut" }}
          animate={control}
          variants={{
            hidden: { visibility: "hidden", x: -30 },
            visible: { visibility: "visible", opacity: 1, x: -8 },
          }}
          className="bg-[#407bff] py-2 pr-3 pl-3 -translate-x-2 rounded-r-xl"
        >
          See all videos
        </motion.div>
      </div>
    </Link>
  );
};

export default GoToProfile;
