class Card {
  /**
   * Represents a card with a front and back side. Tracks whether it is flipped (showing its backside) and
   * whether it has been matched with its companion card
   * @param {Number} id The ID of a card
   * @param {String} name The name of a card
   * @param {String} image The URL where the image of a card can be found
   * @param {Number} order The order the card should appear when next to other cards
   */
  constructor(id, name, image, order) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.isFlipped = false;
    this.isMatched = false;
    this.order = order;
  }
}

export default Card;