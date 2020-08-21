import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Experience {
  company: string;
  designaiton: string;
  responsibilities: string[];
  startDate: string;
  endDate: string;
  image: string;
  isCollapsed: boolean;
  imageUrl: string
}

@Injectable({
  providedIn: "root",
})
export class ExperienceService {
  constructor(private _http: HttpClient) {}

  getExperience(): Observable<Experience[]> {
    return this._http.get<Experience[]>(
      "https://kk94-portfolio.firebaseio.com/experience.json"
    );
  }
}
