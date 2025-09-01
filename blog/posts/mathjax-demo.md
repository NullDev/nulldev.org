---
date: 2023-09-21 09:21
title: Demo
outline: deep
tags:
- mathjax
- footnote
- demo
---
excerpt of post...

---

### Markdown-it-footnote
Here is a footnote reference,[^1] and another.[^longnote]

### Inline equation
$(ax^2 + bx + c = 0)$

### Block equation
$$\text{input layer size 94 x 94 : }\ (64_nC2-FMP \sqrt[3]{2})_{12}-C2-C1-output$$

### Inline code
`console.log()`

### Block code
```javascript
console.log('Hello, world!');
```

```python
x = 42
def greet():
    print("Hello, world!")

greet()
print(x)
```

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they belong to the <br>
    previous footnote.
