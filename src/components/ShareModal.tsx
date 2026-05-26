import axios from "axios";
import { AddIcon } from "./AddIcon";
import { Button } from "./Button";
import { CopyIcon } from "./CopyIcon";
import { useState } from "react";

interface extraStyle {
  isVisible: "true" | "false";
  isShared: true | false;
  setIsShared: () => void;
}

let styles = {
  true: "block",
  false: "hidden",
};

export function ShareModal(props: extraStyle) {
  let [isShared, setIsShared] = useState(false);
  async function shareBrain() {
    try {
      let response = await axios.post(
        "http://localhost:3000/api/v1/brain/share",
        { share: !isShared },
        { headers: { token: localStorage.getItem("token") } },
      );
      if (response.data.link != undefined) {
        await navigator.clipboard.writeText(
          "http://localhost:5173/brain/" + response.data.link,
        );
        alert("Link copied!" + " http://localhost:5173/brain/" + response.data.link);
      } else {
        alert("Sharing Stopped!");
      }
      setIsShared(!isShared);
      props.setIsShared?.();
    } catch (e: any) {
      alert(e.response.data.message + " Click again to stop sharing!");
      setIsShared(!isShared);
    }
  }
  return (
    <div
      className={
        styles[props.isVisible] +
        " fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-[#7d7d7d]"
      }
    >
      <div className="w-96 px-6 rounded-lg py-6 bg-white">
        <div className="flex items-center text-center justify-between">
          <p className="text-lg font-semibold">Share Your Second Brain</p>
          <div onClick={props.setIsShared} className="mt-1">
            <AddIcon extraStyle="rotate-45" />
          </div>
        </div>
        <p className="my-5 text-md">
          Share your entire collection of tweets, and videos with others.
          They'll be able to import your content into their own Second Brain.
        </p>
        <Button
          onClick={shareBrain}
          extraStyle="w-full justify-center"
          text={"Start/Stop Share Brain"}
          color="primary"
          icon={<CopyIcon />}
        />
      </div>
    </div>
  );
}
