function solve(face, suit) {
    const faces = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
    ];
    const suits = {
        S: "\u2660",
        H: "\u2665",
        D: "\u2666",
        C: "\u2663",
    };
    if (faces.includes(face) == false) {
        throw new TypeError("Invalid face");
        // else if(suit in suits == false)
    } else if (suits.hasOwnProperty(suit)==false) {
        throw new TypeError("Invalid suit");
    }
    const result = {
        face,
        suit,
        toString() {
            return this.face + suits[this.suit];
        },
    };
    return result;
}
