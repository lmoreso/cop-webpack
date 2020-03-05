import { footer } from './footer';
import makeButton from './makeButton';
import makeColorStyle from './makeColorStyle';
import imageUrl from './img.jpg';
import makeImage from './makeImage';

const button = makeButton('Click me please!');
button.style.cssText = makeColorStyle("green");

const image = makeImage(imageUrl, 200, 200);

document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);
