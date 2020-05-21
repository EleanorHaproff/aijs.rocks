---
title: "Snakes.ai"
demo: https://snakes.ai/
link: https://snakes.ai/playsnake/
date: "2018-08-05"
path: "/inspire/snakes-ai"
thumbnail: "./img/snake-ai.png"
author: "Brian Breiholz"
authorAvatar: https://pbs.twimg.com/profile_images/1145075791165820931/Yf_pRiDC_400x400.png
authorLink: https://twitter.com/BrianBreiholz
shortDescription: "Play Snakes using your head movements as controllers"
tags:
  - TensorFlow.js
  - MobileNet
layout: "inspire"
---

<figure class="video_container">
  <video controls="true" autoplay loop allowfullscreen="true" poster="./img/snake-ai.png">
    <source src="https://snakes.ai/assets/video/snake_cam.mp4" type="video/mp4">
  </video>
</figure>

Play the classic Snakes game, using your webcam and neural networks for image recognition.

Try it out [here](https://snakes.ai/playsnake/) and follow instructions!

How to play:

1. Take one or more images for each direction, by clicking on the areas on the right.
2. Press Train to train the neural net on your images.
3. Press Start to play!

This demo uses the MobileNet model, which has already been trained on millions of images.
The output of this MobileNet model is then retrained using the images captured from your training.

For the final output, the model then makes a prediction
about which category of your example images it thinks it is currently seeing.
The snake then moves in the direction linked to the predicted category.
