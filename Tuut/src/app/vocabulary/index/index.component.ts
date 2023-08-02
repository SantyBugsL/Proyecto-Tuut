import { Component, OnInit } from '@angular/core';
import { VocabuService } from '../vocabu.service';
import { Vocab } from '../vocab';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  vocabs: Vocab[] = [];

  // constructor() { }
  constructor(public vocabuService: VocabuService) { }

  ngOnInit(): void {this.vocabuService.getAll().subscribe((data: Vocab[])=>{this.vocabs = data;console.log(this.vocabs);})}

  deleteVocab(id){this.vocabuService.delete(id).subscribe(res => {this.vocabs = this.vocabs.filter(item => item.id !== id);
         console.log('Pregunta deleted successfully!');
    })
  }
}
