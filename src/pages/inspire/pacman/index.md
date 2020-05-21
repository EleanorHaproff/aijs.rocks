---
title: "PAC-MAN"
demo: https://storage.googleapis.com/tfjs-examples/webcam-transfer-learning/dist/index.html
code: https://github.com/tensorflow/tfjs-examples/tree/master/webcam-transfer-learning
link:
date: "2018-03-30"
path: "/inspire/pac-man"
thumbnail: "./img/pacman-controller.png"
author: "Nikhil Thorat"
authorAvatar: https://pbs.twimg.com/profile_images/1237008898311282690/QL1p2OgT_400x400.jpg
authorLink: https://twitter.com/nsthorat
shortDescription: "Play the classic game PAC-MAN with your movements as the controller"
tags:
  - TensorFlow.js
  - MobileNet
  - Transfer Learning
layout: "inspire"
---

![Animation](./img/transferlearning.gif)

This example uses the pretrained model MobileNet to train
another model using an internal mobilenet activation to predict 4
different classes from the webcam defined by the user.

To train the model in the [demo](https://storage.googleapis.com/tfjs-examples/webcam-transfer-learning/dist/index.html),
click 'Train Model' then click and train the four samples with images of
what you want to trigger up, down, left and right with.

Then, hit 'Play' and enjoy!

You can also play around with the learning rate and batch size etc.,
