import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'portfolio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  nome :string = "Raphael";
  sobrenome :string = "Campos";
  email :string = "raphael_pcampos@outlook.com";
  hrefEmail :string = "mailto:raphael_pcampos@outlook.com";
  cidade :string = "Passos - MG aaa";
  telefone :string = "(35) 98811-1492";
  apresentacao :string = "Profissional com sólida formação e experiência, sempre buscando implementar soluções inovadoras e criativas, busca transição de carreira do segmento de telecomunicações para área de desenvolvimento."
  apresentacao2 :string = "Durante os anos adquiri facilidade no trabalho em equipes assim como adaptação para diversos ambientes, devido constantes mudanças e alterações de projetos. O trabalho sob pressão é uma constante diária, assim como a necessidade de análise do cenário e criatividade para uma melhor tomada de decisão para o momento.";
  linkedin :string = "https://www.linkedin.com/in/raphaellpcampos/";
  github :string = "https://github.com/tibursocampos";
  twitter :string = "https://twitter.com/tiburso";
  facebook :string = "https://www.facebook.com/raphaeltiburso";

  constructor() { }

  ngOnInit(): void {
  }

}
