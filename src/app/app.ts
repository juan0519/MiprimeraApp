import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app-service';
import { Item, ICharacterResponse } from './interfaces/characters-response.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit{

  private service = inject(AppService);


  protected readonly title = signal('practica');
  name:String  = "" ; 
  characters: Item[] = []; 
    selectedCharacter: Item | null = null;  

  ngOnInit(): void {
     this.name = "Hola juan" ;
     this.onPressGetMessage();
  }

  onPressGetMessage(){
    this.service.getCharacters().subscribe({
      next:(response:ICharacterResponse)=>{

        console.log(response);
   
      this.characters = response.items; 


      },error(err) {
        console.log(err);
      },
    })
  }

    // ✅ Función para seleccionar un personaje
  onSelectCharacter(character: Item) {
    this.selectedCharacter = character;
  }

  // ✅ Función para cerrar la modal
  closeModal() {
    this.selectedCharacter = null;
  }

}
