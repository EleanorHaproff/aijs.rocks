---
title: "Face Doodle"
demo: https://cyrildiagne.github.io/ar-facedoodle/
code: https://github.com/cyrildiagne/ar-facedoodle
link: https://twitter.com/cyrildiagne/status/1254372807531728896
date: "2020-04-26"
path: "/inspire/face-doodle"
thumbnail: "./img/face-doodle.png"
author: "Cyril Diagne"
authorAvatar: https://pbs.twimg.com/profile_images/489382771198926850/Z9pIFbj-_400x400.jpeg
authorLink: https://twitter.com/cyrildiagne
shortDescription: "Doodle face masks right from the browser with TensorFlow.js and FaceMesh"
tags:
  - TensorFlow.js
  - FaceMesh
  - Three.js
layout: "inspire"
---

<figure class="video_container">
  <video controls="true" autoplay loop allowfullscreen="true" poster="./img/img-alt-text-generator.jpg">
    <source src="https://video.twimg.com/tweet_video/EWhoNy3WoAEEqnA.mp4" type="video/mp4">
  </video>
</figure>

Doodle Face is a way to draw your own AR masks right in the browser with TensorFlowJS. It uses a pretrained model called [FaceMesh](https://github.com/tensorflow/tfjs-models/tree/master/facemesh) which returns coordinates for 468 3D facial landmarks.

This demo uses [Three.js](https://threejs.org/) and aligns a 3D mesh with the 468 points to get smooth surface normals. 
A new plane is added for each new line and tracks the closest face normal.

Try it out now [here](https://cyrildiagne.github.io/ar-facedoodle/)
