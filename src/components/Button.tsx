import type { ReactElement } from "react";

interface Styles {
  text: string;
  color: "primary" | "secondary";
  icon: ReactElement;
}

interface btnStyleInt {
  primary: string;
  secondary: string;
}

let btnStyles: btnStyleInt = {
  secondary: "bg-[#e0e7ff] text-[#5046e4]",
  primary: "bg-[#5046e4] text-white",
};

let defaultStyles = {
  styles: "rounded-lg px-4 py-2 flex gap-2 items-center font-medium m-20",
};

export function Button(props: Styles) {
  return (
    <button className={`${btnStyles[props.color]} ${defaultStyles.styles}`}>
      {props.icon}
      {props.text}
    </button>
  );
}
