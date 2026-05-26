import { useRef } from "react";
import { AddIcon } from "./AddIcon";
import { Button } from "./Button";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import axios from "axios";

export function SignIn() {
  let usernameRef = useRef<HTMLInputElement>(null);
  let passwordRef = useRef<HTMLInputElement>(null);
  let navigate: NavigateFunction = useNavigate();

  async function sendReq() {
    let username = usernameRef.current?.value;
    let password = passwordRef.current?.value;
    let response = await axios.post("http://localhost:3000/api/v1/signin", {
      username,
      password,
    });
    if (response.status == 200) {
      let token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    }
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#7d7d7d]">
      <div className="w-sm px-6 rounded-lg py-6 bg-white">
        <div className="flex items-center text-center justify-between">
          <p className="text-2xl font-semibold">SignIn</p>
          <AddIcon extraStyle="rotate-45" />
        </div>
        <div className="my-5 flex items-center flex-col gap-y-3">
          <div>
            <label className="text-lg font-semibold" htmlFor="Username">
              Username:
            </label>
            <input
              ref={usernameRef}
              type="text"
              id="Username"
              placeholder="Enter Username"
              className="mt-2 border border-md block border-gray-300 w-2xs px-4 py-2 rounded-lg outline-none"
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="Password">
              Password:
            </label>
            <input
              ref={passwordRef}
              type="text"
              id="Password"
              placeholder="Enter Password"
              className="mt-2 border border-md block border-gray-300 w-2xs px-4 py-2 rounded-lg outline-none"
            />
          </div>
        </div>
        <Button
          onClick={sendReq}
          extraStyle="mx-auto justify-center"
          text="SignIn"
          color="primary"
        />
      </div>
    </div>
  );
}
