import { typewriter } from "./src/index.js";

const html =
  '<h1>我是一个标题</h1>< img alt="" src="https://help.motorola.com/hc/images/global/x_2.png"/><p>With some apps, you can watch video in a small, movable frame while you do other things. Use it when navigating with Google Maps, too.</p ><ol><li><p>When you’re playing a video or navigating with Maps, go to the home screen or app you want to use.</p ><p>The video (or navigation) shrinks.</p ></li><li><p>You can drag the video (or navigation) anywhere on the screen.</p ><ul><li>To return it to full size, touch it twice.</li><li>To close it, drag it to the bottom of the screen. Or, touch it, then touch < img alt="" src="https://help.motorola.com/hc/images/global/x_2.png"/>.</li></ul></li></ol><p>To see all apps that support Picture-in-picture:</p ><ul><li>Go to <strong>Settings</strong> > <strong>Apps & notifications</strong>.</li><li>Touch <strong>Advanced</strong> > <strong>Special app access</strong> > <strong>Picture-in-picture</strong>.</li><li>To turn off Picture-in-picture for an app, touch it and turn <strong>Allow picture-in-picture</strong> off < img alt="" src="https://help.motorola.com/hc/images/global/slider_off_12.png"/>.</li></ul>';
typewriter({
  msg: html,
  index: 0,
  minTimeout: 30,
  callback: (text) => {
    console.log("print", text);
  },
});
