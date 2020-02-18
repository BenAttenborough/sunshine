document.addEventListener("DOMContentLoaded", function() {
  console.log("Your document is ready!");
  console.log("Hello world");

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  //   ctx.fillStyle = "blue";
  //   ctx.fillRect(0, 0, 1000, 500);
  //   ctx.beginPath();
  //   ctx.arc(30, 30, 20, 0, 180);
  //   ctx.fillStyle = "yellow";
  //   ctx.fill();
  //   ctx.addHitRegion({ id: "sun" });
  //   ctx.closePath();
  //   canvas.addEventListener("mousedown", e => {
  //     console.log("Mousedown");
  //   });
  const bg = new Path2D();
  bg.rect(0, 0, 1000, 500);
  ctx.fillStyle = "blue";
  ctx.fill(bg);
  const circle = new Path2D();
  circle.arc(150, 75, 50, 0, 2 * Math.PI);
  circle.message = "Hello";
  circle.isMoving = false;
  ctx.fillStyle = "yellow";
  ctx.fill(circle);
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
    console.log(circle.message);
    console.log(event);
    circle.isMoving = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fill(bg);
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
    console.log("fff");
  });
  canvas.addEventListener("mouseup", function(event) {});
});
