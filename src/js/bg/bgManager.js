import Particle from "./particle";

/* ========================= */
/* = Copyright (c) NullDev = */
/* ========================= */

/**
 * Background manager
 *
 * @class BgManager
 */
class BgManager {
    /**
     * Creates an instance of BgManager.
     *
     * @param {String} elementId
     * @memberof BgManager
     */
    constructor(elementId){
        this.cvs = /** @type {HTMLCanvasElement} */ (document.getElementById(elementId));
        if (!this.cvs) return;

        this.ctx = this.cvs.getContext("2d");
        this.cvs.width = window.innerWidth;
        this.cvs.height = window.innerHeight;
        this.particlesArray = [];

        window.addEventListener("resize", () => {
            this.cvs.width = innerWidth;
            this.cvs.height = innerHeight;
            this.#initParticles();
        });
    }

    /**
     * Initialize the hexagon grid
     *
     * @return {void}
     * @memberof BgManager
     */
    #initHexagonGrid(){
        const hexagonGrid = /** @type {HTMLDivElement} */ (document.getElementById("hexagonGrid"));
        if (!hexagonGrid) return;

        const parent = /** @type {HTMLDivElement} */ (hexagonGrid.parentNode);
        if (!parent) return;

        const rows = Math.ceil(parent.offsetHeight / 80);
        const cols = Math.ceil(parent.offsetWidth / 100) + 1;
        hexagonGrid.innerHTML = "";

        for (let i = 0; i < rows; i++){
            const row = document.createElement("div");
            row.className = "row";
            hexagonGrid.appendChild(row);
            for (let j = 0; j < cols; j++){
                const hexagon = document.createElement("div");
                hexagon.className = "hexagon";
                row.appendChild(hexagon);
            }
        }
    }

    /**
     * Initialize the particles
     *
     * @memberof BgManager
     */
    #initParticles(){
        this.particlesArray = [];
        const numberOfParticles = this.cvs.height * this.cvs.width / 9000;
        for (let i = 0; i < 0.25 * numberOfParticles; i++){
            const size = 35 * Math.random() + 1;
            this.particlesArray.push(new Particle(
                Math.random() * (innerWidth - 2 * size) + size,
                Math.random() * (innerWidth - 2 * size) + size,
                5 * Math.random() - 2.5,
                5 * Math.random() - 2.5,
                size,
                "#72C100",
            ));
        }
    }

    /**
     * Move the particles
     *
     * @memberof BgManager
     */
    #animateParticles(){
        requestAnimationFrame(() => this.#animateParticles());
        this.ctx?.clearRect(0, 0, innerWidth, innerHeight);
        this.particlesArray?.forEach(particle => particle.update(this.ctx, this.cvs));
    }

    /**
     * Initialize the background
     *
     * @public
     * @memberof BgManager
     */
    init(){
        this.#initParticles();
        this.#animateParticles();
        this.#initHexagonGrid();

        window.addEventListener("resize", () => this.#initHexagonGrid());
    }
}

export default BgManager;
