---
title: "What Constitutes Real Intelligence?"
author: Rev. Thomas J. Pulickal
tags:
- ai
---

## Encoded symbols and the function of machines
Way before AI, it was an incredible feat of human ingenuity that we created machines capable of determining the logical outcome of a complex combination of conditions. For example, you could take an expression like 
> (C is true and W is false and J is true) OR (C is false and W is true and J is true) OR (C is false and W is false and J is false)

In (more) symbolic notation this would be: $(C \land \neg W \land J) \lor (\neg C \land W \land J) \lor (\neg C \land \neg W \land \neg J)$. If you plug this into a machine, it could tell you that if $C$ is true and $J$ is false, then the whole expression evaluates to false. The machine can manipulate the symbols according to the same rules by which we would do so mathematically and so produce the output we expect. At the end of the day, though, these are just symbols and *have no real meaning in themselves*. Evaluating them is like finding the solution to a Sudoku puzzle. It's a "real" solution to a "real" problem but not a meaningful one apart from the game itself. 

Suppose, however, that the reason I entered this expression into the machine in the first place was to represent observations I made about myself -- namely, that I am only comfortable when:

* It's cold outside (C) and it's not windy (¬W) and I have a jacket on (J) OR
* It's not cold outside (¬C) and it's windy (W) and I have a jacket on (J) OR
* It's not cold outside (¬C) and it's not windy (¬W) and I don't have a jacket on (¬J)

A certain kind of machine or program can easily give me the Boolean expression's "truth table".

| $C$old | $W$indy | $J$acket |  Comfortable: $(C \land \neg W \land J) \lor (\neg C \land W \land J) \lor (\neg C \land \neg W \land \neg J)$ |
| --- | --- | --- | ----------- |
| F | F|F|T|
F|T|F|F|
F|F|T|F|
F|T|T|T|
T|F|F|F|
T|T|F|F|
T|F|T|T|
T|T|T|F|

Now that I know the meaning that first gave rise to this symbolic expression, I can also understand the meaning of the machine's output by mapping the symbols back to reality. The meaning of the table is that I would be comfortable on a nice (not cold or windy) day without a jacket (first row). It is also that there is no way I'm going to be comfortable if it's cold and windy outside, with or without a jacket (last row and third-from-last row). To arrive at this, I encoded some real meaning into symbolic form, put it into a symbol manipulation machine, attained the output, and then decoded the output symbols' real meaning again.

Interestingly, the "truth table' only gives us *truth*, in the meaningful sense of the word, when it is encoded with meaning. Without meaning, it is the mere manipulation of symbols according to an arbitrary set of rules: a game. You can program a Pianola to play keys on the piano according to a clever set of rules, perhaps to play every $p^k$-th key, where $p$ is a prime number and $p^k$ is a positive integer greater than 50, but that wouldn't make music. You need to encode real music into the Pianola's input. Then, it would perform various functions on the basis of those symbols, and produce a tonal output. When you or another listener decodes that output, it becomes music again.

What we have said here for Boolean expressions and musical notes is true for all kinds of other symbolic expressions as well. One need only remember all the formulas we had to memorize from physics, statistics, chemistry, etc. Good students are typically averse to the mere memorization of formulas. The idea of 'plugging in' numbers and getting an answer is not very appealing to a curious mind. We want to know *what* we are doing and *why*. Why is the formula doing these particular manipulations to my measurements? Why is their output meaningful? Why does *F=ma*? We can be ok with a machine or a formula manipulating our symbols, so long as we don't lose sight of the meaning that was encapsulated in them and we have some idea of what is happening to them in the process.

## The symbols of language
The earliest attempts at making machines capable of understanding human language (text) took a completely different approach than what we see today in the AI world. Researchers tried to determine the symbol manipulation rules of words in sentences. After all, we teach these rules of grammar to children. Why not develop a machine that can parse a linguistic expression just as well as it can parse a Boolean expression? People worked incredibly hard on this front because it must have always seemed within reach. (To me, it somehow still seems within reach.)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Travel_budget_augmented_transition_network.svg/1920px-Travel_budget_augmented_transition_network.svg.png" style="background-color: #a4a4a4">
An example of an [Augmented Transition Network](https://en.wikipedia.org/wiki/Augmented_transition_network) from the 70s. Image by <a href="//commons.wikimedia.org/wiki/User:Cosmia_Nebula" title="User:Cosmia Nebula">Cosmia Nebula</a>

Eventually, people realized that the rules of human language are too complex to spell out by hand. There are too many exceptions. There are cases where only the overall context of, say, a whole page can resolve a lexical ambiguity. Due to the explosion of the Internet starting in the late 90s, we found an easier way. Now that we had massive amounts of text to "train" on, we formulated an uncountable set of rules by extrapolating the statistical correlations between every kind of combination of words ever written.

Regardless of how we get there, whether the rules are written by hand or extrapolated from large data sets, whether the machines are created to parse Boolean expressions or to parse human language, the paradigm is essentially the same. The machines have a set of rules by which they manipulate symbols and produce a symbolic output. **The input and the output symbols *lack meaning* in and of themselves.** This is why you can train a neural network on a massive set of nonsensical data and it would flawlessly produce nonsensical output, not knowing the difference. From the machine's "perspective," they are all just symbols and tokens held in statistical relationship to each other -- until and unless we encode them with meaning. Just as, from the earth's "perspective," it's just a rock with a slight spin that has been freefalling into the sun for a few billion years -- until we imbue it with the glory of day and the serenity of night and the mystery of man's destiny across and beyond time. In both cases, we do not imbue meaning arbitrarily but according to a natural coherence between our spiritual capacities and the *telos* of nature, so that you might instead say that we *uncover* their meaning, but we we do not need to explore this further here.

## The superiority of LLMs and their limitations
There is a certain elegance to large language models (LLMs) because unlike with the Boolean expression calculator, we do not have to consciously encode meaning into a separate layer of symbols before entering them into the machine and then decode them on the other end. These machines operate on the very same symbols that we use to communicate with each other and even to think. This is a major leap in efficiency and accessibility. It opens up the domain of symbol-relations to virtually all the knowledge, discourse, and even frivolous chatter of the entire world. 

Nevertheless, machines operate in a fundamentally different way from real intelligence. One indication of this is that LLMs need an *enormous* amount of data and power to function. The question is not whether the machines can be made more efficient. Rather, we need to pause amid all the excitement and reflect on the more pivotal question concerning the difference between symbol manipulation and intelligence. Steve Wozniak, the original brains behind Apple technology, has made some insightful observations along these lines, suggesting that the term "intelligence" is grossly misapplied.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dGUnbEqSZfc?si=lCnVxd6scEOoD77v&amp;start=335" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

We should aim to be more than just symbol manipulating machines, both in thought and in speech. Have you ever found yourself working on a problem (perhaps in math, physics, or programming) and solved it without really thinking about what you were doing? We might say that was the machine part of you. 

On the other hand, have you ever found yourself engrossed in the real meaning of what you were doing, in lock-step with the particulars but also transcending them entirely? It was that moment when, absorbed in your work and learning, you **smiled** at a subtlety and a charming facet of reality, though no one was watching. Your heart was beating more profusely and giving its own kind of thanks to God -- for Beauty, Truth, and Goodness -- without uttering a word. Perhaps it is in those moments, in those wordless contemplations of the soul, that we approach the summit of real intelligence.
