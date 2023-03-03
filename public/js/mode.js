const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const userTheme = localStorage.getItem("theme");
const themeSet = () =>{
  if(userTheme==="dark" || (!userTheme && systemTheme)){
    document.documentElement.classList.add("dark");
    return;
  }
}
themeSet();

const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
  if (e.matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");

  }
}
  
setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener('change', setColorScheme);