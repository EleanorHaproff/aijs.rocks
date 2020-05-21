---
title: "Emoji Caption"
demo: https://emoji-caption.glitch.me/
code: https://github.com/alex-saunders/emoji-caption
date: "2018-08-30"
path: "/inspire/emoji-caption"
thumbnail: "./img/example.png"
author: "Alex Saunders"
authorLink: " https://twitter.com/AlexJRsaunders"
shortDescription: "Automatically generated emoji captions for your images"
tags:
  - Azure
  - Computer Vision
builtBy: "Alex Saunders"
layout: "inspire"
---

![Animation](./img/demo.gif)

This a simple PWA that takes in an image URL, processes it with Azure's Computer Vision API and generates a caption in the form of emojis! (along with a corresponding written caption - but that's boring, right?).

Uses [emojilib](https://github.com/muan/emojilib) for generating associated emojis (in some cases, multiple emojis may be relevant for the generated caption, so a 'generate again' button is available).

- [Demo](https://emoji-caption.glitch.me)
