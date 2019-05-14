import { sandboxOf } from 'angular-playground';
import { CardComponent } from '../card/card.component';
import Card from 'src/app/models/card';

const IMAGE_DIR: string = '../../assets/images';
const mockCard: Card= {
  id: 1,
  name: "Mock",
  image: `${IMAGE_DIR}/kitten-1.png`,
  isFlipped: true,
  isMatched: true,
  order: 1
}

const sandboxConfig = {
  providers: [
      {
        provide: Card, useFactory: () => {
        const mockCard: Card= new Card(1, "Mock", `${IMAGE_DIR}/kitten-1.png`);
        return mockCard;
      }
    }
  ],
  label: 'Mock Card Component'
};

export default sandboxOf(CardComponent, sandboxConfig)
  .add('default', {
    template: `<app-card [card]="mockCard"></app-card>`,
  });
