---
date: 2025-09-02
title: All about the Base
outline: deep
tags:
- math
- number-systems
- bases
---
Weird and Wonderful Number Bases

---

# Number systems are weird

When we think of number systems, we usually imagine the familiar **base-10** (decimal) or **base-2** (binary). But the idea of a “base” is much more flexible than most people realize. We aren't restricted to integers ≥ 2. In fact, we can use **fractional bases, irrational bases, and even negative or complex ones**.

Now, just because we _could_, does that mean we _should_?

Short answer: No. <br>
Long answer: Also no.

## What is a base, really?

A base $b$ (also called a radix) is just a multiplier for positional notation.
A digit string like

$$
d_n d_{n-1} \dots d_1 d_0 . d_{-1} d_{-2} \dots
$$

means

$$
d_n b^n + d_{n-1} b^{n-1} + \dots + d_1 b + d_0 + d_{-1} b^{-1} + d_{-2} b^{-2} + \dots
$$

As long as we agree on a digit set (often $\{0,1,\dots,\lfloor b \rfloor\}$), the system works, whether $b$ is an integer, a fraction, or even irrational.

A general rule thus emerges: In any base-$b$, the number $b$ is always represented as `10`, and $b^n$ is `1` followed by `n` zeros.

## Fractional bases

Take **base 1.5**. The digits are typically $\{0,1\}$.

* `1000` in base-1.5 means

  $$
  1 \times (1.5^3) = 3.375
  $$

* `101` in base-1.5 means

  $$
  1 \times (1.5^2) + 0 \times (1.5^1) + 1 \times (1.5^0) = 2.25 + 1 = 3.25
  $$

Numbers don't line up as neatly as in base-10, but the system is perfectly valid.

## Irrational bases: base-π

Nothing stops us from picking an irrational base, like $\pi$. Choosing a non-integer base doesn't stop the positional system from working. It just makes the expansions of other numbers weird.

Now, if you remember from earlier: Any number $b$ in base-$b$ is represented as `10`.

* So in **base-π**, the string `10` represents exactly:

  $$
  1 \times \pi^1 + 0 \times \pi^0 = \pi
  $$

So if you ever felt the need to express $\pi$ as a rational integer, here you go. It's `10`. <small><sub>(in base-π).</sub></small>

Of course, other numbers get strange expansions. For example, the number 2 in base-π would look like a fraction of `10`.

## The Golden Ratio base (phinary)

One of the most beautiful non-integer bases is the [**golden ratio base**](https://en.wikipedia.org/wiki/Golden_ratio_base), also called **phinary** or the **Fibonacci coding system**.

The golden ratio is

$$
\varphi = \frac{1+\sqrt{5}}{2} \approx 1.618
$$

In base-$\varphi$, we can represent integers using only the digits $\{0,1\}$, with the rule that **no two 1s are allowed in a row**.

Examples:

* `1φ0` = $\varphi^2 = \varphi + 1 = 2.618...$
* `100φ` = $\varphi^3 \approx 4.236...$
* Every positive integer has a finite, unique representation in base-$\varphi$.

This system is tightly connected to the Fibonacci sequence, since powers of $\varphi$ obey Fibonacci-like identities.

## Other exotic bases

* **Negabinary (base -2):** Every integer has a unique representation using only 0 and 1, without needing a minus sign. This works for any [negative base](https://en.wikipedia.org/wiki/Negative_base).
* **Complex base $i$:** The ["quater-imaginary"](https://en.wikipedia.org/wiki/Quater-imaginary_base) system (base $2i$) can represent every complex integer with digits 0–3.

## Why does this matter? 

I have no idea. I haven't slep today and just thought it's cool.


## Btw

Just like bases don't have to be integers, dimensions don't either. 0D (Point), 1D (Line), 2D (Plane), 3D (Cube), 4D (Tesseract) are cool and all...

But we can also have [fractal dimensions](https://en.wikipedia.org/wiki/Fractal_dimension) like 1.26D ([Koch snowflake](https://en.wikipedia.org/wiki/Koch_snowflake)), 1.58D ([Sierpiński triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle)), 2.7268D ([Menger sponge](https://en.wikipedia.org/wiki/Menger_sponge)) and so on.

<small>(Ironically, the Hausdorff dimension of the self-similar recursive fractal of the [dragon curve](https://en.wikipedia.org/wiki/Dragon_curve) is exactly 2.)</small>

Now, how a Hausdorff space of $\pi$D would look like, is left as an exercise to the reader. <br>
<small>Hint: [It's possible](https://en.wikipedia.org/wiki/Iterated_function_system)</small>
