import { Component, OnInit } from '@angular/core';
import { GramService } from '../gram.service';
import { Gra } from '../gra';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  gras: Gra[] = [];

  // constructor() { }
  constructor(public gramService: GramService) { }

  ngOnInit(): void {this.gramService.getAll().subscribe((data: Gra[])=>{this.gras = data;console.log(this.gras);})}

  deleteGra(id){
    this.gramService.delete(id).subscribe(res => {this.gras = this.gras.filter(item => item.id !== id);
         console.log('Pregunta deleted successfully!');
    })
  }
}
