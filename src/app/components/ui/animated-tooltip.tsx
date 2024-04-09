"use client";
import Image from "next/image";

export const AnimatedTooltip = ({
    src,
}: {
    src: string ;
}) => {
  return (
    <>
        <div className="-mr-4  relative group">
          <Image
            height={100}
            width={100}
            src={src}
            alt={src}
            className="object-cover !m-0 !p-0 object-top rounded-full 
            h-40 w-40 border-2 group-hover:scale-105 border-white relative transition duration-500"
          />
        </div>
    </>
  );
};
