---
date: 2025-09-26
title: Activation Functions Demystified
outline: deep
tags:
- math
- neural-networks
- machine-learning
- activation-functions
---
What are activation functions in neural networks, what kind of activations are there, when to use which, and why do they matter?

---

# What are activation functions?

In the context of neural networks, an [**activation function**](https://en.wikipedia.org/wiki/Activation_function) is a mathematical operation applied to a neuron's output before passing it to the next layer. It introduces non-linearity into the model, allowing the network to learn complex patterns in the data.

## Sigmoid

- **It:** Squashes numbers into a range between 0 and 1.
- **Formula:** $\sigma(x) = \frac{1}{1 + e^{-x}}$.
- **Good for:** Binary classification tasks.
- **Used for:** Probability predictions. 
- **Bad for:** Deep networks (can cause vanishing gradients).
- **Range:** $(0, 1)$
- **Order of continuity:** $C^\infty$

<div id="plot-sigmoid"></div>

## Tanh (Hyperbolic Tangent)

- **It:** Squashes numbers into a range between -1 and 1.
- **Formula:** $\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$.
- **Good for:** Centering data around zero.
- **Used for:** Sentiment analysis, time series prediction.
- **Bad for:** Deep networks (can also cause vanishing gradients).
- **Range:** $(-1, 1)$
- **Order of continuity:** $C^\infty$

<div id="plot-tanh"></div>

## ReLU (Rectified Linear Unit)

- **It:** Outputs the input directly if positive; otherwise, it outputs zero.
- **Formula:** $\text{ReLU}(x) = \max(0, x)$.
- **Good for:** Most hidden layers in deep networks (efficient and effective).
- **Used for:** Image recognition, NLP tasks.
- **Bad for:** Can lead to "dying ReLUs" where neurons output zero for all inputs.
- **Range:** $[0, \infty)$
- **Order of continuity:** $C^0$

<div id="plot-relu"></div>

## Leaky ReLU

- **It:** Similar to ReLU but gives a small negative slope for negative inputs.
- **Formula:** $\text{Leaky ReLU}(x) = \max(0.01x, x)$.
- **Good for:** Preventing dying ReLUs.
- **Used for:** Fraud detection, anomaly detection.
- **Bad for:** Still not perfect. Can be less interpretable.
- **Range:** $(-\infty, \infty)$
- **Order of continuity:** $C^0$

<div id="plot-leaky-relu"></div>

## PReLU (Parametric ReLU)

- **It:** An extension of Leaky ReLU where the slope for negative inputs is learned during training.
- **Formula:** $\text{PReLU}(x) = \max(\alpha x, x)$ where $\alpha$ is a learned parameter.
- **Good for:** Allowing the model to adaptively learn the best activation.
- **Used for:** Image recognition, deep networks.
- **Bad for:** More parameters to learn, which can lead to overfitting.
- **Range:** $(-\infty, \infty)$
- **Order of continuity:** $C^0$

<div id="plot-prelu"></div>

## GELU (Gaussian Error Linear Unit)

- **It:** Combines properties of ReLU and sigmoid, providing smooth activation.
- **Formula:** $\text{GELU}(x) = x \cdot \Phi(x)$ where $\Phi(x)$ is the cumulative distribution function of the standard normal distribution.
- **Good for:** Deep learning models, especially transformers.
- **Used for:** NLP tasks, image recognition.
- **Bad for:** More complex to compute than ReLU.
- **Range:** $(-\infty, \infty)$
- **Order of continuity:** $C^\infty$

<div id="plot-gelu"></div>

## Softmax

- **It:** Converts a vector of values into probabilities that sum to 1.
- **Formula:** $\text{Softmax}(x_i) = \frac{e^{x_i}}{\sum_{j} e^{x_j}}$.
- **Good for:** Multi-class classification tasks.
- **Used for:** Image classification, language modeling.
- **Bad for:** Not suitable for regression tasks.
- **Range:** $(0, 1)$ for each output, sums to 1
- **Order of continuity:** $C^\infty$

<div id="plot-softmax"></div>

## Softplus

- **It:** A smooth approximation of ReLU.
- **Formula:** $\text{Softplus}(x) = \ln(1 + e^x)$.
- **Good for:** Situations where a smooth function is preferred.
- **Used for:** Regression tasks, probabilistic models.
- **Bad for:** Can be slower to compute than ReLU.
- **Range:** $(0, \infty)$
- **Order of continuity:** $C^\infty$

<div id="plot-softplus"></div>

## Swish / SiLU (Sigmoid Linear Unit)

- **It:** A smooth, non-monotonic function that can outperform ReLU in some cases.
- **Formula:** $\text{Swish}(x) = x \cdot \sigma(x)$.
- **Good for:** Deep networks where ReLU might struggle.
- **Used for:** Image classification, NLP tasks.
- **Bad for:** More computationally expensive than ReLU.
- **Range:** $(-\infty, \infty)$
- **Order of continuity:** $C^\infty$

<div id="plot-swish"></div>

## Gaussian

- **It:** A bell-shaped curve that is often used in statistics and machine learning.
- **Formula:** $f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}$.
- **Good for:** Modeling continuous data, anomaly detection.
- **Used for:** Probabilistic models, density estimation.
- **Bad for:** Not suitable for all types of data.
- **Range:** $(0, 1]$
- **Order of continuity:** $C^\infty$

