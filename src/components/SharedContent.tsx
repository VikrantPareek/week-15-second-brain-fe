import { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";
import { useParams } from "react-router-dom";

export function SharedContent() {
  let { shareLink } = useParams();
  interface contentType {
    type: "tweet" | "video";
    tags: string[];
    link: string;
    title: string;
    _id: string;
  }

  let [content, setContent] = useState<contentType[]>([]);

  async function fetch() {
    let response = await axios.get(
      "http://localhost:3000/api/v1/brain/" + shareLink,
    );
    setContent(response.data.data.content);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="flex">
      <div className="px-7 py-7 h-screen flex-1">
        <div className="flex justify-between">
          <p className="h-fit text-3xl font-bold">All Contents</p>
        </div>
        <div className="mt-8 pb-12 flex flex-wrap gap-5 justify-center">
          {content.map((e) => (
            <Card
              tags={e.tags}
              type={e.type}
              link={e.link}
              _id={e._id}
              topHeading={e.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
