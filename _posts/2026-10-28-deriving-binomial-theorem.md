---
title: Deriving the Binomial Theorem by Accident
author: Rev. Thomas J. Pulickal
tags:
- math
---

At the conclusion of this essay, we will arrive at Pascal’s triangle and the binomial theorem. But the way we get there will, I think, be somewhat unexpected. At least it was for me. It is especially in these moments of awe, when things just *click*, that my heart fills with praise to God because he has made the world so wonderful and even helps me inch my way into its wonders.

# The Double or Half Game
Suppose you were playing a game where, at each flip of a coin, you would either double your money or lose half of it. You start off with \\\$1. At the first toss, if the coin is heads, you will have a total of \\$2. If it is tails, you will have 50 cents. 


![Double or Half Game Cartoon]({{ site.media }}./double-or-half-game.jpg)

If the game ended with one toss, you would have a 50% chance of leaving with \\$2 and a 50% chance of leaving with 50 cents. Therefore the **expected value** of this game is \\$2\*0.5 + \\$0.50\*0.5 = \\$1.25. The expected value is not a real amount you can actually leave with on an individual game. It simply means that if you played this one-toss game many times, each time starting with \\$1, your average takeaway would be \\$1.25 per game. In general, to get the expected value, you multiply each possible outcome by its probability and then take the sum. (It works exactly like an average but it is a ‘weighted’ average where outcomes with higher probability affect the average more than less likely outcomes.)

Now say we extended the game to include a second toss. After the first toss, you would start with either \\$2 or \\$0.50 depending on how well you did on the first toss. If you begin with \\$2 and the second toss turns up heads, you would be quite lucky and walk away with \\$4. Maybe this was your hope from the start, but there was only a ¼ chance for that outcome. When there are two coin cosses, there are four possible outcomes for the tosses:
* Tails first, Tails second: [t, t]
* Tails first, Heads second: [t, h]
* Heads first, Tails second: [h, t]
* Heads first, Heads second (the \\$4 combination): [h, h]

Let's extend this game to a 4-toss game and map out all possible outcomes on a tree.

