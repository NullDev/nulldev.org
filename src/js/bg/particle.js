/* ========================= */
/* = Copyright (c) NullDev = */
/* ========================= */

/**
 * Blob particle for background
 *
 * @class Particle
 */
class Particle {
    /**
     * Creates an instance of Particle.
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} directionX
     * @param {Number} directionY
     * @param {Number} size
     * @param {String} color
     * @memberof Particle
     */
    constructor(x, y, directionX, directionY, size, color){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    /**
     * Draw the particle
     *
     * @param {CanvasRenderingContext2D} ctx
     * @memberof Particle
     */
    #draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    /**
     * Update the particle
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {HTMLCanvasElement} cvs
     * @public
     * @memberof Particle
     */
    update(ctx, cvs){
        if (this.x > cvs.width || this.x < 0){
            this.directionX = -this.directionX;
        }

        if (this.y > cvs.height || this.y < 0){
            this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.#draw(ctx);
    }
}

export default Particle;
