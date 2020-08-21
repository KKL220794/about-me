import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export interface Skills {
  name: string;
  rating: string;
}

@Injectable({
  providedIn: "root",
})
export class SkillsService {
  constructor(private _http: HttpClient) {}

  getSkillSet(): Observable<Skills[]> {
    return this._http.get<Skills[]>(
      "https://kk94-portfolio.firebaseio.com/skills.json"
    );
  }
}
