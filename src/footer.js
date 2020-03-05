import makeColorStyle from "./makeColorStyle";

const top = document.createElement("div");
top.innerText = "Project managers never ask Chuck Norris for estimations...ever.";
top.style.cssText = makeColorStyle('red');

const bottom = document.createElement("div");
bottom.innerText = "Chuck Norris doesn’t use web standards as the web will conform to him.";
bottom.style.cssText = makeColorStyle('blue');

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer }
