import React from "react";
import { MdCloudUpload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { useAppContext } from "../AppContext";

export default function UploadAudio({ qstnIndex }: { qstnIndex: number }) {
  const context = useAppContext();
  const handelUpload = async (e: any, Audiofile: File) => {
    e.preventDefault();

    if (!Audiofile) return;

    try {
      const data = new FormData();
      data.set("file", Audiofile);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/uploadfile`, {
        method: "POST",
        credentials: "include",
        body: data,
      });

      const resData = await res.json();

      if (!res.ok) {
        toast.error("Failed to upload the audio");
        return "";
      }

      if (resData && resData.success) {
        context.setisAudioModalOpen(false);
        const newVideoAsk = [...context.videoAsks];
        if ("url" in newVideoAsk[context.VideoaskIndex]) {
          console.log("qstnIndex ", qstnIndex);
          newVideoAsk[context.VideoaskIndex].questions[qstnIndex].audioUrl =
            resData.url;
          context.setVideoAsks(newVideoAsk);
        }
        return resData.url;
      } else {
        toast.error("Failed to upload audio");
        return "";
      }
    } catch (e: any) {
      toast.error("Failed to upload audio" + e);
      return "";
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    if (e.dataTransfer.items[0].kind === "file") {
      const file = e.dataTransfer.items[0].getAsFile();
      handelUpload(e, file);
    }
  };

  return (
    <div>
      <div
        className="fixed inset-0 w-screen h-dvh bg-gray-500 flex items-center 
                justify-center bg-opacity-40 backdrop-blur-lg"
      >
        <div className="relative w-[450px] h-96 bg-white rounded-[40px] p-4 z-10">
          <button
            onClick={() => context.setisAudioModalOpen(false)}
            className="absolute top-4 right-9"
          >
            <IoClose className="my-3 text-gray-600" size="23" />
          </button>
          <div className="font-bold text-lg ml-7 my-3">Upload a audio</div>
          <div
            className="border-dashed border-4 m-4 h-[80%] border-gray-300 rounded-[40px]
                    flex flex-col items-center justify-center space-y-2"
            // onDragOver={handleDragOver}
            // onDrop={handleDrop}
          >
            <MdCloudUpload className="text-cyan-400" size="60" />
            <div className=" text-xl font-sans">Drag a audio to upload</div>
            <div className="font-thin text-lg"> Or</div>
            <input
              id="audioInput"
              type="file"
              name="file"
              accept="audio/*"
              onChange={(e) => {
                if (
                  e.target.files &&
                  e.target.files?.[0] &&
                  e.target.files.length > 0
                ) {
                  handelUpload(e, e.target.files?.[0]);
                }
              }}
              hidden
            />
            <button
              onClick={(e) => {
                document.getElementById("audioInput")?.click();
              }}
              className="rounded-full border-[3px] border-cyan-400 text-cyan-400 py-1 px-4"
            >
              Brows files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
