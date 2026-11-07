---
title: Deriving the Leading Term of the Sum of Powers
author: Rev. Thomas J. Pulickal
tags:
- math
---

# Problem
The goal of this essay is to derive the term $a_0\, n^m$ for any natural number $p$, where:

$$
\sum_{i=1}^{n} i^p = 1^p + 2^p + ... + n^p = a_0 n^m + a_1 n^{m-1} + ... + a_{m+1}n^0
$$

**Brief background**: After the blessing of [Deriving the Sum of Squares]({% post_url 2026-11-01-deriving-sum-of-squares %}) a few days ago, I set out to search for *what is the leading term of the sum of powers*. The 'leading term' is just the first term in any polynomial, when ordered from the highest order to the lowest. So, for example, the leading term of $9x^5+2x^3+3x^2$ is $9x^5$. The reason I need this is because it would allow me to complete my [proof for the area under a polynomial]({% post_url 2026-03-13-definite-integral-polynomial %}) without assuming Faulhaber's formula, as I had originally done. I decided to pursue this using the same approach that gave me the general form of the [the sum of squares]({% post_url 2026-11-01-deriving-sum-of-squares %}), using the [binomial theorem]({% post_url 2026-10-28-deriving-binomial-theorem %}). I have no idea how others derive this, and I would not be surprised if others who can see more clearly than I do find this route tedious and convoluted. But it is full of *wonder* for me because it came through my own patient contemplation, determination, and prayer!

# Sum of Cubes
Let us begin by expanding the sum of cubes using our binomial expansion method. The goal in this case is not to derive the formula for the sum of cubes but to notice if any pattern emerges. To get enough data, let's take the sum of the first four cubes.

$$
\sum_{i=1}^{4} i^3 = 1^3 + 2^3 + 3^3 + 4^3 = 1^3 + (1+1)^3 + (1 + (1+1))^3 + (1 + (1 + (1 + 1)))^3
$$

As we break this down, I will begin coloring things to make the pattern more obvious. (I originally did this with highlighters on paper.)

$$
1^3 = 1
$$

$$
2^3 = (1 + 1)^3 = {\color{green} \binom{3}{0} + \binom{3}{1} + \binom{3}{2}} + 1
$$

In the next two expansions, notice how the $(1 + 1)^3$ reappears at the end.

$$
\displaylines{
3^3 = (1 + (1 + 1))^3 \\\
= \binom{3}{0} + \binom{3}{1}(1+1) + \binom{3}{2}(1+1)^2 + \binom{3}{3}(1+1)^3 \\\
= {\color{red} \binom{3}{0} + 2\binom{3}{1} + 2^2\binom{3}{2}} + {\color{green} \binom{3}{0} + \binom{3}{1} + \binom{3}{2}} + 1
}
$$

It's quite beautiful how this pattern continues...

$$
\displaylines{
4^3 = (1 + (1 + (1 + 1)))^3 \\\
= \binom{3}{0} + \binom{3}{1}(1+(1+1)) + \binom{3}{2}(1+(1+1))^2 + \binom{3}{3}(1+(1+1))^3 \\\
= {\color{yellow} \binom{3}{0} + 3\binom{3}{1} + 3^2\binom{3}{2}} + \binom{3}{3}(1+(1+1))^3 \\\
= {\color{yellow} \binom{3}{0} + 3\binom{3}{1} + 3^2\binom{3}{2}} + {\color{red} \binom{3}{0} + 2\binom{3}{1} + 2^2\binom{3}{2}} + {\color{green} \binom{3}{0} + \binom{3}{1} + \binom{3}{2}} + 1
}
$$

And there we have it: the pattern has emerged! But what is the purpose of this strange and cumbersome expansion? As we take the sum of these first four cubes, let us combine the like colors together.

