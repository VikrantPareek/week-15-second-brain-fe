import { useState } from "react";
import { AddIcon } from "./components/AddIcon";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { ShareIcon } from "./components/ShareIcon";
import { ShareModal } from "./components/ShareModal";
import { Sidebar } from "./components/Sidebar";
import { AddContentModal } from "./components/AddContentModal";

function App() {
  let [isShare, setIsShare] = useState(false);
  let [isAdd, setIsAdd] = useState(false);
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
          <Card
            tags={["esfsef", "jseh"]}
            type={"video"}
            link="https://youtu.be/CGhGAVH2GqY?list=RDCGhGAVH2GqY"
            topHeading="NEW VIRAL SONG"
          />
          <Card
            tags={["esfsef", "jseh"]}
            type={"tweet"}
            link="https://x.com/VikrantPareek_/status/2037014368416829596?s=20"
            topHeading="NEW VIRAL SONG"
          />
          <Card
            tags={["esfsef", "jseh"]}
            type={"tweet"}
            link="https://x.com/VikrantPareek_/status/2037014368416829596?s=20"
            topHeading="NEW VIRAL SONG"
          />
          <Card
            tags={["esfsef", "jseh"]}
            type={"video"}
            link="https://youtu.be/CGhGAVH2GqY?list=RDCGhGAVH2GqY"
            topHeading="NEW VIRAL SONG"
          />
          <Card
            tags={["esfsef", "jseh"]}
            type={"video"}
            link="https://youtu.be/CGhGAVH2GqY?list=RDCGhGAVH2GqY"
            topHeading="NEW VIRAL SONG"
          />
          <Card
            tags={["esfsef", "jseh"]}
            type={"video"}
            link="https://youtu.be/CGhGAVH2GqY?list=RDCGhGAVH2GqY"
            topHeading="NEW VIRAL SONG"
          />
          <Card
            tags={["esfsef", "jseh"]}
            type={"video"}
            link="https://youtu.be/CGhGAVH2GqY?list=RDCGhGAVH2GqY"
            topHeading="NEW VIRAL SONG"
          />
          <Card
            tags={["esfsef", "jseh"]}
            type={"video"}
            link="https://youtu.be/CGhGAVH2GqY?list=RDCGhGAVH2GqY"
            topHeading="NEW VIRAL SONG"
          />
          <Card
            tags={["esfsef", "jseh"]}
            type={"video"}
            link="https://youtu.be/CGhGAVH2GqY?list=RDCGhGAVH2GqY"
            topHeading="NEW VIRAL SONG"
          />
        </div>
      </div>
      <ShareModal
        setIsShare={() => setIsShare(!isShare)}
        isShare={isShare}
        isVisible={`${isShare}`}
      />
      <AddContentModal
        setIsAdd={() => setIsAdd(!isAdd)}
        isAdd={isAdd}
        isVisible={`${isAdd}`}
      />
    </div>
  );
}

export default App;
