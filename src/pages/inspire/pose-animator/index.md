---
title: "Pose Animator"
demo: https://pose-animator-demo.firebaseapp.com/
code: https://github.com/yemount/pose-animator/
link: https://twitter.com/yemount/status/1258776351248494593
date: "2020-05-08"
path: "/inspire/pose-animator"
thumbnail: "./img/pose-animator.png"
author: "Shan Huang"
authorAvatar: https://pbs.twimg.com/profile_images/1148241549358014467/72CQIlAZ_400x400.png
authorLink: https://twitter.com/yemount
shortDescription: "Bring SVG illustrations to life with real time human perception"
tags:
  - TensorFlow.js
  - PoseNet
  - FaceMesh
layout: "inspire"
---

![Animation](./img/pose-animator.gif)

Pose Animator takes a 2D vector illustration and animates its containing curves in real-time based on the recognition result from PoseNet and FaceMesh (both are [TensorFlow.js models](https://www.tensorflow.org/js/models)), as an SVG illustration. Using the camera feed or static images, it borrows the idea of skeleton-based animation from computer graphics, and applies it to vector characters.

It currently supports single-pose, single-face detection, and has been tested on Destkop Chrome & iOS Safari.
(PoseNet model config - MobileNet V1, output stride 16, quant bytes 2).

Try it out now [here](https://pose-animator-demo.firebaseapp.com/)
