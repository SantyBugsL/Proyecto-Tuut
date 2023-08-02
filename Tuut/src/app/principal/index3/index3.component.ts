import { Component, OnInit } from '@angular/core';
import { PrinService } from '../prin.service';
import { Prin } from '../prin';

@Component({
  selector: 'app-index3',
  templateUrl: './index3.component.html',
  styleUrls: ['./index3.component.css']
})
export class Index3Component implements OnInit {

  prins: Prin[] = [];

  // constructor() { }
  constructor(public prinService: PrinService) { }

  ngOnInit(): void {
    this.prinService.getAll().subscribe((data: Prin[])=>{
      this.prins = data;
      console.log(this.prins);
    })
  }

  deletePrin(id){
    this.prinService.delete(id).subscribe(res => {
         this.prins = this.prins.filter(item => item.id !== id);
         console.log('Pregunta deleted successfully!');
    })
  }

}
