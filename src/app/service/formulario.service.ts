import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable(
  {
    providedIn: "root"
  }
)

export class FormService {


  constructor(private httpClient: HttpClient) {
  }
  private readonly baseUrl = environment["endPoint"];

  enviarDadosFormulario(dadosFormulario: any) {
    return this.httpClient.post<any>
      (`${this.baseUrl}/Form`, dadosFormulario);
  }

}