|$1^3=$||||$1$|
|$2^3=$|||${\color{green} \binom{3}{0} + \binom{3}{1} + \binom{3}{2}}$|$1$|
|$3^3=$||${\color{red} \binom{3}{0} + 2\binom{3}{1} + 2^2\binom{3}{2}}$|${\color{green} \binom{3}{0} + \binom{3}{1} + \binom{3}{2}}$|$1$|
|$4^3=$|${\color{yellow} \binom{3}{0} + 3\binom{3}{1} + 3^2\binom{3}{2}}$|${\color{red} \binom{3}{0} + 2\binom{3}{1} + 2^2\binom{3}{2}}$|${\color{green} \binom{3}{0} + \binom{3}{1} + \binom{3}{2}}$|$1$|

Summing down the columns, we get:

$$
\sum_{i=1}^{4} i^3={\color{yellow} \binom{3}{0} + 3\binom{3}{1} + 3^2\binom{3}{2}} + 2\left({\color{red} \binom{3}{0} + 2\binom{3}{1} + 2^2\binom{3}{2}}\right) + 3\left({\color{green} \binom{3}{0} + \binom{3}{1} + \binom{3}{2}}\right) + 4
$$

In other words,

$$
\sum_{i=1}^{4} i^3 = \sum_{i=1}^{4} i \sum_{j=0}^{3-1} (4-i)^j \binom{3}{j}
$$

We are going to go ahead and take a leap to recognize that this pattern in fact works for all $p$ and $n$. We can see this from way it was derived above. So, the general form of this sum of powers expression is:

$$
\sum_{i=1}^{n} i^p = \sum_{i=1}^{n} i \sum_{j=0}^{p-1}  \binom{p}{j} (n-i)^j
$$

Make no mistake, this is *not* a great summation. For one, it still requires $n$ additions, on top of all the other work it involves! But let's see where it leads us...

# Identifying the Significant Terms for p=3
Let's send our new equation on a test drive, setting $p=3$ as before but leaving $n$ open.

$$
\displaylines {
\sum_{i=1}^{n} i^3 \\\
= \sum_{i=1}^{n} i \sum_{j=0}^{2} \binom{3}{j} (n-i)^j  \\\
= \sum_{i=1}^{n} i \left[ \binom{3}{0} (n-i)^0 + \binom{3}{1} (n-i)^1 + \binom{3}{2} (n-i)^2  \right]
}
$$

Recall that we are searching for the leading term. We will now pursue a binomial expansion of this expression and highlight the terms of interest.


$$
\sum_{i=1}^{n} i^3 = \sum_{i=1}^{n} i \left[ \binom{3}{0} + \binom{3}{1} (n-i) +  {\color{orange} \binom{3}{2}n^2} + {\color{orange} (-2)\binom{3}{2}ni} + {\color{pink} \binom{3}{2}i^2}  \right]
$$

What makes these particular terms the ones of interest? The first one is obvious, it is the highest ordered term in the expression, and we are searching for the leading term. Let us separate that out and compute its summation. We will hide the rest of the expression in a term called $Q_0(i)$. 

*(Note that the sum of natural numbers is $\frac{n(n+1)}{2}$, and the sum of squares is $\frac{2n^3 + 3n^2 + n}{6}$. These are derived in the [previous essay]({% post_url 2026-11-01-deriving-sum-of-squares %}).)*

$$
\displaylines{
\sum_{i=1}^{n} i^3 = {\color{orange} \sum_{i=1}^{n} i \binom{3}{2}n^2} {\color{gray} + \sum_{i=1}^{n} Q_0(i)} \\
 = {\color{orange} \binom{3}{2}n^2\sum_{i=1}^{n} i}  {\color{gray} + \sum_{i=1}^{n} Q_0(i)} \\
 = {\color{orange} \binom{3}{2}n^2\cdot \frac{n(n+1)}{2}} {\color{gray} + \sum_{i=1}^{n} Q_0(i)} \\
 = {\color{orange}\frac{3}{2}n^4} + \frac{3}{2}n^3 {\color{gray} + \sum_{i=1}^{n} Q_0(i)} \\
}
$$

As we can see, this 4th ordered term will contribute to the leading term. Now let us look at the second highlighted term above, ${\color{orange} (-2)\binom{3}{2}ni}$. As before, we will clear out the rest of the equation again.

