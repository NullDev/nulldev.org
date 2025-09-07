---
date: 2025-09-07
title: Why Neural Networks are not blackboxes
outline: deep
tags:
- math
- ai
- llm
---
Contrary to popular belief, NNs are not magic.

---

## What is a neural network?

A neural network (NN) is a computational model inspired by the human brain. It consists of layers of interconnected nodes (neurons) that process data. Each connection has a weight that adjusts as learning proceeds.

## Why they are not a BlackBox

There's a popular claim that *neural networks are a black box*.
The reasoning usually goes like this:

> “We don't know the algorithm they use. We just throw data at them, and somehow they magically generalize. Therefore, it's a black box.”

I recently had this exact conversation with someone who insisted that neural networks cannot be explained algorithmically.
But this view confuses *complexity* with *mystery*. Neural networks are **not** a black box. They are fully specified, deterministic algorithms. The only problem is that they're **too large** for humans to inspect weight by weight. Let's break this down.

## A Neural Network *is* an Algorithm

At its core, a feed-forward neural network is nothing more than a nested function:

$$
f(x) \;=\; \sigma^{(L)}\!\Bigl(W^{(L)} \,\sigma^{(L-1)}(\dots W^{(1)}x + b^{(1)}) + b^{(L)}\Bigr)
$$

* $x$ = input vector
* $W^{(i)}$, $b^{(i)}$ = weights and biases
* $\sigma^{(i)}$ = activation functions (ReLU, sigmoid, etc.)
* $L$ = number of layers

Every single output can be explained step by step:

1. Multiply inputs by weights.
2. Add biases.
3. Apply activation.
4. Pass to the next layer.

