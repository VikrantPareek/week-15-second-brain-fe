import { ShareIcon } from "./ShareIcon";
import { DeleteIcon } from "./DeleteIcon";
import { TwitterIcon } from "./TwitterIcon";
import { YoutubeIcon } from "./YoutubeIcon";
import axios from "axios";

interface Styles {
  topHeading: string;
  type: "tweet" | "video";
  link: string;
  tags: string[];
  _id: string;
  fetch?: () => void;
}

export function Card(props: Styles) {
  async function onDelete() {
    let contentId = props._id;
    await axios.delete("http://localhost:3000/api/v1/content", {
      data: {
        contentId,
      },
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    props.fetch?.();
  }

  return (
    <div className="border-2 rounded-xl border-md border-[#e5e7e8] max-w-96 h-fit w-fit px-5 py-4">
      <div className="flex items-center justify-between gap-20">
        <div className="flex items-center gap-2">
          {props.type == "tweet" ? <TwitterIcon /> : <YoutubeIcon />}{" "}
          {props.topHeading}
        </div>
        <div className="flex gap-3">
          <ShareIcon /> {<DeleteIcon onclick={() => onDelete()} />}
        </div>
      </div>
      <div className="flex flex-col items-center my-3">
        {props.type == "video" ? (
          <iframe
            className="my-3 rounded-xl h-64 outline-none border-none"
            width="100%"
            src={props.link.replace("youtu.be", "www.youtube.com/embed")}
            title="Dooron Dooron (Official Video) - Paresh Pahuja Feat. Harleen Sethi | Shiv | Meghdeep | Vaibhav"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        ) : (
          <blockquote className="twitter-tweet outline-none border-none">
            <a href={props.link}></a>
          </blockquote>
        )}
        <div className="flex self-start flex-wrap gap-2">
          {props.tags.map((e) => (
            <p className="bg-[#e0e7ff] text-[#5046e4] px-3 py-1 text-sm rounded-full">
              {"#" + e}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
