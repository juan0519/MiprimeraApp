import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICharacterResponse } from './interfaces/characters-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    private baseUrl:String = "https://dragonball-api.com/api/";
    private http = inject(HttpClient);

    getCharacters(){
      let url= this.baseUrl+"characters?page=2&limit=5"
      return this.http.get<ICharacterResponse>(url);
    }



  
}
