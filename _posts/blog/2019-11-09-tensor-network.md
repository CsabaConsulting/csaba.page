---
layout: post
title: Tensor Network
teaser: Google X Researchers gave a workshop about this interesting technology
date: 2019-11-09 23:56:39 +0300
page_id: tensor-network
comments: true
category: blog
---
Around 2019 summer I've heard about a workshop _Google X_ was organizing about their _Tensor Network_ research and library. The 50 seats filled up fast and I didn't get in, but later in November (Nov. 6 - Nov. 7 2019) there was another opportunity as part of the [IEEE Rebooting Computing Conference](https://rebootingcomputing.ieee.org/rebooting-computing-week) in San Mateo. The workshop was two days and I was able to snatch a seat. I booked a cheap AirBnb and headed to the Silicon Valley.

[TensorNetwork](https://github.com/google/tensornetwork) is an open source library for efficient tensor calculations. Tensors are very generic mathematical constructs and their applicability is very broad, starting from quantum physics simulations, quantum computer modeling and simulations all the way to neural network machine learning frameworks. It's not a coincidence that _TensorFlow_ has _tensor_ in its name, since it also uses _tensors_ to perform the simulation of the underlying neural network. However the _TensorFlow_ framework and the _TensorNetwork_ library are separate projects.

To learn more about _TensorNetwork_ you can check out the [GitHub repository of the library](https://github.com/google/tensornetwork) or [Google X's blog post](https://ai.googleblog.com/2019/06/introducing-tensornetwork-open-source.html). [There's even a better brilliant presentation I highly advise to check out](https://www.math3ma.com/blog/matrices-as-tensor-network-diagrams): it introduces a very intuitive visualization of tensors, matrices, vectors and operations like contraption between them. 

The first afternoon the notation was introduced and some simple networks. The second afternoon contained more demos and practice, we assembled simple tensor networks, performed some contraptions, matrix factorizations. Google X researchers also showed how simpler quantum computing bits can be modeled with the library.

Later I looked up articles about _TensorFlow_ vs _Tensor Network_. I plan to perform measurements how _TensorNetwork_ could be used to speed up certain types of neural networks. There are [some publications](https://cmt-qo.phys.ethz.ch/cmt-qo-news/2018/04/machine-learning-with-tensor-networks.html) which started to explore that. I'll follow up on the blog when I get to it.
