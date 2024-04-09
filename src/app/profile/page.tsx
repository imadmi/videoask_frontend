"use client";
import VideosGallery from "@/app/components/VidesGallery";

const VideoUploadForm = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="font-bold text-2xl h-20 mt-20">All videoAsks :</div>
      <VideosGallery />
    </div>
  );
};

export default VideoUploadForm;
