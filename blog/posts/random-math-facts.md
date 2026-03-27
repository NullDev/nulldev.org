---
date: 2025-08-25
title: Random math facts
outline: deep
tags:
- math
---
Super useless math facts you probably didn't know or don't care to know. Because why not.

<div id="preview" style="margin: 40px 0;">

::: tip Random Math Fact:

<div id="fact-p"></div>

:::

</div>

---

::: warning Now available as an API!

Check out https://nulldev.org/mathfacts

:::

# Get a random one

::: tip Random Math Fact:
<div id="fact" style="display: flex; justify-content: center; align-items: center; text-align: center; padding: 10px 0; font-weight: bold; min-height: 92px;">-</div>
:::

<div class="nl--center">
<a href="javascript:void(0)" role="button" id="another-one" class="tag-link"><span class="theme-badge">Gimme Another One ↻</span></a>
</div>

---

### If you don't like randomness, here you have all of them:

::: details All of them
<ul id="all-facts"></ul>
:::

<script setup>
import { onMounted } from "vue";

const setAllFacts = async() => {
  const allFacts = await fetch("https://nulldev.org/mathfacts/api/facts").then(res => res.json());
  allFacts.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact.content;
    document.getElementById("all-facts").appendChild(li);
  });
};

const setRandomFact = async(allFacts) => {
  const fact = await fetch("https://nulldev.org/mathfacts/api/facts/random").then(res => res.json());
  document.getElementById("fact").textContent = fact.content;
};

onMounted(async() => {
  document.querySelector("#preview").style.display = "none";

  await setRandomFact();
  await setAllFacts();
  document.getElementById("another-one")?.addEventListener("click", async e => {
    e.preventDefault();
    e.stopPropagation();
    await setRandomFact();
  });
});
</script>
