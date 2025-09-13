---
date: 2025-09-01
title: On DEVS and Determinism
outline: deep
tags:
- devs
- determinism
- philosophy
---
Epistemic Laplacian Determinism

---

# On DEVS and Determinism: Epistemic Laplacian Determinism

*What if the universe is deterministic, but only from the outside?*
This question forms the core of a perspective I call **Epistemic Laplacian Determinism**. It's a way to reconcile determinism with unpredictability, quantum weirdness, and the apparent presence of free will. It also helps explain why the show *Devs* (2020), as well as a lot of people, get determinism fundamentally wrong.

## The Devs Mistake

In *Devs*, a computer system is built that can predict the future with perfect accuracy. It operates under the assumption that the universe is completely deterministic. Whatever it predicts, must happen, and any deviation would be a contradiction of universal law.

But this is a misunderstanding of what determinism actually implies. The show collapses the difference between **prediction** and **interference**. It assumes that knowing the future and participating in it are compatible. They are not. As soon as the predictor becomes part of the system it tries to predict, the chain of cause and effect becomes paradoxical.

## Determinism Is About Perspective

My interpretation is this:

* Whether a system is deterministic or not depends on the **perspective of an outside observer**.
* This observer must know **everything** about the system, i.e. its variables, its initial conditions, its laws.
* Crucially, the observer **must not interfere** with the system.

If those criteria are met, the system is **deterministic to that observer**. Determinism is **epistemic**, meaning it relates to what is knowable from the outside. Not inherent to the system itself.

Hence the name: **Epistemic Laplacian Determinism**. Like [Laplace's demon](https://en.wikipedia.org/wiki/Laplace%27s_demon), but with an emphasis on observer perspective and knowledge access.

## The Light Switch and the Stranger

Take a simple example: a circuit with a battery, a switch, and a lamp. If you're an outside observer and you know everything about this setup. Battery level, connections, resistance, you can predict with 100% certainty that flipping the switch will light the lamp. You can even calculate when the lamp will fade.

Now suppose someone you didn't account for walks in and smashes the lamp. You didn't see it coming. Your prediction failed. But not because the system was random. It's because **your boundary around the system was incomplete**. An external influence interfered.

This scales to the universe. If an omniscient outside observer knew every atom's position, spin, and energy, **and never interfered**, they could predict every future event and reconstruct every past one. From their view, **the universe is deterministic**.

## The Quantum Analogy: Double Slit and Devs

In quantum physics, the double-slit experiment shows a pattern of interference, until you observe which slit the particle goes through. Then, the interference disappears. Observation changes outcome.

This maps beautifully to our Devs analogy:

* If the Devs computer records a prediction of the future and no one watches it until the moment occurs, the recording and reality will match.
* But if someone watches the recording **before** the event, the outcome is altered.

Just like in quantum mechanics, **knowing the outcome before it collapses breaks the clean evolution** of the system. This is not randomness, it's **feedback**. The predictor becomes part of the system, and determinism (from its perspective) collapses.

## Initial Conditions and Scale

Some argue that systems are too complex, chaotic, or unpredictable to be deterministic. But **chaos theory doesn't break determinism**. It only breaks predictability from within. If the outside observer knows every initial condition with infinite precision, even the most chaotic system is deterministic to them.

Even PRNGs (pseudorandom number generators) are deterministic if you know the seed. Even neuron firings are deterministic if you know all the inputs and physical conditions. The illusion of randomness is a byproduct of **incomplete knowledge**.

## Is Quantum Mechanics Actually Random?

This brings us to quantum mechanics. Does it prove determinism wrong?

Surprisingly: **I don't think so**.

Quantum theory **appears** probabilistic, but this depends on interpretation:

* The **Copenhagen Interpretation** introduces collapse and true randomness.
* **Many-Worlds** keeps everything deterministic: all outcomes happen, just in different branches.
* **Pilot-wave theories** and **superdeterminism** retain determinism, just hide it in variables we can't observe.

No experiment has ever *proven* true randomness. It's just a feature of the model we currently use. Determinism is not dead, just deeply entangled with our assumptions.

## Prediction ≠ Free Will Elimination

Critics of determinism often argue that it removes free will. But again, that only applies from the outside.

* To the **omniscient external observer**, your choices are predictable.
* But to **you**, inside the system, with limited knowledge and no access to all variables, free will feels real, and nothing about your decision is pre-determined in your mind.

Both views can coexist.

## Theoretical Truth and Practical Inaccessibility

Some argue that if you can't *access* the prediction, it's irrelevant. But that's a shallow take.

> Theoretical truth is not contingent on accessibility.

We talk about infinity, heat death, death itself, even if we can't access or verify them directly. Philosophy and physics aren't just about what we can touch. They're about what can be *true* in principle.

Determinism is still a meaningful concept, even if no human can ever achieve Laplacian prediction.

## Final Thoughts

In the end, determinism is not an absolute label attached to the universe. It's a **relative property**, true from one frame and false from another. What matters is the observer's distance, knowledge, and isolation from the system.

*Devs* assumes determinism is brute, rigid, and unbreakable, but the moment the prediction interacts with the predicted, it collapses into paradox.

Epistemic Laplacian Determinism accepts that paradox, and explains it.

It holds that:

* Systems are deterministic **relative to external observers**.
* Predictions are only valid if they don't interfere.
* Quantum uncertainty and chaos don't disprove determinism. They just expose our limitations.
* Free will exists **inside** deterministic systems, for agents with incomplete knowledge.

From outside, everything is determined.
From within, everything feels open.
Both can be true.

## Bonus

I transcribed the "Quantum code" from the show:
https://gist.github.com/NullDev/b6bf37cbdd7f41ad169211eb7594532e

While it surprisingly incorporates some real concepts like shor, mersenne and dlog, it is... creative at best. <br>
Snippet:

```python
def qrun(qcircuit, n, hypo, epsilon):
    """ execute a quantum subroutine in the optimisation solution search the quantum circuit
    has already been built to match the code guess and the classical data it is analyzing """
    qdev = DEVSQ.backends(simulator=false,lambda=xmax)[n]
    qjob = execute(priority=highest,qdev,qcircuit)
    if (qjob.retcode[7] == 0):    q_data = qjob.meas[n]
    else: # run failed, try again return FALSE
                                  return q_data # run successful
    qreg = QuantumRegister(n//2)
    do case            hypo in 0 to 3: / shor_pre_data = shor_pre(qint_data)
                       qreg = shor.qft(n, shor_pre_data)
                       hypo in 4 to 5: / qreg = dihedral(1. hypo, 0.01, epsilon, qint_data)
        else:          qreg = symmetric(n, 30, hypo, 0.05, epsilon, qint_data)
    creg = qreg.measure[all] / c_data = do_permission_run(n, hypo, epsilon, creg)
                       return c_dat
```
