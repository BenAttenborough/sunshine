document.addEventListener("DOMContentLoaded", function() {
  console.log("Your document is ready!");
  console.log("Hello world");

  let sunSpec = {
    x: 200,
    y: 100,
    width: 300,
    height: 100,
    isMoving: false
  };

  let startX, startY;

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(150,150,250)";
  ctx.fillRect(0, 0, 1000, 1000);
  drawSun(canvas, ctx, sunSpec);

  canvas.addEventListener("mousedown", function(event) {
    event.preventDefault();
    event.stopPropagation();
    // console.log("Mouse down");
    // console.log(event);
    var { offsetX, offsetY } = event;
    // console.log("offsetX", offsetX);
    // console.log("offsetY", offsetY);
    let isOffsetXwithinShape =
      offsetX >= sunSpec.x && offsetX <= sunSpec.x + sunSpec.width;
    // console.log("isOffsetXwithinShape", isOffsetXwithinShape);

    let isOffsetYwithinShape =
      offsetY >= sunSpec.y && offsetY <= sunSpec.y + sunSpec.height;
    // console.log("isOffsetYwithinShape", isOffsetYwithinShape);

    let isPointerWithinShape = isOffsetXwithinShape && isOffsetYwithinShape;
    console.log("isPointerWithinShape", isPointerWithinShape);
    if (isPointerWithinShape) {
      sunSpec.isMoving = true;
    }

    // save the current mouse position
    startX = offsetX;
    startY = offsetY;
  });

  canvas.addEventListener("mouseup", function(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("Mouse up");
    sunSpec.isMoving = false;
  });

  canvas.addEventListener("mousemove", function(event) {
    if (sunSpec.isMoving) {
      var { offsetX, offsetY } = event;
      //   var thingX = sunSpec.x + (sunSpec.x - offsetX);
      //   console.log("sunSpec.x", sunSpec.x);
      //   console.log("offsetX", offsetX);
      //   console.log("startX", startX);
      //   console.log("startY", startY);
      //   sunSpec.x = offsetX + startX;
      //   sunSpec.y = offsetY + startY;
      //   drawSun(canvas, ctx, sunSpec);
      //   startX = offsetX;
      //   startY = offsetY;
      sunSpec.x = offsetX;
      sunSpec.y = offsetY;
      drawSun(canvas, ctx, sunSpec);
    }
  });
});

function drawSun(canvas, ctx, sunSpec) {
  ctx.fillStyle = "rgb(150,150,250)";
  ctx.fillRect(0, 0, 1000, 1000);
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.fillRect(sunSpec.x, sunSpec.y, sunSpec.width, sunSpec.height);
}