$$
\displaylines{
\sum_{i=1}^{n} i^3 = {\color{orange} \sum_{i=1}^{n} i (-2)\binom{3}{2}ni} {\color{gray} + \sum_{i=1}^{n} Q_1(i)} \\
 = {\color{orange} (-2)\binom{3}{2}n\sum_{i=1}^{n} i^2} {\color{gray} + \sum_{i=1}^{n} Q_1(i)} \\\
 = {\color{orange} (-2)\binom{3}{2}n \cdot \frac{2n^3 + 3n^2 + n}{6}} {\color{gray} + \sum_{i=1}^{n} Q_1(i)} \\\
 = {\color{orange} -2n^4}  -3n^3 + -n^2 {\color{gray} + \sum_{i=1}^{n} Q_1(i)} 
}
$$

We have found another contributing term for the leading term we are chasing. Finally, we also highlighted the term ${\color{pink} \binom{3}{2}i^2}$, which is different from the previous two.

$$
\displaylines{
\sum_{i=1}^{n} i^3 = {\color{pink} \sum_{i=1}^{n} i\cdot \binom{3}{2}i^2} {\color{gray} + \sum_{i=1}^{n} Q_2(i)} \\\
\sum_{i=1}^{n} i^3 = {\color{pink} \binom{3}{2}\sum_{i=1}^{n} i^3} {\color{gray} + \sum_{i=1}^{n} Q_2(i)}
}
$$

Clearly, this term influences the result because it is the very thing we are solving for! It must be subtracted from the left hand side of the equation.

Putting it all together, if we filter out only those terms which affect the leading term, we get:

$$
\displaylines{
\sum_{i=1}^{n} i^3 = {\color{orange}\frac{3}{2}n^4} {\color{orange} -2n^4} + {\color{pink} \binom{3}{2}\sum_{i=1}^{n} i^3} {\color{gray} + \sum_{i=1}^{n} Q_3(i)} \\\
(1 {\color{pink} - \binom{3}{2}})\sum_{i=1}^{n} i^3 = {\color{orange}\frac{3}{2}n^4} {\color{orange} -2n^4} {\color{gray} + \sum_{i=1}^{n} Q_3(i)} \\\
\sum_{i=1}^{n} i^3 = {\color{orange} \frac{\frac{-n^4}{2}}{(1 {\color{pink} - \binom{3}{2}})}} {\color{gray} + \sum_{i=1}^{n} Q_3(i)} \\\
\sum_{i=1}^{n} i^3 = \frac{n^4}{4} {\color{gray} + \sum_{i=1}^{n} Q_3(i)}
}
$$

So, the leading term for $p=3$ is $\frac{n^4}{4}$.

# Generalizing
Admittedly, that was painful. But HEY, *we got there!* In fact, it's a lot simpler when you take a step back and see what we just did.

We began with this equation:

$$
\sum_{i=1}^{n} i^p = \sum_{i=1}^{n} i \sum_{j=0}^{p-1}  \binom{p}{j} (n-i)^j
$$

We recognized that all the significant terms appear only when $j$ is at its highest value, i.e. when $j=p-1$. (You may want to spend a minute to verify this.) So all we need to do is extrapolate the leading term from the $j=p-1$ portion of the inner summation:

$$
\displaylines{
\sum_{i=1}^{n} i^p = \sum_{i=1}^{n} i\binom{p}{p-1} (n-i)^{p-1} {\color{gray} + \sum_{i=1}^{n}Q(i)} \\\
 = p\sum_{i=1}^{n} i(n-i)^{p-1} {\color{gray} + \sum_{i=1}^{n}Q(i)}
}
$$

Then, using binomial expansion:

$$
\displaylines{
\sum_{i=1}^{n} i^p = p\sum_{i=1}^{n} i\left[\sum_{k=0}^{p-1} \binom{p-1}{k}n^{p-1-k}(-i)^k\right] {\color{gray} + \sum_{i=1}^{n}Q(i)}
}
$$

## Setting up the Induction
With the work we have done so far, we already know the leading terms of the following:

