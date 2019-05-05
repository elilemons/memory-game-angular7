import { Injectable } from '@angular/core';
import Card from '../models/card';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  public numOfCards: number;
   cards: Card[];
  private matchedCards: Card[];
  private flippedCards: Card[];
  private readonly IMAGE_DIR: string = '../../assets/images';

  init(numOfCards = 20) {
    this.numOfCards = numOfCards;
    this.createCards(numOfCards);
  }

  private createCards(numOfCards: number): void {
    let i = 1,
      group = 0;
    const groupsOfTwenty = Math.floor(numOfCards / 20), // Because we have a possible 20 pairs
      kittens = [],
      puppies = [];
    // Empty out all arrays
    this.cards = [];
    this.matchedCards = [];
    this.flippedCards = [];

    do {
      for (i = 1; i <= 5; i++) {
        kittens.push(new Card(undefined, `kitten-${i}`, `${this.IMAGE_DIR}/kittens/${i}.png`));
        kittens.push(new Card(undefined, `kitten-${i}`, `${this.IMAGE_DIR}/kittens/${i}.png`));
        puppies.push(new Card(undefined, `puppy-${i}`, `${this.IMAGE_DIR}/puppies/${i}.png`));
        puppies.push(new Card(undefined, `puppy-${i}`, `${this.IMAGE_DIR}/puppies/${i}.png`));
      }

      group++;
    } while (group <= groupsOfTwenty);

    const cuteBabes = [];
    kittens.forEach(kitten => cuteBabes.push(kitten));
    puppies.forEach(puppy => cuteBabes.push(puppy));
    // Set up initial cards
    for (i = 0; i < numOfCards; i++) {
      cuteBabes[i].id = i + 1;
      cuteBabes[i].order = cuteBabes[i];
      this.cards.push(cuteBabes[i]);
    }
    this.shuffleCards();
  }

  /**
 *  Handles the card flip game logic
 * @param card The card that is being flipped
 * @return Whether or not the user has won the game.
 */
  flipCard(card: Card): boolean {
    // We don't want to do anything on matched cards
    if (card.isMatched === true) { return; }

    // Flip the card front or back
    card.isFlipped = !card.isFlipped;

    if (card.isFlipped) { // If we are flipping the card to its image, check for matches
      // Add card to array of flipped cards
      this.flippedCards.push(card);

      // Check if two flipped cards match
      if (this.flippedCards.length === 2) {
        this.checkForMatch(this.flippedCards);
      }

      // Flip the first two cards back if we have more than 2
      if (this.flippedCards.length > 2) {
        this.flipCardsBack(this.flippedCards);
      }
    }

    if (!card.isFlipped) { // If we are flipping the card back to its front, make sure the appropiate arrays are updated
      let cardToFlip: Card, i = 0;
      // Find the card in the flipped cards and remove it, placing it into cardToFlip
      for (i = 0; i < this.flippedCards.length; i++) {
        if (this.flippedCards[i].id === card.id) {
          // Splice returns an array, we just want one item
          cardToFlip = this.flippedCards.splice(i, 1)[0];
          break; // Again, we just want one item, so we can stop looping on finding and storing a match
        }
      }
      this.findCardInGameDeck(cardToFlip.id).isFlipped = false;
    }

    return this.checkForWin();
  }


  /**
   * Removes the first two cards in the array, then flips them in the game's array as well
   * @param flippedCards An array of flipped cards
   */
  public flipCardsBack(flippedCards: Card[]): void {
    const card1 = flippedCards.shift(),
      card2 = flippedCards.shift();
    this.findCardInGameDeck(card1.id).isFlipped = false;
    this.findCardInGameDeck(card2.id).isFlipped = false;
  }

  /**
   * The game keeps track of the entire deck, so this function lets us search it quickly by card id
   */
  public findCardInGameDeck(cardId: number): Card {
    for (const card of this.cards) {
      if (card.id === cardId) {
        return card;
      }
    }
  }

  /**
 * Shuffles the order of the cards
 */
  private shuffleCards(): void {
    const chosenNumbers: number[] = [];

    for (let i = 0; i < this.cards.length; i++) {
      let chosenNumber = Math.floor(Math.random() * this.numOfCards) + 1;

      while (chosenNumbers.indexOf(chosenNumber) > -1) {
        chosenNumber = Math.floor(Math.random() * this.numOfCards) + 1;
      }

      if (chosenNumbers.indexOf(chosenNumber) === -1) {
        this.cards[i].order = chosenNumber;
        chosenNumbers.push(chosenNumber);
      }
    }
  }


  /**
   * Checks for a matched set of cards by popping them off the passed in array
   * @param cardsToCheck An array of cards to check, expects 2
   */
  private checkForMatch(cardsToCheck: Card[]): boolean {
    if (cardsToCheck[0].name === cardsToCheck[1].name) {
      const card1 = cardsToCheck.pop(),
        card2 = cardsToCheck.pop();
      card1.isMatched = true;
      card2.isMatched = true;
      this.matchedCards.push(card1, card2);
      return true;
    }
    return false;
  }

  private checkForWin(): boolean {
    return this.matchedCards.length === this.cards.length;
  }
}
