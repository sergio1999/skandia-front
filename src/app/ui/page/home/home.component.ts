import { Component } from '@angular/core';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpErrorResponse } from '@angular/common/http';
import { CardsService } from '../../../application/use-case/cards/cards.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  constentSlide = [] 
  constructor(private service: CardsService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getOperation().subscribe((res) => {
      this.constentSlide = res.listCard;
    }, (error: HttpErrorResponse) => {
      // control error
      console.log(error);
    });
  }
}
