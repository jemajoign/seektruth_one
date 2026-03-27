---
title: "Wrestling with Irrational Numbers"
author: Rev. Thomas J. Pulickal
tags:
- math
---

## Distance and the simple measuring rod

Let us think about the concept of "distance." There are a few different ways of conceiving of or defining distance. The most basic would be as follows. You start with some object, a rod. Distance answers the question: what are the least number of rods it would take to connect point A and point B without any gaps between them? If your rod is one meter, then the number of rods will tell you the distance in meters. If your rod is one wrench, then you will get your distance in wrenches. It makes no difference what measure you use.

Let's go with wrenches. Suppose you measured out two wrenches along a straight line in front of you and put a sticker there. And then, from the starting point, you turned to your right and measured out four wrenches along a straight line and put another sticker there. (Bear with my drawings.)

![Measuring with Wrenches]({{ site.media }}./measuring-by-wrenches.png)

Now you ask a perfectly reasonable question, how many wrenches apart are the two stickers? The question is simple and straightforward, but the answer will take you for a ride. Let's go ahead and lay some wrenches along the shortest path between the two stickers.

![Measuring the Diagonal with Wrenches]({{ site.media }}./measuring-by-wrenches-2.png)

As we can see, they don't fit very well. We cannot cut the wrench because, if we did, we would not know how long the broken wrench is, and we would not be able to determine the distance. However, we can think of one way to solve this problem. We look around an imaginary toolshed and find a wrench that is exactly a third of the original length. We can determine this by laying three small wrenches side-by-side with the original wrench. With these smaller wrenches, we can still determine the distance according to our original unit of measure because they are perfect thirds. For example, the distance might end up being $4\frac{1}{3}$ wrenches long or something like that.

![Measuring the Diagonal with Mini-Wrenches]({{ site.media }}./measuring-by-wrenches-3.png)

Unfortunately, $\frac{1}{3}$ did not cut it. We have over 14 mini-wrenches laid out, which is $4\frac{2}{3}$ original wrenches, but we have overshot the target. No problem. We'll just find an even smaller wrench, perhaps $\frac{1}{3}$ the size of the mini-wrench, or even $\frac{1}{10}$ or $\frac{1}{100}$ for good measure, right? Unfortunately, no matter how many times smaller of a wrench you use, you will *always* either overshoot or undershoot the distance! You could this *ad infinitum* and never arrive at the exact distance. **What?!** Yes, it is true. This is horrible, repugnant to reason, and irrational! 

It turns out whenever you see the never-ending and never-repeating sequence of digits of an "irrational number," this is what those digits mean. In our example, the distance between the two stickers is $\approx 4.47213595499957939281834...$ wrenches. The first $4$ in that number means you lay down four wrenches and you still have more space left (the second image above). The second $4$ means you lay down four $\frac{1}{10}$-wrenches after that and you still have some space left. Then the $7$ tells you that you lay down another seven $\frac{1}{100}$-wrenches and there is still a tiny bit of space left. And so on, *forever*!

## The problem side

This is so *weird*, I feel the whole world should rise up in protest. But to whom? It is not the mathematicians or physicists who made it so. It is the universe. So... why, God? Or more genuinely I ask, *how*? How could the distance between those two stickers be that impossible? But as I reflect further, I realize that there is nothing impossible or  weird about that distance. It is a plain old distance, which makes this problem *even weirder*.

Suppose you cleared the floor of all these wretched wrenches and mini-wrenches. You look around and find a different tool, a slightly larger chisel. You lay two of them one after the other, and they just so happen to fit that space between the two stickers perfectly.

![Measuring the Diagonal with Chisels]({{ site.media }}./measuring-by-chisels.jpg)

Great! As you can see, there is nothing irrational about that diagonal anymore. It is perfectly normal. But now if we try to lay our chisels along the original two paths, things get interesting again.

![Measuring the Diagonal with Chisels]({{ site.media }}./measuring-by-chisels-2.jpg)