<div id="plot-gaussian"></div>

<script setup>
import { onMounted } from "vue";
import functionPlot from "function-plot";

onMounted(() => {
    functionPlot({
        target: "#plot-sigmoid",
        width: 400,
        height: 300,
        grid: true,
        data: [
        {
            fn: "1 / (1 + exp(-x))",
            sampler: "builtIn",
            graphType: "polyline",
        },
        ],
        yAxis: { domain: [-0.1, 1.1] },
        xAxis: { domain: [-10, 10] },
        title: "Sigmoid Function",
    });
    
    functionPlot({
        target: "#plot-tanh",
        width: 400,
        height: 300,
        grid: true,
        data: [
        {
            fn: "(exp(x) - exp(-x)) / (exp(x) + exp(-x))",
            sampler: "builtIn",
            graphType: "polyline",
        },
        ],
        yAxis: { domain: [-1.1, 1.1] },
        xAxis: { domain: [-10, 10] },
        title: "Tanh Function",
    });
    
    functionPlot({
        target: "#plot-relu",
        width: 400,
        height: 300,
        grid: true,
        data: [
        {
            fn: "max(0, x)",
            sampler: "builtIn",
            graphType: "polyline",
        },
        ],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "ReLU Function",
    });
    
    functionPlot({
        target: "#plot-leaky-relu",
        width: 400,
        height: 300,
        grid: true,
        data: [
        {
            fn: "max(0.01 * x, x)",
            sampler: "builtIn",
            graphType: "polyline",
        },
        ],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "Leaky ReLU Function",
    });

    functionPlot({
        target: "#plot-prelu",
        width: 400,
        height: 300,
        grid: true,
        data: [
        {
            fn: "max(0.1 * x, x)", // Using a fixed alpha for visualization
            sampler: "builtIn",
            graphType: "polyline",
        },
        ],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "PReLU Function (α=0.1)",
    });

        functionPlot({
        target: "#plot-gelu",
        width: 400,
        height: 300,
        grid: true,
        data: [
        {
            fn: "0.5 * x * (1 + tanh(sqrt(2/PI) * (x + 0.044715 * x^3)))", // approximation
            sampler: "builtIn",
            graphType: "polyline",
        },
        ],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "GELU Function",
    });

    functionPlot({
        target: "#plot-softmax",
        width: 400,
        height: 300,
        grid: true,
        data: [
        {
            fn: "exp(x) / (exp(x) + exp(1) + exp(2))", // Simplified for 3 classes
            sampler: "builtIn",
            graphType: "polyline",
        },
        ],
        yAxis: { domain: [-0.1, 1.1] },
        xAxis: { domain: [-10, 10] },
        title: "Softmax Function (Simplified)",
    });

    functionPlot({
        target: "#plot-swish",
        width: 400,
        height: 300,
        grid: true,
        data: [
        {
            fn: "x / (1 + exp(-x))",
            sampler: "builtIn",
            graphType: "polyline",
        },
        ],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "Swish Function",
    });

    functionPlot({
        target: "#plot-softplus",
        width: 400,
        height: 300,
        grid: true,
        data: [
        {
            fn: "log(1 + exp(x))",
            sampler: "builtIn",
            graphType: "polyline",
        },
        ],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "Softplus Function",
    });

    functionPlot({
        target: "#plot-gaussian",
        width: 400,
        height: 300,
        grid: true,
        data: [
        {
            fn: "(1 / sqrt(2 * PI)) * exp(-0.5 * x^2)", // Standard normal distribution
            sampler: "builtIn",
            graphType: "polyline",
        },
        ],
        yAxis: { domain: [-0.1, 0.5] },
        xAxis: { domain: [-4, 4] },
        title: "Gaussian Function (Standard Normal Distribution)",
    });
});
</script>
