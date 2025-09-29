---
date: 2025-09-07
title: Why Neural Networks are not blackboxes
outline: deep
tags:
- math
- ai
- llm
- neural-networks
- machine-learning
---
Contrary to popular belief, NNs are not magic. Under the hood, they are fully deterministic algorithms that can be explained step by step. <br>

<div id="preview" style="height: 100%; width: 100%; display: flex; justify-content: center; align-items: center; margin: 20px 0;">
    <svg style="height: auto; width: 300px;" alt="Neural Network" viewBox="0 0 800 440" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="neuronGradient">
                <stop offset="0%" stop-color="#667768ff"/>
                <stop offset="100%" stop-color="#63B06B"/>
            </radialGradient>
            <path id="sigmoid" d="M0,50 C10,50 20,50 30,48 C40,45 45,30 50,20 C55,10 60,5 70,2 C80,0 90,0 100,0"
                stroke="#000" fill="none" stroke-width="2"/>
            <marker id="arrowhead" markerWidth="10" markerHeight="7"
                    refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#999"/>
            </marker>
        </defs>
        <line x1="100" y1="95"  x2="260" y2="140" stroke="#999" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="100" y1="245" x2="257" y2="150" stroke="#999" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="100" y1="395" x2="260" y2="160" stroke="#999" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="100" y1="95"  x2="260" y2="340" stroke="#999" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="100" y1="245" x2="257" y2="350" stroke="#999" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="100" y1="395" x2="260" y2="360" stroke="#999" stroke-width="2" marker-end="url(#arrowhead)"/>
        <text x="90" y="100" text-anchor="end" fill="#9e9e9eff" font-family="Arial">x₁</text>
        <text x="90" y="250" text-anchor="end" fill="#9e9e9eff" font-family="Arial">x₂</text>
        <text x="90" y="400" text-anchor="end" fill="#9e9e9eff" font-family="Arial">x₃</text>
        <text x="140" y="100" fill="#868686ff" font-family="Arial">w₁,₁</text>
        <text x="140" y="150" fill="#868686ff" font-family="Arial">w₂,₁</text>
        <text x="140" y="235" fill="#868686ff" font-family="Arial">w₁,₂</text>
        <text x="140" y="265" fill="#868686ff" font-family="Arial">w₂,₂</text>
        <text x="140" y="350" fill="#868686ff" font-family="Arial">w₁,₃</text>
        <text x="140" y="400" fill="#868686ff" font-family="Arial">w₂,₃</text>
        <g transform="translate(300,150)">
            <circle r="40" fill="url(#neuronGradient)" stroke="#9e9e9eff" stroke-width="2"/>
            <text x="-10" y="10" font-family="Arial" font-size="30" fill="white">n₁</text>
        </g>
        <g transform="translate(300,350)">
            <circle r="40" fill="url(#neuronGradient)" stroke="#9e9e9eff" stroke-width="2"/>
            <text x="-10" y="10" font-family="Arial" font-size="30" fill="white">n₂</text>
        </g>
        <rect x="400" y="110" width="120" height="80" fill="#63B06B" stroke="#9e9e9eff" stroke-width="2" rx="10"/>
        <text x="460" y="145" text-anchor="middle" font-family="Arial" fill="#FFF" font-size="14">Activation</text>
        <text x="460" y="165" text-anchor="middle" font-family="Arial" fill="#FFF" font-size="14">Function</text>
        <rect x="400" y="310" width="120" height="80" fill="#63B06B" stroke="#9e9e9eff" stroke-width="2" rx="10"/>
        <text x="460" y="345" text-anchor="middle" font-family="Arial" fill="#FFF" font-size="14">Activation</text>
        <text x="460" y="365" text-anchor="middle" font-family="Arial" fill="#FFF" font-size="14">Function</text>
        <g transform="translate(410,130) scale(1,0.4)">
            <use href="#sigmoid"/>
        </g>
        <g transform="translate(410,330) scale(1,0.4)">
            <use href="#sigmoid"/>
        </g>
        <line x1="340" y1="150" x2="400" y2="150" stroke="#999" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="340" y1="350" x2="400" y2="350" stroke="#999" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="520" y1="150" x2="700" y2="150" stroke="#999" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="520" y1="350" x2="700" y2="350" stroke="#999" stroke-width="2" marker-end="url(#arrowhead)"/>
        <text x="720" y="155" fill="#9e9e9eff" font-family="Arial">y₁</text>
        <text x="720" y="355" fill="#9e9e9eff" font-family="Arial">y₂</text>
        <line x1="300" y1="50" x2="300" y2="110" stroke="#999" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead)"/>
        <line x1="300" y1="250" x2="300" y2="310" stroke="#999" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arrowhead)"/>
        <text x="290" y="40" fill="#868686ff" font-family="Arial">+b₁</text>
        <text x="290" y="240" fill="#868686ff" font-family="Arial">+b₂</text>
    </svg>