|Sum of Power|Leading Term|
|---|---|
|$\sum_{i=1}^{n} i$|$\frac{n^2}{2}$|
|$\sum_{i=1}^{n} i^2$|$\frac{n^3}{3}$|
|$\sum_{i=1}^{n} i^3$|$\frac{n^4}{4}$|

 We will therefore use induction to prove that the leading term of the sum of any power is $\frac{n^{p+1}}{p+1}$.

1. Let P(p) be the statement "For all positive integers $n$, the leading term of the polynomial representation of $\sum_{i=1}^{n} i^p$ is $\frac{n^{p+1}}{p+1}$ for $p>1$.
2. Base case: we know this to be true for $p=1$.
3. The inductive step: the rest of this essay! 

If you're not familiar, the way induction works is that whenever we encounter some $\sum_{i=1}^{n} i^q$ below, where $q<p$, we will assume that its leading term is $\frac{n^{q+1}}{q+1}$. Our goal will be to prove that if P is true for all $q<p$, then P must be true for $p$. If we prove that, it means -- by "chain reaction" -- that P is true for all $p$ greater than 1.

## Filtering out lower terms

So far we have:
$$
\displaylines{
\sum_{i=1}^{n} i^p = p\sum_{i=1}^{n} i\left[\sum_{k=0}^{p-1} \binom{p-1}{k}n^{p-1-k}(-i)^k\right] {\color{gray} + \sum_{i=1}^{n}Q(i)}
}
$$

We can write this in expanded form as:

$$
\displaylines{
\sum_{i=1}^{n} i^p
= p\sum_{i=1}^{n} i \left[ \binom{p-1}{0}n^{p-1}(-i)^0 + \binom{p-1}{1}n^{p-2}(-i)^1 + ... + \binom{p-1}{p-1}n^{0}(-i)^{p-1} \right] {\color{gray} + \sum_{i=1}^{n}Q(i)}
}
$$

Now we distribute the summation:

$$
\displaylines{
\sum_{i=1}^{n} i^p = p\left[ \binom{p-1}{0}n^{p-1}\sum_{i=1}^{n} i - \binom{p-1}{1}n^{p-2}\sum_{i=1}^{n} i^2 + ... {\color{pink} + (-1)^{p-1}\binom{p-1}{p-1}\sum_{i=1}^{n} i^p} \right] {\color{gray} + \sum_{i=1}^{n}Q(i)}
}
$$

Just as above, we subtract the last term from both sides. (Note that subtracting/negating $(-1)^{p-1}$ makes it $(-1)^p$.)

$$
\displaylines{
(1 + {\color{pink} (-1)^p\cdot p}) \sum_{i=1}^{n} i^p = p\left[ \binom{p-1}{0}n^{p-1}{\color{lime}\sum_{i=1}^{n} i} - \binom{p-1}{1}n^{p-2}{\color{lime}\sum_{i=1}^{n} i^2} + ... + (-1)^{p-2}\binom{p-1}{p-2}{\color{lime}\sum_{i=1}^{n} i^{p-1}} \right] {\color{gray} + \sum_{i=1}^{n}Q(i)}
}
$$

Great! Notice all those highlighted summations on the right hand side, they are all ripe for picking by our induction assumption. That is, each one is of the form ${\color{lime} \sum_{i=1}^{n} i^q}$, where $q<p$. And since we are only interested in the leading coefficients, we do not need to bother with the other terms. (We can let them collect in our $Q(i)$ waste basket!).

$$
\displaylines{
(1 + {\color{pink} (-1)^p\cdot p}) \sum_{i=1}^{n} i^p = p\left[ \binom{p-1}{0}n^{p-1}\cdot {\color{lime}\frac{n^2}{2}} - \binom{p-1}{1}n^{p-2}\cdot {\color{lime}\frac{n^3}{3}} + ... + (-1)^{p-2}\binom{p-1}{p-2}\cdot {\color{lime}\frac{n^{p}}{p}} \right] {\color{gray} + \sum_{i=1}^{n}Q_2(i)}
}
$$

And now we have something beautiful.

