import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  linguagens :string[] = [
    "C#, .NET Core e Entity Framework Core",
    "SQL Server e MySQL",
    "WebService, Web API e REST",
    "Controle de versões com GIT e GitHub",
    "Microsoft Visual Studio, Visual Studio Code e Teams"
  ];
  
  workflow :string[] = [
    "Conhecimento sobre metodologias SCRUM e Kanban",
    "Atenção a detalhes necessários e criatividade para sucesso da solução",
    "Busca por rápida e eficiente resolução de problemas",
    "Trabalho em equipe, adaptabilidade e inteligência cultural"
  ];
}
