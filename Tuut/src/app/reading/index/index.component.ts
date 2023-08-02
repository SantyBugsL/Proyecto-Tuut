import { Component, OnInit } from '@angular/core';
import { ReadService } from '../read.service';
import { Rea } from '../rea';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  reas: Rea[] = [];

  // constructor() { }
  constructor(public readService: ReadService) { }

  ngOnInit(): void {this.readService.getAll().subscribe((data: Rea[])=>{this.reas = data;console.log(this.reas);})}

  deleteRea(id){this.readService.delete(id).subscribe(res => {this.reas = this.reas.filter(item => item.id !== id);
         console.log('Pregunta deleted successfully!');
    })
  }
}