$$
\displaylines{
(1 + (-1)^p\cdot p) \sum_{i=1}^{n} i^p = p\left[ \frac{\binom{p-1}{0}}{2}\cdot n^{p+1} - \frac{\binom{p-1}{1}}{3}\cdot n^{p+1} + ... + (-1)^{p-2}\frac{\binom{p-1}{p-2}}{p}\cdot n^{p+1} \right] {\color{gray} + \sum_{i=1}^{n}Q_2(i)} \\\
\sum_{i=1}^{n} i^p = \frac{p}{1 + (-1)^p\cdot p}\left[ \frac{\binom{p-1}{0}}{2} - \frac{\binom{p-1}{1}}{3} + ... + (-1)^{p-2}\frac{\binom{p-1}{p-2}}{p} \right]\cdot n^{p+1} {\color{gray} + \sum_{i=1}^{n}Q_3(i)}
}
$$

So, we already know that the leading term has order $p+1$ and is of the form $a_0n^{p+1}$. Great! Now we just need to dig into $a_0$.


## Capturing our Results so Far
We will now find a more concise way to capture what we have so far.

$$
a_0 = \frac{p}{1 + (-1)^p\cdot p}\left[ \frac{\binom{p-1}{0}}{2} - \frac{\binom{p-1}{1}}{3} + ... + (-1)^{p-2}\frac{\binom{p-1}{p-2}}{p} \right]
$$

First, let's put it into an intuitive summation:

$$
a_0 = \frac{p}{1 + (-1)^p\cdot p} \sum_{k=0}^{p-2} (-1)^k \frac{\binom{p-1}{k}}{k+2}
$$

Next, because that denominator is a little messy to deal with, I will pull it out and bring it back later. Let $a_0 = \frac{b_0}{1 + (-1)^p\cdot p}$, so that

$$
b_0 = p\sum_{k=0}^{p-2} (-1)^k \frac{\binom{p-1}{k}}{k+2}
$$

(For the rest of the essay, we will first solve for $b_0$ and then plug it back in at the end.)

Next, I am going to expand the binomial operator so that we can try to recombine things in creative ways.

$$
\displaylines{
b_0 = p\sum_{k=0}^{p-2} (-1)^k \frac{(p-1)!}{(k+2)k!(p-1-k)!} \\\
= \sum_{k=0}^{p-2} (-1)^k \frac{p!}{[(k+2)k!](p-(k+1))!} \\\
= \sum_{k=0}^{p-2} (-1)^k \frac{p!}{[\frac{(k+2)!}{k+1}](p-(k+1))!} \\\
= \sum_{k=0}^{p-2} (-1)^k \frac{p!(k+1)}{(k+2)(k+1)!(p-(k+1))!} \\\
= \sum_{k=0}^{p-2} (-1)^k \frac{k+1}{k+2} \cdot \frac{p!}{(k+1)!(p-(k+1))!} \\\
= \sum_{k=0}^{p-2} (-1)^k \frac{k+1}{k+2} \binom{p}{k+1} \\\
}
$$

At every step, I really give thanks to God. It is amazing that we can do this! Anyway, now we might as well change the index to be more natural. (We are picking a new index which is equal to $k+1$, but we are just going to keep calling it $k$.)

$$
b_0 = \sum_{k=1}^{p-1} \frac{(-1)^{k+1}k}{k+1} \binom{p}{k}
$$

Not bad! This, I think, is an elegant way to capture what we have arrived at so far, even though we will expand it again slightly in the next section.

So now all we have to do is show that this elegant sum, when divided by $1 + (-1)^p\cdot p$, *somehow* yields a very clean $\frac{1}{p+1}$. I repeatedly say it is elegant because the expansion is quite wonderful! Try it with $p=4$.

$$
\displaylines{
b_0 = \sum_{k=1}^{4-1} \frac{(-1)^{k+1} k}{k+1} \binom{4}{k} \\\
= {\color{lime} \frac{1}{2}}\binom{4}{1} - {\color{lime} \frac{2}{3}}\binom{4}{2} + {\color{lime} \frac{3}{4}}\binom{4}{3} \\\
= \frac{4}{2} - \frac{2\cdot 6}{3} + \frac{3\cdot 4}{4} \\\
= 2 - 4 + 3
= 1
}
$$