![Double or Half Game Cartoon]({{ site.media }}./double-half-4-toss-chart.png)
*Tree created using a very handy tool available at [knotend.com](https://www.knotend.com).*

We know that to double your money 4 times over and walk away with \\$16, you would need to get 4 straight heads, of which there is only a $(\frac{1}{2})^{4}$ or $\frac{1}{16}$ chance. But what are the chances of leaving with \\$4? We would need this probability in order to determine the expected value (or weighted average) of a 4-toss game. To compute the weighted average of the 5 possible outcomes of this game, we need to determine the probability of attaining each of the five possible outcomes: \\$16, \\$4, \\$1, \\$0.25, and \\$0.0625. These outcomes are not all equally likely. Looking at the graph, notice that there is only one way to get to \\$16 (straight heads), but there are a few different ways one could end up with \\$4. These ways are traced out below.

![Double or Half Game Cartoon]({{ site.media }}./double-half-4-toss-chart-path-to-4.png)

There are *4* possible ways one could get \\$4:
* [h, h, h, t]
* [h, h, t, h]
* [h, t, h, h]
* [t, h, h, h]

 So the first problem we want to solve is this: if you point to some outcome at the end of the tree, *how do you determine how many ways there are to get there?*
 The second problem we want to solve is: *what is the expected value of an $n$-toss game?*

# Problem 1: How many paths to an outcome
## Setting up the problem
One way to visualize this problem more easily is to rotate our tree a little so that it becomes a grid. 

![Double or Half Game Cartoon]({{ site.media }}./double-half-4-toss-rotated.png)

Now we have something that looks like a typical Cartesian graph. We can even assign coordinates to each point. Every path along this graph will begin at $(0,0)$, which is \\$1. Before we go further though, it would be wise to label our axes. We may notice that if a point is higher up on the vertical dimension of the graph, this is because it takes more heads tosses to “get there.” If something is far off on the right, it involves many tails tosses. So we can label these axes accordingly. If we call heads $\hat{h}$ and tails $\hat{t}$, we might say that every game begins at the point $0\hat{h} + 0\hat{t}$, which is another way of indicating the point $(0,0)$ or the \\$1 starting point.

If we look at the five possible outcomes for the end of our game, they have the following coordinates:
* \\$16: $4\hat{h} + 0\hat{t}$
* \\$4: $3\hat{h} + 1\hat{t}$
* \\$1: $2\hat{h} + 2\hat{t}$
* \\$0.25: $1\hat{h} + 3\hat{t}$
* \\$0.0625: $0\hat{h} + 4\hat{t}$

## Distance formula
In each of these coordinates, the sum of the $\hat{h}$ component and the $\hat{t}$ component is always equal to 4, which is what we expect because this is a 4-toss game. We might think of this as the *distance* of each of these points from the origin. In a typical Cartesian graph, we compute distance using the Euclidean distance formula:
$  d=\sqrt{(x_1-x_0)^2+(y_1-y_0)^2}$

Here, however, we are restricted in our “movement” across the graph. We cannot move diagonally. We have to walk in horizontal and vertical steps, choosing either heads or tails at each juncture. Therefore, our distance formula will look different:

$d = (h_1-h_0)+(t_1-t_0)$

And since we begin at the origin in each case, $h_0$ and $t_0$ are both 0. So the distance formula is simply $h+t$, i.e. the total number of heads and tails.

## Scramble the letters

In the case of the \\$4 outcome, we mentioned there are 4 different paths to get there. There are 4 different ways to get from $0\hat{h} + 0\hat{t}$ to $3\hat{h} + 1\hat{t}$ and they are all equidistant. For a moment, let’s return to our earlier notation. These are the four different paths that lead to \\$4:
* [h, h, h, t]
* [h, h, t, h]
* [h, t, h, h]
* [t, h, h, h]

So what we are interested in is the question: how many different ways are there to arrange 3 heads and 1 tails? Notice that every time you move the position of the "t", you get a new path. This is not always the case with "h". Think of the word "SNOOP". If Snoop Dogg announced that he was doing another name change, which involved swapping the positions of the letters 'N' and 'P', social media would blow up -- meet the new *SPOON Dogg*. But if he merely intended to swap the third and fourth letters 'O' and 'O', there would be nothing to write home about. The question of how many ways there are to get to \\$4 is very similar to how many ways there are to scramble the letters of a word.

If you have 4 distinct letters, like in the word "RANT", there are $4!=4\cdot 3 \cdot 2 \cdot 1=24$ ways to reorder the letters. But if there is a repeated letter, as in the word "SNOOP", we may start off with imagining that there are $5!$ ways to reorder them, but then we have to divide out the cases where we are merely reordering the O's. So we get $\frac{5!}{2!}$. If there are multiple repeating letters, such as in "NOON", we get $\frac{4!}{2!\cdot 2!}=6$, because we have to divide out the $2!$ combinations of the two N's and the $2!$ combinations of the two O's.


Returning to our "word" or sequence of heads and tails, we are asking how many ways there are to reorder "hhht". We begin with $4!$ and then we must divide out the $3!$ combinations of the H's. The answer is
$\frac{4!}{3!}=\frac{24}{6}=4$. This is exactly what we saw above:
* [h, h, h, t]
* [h, h, t, h]
* [h, t, h, h]
* [t, h, h, h]

If there were a few tails that were similarly indistinguishable, we would have to divide those out as well. For example, how many different ways are there to get to the point \\$1: $2\hat{h} + 2\hat{t}$? This is equivalent to reordering the word "hhtt", so:

$\frac{4!}{2! \cdot 2!}=\frac{24}{2 \cdot 2}=6$.

Therefore, to generalize our answer, we can say that for an outcome represented by $H\hat{h} + T\hat{t}$, the number of distinct paths to get there are $\frac{(H+T)!}{H! \cdot T!}$.

## Shortest path
To be more precise, the formula we derived tells us how many *shortest paths* there are to a given point, which signifies the number of ways there are to get a particular outcome of the game. We say *shortest* here because one might be tempted to zig zag around the graph and find other paths. This would be senseless because it is impossible to go backwards in time. The arrows on the graph are therefore significant; they are one-way streets or time-arrows. You can only move *up* or *right* and never *left* or *down*. If you follow this restriction, every path you take will be a shortest path. 

## Noticing a pattern

Let's take a look at how these numbers fall into place on the graph. Next to each outcome, we add the count of how many paths lead there, using the formula derived above. 

![Double or Half Game Cartoon]({{ site.media }}./double-half-4-toss-rotated-counts.png)

These numbers look familiar. Ah yes, we see them on Pascal's triangle!

![Pascal's Triangle](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
*By [Hersfold](https://commons.wikimedia.org/w/index.php?curid=3902538) - Public Domain*

How interesting! We can see this explicitly by making a minor modification. If we start with our distance formula and set $n=H+T$, so that $n$ represents the total number of coin tosses, we can eliminate $T$ from our formula, setting $T=n-H$. Then,

$$
\displaylines{
\frac{(H+T)!}{H!T!} \\\
=\frac{n!}{H!(n-H)!}
}
$$

And what do we have here? This is the exact formula for [Binomial Coefficients](https://en.wikipedia.org/wiki/Binomial_coefficient). Therefore the formula to determine the **number of paths to an outcome** is given by:

$$
\displaylines{
    \binom{n}{H}
}
$$


# Problem 2: The expected value of an $n$-toss game

## 2a. Probability of any outcome path
We now know there are $\binom{n}{H}$ shortest paths to an outcome. We can also intuit that each one of these paths has equal probability. If we take the simple case of two coin tosses, the possible sequences of tosses are [h, h], [h, t], [t, h], or [t, t]. Since each of these sequences of tosses is just as likely as any other, the probability of a given path is 1 out of the total number. With 2 tosses, there are 4 possible sequences. With 3, there are 8. In general, if there are $n$ coin tosses, there are $2^n$ possible sequences and so the probability of any particular path is $\frac{1}{2^n}$. Let us call this the **probability of any outcome path**.

## 2b. Probability of a given outcome
To determine how likely a given outcome is, we now need to count the number of paths and then multiply that by the probability of each of those paths. Therefore, the **probability of a given outcome** is given by the **number of paths to an outcome** *times* the **probability of any outcome path**.

$$
\binom{n}{H} \frac{1}{2^n}
$$

Let's turn this into a function. Since we are interested in the expected value of fixed game of $n$ tosses, we treat $n$ as a constant. We can define a function $\phi$ which, given $H$, yields a probability.

$$
\phi_n(H) = \binom{n}{H} \frac{1}{2^n}
$$

If we look back at our graph, we will see that each possible outcome is uniquely determined by it's $\hat{h}$ component. Intuitively, this means that if, in a game of 4 tosses, you landed 0 heads, we know that you left with exactly \\$0.0625. If you flipped two heads, that would be \\$1. Using $\phi_n(H)$, we can determine the probability of each outcome by iterating over all possible values of $H$. 

![Double or Half Game Cartoon]({{ site.media }}./double-half-4-toss-rotated-h.png)

## 2c. The dollar amount for each $H$
We mentioned that by looking at the graph, we know that if you only got two heads, you would leave with \\$1. How can we obtain this result formulaically? Let us develop another function to give us the dollar amount based on the number of heads.

Intuitively, if you flipped two heads and two tails in a game, the heads would each double your $\\$1$ and the tails would each divide that by 2. The total would therefore be \\$1 *times* $2\cdot 2$ *divided by* $2 \cdot 2$, which is $\\$1 \cdot \frac{2^2}{2^2} = \\$1$. In general, the dollar amount is given by $\frac{2^H}{2^T}$. Replacing $T$ with $n-H$, it is $\\$1$ *times* $\frac{2^H}{2^{n-H}} = 2^{H-(n-H)}=2^{2H-n}$. Let's turn this into another function.

$$
\theta_n(H) = \\$1 \cdot 2^{2H-n}
$$


If we did that correctly, $\theta_n$ should be a function that takes in the number of heads and spits out the dollar amount you walk away with. Let's test it out. Suppose in our 4-toss game, you flipped all tails. $\theta_4(0)=\\$1 \cdot 2^{2(0)-4}=\\$1 \cdot 2^{-4}=\\$0.0625$. It works! If you flipped 3 heads, $\theta_4(3)=\\$1 \cdot 2^{2(3)-4}=\\$1 \cdot 2^{2}=\\$4$. Feel free to try other H's.


## 2d. The expected value of a game of $n$ tosses
We now have everything we need to compute the expected value of a game of $n$ tosses. Expected value is a probability-weighted average, and we now have both the dollar amounts of each outcome and the probability of each outcome. For each outcome, we want to multiply the dollar amount by its probability so that, when we add them all together, we get the expected value of the game.

The **expected value of a game of $n$ tosses** is therefore given by:

$$
\displaylines{
\sum_{i=0}^{n} \phi_n(i) \theta_n(i) \\\
= \sum_{i=0}^{n} \binom{n}{i} \frac{1}{2^n} \cdot \$1 \cdot 2^{2i-n} \\\
= \frac{\$1}{2^n} \sum_{i=0}^{n} \binom{n}{i} \cdot 2^{2i-n}
}
$$

This means that for a 4-toss game, the expected value is 

$$
\displaylines{
\sum_{i=0}^{4} \phi_4(i) \theta_4(i) \\\
= \frac{\$1}{2^4} \sum_{i=0}^{4} \binom{4}{i} \cdot 2^{2i-4} \\\
= \frac{\$1}{16}(\frac{1}{16} + 4\cdot \frac{1}{4} + 6 + 4\cdot 4 + 16) \\\ 
= \frac{\$1}{16}\cdot 39.0625 \\\
= \$2.44140625
}
$$

Considering that you start with \\$1 and you end with about \\$2.44 *per game*, playing this game is not a bad idea at all. Despite all its risks, you will, on average, more than double your money each time you play.

# Connecting this to the Binomial Theorem
The [binomial theorem](https://en.wikipedia.org/wiki/Binomial_theorem) provides us with the general expansion of $(x+y)^n$. For example, $(x+y)^3 = x^3 + 3x^2 y + 3x y^2 + y^3$. With all that we've done so far, it is very easy to see where this comes from. Just replace $x$ and $y$ with $h$ and $t$!

When you do two coin tosses, you end up the following possible sequences:
* [h, h]
* [h, t]
* [t, h]
* [t, t]

Now imagine if you multiply some variables $h$ and $t$ in the following way: $(h+t)(h+t)$. Through the distributive property, we get $hh+ht+th+tt$. Notice that this exactly matches the sequences we see above. Moreover, just as there are only three possible outcomes to a 2-toss game because [h, t] and [t, h] have the same result, there are only three terms remaining when you combine the terms of the distribution: $hh+ht+th+tt = hh+2ht+tt$. Also notice that the coefficients, [1,2,1] come straight out of Pascal's triangle again.  As shown above, they are given by $\binom{n}{H}$, where $H$ represents the number of h's in the term. The coefficient of the first term, 'hh', which has two h's, is therefore $\binom{2}{2}=1$. The coefficient of the second term, 'ht', is $\binom{2}{1}=2$. And the coefficient of the third term, 'tt', is $\binom{2}{0}=1$. Instead of writing $hh$, we can write $h^2$ for convenience. In general then, the simplified term in the expansion is given by the coefficient $\binom{n}{H}$ followed by $h^H t^{T} = h^H t^{n-H}$, where $H$ is the number of h's in the term. Just as we did when we were determining the expected value, we can take a summation across all the possible outcomes by iterating over the number of possible $H$'s in each term.

Then, the binomial expansion of $(h+t)^n$ is:

$$
\sum_{i=0}^{n} \binom{n}{i} h^i t^{n-i}
$$

And there you have it... the binomial theorem! See how beautiful God has made the world. Reordering the letters of a word tells you how many paths there are to a particular game outcome, which ends up showing you how to do a binomial expansion. Many things look differently on the outside but they are identical in structure. This is one of the reasons we can [map realities]({% post_url 2026-07-11-mapping-realities %}). It is also the reason why *wisdom* transcends specific fields of inquiry and perhaps can only be received by contemplating God in a wide variety of contexts and relationships. Each avenue delivers some particular hue, offers some special perspective. When something *clicks*, you see something that you never saw before and the awe lifts you up. And the only fitting response is *praise*.