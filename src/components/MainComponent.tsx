import { useEffect, useState } from "react";
import { AddIcon } from "./AddIcon";
import { Button } from "./Button";
import { Card } from "./Card";
import { ShareIcon } from "./ShareIcon";
import { ShareModal } from "./ShareModal";
import { Sidebar } from "./Sidebar";
import { AddContentModal } from "./AddContentModal";
import axios from "axios";

export function MainComponent() {
  interface contentType {
    type: "tweet" | "video";
    tags: string[];
    link: string;
    title: string;
    _id: string;
  }

  let [isShare, setIsShare] = useState(false);
  let [isAdd, setIsAdd] = useState(false);
  let [content, setContent] = useState<contentType[]>([]);

  async function fetch() {
    let response = await axios.get("http://localhost:3000/api/v1/content", {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    setContent(response.data.content);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="px-7 ml-72 py-7 h-screen flex-1">
        <div className="flex justify-between">
          <p className="h-fit text-3xl font-bold">All Contents</p>
          <div className="flex gap-4">
            <Button
              onClick={() => setIsShare(!isShare)}
              icon={<ShareIcon />}
              text="Share Brain"
              color="secondary"
            />
            <Button
              onClick={() => setIsAdd(!isAdd)}
              icon={<AddIcon />}
              text="Add Content"
              color="primary"
            />
          </div>
        </div>
        <div className="mt-8 pb-12 flex flex-wrap gap-5 justify-center">
          {content.map((e) => (
            <Card
              fetch={fetch}
              tags={e.tags}
              type={e.type}
              link={e.link}
              _id={e._id}
              topHeading={e.title}
            />
          ))}
        </div>
      </div>
      <ShareModal
        setIsShared={() => setIsShare(!isShare)}
        isShared={isShare}
        isVisible={`${isShare}`}
      />
      <AddContentModal
        fetcher={fetch}
        setIsAdd={() => setIsAdd(!isAdd)}
        isAdd={isAdd}
        isVisible={`${isAdd}`}
      />
    </div>
  );
}