Wow! And sure enough $a_0 = \frac{b_0}{1+p} = \frac{1}{p+1}$. Beautiful!

We can also try it with an odd power, like $p=5$, where the denominator of $a_0$ now becomes $1-p$.

$$
\displaylines{
b_0 = \sum_{k=1}^{5-1} \frac{(-1)^{k+1} k}{k+1} \binom{5}{k} \\\
 = {\color{lime} \frac{1}{2}}\binom{5}{1} - {\color{lime} \frac{2}{3}}\binom{5}{2} + {\color{lime} \frac{3}{4}}\binom{5}{3} - {\color{lime} \frac{4}{5}}\binom{5}{4} \\\
 = \frac{5}{2} - \frac{2\cdot 10}{3} + \frac{3\cdot 10}{4} - \frac{4\cdot 5}{5} \\\
 = \frac{-2}{3}
}
$$

Plugging in $b_0$ into $a_0$, we get $a_0=\frac{\frac{-2}{3}}{1-5}=\frac{-2}{-4\cdot 3}=\frac{1}{6}$. Once again, it works! That is amazing... and honestly kind of weird. Now we'll have to prove that this works for all $p$ and hopefully make more sense of it in the process.

# The Final Frontier: the Elegant Sum
It is beautiful to see that the elegant $b_0$ sum seems to work, but now let us strive to understand *why* it works. This part stumped me for a while. I thank the Holy Spirit for inspiring me in prayer this morning because that is when it *hit me*. And then when I saw it starting to come together on paper, I could barely believe my eyes. *What a gift to be able to explore mathematics and this great world God has created for us in Love.*


As promised, I begin by disrupting the elegance of our summation a little:

$$
\displaylines{
b_0 = \sum_{k=1}^{p-1} \frac{(-1)^{k+1} k}{k+1} \binom{p}{k} \\\
= \sum_{k=1}^{p-1} \frac{(-1)^{k+1} k}{k+1} \frac{p!}{k!(p-k)!} \\\
= \sum_{k=1}^{p-1} \frac{(-1)^{k+1} kp!}{(k+1)k!(p-k)!} \\\
= p!\sum_{k=1}^{p-1} \frac{(-1)^{k+1} k}{(k+1)!(p-k)!}
}
$$

*(By the way, I do not mean to imply that all the steps I take are necessary. But this is the way in which the solution made itself apparent to me, so I am recording them in exactly the same sequence.)*

If we temporarily let $u = k+1 \rightarrow k=u-1$, 

$$
\displaylines{
b_0 = p!\sum_{k=1}^{p-1} \frac{(-1)^{k+1} k}{(k+1)!(p-k)!} \\\
= p!\sum_{k=1}^{p-1} \frac{(-1)^{k+1} k}{u!(p-(u-1))!} \\\
= p!\sum_{k=1}^{p-1} \frac{(-1)^{k+1} k}{u!((p+1)-u)!}
}
$$

We can multiply by $\frac{(p+1)!}{(p+1)!}$.

$$
\displaylines{
b_0 = p!\sum_{k=1}^{p-1} \frac{(-1)^{k+1} k}{u!((p+1)-u))!}\cdot \frac{(p+1)!}{(p+1)!} \\\
= \frac{p!}{(p+1)!}\sum_{k=1}^{p-1} (-1)^{k+1} k \cdot \frac{(p+1)!}{u!((p+1)-u)!} \\\
= \frac{1}{p+1}\sum_{k=1}^{p-1} (-1)^{k+1} k \binom{p+1}{u}\\\
= \frac{1}{p+1}\sum_{k=1}^{p-1} (-1)^{k+1} k \binom{p+1}{k+1}
}
$$

