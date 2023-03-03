import { Component } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  heading: string = "AI Solutions,";
  message: string = "Infinite Possibilities";
  subtitle: string = "Automate your Instagram, Whatsapp and Facebook Messaging.";
  placeholder: string = "Enter your business email";
  signUp: string = "Sign up";
  pro1: string = "Free 14day trial";
  pro2: string = "No credit card required";
  faCheck = faCheck;
}
