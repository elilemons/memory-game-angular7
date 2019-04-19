interface CardInterface {
  id: number;
  readonly name: string;
  readonly image: string;
  isFlipped: boolean;
  isMatched: boolean;
  order: number;
}

export default class Card implements CardInterface {
  id: number;
  name: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
  order: number;

  constructor(id: number, name: string, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.isFlipped = false;
    this.isMatched = false;
    this.order = this.id;
   }
}
