// local files
import getCoverSize from "./getCoverSize";

const drawCoverImage = (canvas, context, image) => {
  const { drawX, drawY, drawWidth, drawHeight } = getCoverSize(
    canvas.width / window.devicePixelRatio,
    canvas.height / window.devicePixelRatio,
    image.width,
    image.height
  );

  context.drawImage(
    image,
    0,
    0,
    image.width,
    image.height,
    drawX,
    drawY,
    drawWidth,
    drawHeight
  );
};

export default drawCoverImage;