</div>

---

<script setup>
    import { onMounted } from "vue";
    onMounted(() => {
        document.querySelector("#preview svg").style.width = "600px";
    });
</script>

<small class="nl--center">Image Source: <br>
https://www.gilesthomas.com/2025/02/basic-neural-network-matrix-maths-part-1 </small>

# Why neural networks are not mysterious black boxes

This post was inspired by a conversation I had recently, where someone insisted that neural networks are inherently mysterious and cannot be explained algorithmically. <br>
Ill try to tackle
- Why neural networks are not black boxes
- Why you could write a step by step algorithm for them
- Why they "generalize" and what that means
- Why emergence is not unexplainable

## What is a neural network?

A neural network (NN) is a computational model inspired by the human brain. It consists of layers of interconnected nodes (neurons) that process data. Each connection has a weight that adjusts as learning proceeds.

## Why they are not a BlackBox

There's a popular claim that *neural networks are a black box*.
The reasoning usually goes like this:

> "We don't know the algorithm they use. We just throw data at them, and somehow they magically generalize. Therefore, it's a black box."

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

If you follow the [Stochastic gradient descent (SGD)](https://en.wikipedia.org/wiki/Stochastic_gradient_descent) and you actually "read" what the NN is doing, you can read out data points like $x_i, f(x_i)$ and "pull out" functions using [symbolic regression](https://en.wikipedia.org/wiki/Symbolic_regression) and can thus algorithmically approximate what the NN is doing.

That's it. The **systematic rules are 100% known**. Neural networks are not "mystical black boxes," they are just *very large, nonlinear functions*. Millions of parameters don't make it any less of a function.

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

> "Show me the pseudocode for generalizing text. We don't know how they do it!"

Actually, we do. Neural networks *don't* "learn to generalize" in some human-like way. Instead, they **compress patterns** in the training data so they can be reused on unseen data.
That's exactly what autoencoders do: they reduce input to essential features, then reconstruct it.

For text models, we tokenize input into vectors, map them into high-dimensional space, and optimize a cost function so the network predicts tokens correctly. The "generalization" is just the side effect of minimizing loss.

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

<div class="nl--center">

Fun fact: In $\mathbb{F}_{2^n}, n \in \mathbb{N}_{+}$ addition is exactly just XOR.

</div>

* Or, we can even have a complete Neural Network, self-contained in a single SVG, fully deterministic:

<iframe src="https://v1.cx/ann/?cache=blog" width="640" height="480"></iframe>

<small class="nl--center">Click on individual neurons to see their path.<br>
Neurons in the first hidden layer will also show their interpretation of the image.</small>
<small class="nl--center">Base code by [3blue1brown](https://github.com/3b1b/3Blue1Brown.com/blob/d8aa6607e7c08b12ea20f1afcff1c6603e10763d/public/content/lessons/2017/neural-networks/neural-network-interactive/index.js) - [open demo in new tab](https://v1.cx/ann/)</small>

::: danger HOWEVER
Even if it weren't deterministic, non-deterministic $\neq$ non-algorithmic. <br>
So this even applies to stochastic algorithms like MCMC or genetic algorithms.
:::

You could literally write out the entire function as a massive nested expression. It would be ugly, but it would be **exactly** what the network computes. 

> But ImageNet-scale networks have millions of parameters. No human will read through that by hand.

That doesn't mean they are unknowable. It means **the function is too complex to be described in plain English** without tools.

But in theory, you could write out the entire function as a massive nested expression. It would be ugly, but it would be **exactly** what the network computes.

## Interpreting Neural Networks

We already have methods to "open the box":

* **[Saliency maps](https://en.wikipedia.org/wiki/Saliency_map)** → show which pixels contributed most to a classification.
* **[Grad-CAM](https://github.com/jacobgil/pytorch-grad-cam)** → highlights image regions that drove a decision.
* **[TCAV](https://github.com/tensorflow/tcav) (Testing with Concept Activation Vectors)** → measures sensitivity to abstract concepts like "stripedness" or "roundness."
* **[Feature visualization](https://research.google/pubs/feature-visualization/)** → shows what individual neurons or layers respond to (edges, textures, shapes, objects).

So if a cat image triggers a network, we can literally see that early layers detect whiskers and edges, middle layers detect shapes, and higher layers assemble the concept "cat."
There is no *cat neuron*, but the composition of features encodes the concept.

> The forest is the solution, not the individual tree.

## The "Why These Weights?" Question

The final pushback I got was:

> "But WHY these exact weights? That's unexplained. Therefore: black box."

Actually, the *why* is simple:

* We define a loss function $\mathcal{L}$.
* We use Stochastic Gradient Descent (SGD) to minimize it.
* The optimal weights are those where the gradient is (approximately) zero:

$$
\nabla_{W}\,\mathcal{L}(W) \approx 0
$$

* And we then use backpropagation to compute gradients efficiently.

So the reason "why this weight" is literally:
**because it reduces the loss better than other weights.**

The weights are the solution to a constrained optimization problem. Emergent features aren't mysterious. They are the inevitable product of minimizing error under the given data. <br>
This isn't just "something we do during fitting". This is the **entire purpose** of training.

## Emergence Is Not Magic

Emergence doesn't mean "we don't know." or "we can't explain it".
It means: *complex behaviors arise from simple rules at scale.*
Like how water molecules give rise to waves, or how minimizing loss gives rise to feature detectors.

The network *is* the algorithm. You can:

* trace every operation,
* visualize every feature,
* approximate it with symbolic regression,
* prune, distill, or quantize it.

That's not a black box. That's just **a box too big to hold in your head without tools.** <br>
Knowing these properties is the literal basis of optimizations such as pruning, quantization, and distillation. <br>

::: warning And...
That's also why we have a whole field of [**explainable AI (XAI)**](https://en.wikipedia.org/wiki/Explainable_artificial_intelligence).
:::

Feature detections appear "emergent" because they are the result of cost minimization. If you have cat detection but never explicitly tell the NN to look for whiskers and ears, but it happens anyway because you minimize the cost function for exactly that, it doesn't come out of nowhere.

If I tell you to continue the number sequence 2, 4, 6, 8, and tell you that 1, 3, 5, 7 are wrong, chances are high that you will figure out on your own that the next number must be 10, just because of the constraints of the examples. Or if I want you to draw a triangle with a = 3, b = 5, then there is only one possibility for c. You could call that "property-bound emergence".

And as stated above, we even have tools and methods that can explain this emergence. Even visually.

SGD tells you exactly what happens and why. It's just not "human readable" on its own.

### Deterministic and Probabilistic are not mutually exclusive

Another common misconception is that *deterministic* and *probabilistic* are opposites. They're not. They can, in fact, be complementary.

* **Deterministic** means that given the same input and the same state, the algorithm will always produce the same output.
* **Probabilistic** means the output is expressed in terms of probabilities or likelihoods of outcomes.

A neural network can be both: it deterministically computes a probability distribution. For example, a softmax layer is a fixed function:

$$
p(y \mid x) = \frac{e^{z_y}}{\sum_j e^{z_j}}
$$

There is nothing "random" about this. The same $x$ and weights always produce the same $p(y \mid x)$.

Even a "probabilistic algorithm" can be fully deterministic. For example, a Naive Bayes classifier always computes the same probability distribution given the same data. The probabilistic part refers to the representation of uncertainty, not to actual randomness.

The real contrast is **deterministic vs stochastic**. <br>
Stochastic means that randomness is explicitly introduced (e.g. [Monte Carlo methods](https://en.wikipedia.org/wiki/Monte_Carlo_method), dropout during training, or random sampling at inference). <br>
But chance (probability) is not the same as randomness (stochasticity).

Large language models (LLMs) are a perfect case:

* If you run them with temperature = 0 and fixed seeds, they're entirely deterministic.
* If you increase temperature or use nucleus/top-k sampling, you inject stochasticity, and now the model's output can vary.

So when we say "AI is probabilistic," what we really mean is: *AI deterministically computes probability distributions, and we may or may not sample from them stochastically.*

::: tip Also...
Shamless self-plug: If you want to read more about determinism in a philosophical way, [go here](https://nulldev.org/blog/posts/devs-and-determinism).
:::

## Conclusion

Neural networks aren't mysterious or magical. They are deterministic, fully defined algorithms.
What people really mean when they say *"black box"* is:

* *"It's too complex for me to explain without tools."*
* *"The solution space is too large for human intuition."*

But complexity ≠ unknowability.
Every step can be computed, explained, and even visualized.

The box is transparent. Just very, very large.
