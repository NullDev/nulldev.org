---
date: 2023-09-21
title: Color Math
outline: deep
tags:
- math
---
Some cool math explained with colors.

---

# Color Math

Based on Kalid Azad's [ColorizedMath](https://betterexplained.com/ColorizedMath/)

## Bayes' Theorem

<br>

$$
\textcolor{Yellow}{\Pr}\big(\textcolor{Cyan}{H}\mid \textcolor{Orange}{E}\big)
= \color{Pink}{\frac
   {\textcolor{LightGreen}{\Pr(E\mid H)\,\Pr(H)}}
   {\textcolor{LightGreen}{\Pr(E\mid H)\,\Pr(H)} +
    \textcolor{Magenta}{\Pr(E\mid \neg H)\,\Pr(\neg H)}}}
$$

The $\textcolor{Yellow}{\text{chance}}$ $\textcolor{Orange}{\text{evidence}}$ is real (supports $\textcolor{Cyan}{\text{a hypothesis}}$) and is the $\textcolor{LightGreen}{\text{chance of a true positive}}$ $\color{Pink}{\text{among}}$ all positives ($\textcolor{LightGreen}{\text{true}}$ or $\textcolor{Magenta}{\text{false}}$).

## Combination

<br>

$$
\textcolor{Orange}{C(\textcolor{LightGreen}{n}, \textcolor{Cyan}{k})}
= \color{Magenta}{\frac
   {\textcolor{Yellow}{P(n, k)}}
   {\textcolor{Magenta}{k!}}}
$$

$\textcolor{Orange}{\text{To group (combine)}}$ $\textcolor{Cyan}{k}$ $\textcolor{Orange}{\text{items from}}$ $\textcolor{LightGreen}{n}$ $\textcolor{Orange}{\text{choices}}$, 
$\textcolor{Yellow}{\text{count the specific permutations}}$ and 
$\textcolor{Magenta}{\text{consolidate the reorderings within the group}}$.

## Sines

Sine is a fundamental wave function, appearing in geometry, calculus, physics, and signal processing.

### Sine (Unit Circle)

<br>

$$
\textcolor{Yellow}{\sin(\textcolor{LightGreen}{\theta})}
= \textcolor{Cyan}{\frac{\textcolor{Magenta}{\text{height}}}{\text{radius}}}
$$

Pick an $\textcolor{LightGreen}{\text{angle on the unit circle}}$: 
$\textcolor{Yellow}{\text{sine}}$ is the $\textcolor{Magenta}{\text{vertical coordinate}}$ 
as a $\textcolor{Cyan}{\text{percent of the maximum}}$.

---

### Sine (Series Definition)

<br>

$$
\textcolor{Yellow}{\sin(x)}
= \textcolor{Magenta}{x}
\textcolor{Cyan}{- \frac{x^3}{3!}}
\textcolor{Orange}{+ \frac{x^5}{5!}}
\textcolor{Pink}{+ \dots}
$$

$\textcolor{Yellow}{\text{Sine is}}$ $\textcolor{Magenta}{\text{an initial impulse}}$, 
$\textcolor{Cyan}{\text{with a restoring force}}$, 
$\textcolor{Orange}{\text{with a restoring force on the restoring force}}$, 
$\textcolor{Pink}{\text{and so on}}$.

---

### Sine (Geometric Definition)

<br>

$$
\textcolor{Yellow}{\sin(\textcolor{LightGreen}{\theta}) = }
\textcolor{Cyan}{\frac{\textcolor{Magenta}{\text{opposite}}}{\text{hypotenuse}}}
$$

In a right triangle, pick $\textcolor{LightGreen}{\text{an angle}}$: 
$\textcolor{Yellow}{\text{sine}}$ is the $\textcolor{Magenta}{\text{opposite side}}$ 
as a $\textcolor{Cyan}{\text{percent of the largest side}}$.

## Radian

<br>

$$
\textcolor{Magenta}{x^\textcolor{Yellow}{\circ}}
$$

