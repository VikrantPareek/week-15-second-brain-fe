import type { ReactElement } from "react";

interface Style {
  startIcon: ReactElement;
  text: String;
}

export function SideOption(props: Style) {
  return (
    <div className="flex cursor-pointer w-full px-5 rounded-lg py-2 gap-5 items-center text-lg">
      <div>{props.startIcon}</div>
      <div>{props.text}</div>
    </div>
  );
}