Next, we use the following [identity](https://www.seektruth.one/2026/03/13/definite-integral-polynomial.html#:~:text=The%20mathematics%20of%20Pascal%E2%80%99s%20triangle):

$$
\binom{p+1}{k+1} = \binom{p}{k} + \binom{p}{k+1}
$$

And so:
$$
\displaylines{
b_0 = \frac{1}{p+1}\sum_{k=1}^{p-1} (-1)^{k+1} k \left[ \binom{p}{k} + \binom{p}{k+1} \right]
}
$$

If we look at this in expanded form, we will find that the terms collapse into each other quite nicely. But to do so, let us take the even powers and odd powers separately.

## Even Powers

Since $p$ is even, the last term of the summation is positive. Now, *watch how incredibly these terms simplify!*

$$
\displaylines{
b_0 = \frac{1}{p+1}\sum_{k=1}^{p-1} (-1)^{k+1} {\color{lime} k} \left[ \binom{p}{k} + \binom{p}{k+1} \right] \\\
= \frac{1}{p+1} \left( {\color{lime} 1}\left[ \binom{p}{1} + \binom{p}{2} \right] - {\color{lime} 2}\left[ \binom{p}{2} + \binom{p}{3} \right] + ... + {\color{lime} (p-1)}\left[ \binom{p}{p-1} + \binom{p}{p} \right] \right) \\\
= \frac{1}{p+1} \left( \binom{p}{1} 
+ \left[{\color{lime} 1}\binom{p}{2} + {\color{lime} -2} \binom{p}{2}\right]
+ \left[{\color{lime} -2}\binom{p}{3} + {\color{lime} 3} \binom{p}{3}\right]
+ ...
+ \left[{\color{lime} -(p-2)}\binom{p}{p-1} + {\color{lime} (p-1)} \binom{p}{p-1} \right]
+ {\color{lime} (p-1)}\binom{p}{p} \right) \\\
= \frac{1}{p+1} \left[ \binom{p}{1} - \binom{p}{2} + ... + \binom{p}{p-1} + (p-1)\binom{p}{p} \right]
}
$$

Very nice! 

Let's put that equation on pause for a moment and consider the sum $\sum_{m=0}^{p} (-1)^m \binom{p}{m}$, where $p$ is still even. 

$$
\sum_{m=0}^{p} (-1)^m \binom{p}{m} = \binom{p}{0} - \binom{p}{1} + ... + \binom{p}{p}
$$

Without changing the value at all, we can rewrite the same sum as:

$$
\displaylines{
\sum_{m=0}^{p} (-1)^m \binom{p}{m} = \sum_{m=0}^{p} \binom{p}{m} 1^m \cdot (-1)^{p-m}
}
$$

You may recognize this as the standard format of a binomial expansion $(a+b)^p$, where $a=1$ and $b=-1$. Therefore, we get:

$$
\sum_{m=0}^{p} (-1)^m \binom{p}{m} = \binom{p}{0} - \binom{p}{1} + ... + \binom{p}{p} = (1 + (-1))^m = 0^m = 0
$$

Now let us return to where we left off.

$$
\displaylines{
b_0 = \frac{1}{p+1} \left[ {\color{white} \binom{p}{1} - \binom{p}{2} + ... + \binom{p}{p-1}} + (p-1)\binom{p}{p} \right]
}
$$

The part of the expression in white is almost like the summation we just considered. It is only missing $\binom{p}{0}$ and $\binom{p}{p}$ and the signs are all opposite. This part of the expression can therefore be rewritten as follows:

$$
{\color{white} \binom{p}{1} - \binom{p}{2} + ... + \binom{p}{p-1}} = -\left( \sum_{m=0}^{p} (-1)^m \binom{p}{m} -\binom{p}{0} - \binom{p}{p} \right) = -\left(0 - 1 - 1 \right)
 = {\color{white} 2}
$$

Thus, we get:


$$
\displaylines{
b_0 = \frac{1}{p+1} \left[ {\color{white} 2} + (p-1) \right] \\\
= \frac{1}{p+1} \left[ p+1 \right] \\\
= 1
}
$$

**WOW!** Forgive me if I can't contain my excitement about this. I know we still need to get to the odd numbers and all that. But this is just beautiful!

Of course, now we plug in $b_0$ into $a_0=\frac{b_0}{1+p}$, and we get that $a_0 = \frac{1}{p+1}$, exactly as we had hoped. The proof is complete for even powers.

## Odd Powers
For odd $p$, recall that $a_0=\frac{b_0}{1-p}$. Let us go ahead and simplify $b_0$ using the same exact methods as above.

We begin with the same equation:

$$
b_0 = \frac{1}{p+1}\sum_{k=1}^{p-1} (-1)^{k+1} k \left[ \binom{p}{k} + \binom{p}{k+1} \right]
$$

In this case, however, the final term of the expansion will turn out negative.

$$
\displaylines{
b_0 = \frac{1}{p+1}\sum_{k=1}^{p-1} (-1)^{k+1} {\color{lime} k} \left[ \binom{p}{k} + \binom{p}{k+1} \right] \\\
= \frac{1}{p+1} \left( {\color{lime} 1}\left[ \binom{p}{1} + \binom{p}{2} \right] - {\color{lime} 2}\left[ \binom{p}{2} + \binom{p}{3} \right] + ... + {-\color{lime} (p-1)}\left[ \binom{p}{p-1} + \binom{p}{p} \right] \right) \\\
= \frac{1}{p+1} \left( \binom{p}{1} 
+ \left[{\color{lime} 1}\binom{p}{2} + {\color{lime} -2} \binom{p}{2}\right]
+ \left[{\color{lime} -2}\binom{p}{3} + {\color{lime} 3} \binom{p}{3}\right]
+ ...
+ \left[{\color{lime} (p-2)}\binom{p}{p-1} + {\color{lime} -(p-1)} \binom{p}{p-1} \right]
+ {\color{lime} -(p-1)}\binom{p}{p} \right) \\\
= \frac{1}{p+1} \left[ {\color{white}\binom{p}{1} - \binom{p}{2} + ... - \binom{p}{p-1}} - (p-1)\binom{p}{p} \right]
}
$$

Just as earlier, let us consider what happens when we sum alternating binomial operators, but this time using an odd $p$.

$$
\sum_{m=0}^{p} (-1)^m \binom{p}{m} = \binom{p}{0} - \binom{p}{1} + ... - \binom{p}{p}
$$

Rewriting the sum in the format of a binomial expansion, since $(-1)^{p-m}$ now has the opposite sign of $(-1)^{m}$, we need to negate the whole expression. Of course, this doesn't matter because we still get zero.

$$
\displaylines{
\sum_{m=0}^{p} (-1)^m \binom{p}{m} = -\sum_{m=0}^{p} \binom{p}{m} 1^m \cdot (-1)^{p-m} = -(1 + (-1))^p = 0
}
$$

We recognize that:

$$
{\color{white} \binom{p}{1} - \binom{p}{2} + ... - \binom{p}{p-1}} = -\left( -\sum_{m=0}^{p} (-1)^m \binom{p}{m} +\binom{p}{0} - \binom{p}{p} \right) = -\left(0 + 1 - 1 \right)
 = {\color{white} 0}
$$

Thus, we get:

$$
\displaylines{
b_0 = \frac{1}{p+1} \left[ {\color{white} 0} - (p-1) \right] \\\
= \frac{1-p}{p+1}
}
$$

Interesting! Now we have to substitute this into $a_0$.

$$
\displaylines{
a_0=\frac{\frac{1-p}{1+p}}{1-p} \\\
= \frac{1-p}{(1-p)(1+p)} \\\
= \frac{1}{1+p}
}
$$

*Voila!*

# Conclusion
And there we have it. It feels like a miracle, but we have finally, *somehow* reached the shore. The leading term of the sum of powers $1^p+2^p+...+n^p$ is $\frac{n^{p+1}}{p+1}$. 

I set out on this crazy quest to close the final gap in my proof for the area under a polynomial, even though, when I began, I had *absolutely no idea* how to get there.

*Heavenly Father, I thank you for having revealed these things to little ones like me. You sent your Son into the world because you wanted us to know you, to be with you, and to share in your glory. I see your glory, and words cannot express my gratitude and praise. You are **all** to me!*