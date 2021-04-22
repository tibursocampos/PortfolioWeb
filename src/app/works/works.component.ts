import { Experience } from './../models/experience';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public experiences :Experience[] = [
    {
      experienceId: 1,
      role: "Técnico em Telecomunicações Sr.",
      company: "TLP Serviços",
      period: "outubro, 2020  -  atualmente",  
      tasks: [
        "Operação e manutenção na rede da operadora TIM no sul de Minas Gerais.",
        "Estabelecimento de melhorias, cuidando da operação, manutenção corretiva e preventiva nos sistemas de transmissão e acesso, acrescentando novos recursos e infraestrutura, aprimorando a qualidade do serviço prestado pela operadora.",
        "Auxílio e suporte a outros técnicos em atividades de maior complexidade, buscando prestar um serviço excepcional para cada um, respondendo dúvidas e buscando soluções.",
        "Atividades executadas obedecendo prazos e SLAs, respeitando o programado nos cronogramas e execuções em conjunto com o cliente."
      ]   
    }
  ];

}
