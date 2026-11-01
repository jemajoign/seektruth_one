---
title: Deriving the Sum of Squares using Binomial Expansion
author: Rev. Thomas J. Pulickal
tags:
- math
---

# Problem
After stumbling upon the [binomial theorem]({% post_url 2026-10-28-deriving-binomial-theorem %}), I wondered whether this could help me determine the sum of natural numbers raised to a power. I was interested in this because then I would be able to complete the [proof for the area under a polynomial]({% post_url 2026-03-13-definite-integral-polynomial %}) from the ground up, without assuming Faulhaber's formula. I decided to start with summing squares.

$$
1^2+2^2+3^2+...+n^2 = \sum_{i=1}^{n} i^2 = ?
$$ 

As seen in the aforementioned proof for area, this is not a random challenge like a Sudoku puzzle. Among many other applications, it is an important part of determining the area under a quadratic curve (e.g. $y=x^2$).

I'm sure there are better ways to deduce the solution to this out there than the path I pursued. I did not bother to look at any of them because that would eat into the *joy of discovery*. I just started with binomial expansion, since that is what I derived most recently. In the end, I was overjoyed and grateful to God for leading me on a simple path to the solution.

# Prerequisite: Sum of natural numbers
The only prerequisite here, other than the binomial expansion, is to know the sum of natural numbers, which is in fact very intuitive.

$$
1+2+3+...+n = \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

The reason this is intuitive is that you can just add the first number ($1$) and last number ($n$) of the sequence and notice that they sum up to $n+1$. But this is also what the second number ($2$) and second-to-last number ($n-1$) sum up to: $2+(n-1)=n+1$. You keep adding those ($n+1$)'s together $\frac{n}{2}$ times and get the sum of natural numbers as being $(n+1)\cdot \frac{n}{2} = \frac{n(n+1)}{2}$.

# What is $2^2$?
If we use the binomial expansion, $2^2=(1+1)^2=\binom{2}{0}1^2 1^0 + \binom{2}{1}1^1 1^1 + \binom{2}{2}1^0 1^2 = 1 + 2 + 1 = 4$. The great thing about using all $1$'s is that we can ignore everything except the coefficients, leaving us with $1 + 2 + 1$ straight from [Pascal's Triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle).

# What is $3^2$ and $4^2$?
Since we want to continue using binomial expansion to evaluate $3^2$, we can rewrite $3$ as $(1+(1+1))$, leading us to nested binomial expansions.

$$
\displaylines{
3^2\\\
=(1+(1+1))^2 \\\
= 1 + 2(1+1) + (1+1)^2 \\\
= 1 + 2\cdot 2 + (1 + 2 + 1)
}
$$

We can rewrite the expression in the following way. 

$$
(1 + 0\cdot 2) + (1 + 1\cdot 2) + (1 + 2\cdot 2)
$$

The pattern that emerges can be seen even more clearly with $4^2$.

$$
\displaylines{
4^2\\\
= (1+(1+(1+1)))^2 \\\
= 1 + 3\cdot 2 + (1+(1+1))^2 \\\
= 1 + 3\cdot 2 + (1 + 2(1+1) + (1+1)^2) \\\
= (1 + 3\cdot 2) + (1 + 2\cdot 2) + (1+2+1)) \\\
= (1 + 3\cdot 2) + (1 + 2\cdot 2) + (1 + 1\cdot 2) + (1 + 0\cdot 2) \\\
= (1 + 0\cdot 2) + (1 + 1\cdot 2) + (1 + 2\cdot 2) + (1 + 3\cdot 2)
}
$$

# Summing the first four squares
Using the expressions above, we can line up the expansions of the first four squares and add them up in the following way:

|$(1 + 0\cdot 2) +$||||
|$(1 + 0\cdot 2) +$| $(1 + 1\cdot 2) +$|||
|$(1 + 0\cdot 2) +$| $(1 + 1\cdot 2) +$| $(1 + 2\cdot 2) +$||
|$(1 + 0\cdot 2) +$| $(1 + 1\cdot 2) + $| $(1 + 2\cdot 2) +$| $(1 + 3\cdot 2)$|

As you may confirm, the first row is $1^2$, the second row is $2^2$, etc. Therefore, the sum of the first four squares is:

$$
\displaylines{
4\cdot (1+0\cdot 2) + \\
3\cdot (1+1\cdot 2) + \\
2\cdot (1+2\cdot 2) + \\
1\cdot (1+3\cdot 2) + \\
0\cdot (1+4\cdot 2)
}
$$

(The last 0 term is added for convenience.) In other words, the sum of the first four squares is:

$$
\sum_{i=0}^{4} i\cdot (1 + 2(4-i))
$$

# Summing $n$ squares

If we now generalize this pattern, replacing $4$ with $n$ for the summation of $n$ squares, we get:

$$
\sum_{i=0}^{n} i\cdot (1 + 2(n-i))
$$

Then,

| &nbsp; $\sum_{i=0}^{n} i\cdot (1 + 2(n-i))$ |
| $= \sum_{i=0}^{n} [i + 2ni - 2i^2]$ |
| $= (2n + 1)\sum_{i=0}^{n} i - 2\sum_{i=0}^{n} i^2$ |

We can immediately compute the first term. We stated at the beginning that the sum of natural numbers is given by $n(n+1)/2$. So the first term evaluates to: 

| &nbsp; $\frac{(2n+1)(n)(n+1)}{2}$ |
| $ = \frac{(2n+1)(n^2+n)}{2}$
| $ = \frac{2n^3 + 3n^2 + n}{2}$

The second term is very interesting: $-2\sum_{i=0}^{n} i^2$. Wait a minute! Isn't that the very problem we are trying to solve, the sum of squares? When I first saw this, my heart sank for moment, like when you're trying to find your way out of the woods and for a second you think you might have just made a big loop. However, there is more to the story here. Let us look at the whole equation. (Note that starting the summation at i=0 or i=1 makes no difference.)

$$
\displaylines{
\sum_{i=0}^{n} i^2 = (2n + 1)\sum_{i=0}^{n} i - 2\sum_{i=0}^{n} i^2 \\\
\sum_{i=0}^{n} i^2 = \frac{2n^3 + 3n^2 + n}{2} - 2\sum_{i=0}^{n} i^2
}
$$

Now it's clear... We can add $2\sum_{i=0}^{n} i^2$ to both sides!

$$
\displaylines{
3\sum_{i=0}^{n} i^2 = \frac{2n^3 + 3n^2 + n}{2} \\\
\sum_{i=0}^{n} i^2 = \frac{2n^3 + 3n^2 + n}{6}
}
$$

**And we're done!** 

The sheer sense of wonder and awe overwhelms me. When I first thought about adding $1^2 + 2^2 + 3^2 + ... n^2 = 1 + 4 + 9 + ... + n^2$, I could not imagine how I could break through the surface to find a general formula. I just took a chance with the binomial expansion to see where that road might take me. I give thanks to God - Father, Son, and Holy Spirit - especially because I'm not exceptionally quick or clever or well-trained. I'm grateful to be given the joy of discovery, which is the joy of seeing something, even something that everyone already knows, as if for the *first time*. For me, that is part of what makes life beautiful.

Of course, the next step is to try to use this method to extend the summation to higher powers, but I leave that for another day.