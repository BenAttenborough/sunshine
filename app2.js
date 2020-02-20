document.addEventListener("DOMContentLoaded", function() {
  console.log("Your document is ready!");
  console.log("Hello world");

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  //   const bg = new Path2D();
  //   bg.rect(0, 0, 1000, 500);
  //   ctx.fillStyle = "blue";
  //   ctx.fill(bg);
  const circle = new Path2D();
  let sunX = 150;
  let sunY = 75;
  circle.x = 150;
  circle.y = 75;
  circle.isMoving = false;
  drawSun(ctx, circle);
  //   ctx.fillStyle = "yellow";
  //   circle.arc(sunX, sunY, 50, 0, 2 * Math.PI);
  //   ctx.beginPath();
  //   ctx.arc(sunX, sunY, 50, 0, 2 * Math.PI);
  //   ctx.fill();
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   let grd;
  //   grd = ctx.createRadialGradient(180.0, 300.0, 0.0, 180.0, 300.0, 150.0);

  // Add colors
  //   grd.addColorStop(0.0, "rgba(255, 242, 0, 1.000)");
  //   grd.addColorStop(0.37, "rgba(255, 157, 0, 1.000)");
  //   grd.addColorStop(1.0, "rgba(47, 32, 163, 1.000)");

  // Fill with gradient
  //   ctx.fillStyle = grd;
  //   ctx.fillRect(0, 0, 300.0, 300.0);
  //   canvas.addEventListener("mousemove", function(event) {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     ctx.fillStyle = "blue";
  //     ctx.fill(bg);
  //     // Check whether point is inside circle
  //     if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
  //       ctx.fillStyle = "red";
  //     } else {
  //       ctx.fillStyle = "yellow";
  //     }

  //     // Draw circle

  //     ctx.fill(circle);
  //   });

  canvas.addEventListener("mousedown", function(event) {
    event.preventDefault();
    event.stopPropagation();
    // console.log(circle.message);
    // console.log(event);
    circle.isMoving = true;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = "blue";
    // ctx.fill(bg);
    // Check whether point is inside circle
    if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = "yellow";
    }

    // Draw circle

    ctx.fill(circle);
  });

  canvas.addEventListener("mousemove", function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (circle.isMoving) {
      //   console.log("Dragging circle");
      //   console.log(event);
      //   console.log("MouseX:", event.clientX);
      //   console.log("MouseY:", event.clientY);
      sunX = event.clientX;
      sunY = event.clientY;
      //   drawSun(ctx, circle, sunX, sunY);
      drawSun(ctx, circle, event.clientX, event.clientY);
    }
  });

  canvas.addEventListener("mouseup", function(event) {
    event.preventDefault();
    event.stopPropagation();
    circle.isMoving = false;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
});
function drawSun(ctx, circle, sunX, sunY) {
  //   console.log(circle);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  circle.fillStyle = "yellow";
  circle.arc(sunX, sunY, 50, 0, 2 * Math.PI);
  ctx.fill(circle);
  //   ctx.closePath();
}
