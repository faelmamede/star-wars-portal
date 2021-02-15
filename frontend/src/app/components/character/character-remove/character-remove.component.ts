import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-remove',
  templateUrl: './character-remove.component.html',
  styleUrls: ['./character-remove.component.css']
})
export class CharacterRemoveComponent implements OnInit {

  character: Character = {_id: '', name: '', age: null}

  constructor(private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute  
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.characterService.readById(id).subscribe(character => {
        this.character = character;
      });
  }

  deleteCharacter(): void {
    if (this.character._id) {
      this.characterService.delete(this.character._id).subscribe(() => {
        this.characterService.showInfo("Produto removido!");
        this.router.navigate(["/products"]);
      })
    }
  }

  cancel(): void {
    this.router.navigate(["/characters"]);
  }

}
