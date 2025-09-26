---
date: 2025-09-02
title: All about the Base
outline: deep
tags:
- math
- number-systems
- bases
---
Weird Number Bases are weird. But also kinda cool. And kinda useless. But why stop at integer bases?

---

# Number systems are weird

When we think of number systems, we usually imagine the familiar **base-10** (decimal) or **base-2** (binary). But the idea of a "base" is much more flexible than most people realize. We aren't restricted to integers ≥ 2. In fact, we can use **fractional bases, irrational bases, and even negative or complex ones**.

Now, just because we _could_, does that mean we _should_?

::: tip Well...
Short answer: No. <br>
Long answer: Also no.
:::

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

or, if you want to be more formal and fancy,

$$
\sum_{k=-\infty}^n d_k b^k,
$$

where digits $d_k \in \{0,1,\ldots,\lfloor b \rfloor\}$ (<- the digit set).

As long as we agree on a digit set, the system works, whether $b$ is an integer, a fraction, or even irrational.

::: warning Note:
A general rule thus emerges:<br>
In any base-$b$, the number $b$ is always represented as `10`, and $b^n$ is `1` followed by `n` zeros.
:::

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

## Irrational bases: 

Nothing stops us from picking an irrational base, like $\pi$. Choosing a non-integer base doesn't stop the positional system from working. It just makes the expansions of other numbers weird.

---

### base-π

Now, if you remember from earlier: Any number $b$ in base-$b$ is represented as `10`.

* So in **base-π**, the string `10` represents exactly:

  $$
  1 \times \pi^1 + 0 \times \pi^0 = \pi
  $$

So if you ever felt the need to express $\pi$ as a rational integer, here you go. It's `10`. <br>
<small>(Well... in base-π, at least).</small>

Of course, other numbers get strange expansions. 

But this system can be used to more easily show the relationship between the diameter of a circle to its circumference, which corresponds to its perimeter. 

Since circumference = π × diameter, a circle with diameter $1_\pi$ has circumference $10_\pi$. A circle with diameter $10_\pi$ has circumference $100_\pi$, and so on.

Also, since area = π × radius², a circle with radius $1_\pi$ will have an area of $10_\pi$. A circle with radius $10_\pi$ will have an area of $1000_\pi$, and so on.

---

### base-$e$