$\textcolor{Yellow}{\text{Degrees see}}$ $\textcolor{Magenta}{\text{angles}}$ $\textcolor{Yellow}{\text{from the viewer's perspective (0-360 scale)}}$

$$
\textcolor{LightGreen}{\theta = }
\textcolor{Orange}{\frac{\textcolor{Magenta}{s}}{r}}
$$

$\textcolor{LightGreen}{\text{Radians measure}}$ $\textcolor{Magenta}{\text{the mover's path}}$  
$\textcolor{Orange}{\text{in terms of the radius}}$.

## Pythagorean Theorem

<br>

$$
\textcolor{Yellow}{c^\textcolor{Cyan}{2}}
= \textcolor{LightGreen}{a^\textcolor{Cyan}{2}}
\textcolor{Orange}{+} \textcolor{Magenta}{b^\textcolor{Cyan}{2}}
$$

When an $\textcolor{Yellow}{\text{object}}$ spans $\textcolor{LightGreen}{\text{perpendicular}}$ $\textcolor{Magenta}{\text{directions}}$, 
$\textcolor{Yellow}{\text{its}}$ $\textcolor{Cyan}{\text{area}}$ is the $\textcolor{Orange}{\text{combined}}$ $\textcolor{Cyan}{\text{area}}$ of $\textcolor{LightGreen}{\text{each}}$ $\textcolor{Magenta}{\text{part}}$.

## Permutation

<br>

$$
\textcolor{Yellow}{P(\textcolor{LightGreen}{n}, \textcolor{Cyan}{k})}
= \frac{\textcolor{LightGreen}{n!}}
       {\textcolor{Magenta}{(n - \textcolor{Cyan}{k})!}}
$$

$\textcolor{Yellow}{\text{To order (permute)}}$ $\textcolor{Cyan}{k}$ $\textcolor{Yellow}{\text{items from}}$ $\textcolor{LightGreen}{n}$ $\textcolor{Yellow}{\text{choices}}$,  
$\textcolor{LightGreen}{\text{start counting all orderings}}$ and  
$\textcolor{Magenta}{\text{stop counting after}}$ $\textcolor{Cyan}{k}$ $\textcolor{Magenta}{\text{items are found}}$.

## Imaginary Number

A maybe different way to think about imaginary numbers: <br>
- **What's an imaginary number?**
  - A number pointing sideways (North/South) isntead of the typical East/West number line.
- **What does i mean?**
  - $i$, by itself, points North. Multiplying by $i$ rotates you $90$ degrees. $2$ rotations points you backwards $(i \cdot i = -1)$, $4$ rotations spins you around fully $(i^4 = 1)$
<br>

$$
\textcolor{Yellow}{1} \cdot \textcolor{Magenta}{i^2} = \textcolor{LightGreen}{-1}
$$

$$
\textcolor{Magenta}{i} = \textcolor{Cyan}{\sqrt{\textcolor{LightGreen}{-1}}}
$$

$\textcolor{Yellow}{\text{Facing forward}}$, $\textcolor{Magenta}{\text{two 90-degree rotations}}$ is $\textcolor{LightGreen}{\text{backward}}$.  
$\textcolor{Magenta}{\text{An imaginary number}}$ is $\textcolor{Cyan}{\text{halfway}}$ $\textcolor{LightGreen}{\text{backward}}$.

## LaPlace Transform

<br>

$$
\textcolor{LightGreen}{e^{-\textcolor{Orange}{s}t}}
= e^{\textcolor{Orange}{-(a+bi)}t}
= e^{-at} \cdot e^{-bit}
$$

A $\textcolor{LightGreen}{\text{complex exponential spiral}}$ has an implied $\textcolor{Orange}{\text{decay and spin rate}}$

$$
\textcolor{Yellow}{F(\textcolor{Orange}{s})} =
\textcolor{Magenta}{\int_0^\infty}
\, \textcolor{Cyan}{f(t)} \cdot \textcolor{LightGreen}{e^{-\textcolor{Orange}{s}t}} \, \textcolor{Magenta}{dt}
$$

$\textcolor{Yellow}{\text{To measure}}$ $\textcolor{Orange}{\text{a specific decay and spin rate}}$ $\textcolor{Cyan}{\text{in a signal}}$,  
$\textcolor{Magenta}{\text{project onto}}$ $\textcolor{LightGreen}{\text{a spiral of that}}$ $\textcolor{Orange}{\text{rate}}$.

## Fourier Transform

<br>

$$
\textcolor{Yellow}{X}_{\textcolor{LightGreen}{k}} =
\textcolor{Pink}{\frac{1}{N}
\sum_{n=0}^{N-1}}
\, \textcolor{Cyan}{x_n}\,
\textcolor{Magenta}{e^{i \textcolor{Orange}{2 \pi} \textcolor{LightGreen}{k} $\textcolor{Pink}{\tfrac{n}{N}}}}
$$

To find $\textcolor{Yellow}{\text{the energy}}$ $\textcolor{LightGreen}{\text{at a particular frequency}}$,  
$\textcolor{Magenta}{\text{spin}}$ $\textcolor{Cyan}{\text{your signal}}$ $\textcolor{Orange}{\text{around a circle}}$ $\textcolor{LightGreen}{\text{at that frequency}}$, and  
$\textcolor{Pink}{\text{average a bunch of points along that path}}$.

## Euler's Identity

<br>

$$
\textcolor{Yellow}{e}^{\textcolor{LightGreen}{i\textcolor{Magenta}{\pi}}} \textcolor{Pink}{=} \textcolor{Cyan}{-1}
$$

$\textcolor{Yellow}{\text{Growth}}$ $\textcolor{LightGreen}{\text{pushing sideways}}$ $\textcolor{Magenta}{\text{lasting for half a circle}}$  
$\textcolor{Pink}{\text{points you}}$ $\textcolor{Cyan}{\text{backwards}}$.

## Eulers Formula

<br>

$$
\textcolor{Yellow}{e}^{\textcolor{LightGreen}{i\textcolor{Magenta}{x}}}
\textcolor{Pink}{=} \textcolor{Cyan}{\cos(x)}
+ \textcolor{Orange}{i \sin(x)}
$$

$\textcolor{Yellow}{\text{Growth}}$ in a $\textcolor{LightGreen}{\text{perpendicular direction}}$ over $\textcolor{Magenta}{\text{time}}$  
is circular: $\textcolor{Pink}{\text{here are the}}$ $\textcolor{Cyan}{\text{horizontal}}$  
and $\textcolor{Orange}{\text{vertical}}$ coordinates

## E

The constant $e$ (approximately $2.718$) is the base of natural logarithms and arises naturally in many areas of mathematics, especially those involving growth and change.

- **Why's $e$ special?**
  - All circles are the unit circle, scaled up. All continuously growing systems are $e^{rt}$, scaled to some rate and time.

### E (Compound Interest Definition)

<br>

$$
\textcolor{Yellow}{e} = \textcolor{Orange}{\lim_{n \to \infty}} 
\left( \textcolor{LightGreen}{1 +} \frac{\textcolor{Magenta}{1}}{\textcolor{Pink}{n}} \right)^{\textcolor{Cyan}{1 \cdot \textcolor{Pink}{n}}}
$$

$\textcolor{Yellow}{\text{The base for continuous growth}}$ is  
$\textcolor{LightGreen}{\text{the unit quantity}}$ $\textcolor{Magenta}{\text{earning unit interest}}$ $\textcolor{Cyan}{\text{for unit time}}$, $\textcolor{Pink}{\text{compounded}}$ $\textcolor{Orange}{\text{as fast as possible}}$

---

### E (Derivative Definition)

<br>

$$
\frac{\textcolor{LightGreen}{d}}{\textcolor{LightGreen}{dx}} \, \textcolor{Yellow}{e^x}
\textcolor{Orange}{=} \textcolor{Magenta}{100\%} \cdot \textcolor{Yellow}{e^x}
$$

$\textcolor{Yellow}{e^x}$ is the function where the $\textcolor{LightGreen}{\text{rate of change}}$  
$\textcolor{Orange}{\text{is always}}$ $\textcolor{Magenta}{100\%}$ of your $\textcolor{Yellow}{\text{current value}}$.

---

### E (Natural Log Definition)

<br>

$$
\textcolor{LightGreen}{\ln(a)}
= \textcolor{Cyan}{\int_1^a} \, \textcolor{Magenta}{\frac{1}{x}\,dx}
$$

$$
\textcolor{LightGreen}{\ln(\textcolor{Yellow}{e})} = \textcolor{Orange}{1}
$$

$\textcolor{LightGreen}{\text{The natural log}}$ is $\textcolor{Cyan}{\text{the time to grow from 1 to a value}}$  
using $\textcolor{Magenta}{\text{100\% continuous interest}}$.  

$\textcolor{Yellow}{e \text{ is the number}}$ that takes $\textcolor{LightGreen}{\text{the natural logarithm}}$  
$\textcolor{Orange}{\text{1 unit of time to reach}}$.

---

### E (Series Definition)

<br>

$$
\textcolor{Yellow}{e}
= \textcolor{LightGreen}{1}
+ \frac{\textcolor{Magenta}{1}}{\textcolor{Magenta}{1!}}
+ \frac{\textcolor{Cyan}{1}}{\textcolor{Cyan}{2!}}
+ \frac{\textcolor{Orange}{1}}{\textcolor{Orange}{3!}}
+ \textcolor{Pink}{\cdots}
$$

$\textcolor{Yellow}{\text{The base for continuous growth}}$ is  
$\textcolor{LightGreen}{\text{the unit quantity}}$ $\textcolor{Magenta}{\text{earning unit interest}}$  

plus $\textcolor{Cyan}{\text{the interest on the interest}}$  

plus $\textcolor{Orange}{\text{the interest on the interest on the interest}}$ and $\textcolor{Pink}{\text{so on}}$

## Convolution

<br>

$$
(\textcolor{Cyan}{f} \,\textcolor{Pink}{*}\, \textcolor{LightGreen}{g})(\textcolor{Orange}{t})
\;\;\overset{\text{def}}{=}\;\;
\textcolor{Yellow}{\int_{-\infty}^{\infty}} \textcolor{Cyan}{f(\tau)}\,\textcolor{LightGreen}{g(\textcolor{Orange}{t}\textcolor{Magenta}{-\tau})}\,\textcolor{Yellow}{d\tau}
$$

To $\textcolor{Pink}{\text{convolve}}$ $\textcolor{Cyan}{\text{a kernel}}$ with an $\textcolor{LightGreen}{\text{input signal}}$:  
$\textcolor{Magenta}{\text{flip the signal}}$, $\textcolor{Orange}{\text{move to the desired time}}$,  
and $\textcolor{Yellow}{\text{accumulate every interaction}}$ $\textcolor{Cyan}{\text{with the kernel}}$.

<br>

---

Wow, you made it to the bottom. Here, have a cookie: 🍪

---
