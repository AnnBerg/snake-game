export default class Grid {
    constructor(size) {
        this.size = size
    }

    create() {
        const grid = Array(this.size).fill(Array(this.size).fill(0))
        this.grid = grid
    }
    destroy() {
        this.grid = 0
    }
}

