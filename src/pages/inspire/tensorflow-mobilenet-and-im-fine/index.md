---
title: "Tensorflow, MobileNet and I'm Fine"
demo: https://codepen.io/oliverturner/pen/LmwJgY
code: https://codepen.io/oliverturner/pen/LmwJgY
link: https://twitter.com/oliverturner/status/1001129261581905921
date: "2018-05-28T16:53:00.000Z"
path: "/inspire/tensorflow-mobilenet-and-im-fine"
thumbnail: "./img/tensorflow-mobilenet-and-im-fine.png"
author: "Oliver Turner"
authorAvatar: https://pbs.twimg.com/profile_images/1254145024322875392/3xfGhM9f_400x400.jpg
authorLink: https://twitter.com/oliverturner
shortDescription: Search for images using unsplash and then use the mobilenet tensorflow.js model to try to figure out exactly what's in the image?
tags:
  - TensorFlow.js
  - MobileNet
  - Computer Vision
builtBy: "Oliver Turner"
layout: "inspire"
---

Use the [Unsplash API](https://unsplash.com/developers) to find images based on a search term. Then uses the [MobileNet Tensorflow.js](https://github.com/tensorflow/tfjs-examples/tree/master/mobilenet) model which tries to guess what's in the image.

There are now some [pretty advanced APIs](https://azure.microsoft.com/services/cognitive-services/computer-vision/) where you can pass an image and it will tell you whats in it. Using mobilenet you can do the same but all locally in your browser.

Ok, it's not as good as the APIs but it's local and it doesn't require a network connection. You could imagine using MobileNet locally, and then if it does identify something interesting in the image you can pass it to a more powerfull API to find out more.

<figure class="video_container">
  <video controls="true" autoplay loop allowfullscreen="true" poster="./img/tensorflow-mobilenet-and-im-fine.png">
    <source src="./img/tensorflow-mobilenet-and-im-fine.mp4" type="video/mp4">
  </video>
</figure>
