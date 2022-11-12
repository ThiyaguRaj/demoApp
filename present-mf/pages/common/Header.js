import React, { useState } from "react";
import { Menu } from "react-feather";
import { ObSlider } from "../../ObUik";
import router from "next/router";

export const linkItems = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/components/Introduction",
    name: "Introduction",
  },
  {
    url: "/components/OnebillAndMf",
    name: "Onebill & MF",
  },
  {
    url: "/components/Walkthrough",
    name: "Brief walkthrough",
  },
  {
    url: "/components/Limitations",
    name: "Limitations",
  },
  {
    url: "/components/Conclusion",
    name: "Conclusion",
  },
];

function Header(props) {
  const [showLink, setShowLink] = useState(false);
  const getUiLink = (url, name, index) => (
    <li
      onClick={() => {
        setShowLink(false);
        router.pathname !== url && router.push(url);
      }}
      key={index}
      className={`py-3 cursor-pointer w-full pl-12 hover:text-white ${
        router.pathname === url
          ? "text-white cursor-not-allowed"
          : "text-gray-500"
      }`}
    >
      {name}
    </li>
  );

  return (
    <div className="p-10 py-3 borde shadow-sm border-gray-200 sticky top-0 bg-white z-100">
      <Menu
        onClick={() => setShowLink(true)}
        className="h-8 w-8 text-gray-500 cursor-pointer"
      />
      {showLink && (
        <ObSlider.SliderDialog
          disableDialogBtn
          className="max-w-[200px]"
          onClose={() => setShowLink(false)}
        >
          <ObSlider.Body className="bg-gray-800 pt-10">
            <ul className="flex flex-col items-center justify-center font-semibold">
              {linkItems.map((item, index) =>
                getUiLink(item.url, item.name, index)
              )}
            </ul>
          </ObSlider.Body>
        </ObSlider.SliderDialog>
      )}
    </div>
  );
}

export default Header;
