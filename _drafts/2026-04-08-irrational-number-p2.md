---
title: "Wrestling with Irrational Numbers Again"
author: Rev. Thomas J. Pulickal
tags:
- math
---

# Problem
Suppose you went to a placed called Neverland, where their unit of measure was called a neter ($n$), which just so happened to be equal to $\sqrt{2}$ meters ($m$). You might be frustrated at them for defining the neter as an irrational multiple of the meter ($\approx 1.4142$), but they claim to have established theirs first and blame the rest of the world for making the meter an irrational multiple of the neter ($1m = \approx 0.7071n$).

So now you have a table manufactured in Neverland with dimensions of $2n \times 1n \times 1n$, but in the UK, the exact same table's dimensions are $\frac{2}{\sqrt{2}}m \times \frac{1}{\sqrt{2}}m \times \frac{1}{\sqrt{2}}m \approx 1.4142m \times 0.7071m \times 0.7071m$, with never-ending decimals. Is everything produced in Neverland doomed to be this ugly in the UK? And is everything produced in the UK doomed to be equally ugly in Neverland?

# Repeating decimals

Let's introduce another a unit of measure, an American one, the foot (here called $f$). In 1959, the foot was defined as $1f = 0.3048m$.[^1] Those are not infinitely repeating decimals. So tables made in America work out fine in the UK. What about tables made in the UK? Well, $1m = \frac{1}{0.3048}f \approx 3.2808f$. Uh oh! Here once again we have infinitely many decimals. Let's extend that out a little more to really see it: 3.2808398950131233595800524934383202099737532808398950131233595800524934383202099737532808... If you look carefully, you'll notice that the pattern repeats every 42 decimal places. So the exact value is expressed as $3.\overline{280839895013123359580052493438320209973753}f$. *What does this mean?*

It is like this. Imagine you have a paper split into 3 even parts and you shade in the first third. Now, with a red pen, you draw an additional line to divide the paper in two. If you keep dividing the paper in twos with your red pen, will a red line ever line up with the edge of the shaded-in region?

![Thirds and Halves]({{ site.media }}./thirds-halves.gif)

As you can see, it will always either overshoot or undershoot the line that marks the third. This means that a third cannot be represented in binary with a finite number of digits. We highlight binary because we are splitting in twos here. In binary, $\frac{1}{3}$ looks like this $\approx 0.010101$. Or, precisely, $0.\overline{01}$. These digits make sense, as they perfectly match our experience with the paper. The digits are saying: "When you first divide the box in half, choose the left half (0). On the next cut, choose the right half (1). On the next cut, choose the left half again (0). *Ad infinitum.*" You would have a similar problem if you tried to divide the box in 10s instead. You would have to keep choosing the third box over and over again, which is why $\frac{1}{3} \approx 0.3333$ in a decimal (base 10) number system. Now notice that you have 3 $\frac{1}{3}$s, you reach an integer in base 10. Why? Because now the whole box is shaded in. And so it is with every rational number. If you add many of them together, you'll eventually reach an integer.

Coming back to our 'Made in the UK' table (which just as fanciful as a table made in Neverland), can a sufficiently large number of meters ever line up with an integer number of feet? Yes, $381m = 1250f$. That's the thing with rational numbers, even when they have repeating decimals, they are never truly incompatible with each other. 

# Non-repeating decimals
With that in mind, let's think about what an irrational number means. Regardless of what number system you represent it in, it will always have infinitely many digits after the decimal place *and they will never repeat*. That means the first time you divide the paper in 10s, it may ask you to choose the 4th one. The next time, the 9th one. Then the 3rd, 1st, 7th, etc., with no pattern whatsoever, forever! Though it is different by being unrepeating, seeing how infinite decimals are possible (such as with $\frac{1}{3}=0.\overline{3}$) is I think helpful in imagining that there really could be a number out there that is perpetually evasive, which cannot be captured by dividing the paper repeatedly in 2s, 3s, 4s, 5s, etc. or even in any combination of such cuts (first divide into tenths, then into thirds, etc.).

To me, as I continue to wrestle with this all, prime numbers serve as a helpful analogy. Most numbers can be divided up evenly into smaller groups. If you have a class of 50 people, you can split them up into groups of 5 or 10 or 2, for example. But isn't it weird that there are numbers that cannot be divided evenly into smaller groups, such as $7$? It is even weirder that there are infinitely many such numbers. For $7$, it is easy to understand that the number 2 through 6 do not divide it up evenly. But what about a large number like $1234567891010987654321$? "You're telling me that there is a not a single number between 2 and 1234567891010987654320 that can divide that number evenly?!" Yes, exactly. If you had a class of that size, I wish you the best of luck in splitting them up evenly into groups (well, for more than one reason). By some rough analogy, irrational numbers are like this but in reverse. There is no way you can divide up the "1" (see [previous article]({% post_url 2026-03-26-irrational-numbers %})) evenly to land on the irrational number.

# Meters and Neters talking past each other
Instead of thinking about irrational numbers in the abstract sense, let's return to meters and neters. Neither one of them is irrational in themselves, but their relationship has been plagued by irrationality. They keep "talking past each other." No matter how many steps forward the one takes, it never catches up to the other, and vice versa. It looks like this.

![Neters to Meters]({{ site.media }}./neters-to-meters.png)

Notice that they get close there at the end. $1n \approx 1.41m$. If we multiply both sides by 10, we get $10n \approx 14.1m$, which is what we see there. The 10th neter almost lines up with the 14th meters. But alas, they will never, for all eternity.

This can be proven very simply, by definition of the irrational number. To begin with, an irrational number is a number that cannot be expressed as a ratio of integers, and we take for granted that $sqrt{2}$ is irrational (proofs are easily found online if you are a nonbeliever). Suppose that neters and meters would in fact meet at a certain point -- at some $x$ neters and $y$ meters ($x$ and $y$ are integers). So, $xn=ym$. Since $n=\sqrt(2)m$, $x \cdot \sqrt{2}m = $ym \implies \sqrt{2} = \frac{ym}{xm} \implies \sqrt{2} = \frac{y}{x}. This would imply that $\sqrt{2}$ is a rational number, which is a contradiction. Therefore, meters and neters are destined to talk past each other for all eternity.


-----
[^1]: If you want to go down a rabbit role, learn about the prior definition of foot as 1200/3937 meters and the two kinds of "feet" in U.S. history here: https://www.nist.gov/pml/us-surveyfoot.