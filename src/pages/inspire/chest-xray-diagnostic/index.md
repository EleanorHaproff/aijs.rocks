---
title: "Chester the AI Radiology Assistant"
demo: https://mlmed.org/tools/xray/
code: https://github.com/mlmed/dl-web-xray
link: https://arxiv.org/abs/1901.11210
date: "2018-02-10"
path: "/inspire/chest-xray-diagnosis"
thumbnail: "./img/x-ray.jpg"
author: "Joseph Paul Cohen"
authorAvatar: https://pbs.twimg.com/profile_images/664163024983330816/AX5wMLcm_400x400.jpg
authorLink: https://twitter.com/josephpaulcohen
shortDescription: "A Chest X-ray Diagnostic Tool"
tags:
  - TensorFlow.js
  - Healthcare
layout: "inspire"
---

![X-Ray Image2](./img/interface3.jpg)

'Chester' is a healthcare web tool to diagnose chest X-rays using neural networks.
All processing is done on your device and images are not sent to the server.

Whilst the creators include a disclaimer that it is 'not for medical use', this is a
wonderful example of how AI and JavaScript go hand-in-hand to make privacy-friendly applications,
with data being processed by machine learning directly in the browser. No user-data
is sent to a server anywhere. Perfect for medical apps!

The official white paper is [here](https://arxiv.org/abs/1901.11210) with the following summary -

_Deep learning has shown promise to augment radiologists and improve the
standard of care globally. Two main issues that complicate deploying these
systems are patient privacy and scaling to the global population.
To deploy a system at scale with minimal computational cost while preserving
privacy we present a web delivered (but locally run) system for diagnosing chest X-Rays.
Code is delivered via a URL to a web browser (including cell phones) but
the patient data remains on the users machine and all processing occurs locally.
The system is designed to be used as a reference where a user can process
an image to confirm or aid in their diagnosis._

_The system contains three main components: out-of-distribution detection,
disease prediction, and prediction explanation.
The system is completely open source and freely available [here](https://github.com/mlmed/dl-web-xray)_

This app was built by Joseph Paul Cohen, Paul Bertin, and Vincent Frappier
at The Montreal Institute for Learning Algorithms

If you have a chest X-ray you can upload it [here](https://poloclub.github.io/ganlab/)
for instant results. It even works on mobile devices.

NB - the model does take a while to download as it is quite large,
plus you may need to disable your ad-blocker for it to work.