import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {
  title: string = 'Engage and optimize your customers';
  titleSub: string = 'grow your business quickly!';
  faArrowRight = faArrowRight;

  featureImage1: string = '../../assets/images/Your paragraph.png';
  featureTitle1: string = 'Humanize the experience';
  featureDescription1: string =
  'with multiple artificial intelligence technologies, our semantic engine is the answer for customer service today. Multiple languages, emojis, voice messages and much more!';
  buttonText1: string = 'Learn More';


  featureImage2: string = '../../assets/images/Chatbot.jpeg';
  featureTitle2: string = 'Solutions designed for your company';
  featureDescription2: string = 'with multiple artificial intelligence technologies, our semantic engine is the answer';
  buttonText2: string = 'Learn More'



}
