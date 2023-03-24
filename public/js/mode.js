const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const userTheme = localStorage.getItem("theme");
window.addEventListener("load", ()=>{
  if(window.location.href !== "https://arpanbhandari.com.np"){
    window.location.replace("https://arpanbhandari.com.np");
  }
})
const themeSet = () => {

  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    return;
  }
};
themeSet();

const colorSchemeQueryList = window.matchMedia("(prefers-color-scheme: dark)");

const setColorScheme = (e) => {
  if(window.location.href !== "https://arpanbhandari.com.np"){
  window.location.replace("https://arpanbhandari.com.np");
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
