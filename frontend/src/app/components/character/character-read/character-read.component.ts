import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-read',
  templateUrl: './character-read.component.html',
  styleUrls: ['./character-read.component.css']
})
export class CharacterReadComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.read().subscribe(characters => {
      this.characters = characters;
      this.characters.forEach(character => character.isActive = false);
    })
  }

  toggleCharacterView(characterId: string): void {
    this.characters.forEach(character => {
      if (character['_id'] == characterId) character.isActive = !character.isActive;
    })
  }

}
