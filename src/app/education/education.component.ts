import { Formacao } from './../models/formacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  
  public formacoes :Formacao[]  = [
      {
        formacaoId : 1,
        instituicao : "Universidade do Estado de Minas Gerais - UEMG",
        titulo : "Bacharel em Sistemas de Informação",
        periodo : "Janeiro 2017 - Março 2021"
      },
      {
        formacaoId : 2,
        instituicao : "Escola Estadual de Furnas",
        titulo : "Técnico em Eletrotécnica",
        periodo : "Julho 2004 - Dezembro 2006"
      }     
    ];
  
  public formacos !:Formacao[];

  constructor() { }

  ngOnInit(): void {
  }

}