The side chisels overshoot! Once again, we may try to look for chisels that are half the size or a 10th the size of the original chisel,  but, as you have probably guessed, we run into the same problem as before. No matter how many times smaller your chisels get, you will never perfectly capture that distance. The distance to the closer of the two stickers, which is a clean $2$ wrenches, is a grotesque $\approx 0.89442719099991587856$ chisels. *So which is the problem side?*

There is nothing intrinsically wrong or irrational about any of the lengths. The two kinds of length (side length vs diagonal) just don't get along with each other. They don't speak a common language. They don't use the same tools.

## Irrationals in 2D
If the earlier problem concerns one-dimensional lengths, there are similar problems in higher dimensions, such as with area. First, what is "area" and how do we measure it? Just length is one-dimensional space, area is two-dimensional space. Residential properties are measured in area (acres). In reality you occupy a three-dimensional space, but since no one can buy up the space above your house or beneath it, we only consider two dimensions. Area is also used when the insides of something do not matter as much as the surface. For example, the number of papers you can spread out on your desk has to do with the surface area of the desk but not with the thickness of the material it is made out of. 

Let's use the example of a desk. Just as when we were measuring distance, we need some unit of reference to capture and express "how much area" there is on the surface of the desk. We can cut a square piece of paper in such a way that exactly 10 of them will fit across and 10 of them fit going down. We'll call each square "1" unit of area. And we can decide that the length of one edge of each square shall be considered "1" unit of length. Then, we can describe the desk as follows: it has 100 units of area and each of its sides has 10 units of length.

![100 unit desk]({{ site.media }}./100-squares.png)

A problem arises when you want to make a new table with half the surface area of the current table. Instead of a square table that fits 100 squares, you want one that fits exactly 50. The problem is, how do you arrange 50 unit squares into a large square? If you place 7 down and 7 across, there would be 1 left. And then the question is how to split up that last square evenly so that the height and width each become $7+\frac{?}{?}$. 

![50 unit desk]({{ site.media }}./50-squares-attempt.png)

Unfortunately, there is no rational solution to this problem either -- there is no fraction that can capture the exact side length of the new table. 

Even more problematic, if you found a circular table and wanted to measure its area using your paper squares, they would never work. This makes a little more intuitive sense because even the tiniest unit squares cannot fill in all the space along a curve without undershooting or overshooting the area.

## The real culprit
We saw that with the triangle, whichever side we started with determined which of the other sides would or would not be irrational. This is interesting, and there is something implicit happening here that we want to bring into focus. If the reference side is "two wrenches" long, this reference side ends up defining **the unit** of distance. It defines what $1$ means. Every other distance that we write out is done so using this unit. $5 = 1+1+1+1+1$. But not only whole numbers, even fractions are just a series of operations on this unit: $\frac{1}{7} = \frac{1}{1+1+1+1+1+1+1}$. Once you specify the $1$, you dictate which all distances will be deemed rational: namely, any which can be expressed as a ratio of multiples of your $1$.

The same logic applies in higher dimensions. Take the 50 unit table, for example. We decided upon the unit of measure, the $1$ square unit, back when we cut up our paper against our original table. From that moment on, the half-sized table had irrational side lengths. If we started with the half-sized table, the larger table would have been the problem. Likewise, if we began with the circular table, we would have cut up unit "slices" rather than unit squares, and the square tables would all be irrational.

## The hubris of the measure
It is therefore a daring thing to decide hastily on the unit of measure. An ancient philosopher said that "man is the measure of all things." It is no wonder that many philosophers conclude that the world makes no sense. Even with countable and indivisible things (say the number of cats in your neighborhood), *only* the smallest denomination (1 cat) can serve as the unit. Anything larger than that (2 cats, 3 cats, etc.) will be unfit to measure certain quantities, such as prime numbers. *Uncountable* and *infinitely divisible* things like distance, on the other hand, do not have the luxury of a smallest denomination. **There is no universal unit of measure in the vast realms of uncountable infinities**. And, knowing this, if we still insist upon defining a $1$, we should be aware that there is a never-ending price to pay for that convenience, even if it is only an infinitesimal one.