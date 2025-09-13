---
date: 2025-09-13
title: What if Networks are Rings?
outline: deep
tags:
- math
- networking
- mudular-arithmetic
- ring-theory
- subnets
- number-systems
---
We can think differently about networks and subnets using modular arithmetic & ring theory. Should we? Probably not.

---

# What if networks are just rings?

IP addresses look like boring dotted decimals: `192.168.1.1`, `10.0.0.42`, `8.8.8.8`. But under the hood, networking is pure binary. And binary means math. And math means we can do cursed stuff.

In fact:

$$
\text{IPv4 space} = \mathbb{Z}/2^{32}\mathbb{Z}
$$

The space of IPv4 addresses is just the **commutative residue class ring of integers mod $2^{32}$**.

**NOW**, is that useful? The answer might shock you... <small>(it's no)</small>

## IP addresses as a ring

* Each IPv4 address = an element of $\mathbb{Z}/2^{32}\mathbb{Z}$.
* Addition = add two IPs, wrap around at $2^{32}$.
* Multiplication = defined mod $2^{32}$ as well (not used in networking, but the ring structure exists).

So `0.0.0.0` = 0, `255.255.255.255` = $2^{32}-1$, and your home router at `192.168.0.1` is just `3232235521` in $\mathbb{Z}/2^{32}\mathbb{Z}$.

## Subnets/Masks as ideals

CIDR blocks like `192.168.0.0/24` are usually taught as "keep the first 24 bits fixed, vary the last 8."

But in ring language:

$$
\text{a /n subnet} = a + (2^{32-n})
$$

That is: a **coset** of the ideal $(2^{32-n}) \subseteq \mathbb{Z}/2^{32}\mathbb{Z}$.

* `/24` → cosets mod $2^{8}$ = groups of 256 consecutive addresses.
* `/16` → cosets mod $2^{16}$ = groups of 65,536.
* `/32` → cosets mod $2^{0}=1$ = just one address.

So every subnet is just **congruence classes** in the ring.

## Notation

Instead of `192.168.0.0/24`, we could write:

$$
[3232235520] \pmod{256}
$$

Meaning: all addresses congruent to `192.168.0.0` modulo 256.

Clean, right? Hmm... Well, not really.<br>
But this does scale for IPv6 (128 bits), it could be nice to write:

$$
[2001:db8::] \pmod{2^{64}}
$$

instead of a wall of colons and hex digits with `/64`.

It could be much simpler to describe "all addresses congruent mod $2^{64}$" than to eyeball giant hex blocks.


## Some interesting connections

If IPv4 is $\mathbb{Z}/2^{32}\mathbb{Z}$ and IPv6 is $\mathbb{Z}/2^{128}\mathbb{Z}$, then subnetting, addressing, and even "address arithmetic" are living in a ring. That raises the question: how do deeper ring-theoretic concepts reflect on networking?

* **Partitioning**: <br>
Ideals in $\mathbb{Z}/2^{32}\mathbb{Z}$ partition the ring into cosets. Subnets partition address space into networks. Ideals = subnets, Cosets = host groups, Lattice of ideals = the hierarchy of subnetting.

* **Local ring**: <br>
$\mathbb{Z}/2^{32}\mathbb{Z}$ has a unique maximal ideal $(2)$. In networking terms, "everything breaks down into powers of 2". Exactly how subnetting works.

* **Zero divisors**: <br>
Not every element has a multiplicative inverse (because $2^{32}$ isn't prime). Networking analogy (not exact, but similar): some addresses don't behave like regular hosts (network and broadcast addresses "collapse" the same way).

* **Addition wraps around**: <br>
Just like incrementing `255.255.255.255` brings you back to `0.0.0.0`.

* **Uniform notation**: <br>
`a mod 2^k` instead of dotted-decimal + `/n`.

* **Additive identity (0):** <br>
In the ring, $0$ is the neutral element. In networking, that's the all-zero address (`0.0.0.0` or `::`). It plays a "special" role: the unspecified address or "this host" in routing.

* **Prime ideals:** <br>
There are no prime ideals in $\mathbb{Z}/2^{n}\mathbb{Z}$ beyond $(2)$. That reflects the rigid structure of subnetting: everything reduces to powers of two. No alternative partition sizes exist (you can't subnet in blocks of 3 or 5). This is why networks always split cleanly into halves, quarters, eighths... never thirds.

* **Polynomials over the ring:** <br>
Consider $(\mathbb{Z}/2^{n}\mathbb{Z})[x]$. You can think of this as "networks with an extra dimension." For example, addresses + time, or addresses + port numbers. In fact, transport protocols already do something like this: a socket is IP × port → essentially a polynomial ring structure on top of the base ring. Here, IP × port behaves like adding another dimension.

### Ring homomorphisms

From IPv6 to IPv4:

$$
\varphi: \mathbb{Z}/2^{128}\mathbb{Z} \to \mathbb{Z}/2^{32}\mathbb{Z}, \quad \varphi(x) = x \bmod 2^{32}
$$

This is exactly what "IPv4-mapped IPv6 addresses" do (`::ffff:192.168.0.1`). It's a homomorphism that forgets 96 high-order bits.

From subnets to smaller subnets: restricting a coset modulo $2^k$ to modulo $2^m$ ($m<k$) is a homomorphism that corresponds to refining a network into smaller blocks.

Take IPv6 address space $\mathbb{Z}/2^{128}\mathbb{Z}$. The natural ring homomorphism

$$
\varphi(x) = x \bmod 2^{64}
$$

projects every IPv6 address onto its subnet prefix (`/64`). This maps the 128-bit space onto the 64-bit "network" space. It's exactly what routers care about: the higher-order bits decide the routing table, the lower-order bits are thrown away. That's algebra and networking aligning perfectly.

### Chinese Remainder Theorem:

Normally, the CRT lets you split $\mathbb{Z}/n\mathbb{Z}$ into a product of smaller rings corresponding to the prime-power factors of $n$. More specifically, if

$$
n = p_1^{k_1} p_2^{k_2} \dots p_m^{k_m}
$$

is the prime factorization of $n$, then

$$
\mathbb{Z}/n\mathbb{Z} \;\cong\; \mathbb{Z}/p_1^{k_1}\mathbb{Z} \;\times\; \mathbb{Z}/p_2^{k_2}\mathbb{Z} \;\times\; \dots \;\times\; \mathbb{Z}/p_m^{k_m}\mathbb{Z}.
$$

But here, $2^n$ has only one prime factor. That's why IP space only has the tidy binary subnetting structure. If addresses had modulus $6$, subnetting would involve mod 2 *and* mod 3 simultaneously.

### Lattice of ideals ↔ subnet hierarchy

In commutative algebra:

* The set of ideals of a ring, ordered by inclusion, forms a **lattice** (a partially ordered set where any two have a unique meet and join).
* In $\mathbb{Z}/2^n\mathbb{Z}$, the ideals are exactly $(2^k)$ for $0 \leq k \leq n$.
* They're nested:

  $$
  (1) \supset (2) \supset (2^2) \supset \dots \supset (2^n) \supset (0).
  $$

In networking:

* `/0` (the whole internet) contains `/1` networks.
* `/1` contains `/2`.
* `/2` contains `/3`.
* ... all the way down to `/32` (a single host).

That's exactly the same chain structure as the ideals. Bigger subnet (smaller prefix length) = bigger ideal. Smaller subnet (longer prefix length) = smaller ideal. <br>
So:
* **In algebra**: ideals $(2^k)$ form a descending chain.
* **In networking**: subnets `/k` form a descending chain of refinements.

That's not just an analogy. It's literally the same lattice structure.

## TL;DR: In other words

* IPv4 = $\mathbb{Z}/2^{32}\mathbb{Z}$.
* A `/n` subnet = a coset of the ideal $(2^{32-n})$
  * Ideals = subnets.
  * Cosets = host groups.
  * Lattice of ideals = the hierarchy of subnetting.
* Quotients = collapsing hosts into a network.
* Homomorphisms = projection from big address spaces to smaller, just like prefix matching.
* CRT doesn't add extra structure here (because powers of 2), which explains why IP networks are powers-of-two only.

So IMO Networking is number theory with better marketing.
