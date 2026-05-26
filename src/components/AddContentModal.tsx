import { useRef } from "react";
import { AddIcon } from "./AddIcon";
import { Button } from "./Button";
import axios from "axios";

interface extraStyle {
  isVisible: "true" | "false";
  isAdd: true | false;
  setIsAdd: () => void;
  fetcher?: () => {};
}

let styles = {
  true: "block",
  false: "hidden",
};

export function AddContentModal(props: extraStyle) {
  let titleRef = useRef<HTMLInputElement>(null);
  let tagsRef = useRef<HTMLInputElement>(null);
  let linkRef = useRef<HTMLInputElement>(null);
  let typeRef = useRef<HTMLInputElement>(null);

  async function sendReq() {
    let title = titleRef.current?.value.trim();
    let tags = tagsRef.current?.value.trim();
    let link = linkRef.current?.value.trim();
    let type = typeRef.current?.value.toLocaleLowerCase().trim();
    let tagArr = tags?.split(" ").map((e) => e.trim());
    await axios.post(
      "http://localhost:3000/api/v1/content",
      {
        title,
        tags: tagArr,
        link,
        type,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      },
    );
    titleRef.current!.value = "";
    tagsRef.current!.value = "";
    linkRef.current!.value = "";
    typeRef.current!.value = "";
    props.setIsAdd();
    props.fetcher?.();
  }
  return (
    <div
      className={
        styles[props.isVisible] +
        " fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#7d7d7d]"
      }
    >
      <div className="w-2xl px-6 rounded-lg py-6 bg-white">
        <div className="flex items-center text-center justify-between">
          <p className="text-2xl font-semibold">Add Contents</p>
          <div onClick={props.setIsAdd} className="mt-1">
            <AddIcon extraStyle="rotate-45" />
          </div>
        </div>
        <div className="my-8 flex flex-wrap justify-around gap-y-6">
          <div>
            <label className="text-lg font-semibold" htmlFor="title">
              Title:
            </label>
            <input
              ref={titleRef}
              type="text"
              id="title"
              placeholder="Enter Title"
              className="mt-2 border border-md block border-gray-300 w-2xs px-4 py-2 rounded-lg outline-none"
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="Type">
              Type:
            </label>
            <input
              ref={typeRef}
              type="text"
              id="Type"
              placeholder="Enter Type"
              className="mt-2 border border-md block border-gray-300 w-2xs px-4 py-2 rounded-lg outline-none"
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="Link">
              Link:
            </label>
            <input
              ref={linkRef}
              type="text"
              id="Link"
              placeholder="Enter Link"
              className="mt-2 border border-md block border-gray-300 w-2xs px-4 py-2 rounded-lg outline-none"
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="Tags">
              Tags:
            </label>
            <input
              ref={tagsRef}
              type="text"
              id="Tags"
              placeholder="Enter Tags"
              className="mt-2 border border-md block border-gray-300 w-2xs px-4 py-2 rounded-lg outline-none"
            />
          </div>
        </div>
        <Button
          onClick={sendReq}
          extraStyle="mx-auto justify-center"
          text="Add Content"
          color="primary"
          icon={<AddIcon />}
        />
      </div>
    </div>
  );
}
