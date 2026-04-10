---
title: "Wrestling with Irrational Numbers Again"
author: Rev. Thomas J. Pulickal
tags:
- math
---

# Problem
Suppose you went to a placed called Neverland, where their unit of measure was called a neter ($n$). The neter just so happens to be equal to $\sqrt{2}$ meters ($m$). You might be frustrated at them for defining the neter as an irrational multiple of the meter ($\approx 1.4142$), but they claim to have established theirs first and blame the rest of the world for making the meter an irrational multiple of the neter ($1m \approx 0.7071n$).

You find a table manufactured in Neverland with dimensions of $1n \times 1n \times \frac{1}{2}n$, but in the UK, the exact same table's dimensions are $\frac{1}{\sqrt{2}}m \times \frac{1}{\sqrt{2}}m \times \frac{1}{2\sqrt{2}}m \approx 0.7071m \times 0.7071m \times 0.35355$, with never-ending decimals on each. Yikes! Is every measurement from Neverland doomed to be this ugly in the UK? And is everything measurement from the UK doomed to be just as ugly in Neverland? You might say this is an artificial problem. There are no neters in Neverland (and there are probably no tables made in the UK). Maybe you are right, but I assure you that anyone can establish the neter at any moment just by using the diagonal length of any $1m \times 1m$ surface as their reference. (See more examples at the end of the page.)

# Repeating decimals

Let's introduce another a unit of measure, an American one, the foot (here called $f$). In 1959, the foot was defined as $1f = 0.3048m$.[^1] The good news is that those are not infinitely repeating decimals. So, tables made in America work out fine in the UK. What about tables made in the UK? Well, $1m = \frac{1}{0.3048}f \approx 3.2808f$. Uh oh! Here once again we have infinitely many decimals. Let's extend that out a little more to really see it: 3.2808398950131233595800524934383202099737532808398950131233595800524934383202099737532808... If you look carefully, you'll notice that the pattern repeats every 42 decimal places. So the exact value is expressed as $3.\overline{280839895013123359580052493438320209973753}f$. 

*What does it mean* to have an infinitely repeating sequence of digits? It is like this. Imagine you have a paper split into 3 even parts and you shade in the first third. Now, with a red pen, you draw an additional line to divide the paper in half. If you keep dividing the paper in halves with your red pen, will a red line ever line up with the edge of the shaded-in region?

![Thirds and Halves]({{ site.media }}./third-halves.gif)

As you can see, it will always either overshoot or undershoot the edge of the green region, i.e. the first third. This means that a third cannot be represented in binary with a finite number of digits. We highlight binary here because we are splitting in halves. In binary, $\frac{1}{3}$ looks like $\approx 0.010101$. Or, precisely, $0.\overline{01}$. These digits make sense, as they perfectly match our experience with the paper. The digits are saying: 
> When you first divide the box in half, choose the left half (0). But on the next cut, choose the right half (1). Then on the next cut, choose the left half again (0). *Ad infinitum.*

You would have a similar problem if you tried to divide the box in 10s instead. You would have to keep choosing the third box over and over again, which is why $\frac{1}{3} \approx 0.3333$ in our normal decimal number system (called base 10). Now notice that if you add up 3 $\frac{1}{3}$s, you reach an integer in base 10. Because then the whole box becomes shaded in. And so it is with every rational number. If you add many of them together, you'll eventually reach an integer.

Coming back to the transatlantic conflict concerning meters and feet, can a sufficiently large number of meters ever line up with an integer number of feet? Yes. $381m = 1250f$. That's the thing with rational numbers, even when they have repeating decimals, they are never truly incompatible with each other. 

# Non-repeating decimals
With that in mind, let's think about what an irrational number means. Regardless of what number system you represent it in, it will always have infinitely many digits after the decimal place *and they will never repeat*. That means the first time you divide the paper in 10s, it may ask you to choose the 4th region. The next time, the 9th one. Then the 3rd, 1st, 7th, etc., with no pattern whatsoever, forever. Seeing how repeating infinite decimals are possible (as we did with $\frac{1}{3}=0.\overline{3}$) is I think helpful in imagining that there really could be a number out there that is perpetually evasive, which cannot be captured by dividing the paper repeatedly in 2s, 3s, 4s, 5s, etc. or even by any combination of such cuts.

To me, as I continue to wrestle with these questions, prime numbers serve as a helpful analogy. Most numbers can be divided up evenly into smaller groups. If you have a class of 50 people, you can split them up into groups of 5 or 10 or 2, for example. But isn't it weird that there are numbers that cannot be divided evenly into smaller groups, such as 7? It is even weirder that there are infinitely many such numbers. For 7, it is perhaps easier to understand that the numbers 2 through 6 all happen to not divide it up evenly. But what about a large number like $1234567891010987654321$? "You're telling me that there is a not a single number between 2 and 1234567891010987654320 that can divide up that number evenly?!" Yes, exactly that. If you had a class of that size, I would wish you the best of luck in splitting them up evenly into discussion groups, for more than one reason. By some rough analogy, irrational numbers are like this but in reverse. There is no way you can divide up the "1" (see [previous article]({% post_url 2026-03-26-irrational-numbers %})) evenly to land on the irrational number.

