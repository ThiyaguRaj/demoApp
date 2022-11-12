import { useRouter } from "next/router";
import UISection from "./components/UISection";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-[15vh] lg:gap-10 gap-20">
      <img
        width="450"
        src="	https://react-intro-tb.netlify.app/static/media/web.b0ad84dd813c7b932937.gif"
      />
      <div className="text-center">
        <div className="text-5xl font-bold text-black mb-3">
          Reusable components!
        </div>
        <span style={{ lineHeight: "1px" }}>
          We're going to talk about what micro frontend is, how we can adopt
          reusable components and how we can acheive this in our applications.{" "}
        </span>
        <button
          className="cssbuttons-io-button mx-auto mt-4"
          onClick={() => router.push("/components/Introduction")}
        >
          {" "}
          Get started
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
