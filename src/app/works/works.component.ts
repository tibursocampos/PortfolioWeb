import { Project } from './../models/project';
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
  
  public linkRepoGithub :string = "https://github.com/tibursocampos?tab=repositories";
  
  public experiences :Experience[] = [
    {
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
  
  public projects :Project[] = [
    {
      name: "Gerenciamento de manutenções preventivas - front-end.",
      image: "../assets/images/GerenciamentoPreventivasWeb.JPG",
      abstract: "Projeto de conclusão de curso na UEMG, Universidade do Estado de Minas Gerais. Desenvolvimento do front-end, utilizando Angular, para um sistema de gerenciamento de cronogramas de manutenções preventivas de uma empresa de telefonia móvel.",
      linkGithub: "https://github.com/tibursocampos/GerenciamentoPreventivasWeb"      
    },
    {
      name: "Gerenciamento de manutenções preventivas - back-end.",
      image: "../assets/images/GerenciamentoPreventivasAPI.JPG",
      abstract: "Projeto de conclusão de curso na UEMG, Universidade do Estado de Minas Gerais. Desenvolvimento de uma API em .Net Core para um sistema de gerenciamento de cronogramas de manutenções preventivas de uma empresa de telefonia móvel."       ,
      linkGithub: "https://github.com/tibursocampos/GerenciamentoPreventivasAPI"
    },
    {
      name: "CRUD para gerenciamento de usuários - front-end.",
      image: "../assets/images/CrudUsuariosWeb.JPG",
      abstract: "Teste para vaga Dev Jr. Front-end, utilizando Angular, para cadastro de usuários e um relatório com alguns filtros.",
      linkGithub: "https://github.com/tibursocampos/TesteVagaJrWeb"       
    }
  ];

}
