import { Component, OnInit } from '@angular/core';

import { EvalService } from '../eval.service';
import { Eva } from '../eva';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  evas: Eva[] = [];

  // constructor() { }
  constructor(public evalService: EvalService) { }

  ngOnInit(): void {
    this.evalService.getAll().subscribe((data: Eva[])=>{
      this.evas = data;
      console.log(this.evas);
    })
  }

  deleteEva(id){
    this.evalService.delete(id).subscribe(res => {
         this.evas = this.evas.filter(item => item.id !== id);
         console.log('Pregunta deleted successfully!');
    })
  }

}
