import { Component, Input } from "@angular/core";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  faCircleCheck = faCircleCheck;
  @Input() items:
  {
    image: string;
    title: string;
    subtitle: string;
    description: string
  }[] = [
    {
      image: '../../assets/images/social1.jpeg',
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      description: 'Description 1'

    },
    {
      image: '../../assets/images/social2-coins.jpeg',
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      description: 'Description 2'
    },
    {
      image: '../../assets/images/social3-chat.jpeg',
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      description: 'Description 3'
    }
  ];
}
