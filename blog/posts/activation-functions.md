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

In the context of neural networks, an [**activation function**](https://en.wikipedia.org/wiki/Activation_function) is a mathematical operation applied to a neuron's output before passing it to the next layer. It introduces [**non-linearity**](https://en.wikipedia.org/wiki/Nonlinear_system) into the model, allowing the network to learn complex patterns in the data.

## Why Non-Linearity Matters

If you stacked multiple **linear layers** without any non-linear activations, the entire network would still collapse into a **single linear transformation**. In other words, no matter how many layers you add, the network could only ever represent straight decision boundaries.

Activation functions introduce **non-linearities** between layers, which let networks approximate arbitrarily complex functions. This is what makes deep learning powerful: with enough non-linearities and data, neural nets can model intricate decision surfaces like speech, images, or language.

A simple example:  
- A network with no activations can only model a line.  
- A network with ReLU activations can model piecewise linear shapes.  
- With sigmoid/tanh or smooth activations, it can model curves.

## Common Activation Functions

Each activation has its own properties, advantages, and drawbacks. Below is a list of the most commonly used functions.

---

### Sigmoid

- **It:** Squashes numbers into a range between 0 and 1.
- **Formula:** $\sigma(x) = \frac{1}{1 + e^{-x}}$.
- **Derivative:** $\sigma'(x) = \sigma(x)(1 - \sigma(x))$.
- **Good for:** Binary classification tasks.
- **Used for:** Probability predictions. 
- **Bad for:** Deep networks (can cause vanishing gradients).
- **Range:** $(0, 1)$
- **Order of continuity:** $C^\infty$

<div id="plot-sigmoid"></div>

---

### Tanh (Hyperbolic Tangent)

- **It:** Squashes numbers into a range between -1 and 1.
- **Formula:** $\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$.
- **Derivative:** $\tanh'(x) = 1 - \tanh^2(x)$.
- **Good for:** Centering data around zero.
- **Used for:** Sentiment analysis, time series prediction.
- **Bad for:** Deep networks (can also cause vanishing gradients).
- **Range:** $(-1, 1)$
- **Order of continuity:** $C^\infty$

<div id="plot-tanh"></div>

---

### ReLU (Rectified Linear Unit)

- **It:** Outputs the input directly if positive; otherwise, it outputs zero.
- **Formula:** $\text{ReLU}(x) = \max(0, x)$.
- **Derivative:** $\text{ReLU}'(x) = \begin{cases} 1 & x > 0 \\ 0 & x \leq 0 \end{cases}$
- **Good for:** Most hidden layers in deep networks (efficient and effective).
- **Used for:** Image recognition, NLP tasks.
- **Bad for:** Can lead to "dying ReLUs" where neurons output zero for all inputs.
- **Range:** $[0, \infty)$
- **Order of continuity:** $C^0$

<div id="plot-relu"></div>

---

### Leaky ReLU

- **It:** Similar to ReLU but gives a small negative slope for negative inputs.
- **Formula:** $\text{Leaky ReLU}(x) = \max(0.01x, x)$.
- **Derivative:** $\text{Leaky ReLU}'(x) = \begin{cases} 1 & x > 0 \\ 0.01 & x \leq 0 \end{cases}$
- **Good for:** Preventing dying ReLUs.
- **Used for:** Fraud detection, anomaly detection.
- **Bad for:** Still not perfect. Can be less interpretable.
- **Range:** $(-\infty, \infty)$
- **Order of continuity:** $C^0$

<div id="plot-leaky-relu"></div>

---

### PReLU (Parametric ReLU)

- **It:** An extension of Leaky ReLU where the slope for negative inputs is learned during training.
- **Formula:** $\text{PReLU}(x) = \max(\alpha x, x)$ where $\alpha$ is a learned parameter.
- **Derivative:** $\text{PReLU}'(x) = \begin{cases} 1 & x > 0 \\ \alpha & x \leq 0 \end{cases}$
  - **Note:** $\alpha$ can be learned **per neuron** or **shared per layer**, depending on the implementation.
- **Good for:** Allowing the model to adaptively learn the best activation.
- **Used for:** Image recognition, deep networks.
- **Bad for:** More parameters to learn, which can lead to overfitting.
- **Range:** $(-\infty, \infty)$
- **Order of continuity:** $C^0$

<div id="plot-prelu"></div>

---

### GELU (Gaussian Error Linear Unit)

- **It:** Combines properties of ReLU and sigmoid, providing smooth activation.
- **Formula:** $\text{GELU}(x) = x \cdot \Phi(x)$ where $\Phi(x)$ is the standard normal [cumulative distribution function (CDF)](https://en.wikipedia.org/wiki/Cumulative_distribution_function).
- **Derivative:** Complex; involves both $\Phi(x)$ and the PDF $\phi(x)$. Commonly computed automatically by frameworks.
- **Good for:** Deep learning models, especially transformers.
- **Used for:** NLP tasks, image recognition.
- **Bad for:** More complex to compute than ReLU (though efficient in modern libraries).
- **Range:** $(-\infty, \infty)$
- **Order of continuity:** $C^\infty$

<div id="plot-gelu"></div>

---

### Softmax

- **It:** Converts a vector of values into probabilities that sum to 1.
- **Formula:** $\text{Softmax}(x_i) = \frac{e^{x_i}}{\sum_{j} e^{x_j}}$.
- **Derivative:** Involves the Jacobian matrix; $\frac{\partial \text{Softmax}(x)_i}{\partial x_j} = \text{Softmax}(x)_i(\delta_{ij} - \text{Softmax}(x)_j)$.
- **Good for:** Multi-class classification tasks.
- **Used for:** Image classification, language modeling.
- **Bad for:** Not suitable for regression tasks.
- **Range:** $(0, 1)$ for each output, sums to 1
- **Order of continuity:** $C^\infty$

<div id="plot-softmax"></div>

<small class="nl--center">
<b>Note:</b> This plot uses a simplified 3-class softmax for illustration. Real softmax operates on full vectors.
</small>

---

### Softplus

- **It:** A smooth approximation of ReLU.
- **Formula:** $\text{Softplus}(x) = \ln(1 + e^x)$.
- **Derivative:** $\text{Softplus}'(x) = \sigma(x)$ (the sigmoid function).
- **Good for:** Situations where a smooth function is preferred.
- **Used for:** Regression tasks, probabilistic models.
- **Bad for:** Can be slower to compute than ReLU.
- **Range:** $(0, \infty)$
- **Order of continuity:** $C^\infty$

<div id="plot-softplus"></div>

---

### Swish / SiLU (Sigmoid Linear Unit)

- **It:** A smooth, non-monotonic function that can outperform ReLU in some cases.
- **Formula:** $\text{Swish}(x) = x \cdot \sigma(x)$.
- **Derivative:** $\text{Swish}'(x) = \sigma(x) + x \cdot \sigma'(x)$.
- **Good for:** Deep networks where ReLU might struggle.
- **Used for:** Image classification, NLP tasks.
- **Bad for:** More computationally expensive than ReLU.
- **Range:** $(-\infty, \infty)$
- **Order of continuity:** $C^\infty$

<div id="plot-swish"></div>

---

### Gaussian

- **It:** A bell-shaped curve that is often used in statistics and machine learning.
- **Formula:** $f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}$.
- **Derivative:** $f'(x) = -\frac{x - \mu}{\sigma^2} f(x)$.
- **Good for:** Modeling continuous data, anomaly detection.
- **Used for:** Probabilistic models, density estimation.
- **Bad for:** **Rarely used as an activation** in modern deep learning architectures.
- **Range:** $(0, 1]$
- **Order of continuity:** $C^\infty$

<div id="plot-gaussian"></div>

<small class="nl--center">
<b>Disclaimer:</b><br>
Gaussian functions are typically used in radial basis function (RBF) networks or probabilistic models,<br>
not as standard activations in deep networks like CNNs or transformers.
</small>

## Choosing the Right Activation Function

| Task / Layer | Recommended Activation | Reason | Performance |
|-------------|---------------------------|--------|------------|
| Hidden layers (most tasks) | ReLU / Leaky ReLU | Simple, fast, effective | Very fast |
| Deep NLP / Transformers | GELU / Swish | Smooth, better gradient flow | Slightly slower but optimized |
| Output for binary classification | Sigmoid | Converts to probability | Efficient |
| Output for multi-class classification | Softmax | Normalized class probabilities | Standard |
| Regression outputs | Linear (no activation) | Unbounded range | Fastest | 

::: tip Note:
Modern frameworks optimize GELU, Swish, and Softplus well, so their extra compute cost is usually negligible in practice.
:::

## Common Pitfalls

- **Vanishing gradients:** Sigmoid and tanh squish inputs into small ranges, which can make gradients vanish in deep networks.
- **Dying ReLUs:** Large learning rates can push neurons permanently into the negative regime, making them output 0 forever.
- **Exploding outputs:** Stacking linear activations or using softmax incorrectly can lead to numerical instability.
- **Misusing softmax:** Applying softmax to regression outputs or applying it twice can distort predictions.
- **Overfitting with PReLU:** Learning too many extra parameters can overfit small datasets.

---

<script setup>
import { onMounted } from "vue";
import functionPlot from "function-plot";

onMounted(() => {
    functionPlot({
        target: "#plot-sigmoid",
        width: 400,
        height: 300,
        grid: true,
        data: [{
            fn: "1 / (1 + exp(-x))",
            derivative: {
                fn: "(exp(-x)) / ((1 + exp(-x))^2)",
                x0: 8,
                updateOnMouseMove: true,
            },
        }],
        yAxis: { domain: [-0.1, 1.1] },
        xAxis: { domain: [-10, 10] },
        title: "Sigmoid Function",
        disableZoom: true,
    });
    
    functionPlot({
        target: "#plot-tanh",
        width: 400,
        height: 300,
        grid: true,
        data: [{
            fn: "(exp(x) - exp(-x)) / (exp(x) + exp(-x))",
        }],
        yAxis: { domain: [-1.1, 1.1] },
        xAxis: { domain: [-10, 10] },
        title: "Tanh Function",
        disableZoom: true,
    });
    
    functionPlot({
        target: "#plot-relu",
        width: 400,
        height: 300,
        grid: true,
        data: [{
            fn: "max(0, x)",
        }],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "ReLU Function",
        disableZoom: true,
    });
    
    functionPlot({
        target: "#plot-leaky-relu",
        width: 400,
        height: 300,
        grid: true,
        data: [{ fn: "max(0.01 * x, x)" }],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "Leaky ReLU Function",
        disableZoom: true,
    });

    functionPlot({
        target: "#plot-prelu",
        width: 400,
        height: 300,
        grid: true,
        data: [{ fn: "max(0.1 * x, x)" }],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "PReLU Function (α=0.1)",
        disableZoom: true,
    });

    functionPlot({
        target: "#plot-gelu",
        width: 400,
        height: 300,
        grid: true,
        data: [{ fn: "0.5 * x * (1 + tanh(sqrt(2/PI) * (x + 0.044715 * x^3)))" }],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "GELU Function",
        disableZoom: true,
    });

    functionPlot({
        target: "#plot-softmax",
        width: 400,
        height: 300,
        grid: true,
        data: [{ fn: "exp(x) / (exp(x) + exp(1) + exp(2))" }],
        yAxis: { domain: [-0.1, 1.1] },
        xAxis: { domain: [-10, 10] },
        title: "Softmax Function (Simplified 3-class)",
        disableZoom: true,
    });

    functionPlot({
        target: "#plot-swish",
        width: 400,
        height: 300,
        grid: true,
        data: [{ fn: "x / (1 + exp(-x))" }],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "Swish Function",
        disableZoom: true,
    });

    functionPlot({
        target: "#plot-softplus",
        width: 400,
        height: 300,
        grid: true,
        data: [{ fn: "log(1 + exp(x))" }],
        yAxis: { domain: [-1, 10] },
        xAxis: { domain: [-10, 10] },
        title: "Softplus Function",
        disableZoom: true,
    });

    functionPlot({
        target: "#plot-gaussian",
        width: 400,
        height: 300,
        grid: true,
        data: [{ fn: "(1 / sqrt(2 * PI)) * exp(-0.5 * x^2)" }],
        yAxis: { domain: [-0.1, 0.5] },
        xAxis: { domain: [-4, 4] },
        title: "Gaussian Function (Standard Normal)",
        disableZoom: true,
    });
});
</script>
