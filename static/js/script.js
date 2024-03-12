const letterW$ = document.querySelector("#w");
const letterA$ = document.querySelector("#a");
const letterC$ = document.querySelector("#c");
const letterO$ = document.querySelector("#o");
const images$ = document.querySelector(".image-container");
const overlay$ = document.querySelector(".overlay");
const body = document.querySelector("body");

const letterWWallpapers = [
  "iPhone 14 & 15 Pro - 1",
  "iPhone 14 & 15 Pro - 2",
  "iPhone 14 & 15 Pro - 3",
];
const letterAWallpapers = [
  "iPhone 14 & 15 Pro - 7",
  "iPhone 14 & 15 Pro - 8",
  "iPhone 14 & 15 Pro - 9",
];
const letterCWallpapers = [
  "iPhone 14 & 15 Pro - 4",
  "iPhone 14 & 15 Pro - 5",
  "iPhone 14 & 15 Pro - 6",
];
const letterOWallpapers = [
  "iPhone 14 & 15 Pro - 10",
  "iPhone 14 & 15 Pro - 11",
  "iPhone 14 & 15 Pro - 12",
];

letterW$.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * letterWWallpapers.length);
  let randomWallpaper = letterWWallpapers[randomIndex];
  images$.style.display = "none";
  overlay$.style.display = "block";
  overlay$.innerHTML = `<img src="static/img/letter-W/${randomWallpaper}.png" alt="Letter W" />
    <button class="french">Français</button>`;
  const button$ = document.querySelector(".french");
  button$.addEventListener("click", () => {
    overlay$.innerHTML = `<img src="static/img/letter-W/${randomWallpaper}FR.png" alt="Letter W" />`;
    console.log("français");
  });
});
letterA$.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * letterAWallpapers.length);
  let randomWallpaper = letterAWallpapers[randomIndex];
  images$.style.display = "none";
  overlay$.style.display = "block";
  overlay$.innerHTML = `<img src="static/img/letter-A/${randomWallpaper}.png" alt="Letter A" />
    <button class="french">Français</button>`;
  const button$ = document.querySelector(".french");
  button$.addEventListener("click", () => {
    overlay$.innerHTML = `<img src="static/img/letter-A/${randomWallpaper}FR.png" alt="Letter A" />`;
    console.log("français");
  });
});
letterC$.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * letterCWallpapers.length);
  let randomWallpaper = letterCWallpapers[randomIndex];
  images$.style.display = "none";
  overlay$.style.display = "block";
  overlay$.innerHTML = `<img src="static/img/letter-C/${randomWallpaper}.png" alt="Letter C" />
    <button class="french">Français</button>`;
  const button$ = document.querySelector(".french");
  button$.addEventListener("click", () => {
    overlay$.innerHTML = `<img src="static/img/letter-C/${randomWallpaper}FR.png" alt="Letter C" />`;
    console.log("français");
  });
});
letterO$.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * letterOWallpapers.length);
  let randomWallpaper = letterOWallpapers[randomIndex];
  images$.style.display = "none";
  overlay$.style.display = "block";
  overlay$.innerHTML = `<img src="static/img/letter-O/${randomWallpaper}.png" alt="Letter O" />
    <button class="french">Français</button>`;

  const button$ = document.querySelector(".french");
  button$.addEventListener("click", () => {
    overlay$.innerHTML = `<img src="static/img/letter-O/${randomWallpaper}FR.png" alt="Letter W" />`;
    console.log("français");
  });
});
