"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { IoMdVolumeMute } from "react-icons/io";
import { RiFullscreenFill } from "react-icons/ri";
import { MdOutlineFullscreenExit } from "react-icons/md";
import { useAppContext } from "../AppContext";
import { MdOutlineVoiceOverOff } from "react-icons/md";
import { MdRecordVoiceOver } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const VideoControls = ({
  videoRef,
  toggleFullscreen,
  toggleMute,
  togglePlaybackSpeed,
  formatTime,
}: any) => {
  const context = useAppContext();
  const toggleAudioAssistance = () => {
    context.setisVoiceAssistanceEnabled(!context.isVoiceAssistanceEnabled);
  };

  const router = useRouter();

  const GoBack = (e: any) => {
    e.stopPropagation();

    const stack = context.previosVideos.copy();
    if (stack.isEmpty()) {
      router.back();
      return;
    }

    const lastVideo = stack.pop();
    context.setPreviosVideos(stack);
    const videos = context.videoAsks;
    if (!lastVideo) return;
    const nextVideo = videos.find((video) => video.id === lastVideo.id);
    if (nextVideo !== undefined) {
      context.setvideoAsk(nextVideo);
    }
  };

  return (
    <>
      <AnimatePresence>
        {context.isFullscrean && (
          <motion.div
            className="hidden sm:flex absolute top-7 right-5 z-20 border-2 border-white bg-white
             rounded-lg shadow-2xl items-center justify-center cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              toggleFullscreen();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MdOutlineFullscreenExit
              className="text-black rounded-lg shadow-2xl 
            mx-2 my-1"
              size="20"
            />
          </motion.div>
        )}
        {!context.isFullscrean && (
          <motion.div
            className="hidden sm:flex absolute top-7 right-5 z-20 border-2 border-white rounded-lg 
            shadow-2xl items-center justify-center cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              toggleFullscreen();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <RiFullscreenFill
              className="text-white rounded-lg shadow-2xl mx-2 my-1"
              size="20"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          className={`absolute top-7 right-5 sm:right-[70px] z-20 border-2 ${
            context.playbackSpeed === 1
              ? "border-white bg-black bg-opacity-10"
              : "border-white bg-white"
          } rounded-lg shadow-2xl flex items-center justify-center cursor-pointer`}
          onClick={(event) => {
            event.stopPropagation();
            togglePlaybackSpeed();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={`text-${
              context.playbackSpeed === 1 ? "white" : "black"
            } font-sans font-bold text-xs w-9 flex items-center justify-center h-7`}
          >
            {context.playbackSpeed}x
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {!context.isMuted ? (
          <motion.div
            className="absolute top-7 right-[70px] sm:right-[122px] z-20 border-2 pl-1 border-white 
            bg-white rounded-lg shadow-2xl flex items-center justify-center cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              toggleMute();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <IoMdVolumeMute
              className="text-black rounded-lg shadow-2xl mx-2 my-1"
              size="20"
            />
          </motion.div>
        ) : (
          <motion.div
            className="absolute top-7 right-[70px] sm:right-[122px] z-20 border-2 border-white rounded-lg 
            shadow-2xl flex items-center justify-center cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              toggleMute();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <IoVolumeMuteSharp
              className="text-white rounded-lg shadow-2xl mx-2 my-1"
              size="20"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {context.isVoiceAssistanceEnabled ? (
          <motion.div
            className="absolute top-7 right-[124px] sm:right-[178px] z-20 border-2 pl-1 border-white 
            bg-white rounded-lg shadow-2xl flex items-center justify-center cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              toggleAudioAssistance();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MdRecordVoiceOver
              className="text-black rounded-lg shadow-2xl mx-2 my-1"
              size="20"
            />
          </motion.div>
        ) : (
          <motion.div
            className="absolute top-7 right-[124px] sm:right-[178px] z-20 border-2 border-white rounded-lg 
            shadow-2xl flex items-center justify-center cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              toggleAudioAssistance();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MdOutlineVoiceOverOff
              className="text-white rounded-lg shadow-2xl mx-2 my-1"
              size="20"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-7 right-[174px] sm:right-[228px] z-20 rounded-lg shadow-2xl flex 
          items-center justify-center cursor-pointer w-auto"
        >
          <div
            className="text-white font-sans font-semibold text-md flex items-center 
          justify-center h-7 w-auto"
          >
            {formatTime(videoRef.current?.currentTime)} /
            {formatTime(videoRef.current?.duration)}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* <AnimatePresence>
        <motion.div
          onClick={GoBack}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-7 left-5 z-20 rounded-lg shadow-2xl flex 
          items-center justify-center cursor-pointer w-auto sm:hidden"
        >
          <MdOutlineKeyboardBackspace
            className="text-white font-sans font-semibold text-md flex items-center 
          justify-center h-7 w-auto"
            size="50"
          />
        </motion.div>
      </AnimatePresence> */}
      <div className="absolute bottom-0 right-0 w-full h-10 bg-cyan-400 bg-opacity-50 
      flex flex-row justify-center items-center font-sans">
        Powered by:
        <img
          src="/pictures/Vochai-logo-blue.png"
          className="ml-2 text-white h-7 "
        />
      </div>
    </>
  );
};

export default VideoControls;