# Meters and Neters always talking past each other
Remember that neither meters nor neters are irrational in themselves, but their relationship has been plagued by sheer irrationality. They keep "talking past each other." No matter how many steps forward the one takes, it never catches up to the other, and vice versa. They look like this:

![Neters to Meters]({{ site.media }}./neters-to-meters.png)

Notice that they get close there near the end. This can be explained as follows. $1n \approx 1.41m$. If we multiply both sides by 10, we get $10n \approx 14.1m$, which is what we see there. The 10th neter almost lines up with the 14th meter. But alas, as close as they may come, they will never meet.

The fact that they will never meet can be proven very simply by the definition of an irrational number. An irrational number is a number that cannot be expressed as a ratio of integers (we take for granted that $\sqrt{2}$ is irrational; proofs are easily found online for nonbelievers). We will prove that neters and meters cannot meet by starting with the opposite supposition: Suppose that neters and meters would in fact meet at a certain point -- at some $x$ neters and $y$ meters ($x$ and $y$ being integers). If that were true, $xn=ym$. Since the conversion between neters and meters is given by $n=\sqrt{2}m$, 

$$
\displaylines {
x \cdot n = ym \\\
x \cdot \sqrt{2}m = ym \\\
\sqrt{2} = \frac{ym}{xm}  \\\
\sqrt{2} = \frac{y}{x}
}
$$

This would imply that $\sqrt{2}$ is a rational number (a ratio of two integers), which is false. Therefore, meters and neters cannot meet each other. They shall be doomed to this dance for all eternity.

# Beautiful Strangeness
How amazing this all is! We often associate beauty with symmetry. But sometimes it is the asymmetrical and the incommensurable that move us. They bewilder us in their incongruity, they disturb us even, but this too is beauty. The idea that there are irrational numbers -- that you can never quite put your finger on, that have infinitely many digits, that your unit of measure can *never* align with -- is crazy! For me to ask whether irrational numbers *truly exist* would be as nonsensical as asking whether *any number*  truly exists. And yet, I cannot help but ask it. How strange that I have been asking it over and over again, never finding an answer, but always finding more light. Even in the simplest of things, even in the most ordinary, there is endless mystery if we ask about it.

# PS: Borderline obsession with $\sqrt{2}$
By the way, I mentioned that you can find $\sqrt{2}$ on the diagonal of any $1m \times 1m$ surface. Where else can you find it? Wherever something keeps doubling, $\sqrt{2}$ represents spreading  out that double over two steps instead of one, a half-double action so to speak. If you have 10 things and you double them, you get 20 things. What is the half-double action *X* called so that when you have $10$ things and you *X* them ($X \cdot 10$) you only get $\approx 14.1$ things, but when you *X* them again ($X \cdot X \cdot 10$) you get the full $20$. That action *X* is $\sqrt{2}$.

For example, musical notes double in frequency with every octave. Therefore, half way up the notes on any scale, the frequency increases by $\sqrt{2}$. The combination of the root note (e.g. C) with the note at $\sqrt{2}$ times the base note's frequency (the augmented 4th, e.g. F#) is called the **devil's chord**. To hear the frequencies $261.6256$ (C4) and $261.6256\sqrt{2} \approx 369.9944$ (F#4), try it out on a piano or [click here](https://onlinetonegenerator.com/multiple-tone-generator.html?f[]=261.6256&f[]=369.9944&w[]=si&w[]=si&v[]=50&v[]=53) and toggle both frequencies to "on". (Don't be scared![^2])

You can find our special number in the international standard paper size (of course, international = pretty much everywhere except America). On any standard **A4** sheet of paper, the length of the long side divided by the short side is.. you guessed it: $\sqrt{2}$. This is so that when the paper is folded or cut in half, it maintains the exact same ratio. Like this:

![A4 folds]({{ site.media }}./A4-folds.gif)

(FYI - this is not a real A4 piece of paper, as I don't know where to get one, but it was cut with the same proportions.) Notice that each fold (with rotation) produces the same ratio:

Original paper: $\frac{\sqrt{2}}{1} = \sqrt{2}$

Fold 1: $\frac{1}{\frac{\sqrt{2}}{2}} = \frac{2}{\sqrt{2}} = \sqrt{2}$

Fold 2: $\frac{\frac{\sqrt{2}}{2}}{\frac{1}{2}} = \frac{2\sqrt{2}}{2} = \sqrt{2}$

So, you see, even our paper is irrational. It's everywhere!!

-----
[^1]: If you want to go down a rabbit role, learn about the prior definition of foot as 1200/3937 meters and the two kinds of "feet" in U.S. history here: https://www.nist.gov/pml/us-surveyfoot.
[^2]: Daniel Esparza, *[“The ‘Devil’s Chord’: A Forbidden Medieval Musical Sequence”](https://aleteia.org/2018/10/25/a-medieval-forbidden-musical-sequence-the-devil-in-music-or-the-devils-chord/)*, *Aleteia*, October 25, 2018 — explanation of the “diabolus in musica” (tritone) as a dissonant interval historically associated with tension in music rather than an actual ecclesiastical prohibition.