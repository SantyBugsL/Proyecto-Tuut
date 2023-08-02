import { Component, OnInit } from '@angular/core';
import { PratService } from '../prat.service';
import { Pra } from '../pra';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  pras: Pra[] = [];

  // constructor() { }
  constructor(public pratService: PratService) { }

  ngOnInit(): void {
    this.pratService.getAll().subscribe((data: Pra[])=>{
      this. pras = data;
      console.log(this.pras);
    })
  }

  deletePra(id){
    this.pratService.delete(id).subscribe(res => {
         this.pras = this.pras.filter(item => item.id !== id);
         console.log('Pregunta deleted successfully!');
    })
  }

}
