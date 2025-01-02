const toggleBtn = document.getElementById("mode-toggle-btn");

const setDarkMode = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};
const setLightMode = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
};
toggleBtn.addEventListener("click", (e) => {
  if(window.location.host !== "v1.arpanbhandari.com.np"){
    window.location.replace("https://v1.arpanbhandari.com.np/");
  }
  if (document.documentElement.classList.contains("dark")) {
    setLightMode();
    return;
  }
  setDarkMode();
  return;
});