With base-$e$, the [natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm) behaves like the [common logarithm](https://en.wikipedia.org/wiki/Common_logarithm) in base-10.

As

$$
\ln(1_e) = 0, \ln(10_e) = 1, \ln(100_e) = 2, \ln(1000_e) = 3, \dots
$$

This means that the integer part of the natural logarithm of a number in base-$e$ counts the number of digits before the separating point in that number, minus one.

The base-$e$ is the most economical choice of radix $\beta > 1$, where the [radix economy](https://en.wikipedia.org/wiki/Optimal_radix_choice) is measured as the product of the radix and the length of the string of symbols needed to express a given range of values. 

A binary number uses only two different digits, but it needs a lot of digits for representing a number. base-10 writes shorter numbers, but it needs 10 different digits to write them. The balance between those is base-$e$, which therefore would store numbers optimally.

---

### base-√2

Base $\sqrt{2}$ behaves in a very similar way to base-2 as all one has to do to convert a number from binary into base $\sqrt{2}$ is put a zero digit in between every binary digit.

E.g.:

$1911_{10} = 11101110111_2$ becomes $101010001010100010101_\sqrt{2}$ and <br>
$5118_{10} = 1001111111110_2$ becomes $1000001010101010101010100_\sqrt{2}$.

This means that every integer can be expressed in base $\sqrt{2}$ without the need of a decimal point. 

The base can also be used to show the relationship between the side of a square to its diagonal as a square with a side length of $1_\sqrt{2}$ will have a diagonal of $10_\sqrt{2}$ and a square with a side length of $10_\sqrt{2}$ will have a diagonal of $100_\sqrt{2}$.

Another use of the base is to show the [silver ratio](https://en.wikipedia.org/wiki/Silver_ratio) as its representation in base $\sqrt{2}$ is simply $11_\sqrt{2}$. 

In addition, the area of a [regular octagon](https://en.wikipedia.org/wiki/Octagon#Regular_octagon) with side length $1_\sqrt{2}$ is $1100_\sqrt{2}$, the area of a regular octagonwith side length $10_\sqrt{2}$ is $110000_\sqrt{2}$, the area of a regular octagon with side length $100_\sqrt{2}$ is $11000000_\sqrt{2}$, etc...

---

### base-$\varphi$

One of the most beautiful non-integer bases is the [**golden ratio base**](https://en.wikipedia.org/wiki/Golden_ratio_base), also called **phinary** or the **Fibonacci coding system**.

The golden ratio is

$$
\varphi = \frac{1+\sqrt{5}}{2} \approx 1.618
$$

In base-$\varphi$, we can represent integers using only the digits $\{0,1\}$, with the rule that **no two 1s are allowed in a row**. <br>

::: tip Note
$11_\varphi = 100_\varphi$ where $100_\varphi$ is the canonical representation<br>
This follows from $\varphi^2 + \varphi = \varphi^3$, since the golden ratio satisfies $\varphi^2 = \varphi + 1$.
:::

::: details Show me
The golden ratio satisfies
$$
\varphi^2 = \varphi + 1.
$$

From this, it follows that

$$
\varphi^3 = \varphi \cdot \varphi^2 = \varphi(\varphi + 1) = \varphi^2 + \varphi.
$$

So

$$
\varphi^3 = \varphi^2 + \varphi,
$$

which numerically means

$$
1\varphi^2 + 1\varphi = 1\varphi^3,
$$

which is exactly the statement

$$
11_\varphi = 100_\varphi.
$$
:::

Examples:

* `1φ0` = $\varphi^2 = \varphi + 1 = 2.618...$
* `100φ` = $\varphi^3 \approx 4.236...$
* Every positive integer has a finite, unique representation in base-$\varphi$.

This system is tightly connected to the Fibonacci sequence, since powers of $\varphi$ obey Fibonacci-like identities.

::: tip Base-$\Psi$
There are some numbers in base-$\Psi$ ([Supergolden ratio](https://en.wikipedia.org/wiki/Supergolden_ratio)) that are also ambiguous. <br>
For example, $101_\Psi = 1000_\Psi$.
:::

## Other exotic bases

* **Negabinary (base -2):** Every integer has a unique representation using only 0 and 1, without needing a minus sign. This works for any [negative base](https://en.wikipedia.org/wiki/Negative_base).
* **Complex base $i$:** The ["quater-imaginary"](https://en.wikipedia.org/wiki/Quater-imaginary_base) system (base $2i$) can represent every complex integer with digits 0–3.

## Why does this matter? 

I have no idea. I haven't slep today and just thought it's cool.

## Btw

Just like bases don't have to be integers, dimensions don't either. 0D (Point), 1D (Line), 2D (Plane), 3D (Cube), 4D (Tesseract) are cool and all...

But we can also have [fractal dimensions](https://en.wikipedia.org/wiki/Fractal_dimension) like 1.26D ([Koch snowflake](https://en.wikipedia.org/wiki/Koch_snowflake)), 1.58D ([Sierpiński triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle)), 2.7268D ([Menger sponge](https://en.wikipedia.org/wiki/Menger_sponge)) and so on.

::: danger Uhh...
Ironically, the Hausdorff dimension of the self-similar recursive fractal of the [dragon curve](https://en.wikipedia.org/wiki/Dragon_curve) is exactly **2**.
:::

Now, how a Hausdorff space of $\pi$D would look like, is left as an exercise to the reader. <br>
<small>Hint: [It's possible](https://en.wikipedia.org/wiki/Iterated_function_system)</small>
