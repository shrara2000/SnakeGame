class segment {
    constructor(x, y,nextsegment = null) {
        this.nextsegment = nextsegment;
        this.x = x;
        this.y = y;
    }
    getNext() {
        return this.nextsegment;
    }   
    setNext(next) {
        this.nextsegment = next;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
}

export default segment;