import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  certificados :string[] = [
    "Scrum Foundation Professional Certificate - SFPC",
    "Lifelong Learning - LLL",
    "Remote Work and Virtual Collaboration Professional Certificate - RWVCPC",
    "Criando APIs com ASP.NET Core e EF Core",
    "C# Curso Completo de Orientação a Objetos",
    ".NET Fundamentals - Bootcamp",
    "Iniciando com Infraestrutura em Azure"
  ];

}
