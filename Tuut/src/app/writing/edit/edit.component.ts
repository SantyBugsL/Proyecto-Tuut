import { Component, OnInit } from '@angular/core';

import { WritService } from '../writ.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Wri } from '../wri';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  wri: Wri;
  form: FormGroup;

  constructor(public writService: WritService,private route: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {this.id = this.route.snapshot.params['idWri'];this.writService.find(this.id).subscribe((data: Wri)=>{this.wri = data;});

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
    this.writService.update(this.id, this.form.value).subscribe(res => {
         console.log('Pregunta updated successfully!');
         this.router.navigateByUrl('writing/index');
    })
  }

}
