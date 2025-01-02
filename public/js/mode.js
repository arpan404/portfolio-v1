const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const userTheme = localStorage.getItem("theme");

const themeSet = () => {
  if(window.location.host !== "v1.arpanbhandari.com.np"){
    window.location.replace("https://v1.arpanbhandari.com.np/");
  }
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    return;
  }
};
themeSet();

const colorSchemeQueryList = window.matchMedia("(prefers-color-scheme: dark)");

const setColorScheme = (e) => {
  if(window.location.host !== "v1.arpanbhandari.com.np"){
    window.location.replace("https://v1.arpanbhandari.com.np/");
  }
  if (e.matches) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

colorSchemeQueryList.addEventListener("change", setColorScheme);