If you follow the SGD and you actually "read" what the NN is doing, you can read out data points like $x_i, f(x_i)$ and "pull out" functions using [symbolic regression](https://en.wikipedia.org/wiki/Symbolic_regression) and can thus algorithmically approximate what the NN is doing.

That's it. The **systematic rules are 100% known**. Neural networks are not “mystical black boxes,” they are just *very large, nonlinear functions*. Millions of parameters don't make it any less of a function.

We can even go as far as explaining for _each_ new input X, why the network outputs Y.
You can calculate

$$
z^{(1)} = W^{(1)}X + b^{(1)},\quad a^{(1)} = σ(z^{(1)}),\;
z^{(2)} = W^{(2)}a^{(1)} + b^{(2)},\dots
$$

up until $a^L$ and thus see the input value, activation and how much it contributed to the end logits, **for every neuron**. <br>
The feature attribution is then just 

$$
Y = f(X) \;=\; \sum_i \text{Attribution}_i + \text{Bias}
$$

## But What About Generalization?

My discussion partner said:

> “Show me the pseudocode for generalizing text. We don't know how they do it!”

Actually, we do. Neural networks *don't* “learn to generalize” in some human-like way. Instead, they **compress patterns** in the training data so they can be reused on unseen data.
That's exactly what autoencoders do: they reduce input to essential features, then reconstruct it.

For text models, we tokenize input into vectors, map them into high-dimensional space, and optimize a cost function so the network predicts tokens correctly. The “generalization” is just the side effect of minimizing loss.

## Why It Feels Like a Black Box

The *illusion* of a black box comes from **scale**. <br>
But we could literally "hard-code" any neural network by hand if we wanted to. The concept always stays the same. It's just impractical for large networks. <br>
Some examples:

* XOR detection with 2 hidden neurons can be hand-coded:

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# parameters for hardcoded XOR MLP (2-2-1) - weights, bias, structure
W1 = np.array([[20, 20], [20, 20]]) # shape: 2 hidden neurons, 2 inputs
b1 = np.array([-10, -30])           # shape: (2,)

W2 = np.array([[20, -20]]) # shape: 1 output neuron, 2 hidden neurons
b2 = np.array([-10])       # shape: (1,)

def xor_nn(x):
    x = np.array(x)
    # Hidden layer
    z1 = W1 @ x + b1
    a1 = sigmoid(z1)
    # Output layer
    z2 = W2 @ a1 + b2
    y = sigmoid(z2)
    return y

inputs = [(0, 0), (0, 1), (1, 0), (1, 1)]
print(" x1  x2   Output   Pred")
print("--- --- --------- ------")
for x in inputs:
    out = xor_nn(x)[0]
    pred = int(out > 0.5)
    print(f" {x[0]}   {x[1]}   {out:.5f}    {pred}")
```

```
 x1  x2   Output   Pred
--- --- --------- ------
 0   0   0.00005    0
 0   1   0.99995    1
 1   0   0.99995    1
 1   1   0.00005    0
 ```

* Or, we can even have a complete Neural Network, self-contained in a single SVG, fully deterministic[^1]:

<iframe src="https://v1.cx/ann/" width="640" height="480" style="border:none;"></iframe>

<small>credits to [3blue1brown](https://www.3blue1brown.com/)</small>

* But ImageNet-scale networks have millions of parameters. No human will read through that by hand.

That doesn't mean they are unknowable. It means **the function is too complex to be described in plain English** without tools. <br>
But in theory, you could write out the entire function as a massive nested expression. It would be ugly, but it would be **exactly** what the network computes.

# Interpreting Neural Networks

We already have methods to “open the box”:

* **[Saliency maps](https://en.wikipedia.org/wiki/Saliency_map)** → show which pixels contributed most to a classification.
* **[Grad-CAM](https://github.com/jacobgil/pytorch-grad-cam)** → highlights image regions that drove a decision.
* **[TCAV](https://github.com/tensorflow/tcav) (Testing with Concept Activation Vectors)** → measures sensitivity to abstract concepts like “stripedness” or “roundness.”
* **[Feature visualization](https://research.google/pubs/feature-visualization/)** → shows what individual neurons or layers respond to (edges, textures, shapes, objects).

So if a cat image triggers a network, we can literally see that early layers detect whiskers and edges, middle layers detect shapes, and higher layers assemble the concept “cat.”
There is no *cat neuron*, but the composition of features encodes the concept.

> The forest is the solution, not the individual tree.

## The “Why These Weights?” Question

The final pushback I got was:

> “But WHY these exact weights? That's unexplained. Therefore: black box.”

Actually, the *why* is simple:

* We define a loss function $\mathcal{L}$.
* We use Stochastic Gradient Descent (SGD) to minimize it.
* The optimal weights are those where the gradient is (approximately) zero:

$$
\nabla_{W}\,\mathcal{L}(W) \approx 0
$$

* And we then use backpropagation to compute gradients efficiently.

So the reason “why this weight” is literally:
**because it reduces the loss better than other weights.**

The weights are the solution to a constrained optimization problem. Emergent features aren't mysterious. They are the inevitable product of minimizing error under the given data. <br>
This isn't just "something we do during fitting". This is the **entire purpose** of training.

## Emergence Is Not Magic

Emergence doesn't mean “we don't know.” or "we can't explain it".
It means: *complex behaviors arise from simple rules at scale.*
Like how water molecules give rise to waves, or how minimizing loss gives rise to feature detectors.

The network *is* the algorithm. You can:

* trace every operation,
* visualize every feature,
* approximate it with symbolic regression,
* prune, distill, or quantize it.

That's not a black box. That's just **a box too big to hold in your head without tools.** <br>
Knowing these properties is the literal basis of optimizations such as pruning, quantization, and distillation. <br>
That's also why we have a whole field of **explainable AI**.

Feature detections appear “emergent” because they are the result of cost minimization. If you have cat detection but never explicitly tell the NN to look for whiskers and ears, but it happens anyway because you minimize the cost function for exactly that, it doesn't come out of nowhere. If I tell you to continue the number sequence 2, 4, 6, 8, and tell you that 1, 3, 5, 7 are wrong, chances are high that you will figure out on your own that the next number must be 10, just because of the constraints of the examples. Or if I want you to draw a triangle with a = 3, b = 5, then there is only one possibility for c. You could call that "property-bound emergence".

And as stated above, we even have tools and methods that can explain this emergence. Even visually. <br>
SGD tells you exactly what happens and why. It's just not “human readable” on its own.

## Conclusion

Neural networks aren't mysterious or magical. They are deterministic, fully defined algorithms.
What people really mean when they say *“black box”* is:

* *“It's too complex for me to explain without tools.”*
* *“The solution space is too large for human intuition.”*

But complexity ≠ unknowability.
Every step can be computed, explained, and even visualized.

The box is transparent-just very, very large.

[^1]: Even if it wasn't though, non-deterministic $\neq$ non-algorithmic.
