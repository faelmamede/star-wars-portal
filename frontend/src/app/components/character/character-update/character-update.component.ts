import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-update',
  templateUrl: './character-update.component.html',
  styleUrls: ['./character-update.component.css']
})
export class CharacterUpdateComponent implements OnInit {

  character: Character = {_id: '', name: '', age: null};

  constructor(private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null)
      this.characterService.readById(id).subscribe(character => {
        this.character = character;
      })
  }

  updateCharacter(): void {
    this.characterService.update(this.character).subscribe(() => {
      this.characterService.showInfo('Personagem atualizado!');
      this.router.navigate(["/characters"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/characters"]);
  }

}
