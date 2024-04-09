"use client";

import { useAppContext } from "@/app/AppContext";
import VideoAskComponent from "@/app/components/VideoAskComponent";
import { VideoAsk } from "@/app/types";
import { use, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { mockData } from "../../../mockData";
import { useSearchParams } from "next/navigation";

const Page = (param: any) => {
  const context = useAppContext();
  const searchParams = useSearchParams();
  const start = searchParams.get("start");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/getVideoAsk/${param.params.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          console.error("Fetching error:", response);
          return;
        }
        const data = await response.json();
        // const data: VideoAsk[] = mockData; // testing with mock data

        if (data.success === false) {
          console.error("Fetching error:", response);
          return;
        }
        context.setVideoAsks(data.videoAsk.videoAsks as VideoAsk[]);
        context.setvideoAsk(data.videoAsk.videoAsks[0]);
        if (start !== null && start !== "" && start !== undefined) {
          let nextVideo = data.videoAsk.videoAsks.find(
            (video: VideoAsk) => video.id === start
          );
          context.setvideoAsk(nextVideo);
        }
      } catch (error) {
        const message = "Error while fetching :" + error;
        toast.error(message, {
          id: "fetching",
        });
        console.error("Fetchingerror:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <VideoAskComponent routedTo="/dashboard" />
    </>
  );
};

export default Page;
