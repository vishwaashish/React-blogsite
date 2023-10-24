import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { StyleCSS } from "./NavbarRoot";
const useHeader = () => {
  const [colortoggle, setColorToggle] = React.useState(() => {
    const modes = window.matchMedia("(prefers-color-scheme: dark)")?.matches;
    const local = localStorage.getItem("ColorToggle");
    if (local) {
      return JSON.parse(local)?.iscolor;
    } else {
      return modes;
    }
  });

  const [navtoggle, setNavToggle] = React.useState(true);
  const [togglesearch, setTogglesearch] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);
  const history = useLocation();
  const pathname = history.pathname === "/" || history.pathname === "/home";

  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 66) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
  });

  React.useEffect(() => {
    StyleCSS({ colortoggle: colortoggle });
  }, [colortoggle]);

  const Togglefuc = useCallback((e) => {
    const { checked } = e.target;
    if (checked) {
      setColorToggle(true);
      localStorage.setItem("ColorToggle", JSON.stringify({ iscolor: true }));
    } else {
      localStorage.setItem("ColorToggle", JSON.stringify({ iscolor: false }));

      setColorToggle(false);
    }
  }, []);

  const ToggleSearch = useCallback(() => {
    setTogglesearch((togglesearch) => !togglesearch);
  }, []);

  const NavToggle = useCallback(() => {
    setNavToggle((navtoggle) => !navtoggle);
    window.scrollTo(0, 0);
  }, []);

  return {
    navtoggle,
    togglesearch,
    navbar,
    pathname,
    colortoggle,
    history,
    Togglefuc,
    ToggleSearch,
    NavToggle,
    setTogglesearch,
    setNavToggle,
  };
};

export default useHeader;
