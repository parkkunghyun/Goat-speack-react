
import { useRecoilState } from "recoil"
import { themeState } from "../recoil/themeAtom"
import { useEffect } from "react";

export const useDarkTheme = () => {
    const [theme, setTheme] = useRecoilState(themeState);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, [setTheme]);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }
  return {theme, toggleTheme};
}

