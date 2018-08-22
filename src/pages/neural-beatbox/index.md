---
title: "Neural Beatbox"
demo: https://codepen.io/naotokui/pen/NBzJMW
code: https://codepen.io/naotokui/pen/NBzJMW
date: "2018-08-06"
path: "/inspire/neural-beatbox"
thumbnail: "./img/neural-beatbox.png"
author: "Nao Tokui"
authorAvatar: https://pbs.twimg.com/profile_images/865077490154315780/uCkUvL2R_400x400.jpg
authorLink: https://twitter.com/naotokui_en
shortDescription: "RNN-based Rhythm Generation and Audio Classification"
tags:
  - TensorFlow.js
  - Magenta.js
  - p5.js
layout: "inspire"
---

<figure class="video_container">
  <video controls="true" autoplay loop allowfullscreen="true" poster="./img/neural-beatbox.png">
    <source src="https://video.twimg.com/ext_tw_video/1026467212926713857/pu/vid/912x720/fVQ_Ih7BFUeBPwRp.mp4?tag=5">
  </video>
</figure>

Make some noise and record your voice!
This is a Neural Beatbox, made with RNN-based Rhythm Generation and Audio Classification.
It uses TensoFlow.js, Magenta.js and p5.js.

The rhythm generation part was based on
[Magenta.js’s](https://magenta.tensorflow.org/blog/2018/05/03/connecting-with-magenta-js#a-drum-machine)
Drum RNN and @teropa’s [Neural Drum Machine](https://magenta.tensorflow.org/blog/2018/05/03/connecting-with-magenta-js#a-drum-machine).

Creator Nao Tokui used his own Keras model and converted it to a
TensorFlow.js model to classify sound segments.

The deep learning models analyze and build a drumkit then generate drum
patterns infinitely with your sound inputs. Try it out [here!](https://codepen.io/naotokui/pen/NBzJMW)

This currently only works in Chrome.
