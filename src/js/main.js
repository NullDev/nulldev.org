import "../scss/main.scss";
import BgManager from "./bg/bgManager.js";

/* ========================= */
/* = Copyright (c) NullDev = */
/* ========================= */

/**
 * Get a random element from an array
 *
 * @param {Array} e
 * @return {any}
 */
const rand = e => e[Math.floor(Math.random() * e.length)];

/**
 * Send a Welcome message
 */
const welcome = function(){
    console.log("\n%c> -------=========[0]=========------- <", "color:green;font-weight:bold;");
    console.log("%c> ---    %cWELCOME TO NULLDEV.ORG   %c--- <", "color:green;font-weight:bold;", "color:blue;font-weight:bold;", "color:green;font-weight:bold;");
    console.log("%c> ---      %cENJOY YOUR STAY %c:)     %c--- <", "color:green;font-weight:bold;", "color:blue;font-weight:bold;", "color:red;font-weight:bold;", "color:green;font-weight:bold;");
    console.log("%c> -------=========[0]=========------- <", "color:green;font-weight:bold;");
};

/**
 * Strip all links from the page and add target="_blank" and rel="noopener"
 */
const stripLinks = function(){
    document.querySelectorAll("a").forEach(function(link){
        if (link.host && link.host !== window.location.host){
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener");
        }
    });
};

/**
 * Initialize and handle Konami Code input
 */
const initKonami = function(){
    const seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let tmp = [];

    document.addEventListener("keydown", (e) => {
        tmp.push(e.keyCode);
        if (tmp.toString().indexOf(seq.toString()) >= 0){
            tmp = [];
            document.querySelectorAll("h1, p.tagline, a.btn, .panel-side, .logo, a:not(#idk)").forEach(el => {
                el.classList.toggle("rgb");
            });
            document.querySelectorAll("canvas").forEach(el => {
                el.classList.toggle("rgbb");
            });
            document.querySelector("a#idk")?.classList.toggle("hidden");
        }
    });
};

/**
 * UwU
 *
 * @param {MouseEvent} e
 * @return {void}
 */
const uwu = function(e){
    e.preventDefault();

    const uwus = ["owo", "OwO", "uwu", "UwU", ":3", "x3", "rawr x3", ">:3", ":3", "(*^ω^)"];
    const target = document.querySelector("p.tagline")?.parentElement;
    if (!target) return;

    const i = [...target.children];
    for (; i.length > 0; ){
        const t = i.shift();
        if (!t) continue;
        if (t.children.length > 0) i.push(...t.children);

        [...t.childNodes].filter(el => el.nodeType === Node.TEXT_NODE && el.nodeValue?.trim() !== "")
            .forEach(tex1 => {
                if (!tex1 || !tex1.textContent) return;
                tex1.textContent = tex1.textContent
                    .replace(/[lr]/gi, tex2 => tex2[0].toLowerCase() === tex2[0] ? "w" : "W")
                    .replace(/[.!?]/gi, tex3 => Math.random() > 0.7 ? tex3[0] + " " + rand(uwus) : tex3[0]);
            });
    }
};

(() => {
    const bgManager = new BgManager("particles");
    bgManager.init();

    document.addEventListener("DOMContentLoaded", function(){
        welcome();
        stripLinks();
        initKonami();

        document.getElementById("idk")?.addEventListener("click", uwu);
    });
})();
