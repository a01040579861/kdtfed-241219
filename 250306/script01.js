const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
