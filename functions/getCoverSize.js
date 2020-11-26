const getCoverSize = (canvasWidth, canvasHeight, imageWidth, imageHeight) => {
  const canvasRatio = canvasWidth / canvasHeight;
  const imageRatio = imageWidth / imageHeight;
  let drawWidth = 0;
  let drawHeight = 0;
  let drawX = 0;
  let drawY = 0;

  if (canvasRatio < imageRatio) {
    drawWidth = (imageWidth / imageHeight) * canvasHeight;
    drawHeight = canvasHeight;
    drawX = 0 - (drawWidth - canvasWidth) / 2;
    drawY = 0;
  } else {
    drawWidth = canvasWidth;
    drawHeight = (imageHeight / imageWidth) * canvasWidth;
    drawX = 0;
    drawY = 0 - (drawHeight - canvasHeight) / 2;
  }

  return {
    drawX,
    drawY,
    drawWidth,
    drawHeight
  };
};

export default getCoverSize;
