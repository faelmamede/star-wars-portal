import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.css']
})
export class CharactersViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNewCharacter(): void {
    this.router.navigate(['/characters/new'])
  }

}
