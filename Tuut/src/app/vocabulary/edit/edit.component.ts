import { Component, OnInit } from '@angular/core';

import { VocabuService } from '../vocabu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Vocab } from '../vocab';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  vocab: Vocab;
  form: FormGroup;

  constructor(public vocabuService: VocabuService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {this.id = this.route.snapshot.params['idVocab'];this.vocabuService.find(this.id).subscribe((data: Vocab)=>{this.vocab = data;});

    this.form = new FormGroup({
      pregunta:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+_') ]),
      complemento: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+_') ]),
      respuestaA: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+_') ]),
      respuestaB: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+_') ]),
      respuestaC: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+_') ]),
      seccion: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+_') ])

    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.vocabuService.update(this.id, this.form.value).subscribe(res => {
         console.log('Pregunta updated successfully!');
         this.router.navigateByUrl('vocabulary/index');
    })
  }

}
