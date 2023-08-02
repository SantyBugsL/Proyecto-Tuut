import { Component, OnInit } from '@angular/core';
import { WritService } from '../writ.service';
import { Wri } from '../wri';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  wris: Wri[] = [];

  // constructor() { }
  constructor(public writService: WritService) { }

  ngOnInit(): void {
    this.writService.getAll().subscribe((data: Wri[])=>{ this.wris = data; console.log(this.wris);
    })
  }

  deleteWri(id){
    this.writService.delete(id).subscribe(res => { this.wris = this.wris.filter(item => item.id !== id);
    console.log('Pregunta deleted successfully!');
    })
  }

}
