---
title: "Melody Mixer"
demo: https://melodymixer.withgoogle.com/ai/melody-mixer/view/
code: https://codepen.io/blankensmith/pen/BYvaEN
link: https://medium.com/@torinblankensmith/melody-mixer-using-deeplearn-js-to-mix-melodies-in-the-browser-8ad5b42b4d0b
date: "2018-03-15"
path: "/inspire/melody-mixer"
thumbnail: "./img/melody-mixer.png"
author: "Torin Blankensmith"
authorAvatar: https://pbs.twimg.com/profile_images/1908115448/291778_10150462032254692_748774691_11140511_999313915_n_400x400.jpeg
authorLink: https://twitter.com/tBlankensmith
shortDescription: "Using TensorFlow.js to Mix Melodies in the Browser"
tags:
  - TensorFlow.js
  - MusicVAE.js
  - P5.js
  - Tone.js
layout: "inspire"
---

![Animation](./img/melody-mixer.gif)

This experiment came from a simple idea: what would it sound like to
blend two different musical melodies together?

Melody Mixer uses MusicVAE.js, a web framework released by the [Magenta](https://magenta.tensorflow.org/)
research team at Google. You can combine and transform two different
melodies by blending them at given percentages.

MusicVAE.js handles the blending by running a deep neural network locally in your
browser, using TensorFlow.js.

Try the [demo](https://melodymixer.withgoogle.com/ai/melody-mixer/view/).
First, listen to the two separate melodies, then click and drag the
melodies apart, and listen to what you get.
The computer has morphed one melody into the other.

The model was trained with 28 million different melodies — 
Read more about this [here](https://magenta.tensorflow.org/music-vae)