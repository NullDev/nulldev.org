<script setup lang="ts">
import { withBase } from "vitepress";
import Pagination from "./Pagination.vue";
import themeConfig from "../config";
import blogStore from "../store";
import { onMounted } from "vue";
import functionPlot from "function-plot";
import { data as posts } from "../posts.data";

const { postsPerPage } = themeConfig;
function showPosts() {
  return posts.slice((blogStore.currentPage - 1) * postsPerPage, blogStore.currentPage * postsPerPage);
}

const draw = function(){
    const contentsBounds = document.querySelector("article.post-card").getBoundingClientRect();
    const ratio = (contentsBounds.width - 50) / 600;
    const opts = (target, fn, derivativeFn, xDomain, yDomain, title) => ({
        target,
        width: 600 * ratio,
        height: 400 * ratio,
        grid: true,
        data: [
            {
                fn,
                derivative: derivativeFn
                    ? {
                        fn: derivativeFn,
                        x0: 0,
                        updateOnMouseMove: true,
                      }
                    : undefined,
            },
        ],
        yAxis: { domain: yDomain },
        xAxis: { domain: xDomain },
        title,
        disableZoom: true,
    });

    // Tanh
    functionPlot(
        opts(
            "#plot-tanh-preview",
            "(exp(x) - exp(-x)) / (exp(x) + exp(-x))",
            "1 - ((exp(x) - exp(-x)) / (exp(x) + exp(-x)))^2",
            [-10, 10],
            [-1.1, 1.1],
            " "
        )
    );
};

const sampleFacts = [
  "0.999... is exactly equal to 1.",
  "All abelian groups are solvable.",
  "The only factorial that's also a square is 1.",
  "The semi-direct product of two abelian groups may be non-abelian.",
  "The diagonal elements of a complex Hermitian matrix are all real.",
  "Every group of prime order is cyclic.",
  "Every subgroup of a cyclic group is cyclic.",
  "The final digits of the Fibonacci sequence have period 60.",
  "Representations of compact topological groups are semi simple.",
  "If p is prime, every group of order p² is abelian.",
  "The characteristic of a field is either 0 or a prime.",
  "The derivative of a Bézier curve is another Bézier curve.",
  "A monad is just a monoid in the category of endofunctors.",
  "The set of all algebraic numbers is countable.",
  "The set of all transcendental numbers is uncountable.",
  "A projective plane has Euler characteristic 1.",
  "There are 8 semi-regular (Archimedean) tessellations.",
  "A space is simply connected if its fundamental group is trivial.",
  "All abelian simple groups are cyclic groups of prime order.",
  "Convex polygons of more than 6 sides cannot tessellate.",
  "The uniform limit of continuous functions is continuous.",
  "The fundamental group of a projective plane P² has order 2.",
  "The product of regular spaces is regular.",
  "The product of Hausdorff spaces is Hausdorff.",
  "The product of compact spaces is compact.",
  "The product of path connected spaces is path connected.",
  "A category is the horizontal categorification of a monoid.",
  "A Lie group is a manifold and a group.",
  "An n x n matrix with n distinct eigenvalues is diagonalizable.",
  "The determinant of a matrix is the product of its eigenvalues.",
  "It is unknown whether odd perfect numbers exist.",
  "The sum of the reciprocals of the primes diverges.",
  "Every permutation can be written as a product of disjoint cycles.",
  "If matrices A and B commute, then they have a common eigenvector.",
  "The sum of Hermitian matrices is Hermitian.",
  "If p and q are prime, every group of order pᵐ qⁿ is solvable.",
  "There are no non-abelian simple groups of order less than 60.",
  "In the category of Abelian groups, coproducts are direct sums.",
  "In the category of groups, coproducts are free products.",
  "The only number > 1 that is square and pyramidal is 4900.",
  "An algebraically closed field must be infinite.",
  "The order of a finite field must be a prime power.",
  "Finite products of locally compact spaces are locally compact.",
  "A compact subset of a Hausdorff space is closed.",
  "A compact Hausdorff space is normal.",
  "A closed subgroup of a Lie group is a submanifold.",
  "A closed subset of a compact space is compact.",
  "A closed subset of a normal space is normal.",
  "The field of p-adic numbers has a totally disconnected topology.",
  "A space is second countable if it has a countable basis.",
  "A space is separable if it contains a countable dense subset.",
  "A complex elliptic curve is topologically a torus.",
  "A functor is called exact if it preserves short exact sequences.",
  "A functor is called faithful if it is injective on hom-sets.",
  "Every commutative monoid can be extended to a group.",
  "The nth prime is greater than n log n.",
  "The only Fibonacci numbers that are cubes are 1 and 8.",
  "Every odd integer n ≥ 7 is the sum of three primes.",
  "Every finite field is a splitting field of a polynomial.",
  "A local ring is a ring that has exactly one maximal ideal.",
  "Every Boolean algebra is isomorphic to a field of sets.",
  "The ideals of a ring form a semiring.",
  "The symbol for division (÷) is called an obelus.",
  "The symbol for infinity (∞) is called a lemniscate.",
  "A ring is a monoid internal to (Ab, ⊗, ℤ).",
  "A group is a groupoid with a single object.",
  "An order preserving map on a complete lattice has a fixed point.",
  "The sum of the first n odd numbers is n².",
  "The number of subsets of a set with n elements is 2ⁿ.",
  "The j-invariant of _i_ is 1728.",
  "Every subgroup of a free group is free.",
  "The Mandelbrot set is connected.",
  "The derivative of an odd function is an even function.",
  "A matrix and its transpose have the same rank.",
  "The Hilbert transform is an anti-involution, i.e. H(H(u)) = -u.",
];

onMounted(() => {
    draw();
    window.addEventListener("resize", draw);

    const fact = document.getElementById("fact-p");
    if (fact) {
      const randomIndex = Math.floor(Math.random() * sampleFacts.length);
      fact.textContent = sampleFacts[randomIndex];
    }
});
</script>

<template>
  <div class="theme-container">
    <div class="VPDoc container">
      <h1>Blog Posts</h1>
      <p>Random thoughts ad infinitum, ad nauseam, ad mortem ...</p>
      <br>
      <hr>
      <div class="post-list">
        <article v-for="post of showPosts()" class="post-card">
          <PostInfo :date="post.date.string" />
          <h2 class="post-title">
            <a :href="withBase(post.url)">
              {{post.title}} 
            </a>
          </h2>
          <div v-if="post.excerpt" class="excerpt"
            v-html="post.excerpt"></div>
          <div class="post-actions">
            <a class="theme-readmore" aria-label="read more" :href="withBase(post.url)">
              Read more
            </a>
          </div>
        </article>
      </div>
      <Pagination />
    </div>
  </div>
</template>
