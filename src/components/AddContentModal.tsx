import { AddIcon } from "./AddIcon";
import { Button } from "./Button";

export function AddContentModal() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#7d7d7d]">
      <div className="w-2xl px-6 rounded-lg py-6 bg-white">
        <div className="flex items-center text-center justify-between">
          <p className="text-2xl font-semibold">Add Contents</p>
          <AddIcon extraStyle="rotate-45" />
        </div>
        <div className="my-8 flex flex-wrap justify-around gap-y-6">
          <div>
            <label className="text-lg font-semibold" htmlFor="title">
              Title:
            </label>
            <input
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
              type="text"
              id="Tags"
              placeholder="Enter Tags"
              className="mt-2 border border-md block border-gray-300 w-2xs px-4 py-2 rounded-lg outline-none"
            />
          </div>
        </div>
        <Button
          extraStyle="mx-auto justify-center"
          text="Add Content"
          color="primary"
          icon={<AddIcon />}
        />
      </div>
    </div>
  );
}
