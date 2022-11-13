import React from "react";
import UISection from "./UISection";

function Introduction(props) {
  return (
    <div className="flex flex-col gap-8 lg:px-16 break-keep">
      <UISection
        heading="What is Micro frontend?"
        content="Micro frontend is a pattern where UI utilities were build as an appilication, seperated from the main application and deployed seperately, which other applications can utilise in order to create an efficient client application.  It extends the concepts of micro services to the frontend world."
      />
      <UISection
        heading=""
        content={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={"/micro-frontend-architecture.png"}
            alt="Microfront end architectural diagram"
          />
        }
      />
      <UISection
        heading="Features of Micro-frontends"
        content={
          <ul className="list-none pl-4">
            <li>
              Each frontend in the micro-frontend application is designed to
              solve a specific problem or provide a unique feature.
            </li>
            <li>
              The frontends cannot share the logic since they are independent of
              each other. i.e. No or less source code repetation.
            </li>
            <li>A given team can manage a given frontend.</li>
          </ul>
        }
      />
      {/* <UISection
        heading="Advantages of micro-frontends"
        content={
          <ul className="list-none pl-4">
            <li>
              Each frontend in the micro-frontend application is designed to
              solve a specific problem or provide a unique feature.
            </li>
            <li>
              The frontends cannot share the logic since they are independent of
              each other. i.e. No or less source code repetation.
            </li>
            <li>A given team can manage a given frontend.</li>
          </ul>
        }
      /> */}
      <UISection
        heading="Module federation plugin"
        content="Webpack 5 provides a plugin called module federation plugin which gives developers a way to create multiple separate builds that form a single application. Any JavaScript application that is bundled with Webpack 5.0 or greater can dynamically load or share code and dependencies with any other at runtime."
      />
    </div>
  );
}

export default Introduction;
