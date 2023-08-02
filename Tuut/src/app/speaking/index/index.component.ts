import { Component, OnInit } from '@angular/core';
import { SpeakService } from '../speak.service';
import { Spea } from '../spea';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  speas: Spea[] = [];

  // constructor() { }
  constructor(public speakService: SpeakService) { }

  ngOnInit(): void {this.speakService.getAll().subscribe((data: Spea[])=>{this.speas = data;console.log(this.speas);})}

  deleteSpea(id){this.speakService.delete(id).subscribe(res => {this.speas = this.speas.filter(item => item.id !== id);
         console.log('Pregunta deleted successfully!');
    })
  }
}
