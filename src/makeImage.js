import _ from 'lodash';

/**
 * Take the URL of the image, its height and width and return an image element
 * @param {string} url
 * @param {number} height
 * @param {number} width
 * @returns {HTMLImageElement}
 */
const makeImage = (url, height = 100, width = 100) => {
  const image = document.createElement("img");

  image.height = height;
  image.width = width;
  image.src = url;
  return image;
};

export default makeImage;
