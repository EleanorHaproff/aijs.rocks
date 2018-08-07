---
title: "SeeClarke.js"
date: "2018-07-28T17:12:33.962Z"
path: "/inspire/see-clarke"
thumbnail: "./img/see-clarke.png"
author: "Oz Ramos"
authorAvatar: "https://pbs.twimg.com/profile_images/1014674288656306176/Rl2YNjtL_400x400.jpg"
shortDescription: "A thin wrapper around PoseNet and TensorFlow.js that calculates head-tracked cursor positions for a variable number of users at once."
tags:
    - TensorFlow.js
    - PoseNet
builtBy: "Oz Ramos"
layout: "inspire"
---

![see-clarke](./img/see-clarke.png)

[SeeClarke.js](https://github.com/labofoz/SeeClarke.js) is a project which uses your webcam to track head movements and apply these to your cursor position.
 It's posibile to apply this to a variable number of users at once, and the model is fast enough to work on mid-ranged mobile devices.


 The main SeeClarke npm package only handles the calculations, but there are
 a bunch of demos which the creator, Oz Ramos, has applied these, such as
 [basic cursor positioning](https://codepen.io/labofoz/full/RBKKvW/),
 [page scrolling](https://codepen.io/labofoz/full/XBpMVv/),
 [focusing elements](https://codepen.io/labofoz/full/ZjLKBb/),
 [panning Google Maps](https://codepen.io/labofoz/full/ajpWQL),
 [looking around Street Views](https://codepen.io/labofoz/full/WKRZZq), and
 [looking around YouTube 360 videos](https://codepen.io/labofoz/full/VBPMEd/).


You can see the visual evolution of this project in this [Twitter thread](https://twitter.com/labofoz/status/996603306540548096).

- [Demos](https://codepen.io/collection/nryEYd/)
- [Code](https://github.com/LabOfOz/SeeClarke.js)
- [npm Package](https://www.npmjs.com/package/seeclarke)