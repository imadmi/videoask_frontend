import { VideoAsk } from "./src/app/types";

const mockData: VideoAsk[] = [
  {
    id: "1",
    title: "This is the title 1 الْعَرَبِيَّة",
    url: "/videos/video1.mp4",
    questions: [
      {
        question: "Creating a videoask الْعَرَبِيَّة",
        audioUrl: "/audios/audioTest2.mp3",
        next_video_id: "2",
      },
      {
        question: "Navigating your responses",
        audioUrl: "/audios/audioTest.mp3",
        next_video_id: "3",
      },
      {
        question: "Managing your contacts",
        audioUrl: "/audios/audioTest2.mp3",
        next_video_id: "4",
      },
      {
        question: "Account and org settings",
        audioUrl: "/audios/audioTest.mp3",
        next_video_id: "5",
      },
      {
        question: "Click to open a new tab!",
        audioUrl: "/audios/audioTest2.mp3",
        next_video_id: "https://www.hello.com/",
      },
    ],
  },

  {
    id: "2",
    title: "This is the title 2",
    url: "/videos/video2.mp4",
    questions: [
      {
        question: "Navigating your responses",
        audioUrl: "",
        next_video_id: "3",
      },
      {
        question: "Managing your contacts الْعَرَبِيَّة",
        audioUrl: "",
        next_video_id: "4",
      },
      {
        question: "Account and org settings",
        audioUrl: "",
        next_video_id: "5",
      },
      {
        question: "I'm ready, go to my dashboard!",
        audioUrl: "",
        next_video_id: null,
      },
    ],
  },

  {
    id: "3",
    title: "This is the title 3",
    url: "/videos/video3.mp4",
    questions: [
      {
        question: "Creating a videoask",
        audioUrl: "",
        next_video_id: "2",
      },
      {
        question: "Managing your contacts",
        audioUrl: "",
        next_video_id: "4",
      },
      {
        question: "Account and org settings  الْعَرَبِيَّة",
        audioUrl: "",
        next_video_id: "5",
      },
      {
        question: "I'm ready, go to my dashboard!",
        audioUrl: "",
        next_video_id: null,
      },
    ],
  },

  {
    id: "4",
    title: "This is the title 4",
    url: "/videos/video4.mp4",
    questions: [
      {
        question: "Creating a videoask",
        audioUrl: "",
        next_video_id: "2",
      },
      {
        question: "Navigating your responses",
        audioUrl: "",
        next_video_id: "3",
      },
      {
        question: "Account and org settings",
        audioUrl: "",
        next_video_id: "5",
      },
      {
        question: "I'm ready, go to my dashboard!  الْعَرَبِيَّة",
        audioUrl: "",
        next_video_id: null,
      },
    ],
  },

  {
    id: "5",
    title: "This is the title 5",
    url: "/videos/video5.mp4",
    questions: [
      {
        question: "Creating a videoask  الْعَرَبِيَّة",
        audioUrl: "",
        next_video_id: "2",
      },
      {
        question: "Navigating your responses",
        audioUrl: "",
        next_video_id: "3",
      },
      {
        question: "Managing your contacts",
        audioUrl: "",
        next_video_id: "4",
      },
      {
        question: "I'm ready, go to my dashboard!",
        audioUrl: "",
        next_video_id: null,
      },
    ],
  },
];

export { mockData };
