---
title: "Wrestling with Irrational Numbers Again"
author: Rev. Thomas J. Pulickal
tags:
- math
---

# Problem
Suppose you went to a placed called Neverland, where their unit of measure was called a neter ($n$), which just so happened to be equal to $\sqrt{2}$ meters ($m$). You might be upset at them for defining the neter as an irrational multiple of the meter ($\approx 1.4142$). But they claim to have established it first and blame the rest of the world for making the meter an irrational multiple of the neter ($1m = \approx 0.7071n$).

So now you have a table manufactured in Neverland, which has table's dimensions are $2n \times 1n \times 1n$. In the UK, the exact same table's surface area is $\frac{2}{\sqrt{2}}m \times \frac{1}{\sqrt{2}}m \times \frac{1}{\sqrt{2}}m \approx 1.4142m \times 0.7071m \times 0.7071m$, of course with never-ending decimals. Is everything produced in Neverland doomed to be ugly in the UK? And is everything produced in the UK doomed to ugly in Neverland?

# Repeating decimals

Let's introduce another a unit of measure, an American one, the foot (here called $f$). In 1959, the foot was defined as $1f = 0.3048m$.[^1] Those are not infinitely repeating decimals. So tables made in America work out fine in the UK. What about tables made in the UK? $1m = \frac{1}{0.3048}f \approx 3.2808f$. Uh oh, here once again we have infinitely repeating decimals. Let's take extend it out a little more: 3.2808398950131233595800524934383202099737532808398950131233595800524934383202099737532808... If you look carefully, you'll notice that the pattern repeats every 42 decimal places. So the exact value is $3.\overline{280839895013123359580052493438320209973753}f$, which is kind of funny. What does this mean? For one, it means that if you have enough feet, you'll eventually line up perfectly with a meter. Specifically, $3048m = 10000f$. That's the thing with rational numbers, even when they have repeating decimals, they are never incompatible with each other. In fact, the only reason why the decimals keep going is because the number cannot be split into 10s for sake of the decimal places.

It is like this. Imagine if you have a paper split into 3 even parts by lines and you shade in the first third. Now, with a red pen, you draw an additional line to divide the paper in two. If you keep dividing the paper in two, will a red line ever mark the shaded-in boundary?

![Thirds and Halves]({{ site.media }}./thirds-halves.gif)

As you can see, it will always either overshoot or undershoot the line that marks the third. This means that a third cannot be represented in binary (because we are splitting in twos) with a finite number of digits. It looks like this $\approx 0.010101$. Or, precisely, it is written as $0.\overline{01}$. The digits make perfect sense. It's saying: "When you first divide it in half, choose the first half. On the next cut, choose the second half. On the next cut, choose the first half again. *Ad infinitum.*"



-----
[^1]: If you want to go down a rabbit role, learn about the prior definition of foot as 1200/3937 meters and the two kinds of "feet" in U.S. history here: https://www.nist.gov/pml/us-surveyfoot.