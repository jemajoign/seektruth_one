---
title: "Unlocking Synergistic Possibilities"
author: Rev. Thomas J. Pulickal
tags:
- emergence
- transcendence
- math
---

This essay marvels at something in math and then, by an unabashed stretch of the imagination, makes a rough analogy to a life lesson. People say that synergy means that 1+1=3. Of course, this makes no sense at all, but we know what it means. Instead, we would rather say (and show) that two finitely ordered actions can produce an action of infinite order when they collaborate.

## Finite order - Rotations in 2D
By finite order, we mean that if the action is repeated enough times, the system will return to its original state, as though no action was performed. For example, when you rotate an object by 90 degrees, you can only do so four times before you are back where you began. 

![A Snowman in 90 degrees]({{ site.media }}./snowman-90s.gif)
\(All the rotation images were made possible thanks to the free tool available at [tinkercad.com](tinkercad.com).\)

Something similar would be true if we rotated by -60 degrees, except that then we would have an order of *six* instead of four.

![A Snowman in -60 degrees]({{ site.media }}./snowman-60s.gif)

Suppose we combine these two actions. Let "Rotate by 90 degrees" be known as $A$ and "Rotate by -60 degrees" known as $B$. Is $AB$ of finite or infinite order?

![A Snowman in 90-60 degrees]({{ site.media }}./snowman-90-60.gif)

As we can see, it is definitely of finite order.

## Exploring Rotations in 3D
What if we add another dimension to this problem? Once again we look at two actions of finite order. 

Let $A$ be a 90 degree spin that Elvis performs. $A$ is when he rotates in the direction of a clock hand on the stage floor (the clock facing upward).

![Elvis in 90 degrees]({{ site.media }}./elvis-90s.gif)

Let $B$ be a 60 degree partial flip that Elvis performs in the air. $B$ is when he rotates in the direction of someone doing a cartwheel.

![Elvis in 60 degrees]({{ site.media }}./elvis-60s.gif)

Now, we want to see what happens with $AB$.

![Elvis in 90-60 degrees]({{ site.media }}./elvis-90-60.gif)

We can see several iterations of $AB$ here, but none of them return Elvis to his original state. In fact, we could keep applying $AB$ for as long as we would like, but we will *never again* see Elvis in that initial pose. Nor shall he repeat *any* of his prior positions because every move of his in this sequence is completely original! (...though the gif does eventually loop.) Thus, $AB$ is of infinite order even though $A$ and $B$ are of finite order. Apparently, two simple, cyclical actions working together can form an infinitely nonrepeating action. *Amazing!*

If you want to see how this works mathematically, let  $AB = R_x(\frac{\pi}{2}) R_y(\frac{\pi}{3})$, where $R_x$ and $R_y$ are the [rotation matrices in 3D](https://wikimedia.org/api/rest_v1/media/math/render/svg/a6821937d5031de282a190f75312353c970aa2df). You end up with:

$$
\displaystyle
AB = \begin{bmatrix}\frac{1}{2} & 0 & \frac{\sqrt{3}}{2}\\ \frac{\sqrt{3}}{2} & 0 & \frac{-1}{2} \\ 0 & 1 & 0 \end{bmatrix}
$$

As you multiply $AB$ with itself, you find that it never returns to the identity matrix ($I$).

## Why it didn't work in 2D
The problem with the 2D world is that the order of rotation does not matter. You can rotate by 90 degrees and then by -60 degrees or by -60 degrees and then by 90 degrees; both yield the same result. For any rotation actions $A$ and $B$ in 2D, $AB=BA$, which means $ABAB=AABB$. In our case, $A$ is of order 4 and $B$ is of order 6. If you do $AB$ twelve times over, you get $(AB)(AB)(AB)(AB)(AB)(AB)(AB)(AB)(AB)(AB)(AB)(AB)=(AAAAAAAAAAAA)(BBBBBBBBBBBBB)=A^{12}B^{12}=(A^{4})^{3}(B^{6})^{2}=I^{3}I^{4}=I$. In English, this means instead of doing $AB$ twelve times, you could do the twelve 90 degree rotations first, which will obviously take you back to where you started, and then do twelve 60 degree rotations, which will also take you back to where you started.

Groups where $AB$=$BA$ are called *abelian*. In abelian groups, two elements of finite order ($A$ and $B$) yield a third element of finite order ($AB$). As we have seen, nonabelian groups are a different story. Rotations in 3D are nonabelian (specifically, when we rotate along different axes).

## When two minds come together
Now back to the analogy. It is not an uncommon thing for two ordinary minds to come together and find limitless possibilities. By nature, some minds grow increasingly certain through in-group echo chambers. Other minds are wholly occupied by petty drama and other people's affairs. Still other minds are cyclically bound to finite lexical graphs -- that is -- they engage in sophisticated, speculative discourse without ever realizing that merely they go in circles. 

We all suffer from these pitfalls of finite ordered thinking in varying degrees and types. Genuine encounter with another can help set us free. Rather than going on in circles, we can opt to never walk the same way twice by **seeking truth collaboratively**. Every step forward is a step into unchartered territory because one's thought is reflected back in an altogether different way by the other person, which is then modified and reflected back yet again, and this process is never-ending. For this to work, we need sufficient diversity. We need to rotate along different axes from each other. We must surround ourselves with people whose thoughts take us off our beaten paths and have us applying our skills in new domains. 

The diversity is not randomness or chaos. Our differences must be rooted in a more fundamental and unified frame of reference. There is a playing field that makes playing possible. A person cannot seek truth with another who first seeks power. A person cannot seek beauty and order with someone who doesn't believe they exist. Attempting to do so is a destructive waste of energy. The diversity that unleashes infinite possibilities, on the other hand, functions constructively because of a mysterious current that moves us all towards greater being. The nexus of the universal meaning of all things is found in that meek and gentle face of truth, in Christ, whose love draws all people together into the synergistic communion of one body.

> I have no better expression than "religious" for this confidence in the rational nature of reality and in its being accessible, to some degree, to human reason. When this feeling is missing, science degenerates into mindless empiricism.
> - Albert Einstein[^1]


---

[^1]: Walter Isaacson, Einstein: His Life and Universe (New York: Simon & Schuster, 2007), chap. 20, “Quantum Entanglement, 1935.”
