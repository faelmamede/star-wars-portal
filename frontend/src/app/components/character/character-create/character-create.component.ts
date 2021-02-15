import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit {

  character: Character = {
    _id: '',
    name: '',
    age: null
  }

  constructor(private characterService: CharacterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createCharacter(): void {
    this.characterService.create(this.character).subscribe( () => {
      this.characterService.showInfo("Cadastrado com sucesso!");
      this.router.navigate(['/characters']);
    });
  }

  cancel(): void {
    this.router.navigate(['/characters']);
  }

}
