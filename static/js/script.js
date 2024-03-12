const letterW$ = document.querySelector("#w");
const letterA$ = document.querySelector("#a");
const letterC$ = document.querySelector("#c");
const letterO$ = document.querySelector("#o");
const images$ = document.querySelector(".image-container");
const overlay$ = document.querySelector(".overlay");
const body = document.querySelector("body");

const letterWWallpapers = [
  "iPhone 14 & 15 Pro - 1.png",
  "iPhone 14 & 15 Pro - 2.png",
  "iPhone 14 & 15 Pro - 3.png",
  "iPhone 14 & 15 Pro - 13.png",
  "iPhone 14 & 15 Pro - 14.png",
  "iPhone 14 & 15 Pro - 15.png",
];
const letterAWallpapers = [
  "iPhone 14 & 15 Pro - 7.png",
  "iPhone 14 & 15 Pro - 8.png",
  "iPhone 14 & 15 Pro - 9.png",
  "iPhone 14 & 15 Pro - 19.png",
  "iPhone 14 & 15 Pro - 20.png",
  "iPhone 14 & 15 Pro - 21.png",
];
const letterCWallpapers = [
  "iPhone 14 & 15 Pro - 4.png",
  "iPhone 14 & 15 Pro - 5.png",
  "iPhone 14 & 15 Pro - 6.png",
  "iPhone 14 & 15 Pro - 22.png",
  "iPhone 14 & 15 Pro - 23.png",
  "iPhone 14 & 15 Pro - 24.png",
];
const letterOWallpapers = [
  "iPhone 14 & 15 Pro - 10.png",
  "iPhone 14 & 15 Pro - 11.png",
  "iPhone 14 & 15 Pro - 12.png",
  "iPhone 14 & 15 Pro - 16.png",
  "iPhone 14 & 15 Pro - 17.png",
  "iPhone 14 & 15 Pro - 18.png",
];

letterW$.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * letterWWallpapers.length);
  let randomWallpaper = letterWWallpapers[randomIndex];
  images$.style.display = "none";
  overlay$.style.display = "block";
  overlay$.innerHTML = `<img src="static/img/letter-W/${randomWallpaper}" alt="Letter W" />`;
});
letterA$.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * letterAWallpapers.length);
  let randomWallpaper = letterAWallpapers[randomIndex];
  images$.style.display = "none";
  overlay$.style.display = "block";
  overlay$.innerHTML = `<img src="static/img/letter-A/${randomWallpaper}" alt="Letter A" />`;
});

letterC$.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * letterCWallpapers.length);
  let randomWallpaper = letterCWallpapers[randomIndex];
  images$.style.display = "none";
  overlay$.classList.add("show-overlay");
  overlay$.innerHTML = `<img src="static/img/letter-C/${randomWallpaper}" alt="Letter C" />`;
});

letterO$.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * letterOWallpapers.length);
  let randomWallpaper = letterOWallpapers[randomIndex];
  images$.style.display = "none";
  overlay$.style.display = "block";
  overlay$.innerHTML = `<img src="static/img/letter-O/${randomWallpaper}" alt="Letter O" />`;
});
