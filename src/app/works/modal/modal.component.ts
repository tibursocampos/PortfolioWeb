import { Project } from './../../models/project';
import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'portfolio-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{ 
  
  @Input() projects !:Project;

  constructor(private modalService: NgbModal) {}
  image !:string;
  title !:string;
  body !:string;

  ngOnInit(): void {    
  this.image = this.projects.image;
  this.title = this.projects.name;
  this.body = this.projects.abstract;
  }
  
  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  } 

}
