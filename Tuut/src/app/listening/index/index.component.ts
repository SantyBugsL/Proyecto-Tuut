import { Component, OnInit } from '@angular/core';
import { ListenService } from '../listen.service';
import { List } from '../list';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  lists: List[] = [];

  // constructor() { }
  constructor(public listenService: ListenService) { }

  ngOnInit(): void {this.listenService.getAll().subscribe((data: List[])=>{this.lists = data;console.log(this.lists);})}

  deleteList(id){
    this.listenService.delete(id).subscribe(res => {this.lists = this.lists.filter(item => item.id !== id);
         console.log('Pregunta deleted successfully!');
    })
  }
}
