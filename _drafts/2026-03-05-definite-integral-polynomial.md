---
title: "Intuition and Proof for Area Under a Polynomial"
author: Rev. Thomas J. Pulickal
tags:
- math
---

## Intuition
We are told that $ \int_{a}^{b} x^{2} \, dx  = \frac{b^3}{3} - \frac{a^3}{3} $. The question I wrestle with is what this really means and how we arrive at this. One way to approach it is to just reverse the derivative, but this assumes a lot and does not flow from intuition. Suppose we abandon all of this and start from scratch. What is the problem we are trying to solve?

Suppose you are timing a car with a stopwatch. It starts at rest and the accelerates at a steady rate. You clock it moving it at a speed of 1 mile per minute after the first minute, a speed of 2.2.25 miles per minute 30 seconds later, and then 4 miles per minute at the second minute (240 mph -- it's a very special car). Now you want to determine how much distance it crossed between minutes 1 and 2. If it was moving a constant speed, this would be easy. For example, a car that travels 1 mile each minute for 10 minutes travels a total of 10 miles (10x1). When the speed is changing, it is more difficult to determine the total distance. 

For simplicity, you could pretend that it traveled at 1 mile per minute for the first 30 seconds until you measured it 30 seconds later, at which point it jumped to 2.25 miles per minute and then it jumped 4 miles per minute. One estimate of the distance of the traveled, therefore, would be 0.5 minutes x 1 mile per hour + 0.5 minutes x 2.25 miles per hour = 1.625 miles. In reality, it traveled farther because it was going 4 miles per minute by the end of minute 1, not 2.25 miles per minute, as we assume here. You can also overshoot the estimate by using 2.25 miles per minute for the first 30 seconds and 4 miles per minute for the second 30 seconds. This would give you 3.125 miles. That is a big difference, but the answer lies somewhere between the two. Notice what we did here. We divided the time into even chunks of 30 seconds, measured the speed again after each time chunk, and then assumed a constant speed for the duration of that time chunk. This could be expressed mathematically as 0.5 minutes x speed1 + 0.5 minutes x speed2. In our overestimation, we used speed1 = speed at 1.5 minutes = 2.25 miles per minute and speed2 = speed at 2 minutes = 4 miles per minute. Why 1.5 minutes? That is 1 chunk size (0.5 minutes) after our start time (1 minute). Why 2 seconds? That is 2 chunk sizes (0.5 minutes x 2 = 1 minute) after our start time (1 minute). In general, the *n*th speed speed_n = the speed at (start_time + chunk_size x chunk_number). Let us call the time in minutes $t$, the speed $f(t)$ the start time $a$, the end time $b$, the chunk size $\Delta$, and the chunk number $\lambda$. To get an estimate of distance, we just need to add speed1 x chunk_size + speed2 * chunk_size + ... = $ f(a + \Delta \cdot \lambda) $ for the time interval between $a$ and $b$.  Moreover, if we make the chunk sizes smaller, we will get a more accurate estimate because that will be equivalent of measuring the speed more frequently during the 1 minute.

This problem is set up nicely so that the speed is the square of the minute we are in. Speed at minute 1 = 1 mile per minute, at minute 2 = 4 miles per minute. speed = $f(t) = t^2$. Graphically, the distance we are looking for is the "area under the curve" between $a$ and $b$, which makes sense if you consider the overestimation we made with two chunks.

![x squared between a and b - in two]({{ site.media }}./area-under-curve-in-two.drawio.png)

The red shows our overestimation of the distance, using 2.25 miles per minute for the first 30 seconds gives 2.25 x 0.5 minutes = 1.125 miles. And then 4 miles per minute for the second 30 seconds gives 4 miles x 0.5 minutes = 2 miles. This gives you a total of 3.125 miles, which we know to be too high, just as there is too much red on overlaying the graph. We mentioned that we can get a better estimate if we reduce the chunk size.

![x squared between a and b - in more chunks]({{ site.media }}./area-under-curve-medium-delta.png)

This is the equivalent of clocking the speed approximately every 7.5 seconds (0.125 minutes) and then calculating the distance by multiplying each speed by 0.125 minutes and summing it up. What if we kept making the chunks smaller and smaller?

![x squared between a and b - in many chunks]({{ site.media }}./area-under-curve-small-delta.drawio.png)

Isn't this beautiful? *Deo gratias!* With just a bunch of silly rectangles, we can approximate the distance traveled really well, even though the speed of the car is constantly changing. We can be filled with greater wonder because our approximations can get better and better to the point that they give us the $exact answer$. Math gives us wings to soar above the earth and ask the almost supernatural question -- what would happen if the chunks were infinitely small. We can know that? Once again, *Deo gratias!*

 To get to this perfect solution, we must make $\Delta$ as small as possible, which will make make more and more chunks that have to be multiplied by speed and added together.

## Setting up the problem
The exact need described above, to reduce $\Delta$ and add the speed x time_chunks together can be represented mathematically in the following way:

$$
\displaystyle
\lim_{\Delta \to 0} \sum_{\lambda=1}^{(b-a)/\Delta} f(\lambda \Delta + a) \,\Delta = \lim_{\Delta \to 0} \sum_{\lambda=1}^{(b-a)/\Delta} (\lambda \Delta + a)^2 \,\Delta
$$

This is nothing fancy. We have summation (\Sigma) of many chunks of size $\Delta$. How many chunks do we need? Enough to cover the interval from $a$ to $b$, so $(a-b)/\Delta$. Then we use the formula we derived above for speed_n = $f(\lambda \Delta + a)$ and multiple it by the small chunk size \Delta. Finally, we want to drive that $\Delta$ to 0, to make it as small as possible, and see if we can tell what happens as it gets smaller and smaller.

The rest of this essay will be devoted to figuring this out. In some sense, it is already figured out. You can plug in any small number into $\Delta$, like 0.001, and get a very good estimate. We wanted to know the distance traveled between minutes 1 and 2, so $a=1$ and $b=2$. If we set to $\Delta=0.001$, you will need to add up $(b-a)/\Delta = 1/0.001 = 1000$ terms. That might take you a while. We want to see if we can simplify this. It turns out we can -- *a lot*. The "solution" was already stated at the beginning, but we want to find it ourselves. To do so, we will make use of three helpful formulas.

### Formulas

1. <a id="nCr">nCr</a> ("n choose r") - how many combinations of r items can you make from n items?

    $$

    \binom{n}{r} =  \frac{n!}{r!(n-r)!}

    $$

2. <a id="binomial-expansion">Binomial expansion</a> - The expanded form of $(a+b)^n$ - For example, $(a+b)^2 = a^2 + 2ab + b^2$

    $$

    (x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k

    $$

3. <a href="Faulhaber">Faulhaber's formula</a> - To sum the first n natural numbers raised to a power P, such as $1^3+2^3+3^3+4^3+...+100^3$

    $$

    \sum_{k=1}^{n} k^{p} = \frac{1}{p+1} \sum_{j=0}^{p} \binom{p+1}{j} B_{j} \, n^{p+1-j}

    $$

    Here, $B_j$ refers to Bernoulli numbers, which are a sequence of numbers. The only one of interest to us will be the first one, $B_0=1$

Rather than solve this just for $x^2$, we will do it more generally for $x^P$ where $P$ is any positive integer. This will allow us to ascertain the definite integral or "area under the curve" for any polynomial. 

With that, we have everything we need. Here we go!

## Step 1 - Eliminate the Limit
We are attempting to determine what the summation approaches as $\Delta$ approaches 0 and there are infinitely many rectangles.

$$
\displaystyle
\lim_{\Delta \to 0} \sum_{\lambda=1}^{(b-a)/\Delta} (\lambda \Delta + a)^P \,\Delta
$$

($P$ is a positive integer.)

Note that this leaves a lot of terms. First of all, $(\lambda \Delta + a)^P$ will have $P+1$ terms (e.g. $(y+z)^3=y^3+3y^2 z + 3yz^2 + z^3$). And then we have one of those for every chunk, with the number of chunks approaching infinity.

Using [binomial expansion](#binomial-expansion), we get 

$$
\displaystyle
\lim_{\Delta \to 0} \sum_{\lambda=1}^{(b-a)/\Delta} \sum_{\beta=0}^{P} \Delta\, \binom{P}{\beta} (\lambda \Delta)^{P-\beta} a^\beta
$$

First, we swap the order of summation.

$$
\displaystyle
\lim_{\Delta \to 0} \sum_{\beta=0}^{P} \sum_{\lambda=1}^{(b-a)/\Delta} \Delta\, \binom{P}{\beta} (\lambda \Delta)^{P-\beta} a^\beta
$$

Then, we move out factors that do not depend upon $\lambda$ out of the inner summation, except for $\Delta$ for reasons that will become clear.

$$
\displaystyle
\lim_{\Delta \to 0} \sum_{\beta=0}^{P} a^\beta \, \binom{P}{\beta} \sum_{\lambda=1}^{(b-a)/\Delta} \lambda^{P-\beta} \Delta^{P-\beta+1} 
$$

We notice that the second summation can be rewritten using [Faulhaber's formula](#Faulhaber) because it is the sum of a set of natural numbers starting at 1 raised to some power (for each inner summation, $P-\beta$ is a constant). This gives us:

$$
\displaystyle
\lim_{\Delta \to 0} \sum_{\beta=0}^{P} a^\beta \, \binom{P}{\beta} \frac{1}{P-\beta+1} \sum_{j=0}^{P-\beta} (-1)^j \binom{P-\beta+1}{j} B_j \frac{(b-a)^{P-\beta+1-j}}{\Delta^{P-\beta+1-j}} \Delta^{P-\beta+1}
$$

Admittedly, this seems way more complicated, but the $\Delta$'s do something very nice on the right side of the equation.

$$
\displaystyle
\lim_{\Delta \to 0} \sum_{\beta=0}^{P} \frac{a^\beta}{P-\beta+1} \, \binom{P}{\beta} \sum_{j=0}^{P-\beta} (-1)^j \binom{P-\beta+1}{j} B_j (b-a)^{P-\beta+1-j} \Delta^{j}
$$

Now, if $j=0$, $\Delta^j=1$, but if $j$ is anything else, $\Delta^j \to 0$ because $\Delta \to 0$. This $\Delta \to 0$ in the numerator multiplies itself with everything else and disappears. So this lengthy second summation is reduced to only its first time, $j=0$.

$$
\displaystyle
\lim_{\Delta \to 0} \sum_{\beta=0}^{P} \frac{a^\beta}{P-\beta+1} \, \binom{P}{\beta} (-1)^0 \binom{P-\beta+1}{0} B_0 (b-a)^{P-\beta+1-0} \Delta^{0}
$$

Since $(-1)^0$, $\binom{P-\beta+1}{0}$, and $B_0$ are all equal to 1, this simplifies to:

$$
\displaystyle
\lim_{\Delta \to 0} \sum_{\beta=0}^{P} \frac{a^\beta}{P-\beta+1} \, \binom{P}{\beta} (b-a)^{P-\beta+1}
$$

$\Delta$ is no longer part of the expression! So nothing happens to this expression as $\Delta \to 0$, it stays exactly the same.

So, we are left with:

$$
\displaystyle
\displaylines {
\int_{a}^{b} x^{2} \, dx = \\\\
\lim_{\Delta \to 0} \sum_{\lambda=1}^{(b-a)/\Delta} (\lambda \Delta + a)^P \,\Delta = \\\\
\sum_{\beta=0}^{P} \binom{P}{\beta} \frac{a^\beta (b-a)^{P-\beta+1}}{P-\beta+1}
}
$$

If we pause to think about this, it is extraordinary. We started with an infinite problem: add together the "width" x "height" of an infinite number of infinitely narrow rectangles. We mere mortals could never do that. But we have a solution that you could do by hand in a few minutes. Let us try it out on our initial problem, just for fun.

### Brief Excursion - Try out the finite expression
In our initial problem, the accelerating car, $P=2$, $a=1$, $b=2$. Plugging that in, we get:

$$
\displaystyle
\displaylines {
\sum_{\beta=0}^{2} \binom{2}{\beta} \frac{1^\beta (2-1)^{2-\beta+1}}{2-\beta+1} = \binom{2}{0} \frac{1}{2-0+1} + \binom{2}{1} \frac{1}{2-1+1} + \binom{2}{2} \frac{1}{2-2+1} =\\\\
\frac{1}{3}+\frac{2}{2}+1 = \frac{7}{3}
}
$$

And that's it! The car traveled *exactly* $2\frac{1}{3}$ miles between minutes 1 and 2. At this point, I feel inclined to sing God's praises and move on to other marvels... but I can't. Because I would like to see if we can eliminate the summation as well -- that is -- if there is a simpler expression. This expression has as $P+1$ terms, which is very manageable. But if you are curious about how to reduce this further, buckle up!

## Expanding and recombining $(b-a)^P$
