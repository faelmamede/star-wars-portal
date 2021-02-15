import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreateComponent } from './components/character/character-create/character-create.component';
import { CharactersViewComponent } from './components/views/characters-view/characters-view.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "characters",
    component: CharactersViewComponent,
  },{
    path: "characters/new",
    component: CharacterCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
