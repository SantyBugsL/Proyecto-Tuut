import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from "./shared/shared.module";
import { WritingModule } from './writing/writing.module';
import { ListeningModule } from './listening/listening.module';
import { ReadingModule } from './reading/reading.module';
import { SpeakingModule } from './speaking/speaking.module';
import { GrammarModule } from './grammar/grammar.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { PracticaModule } from './practica/practica.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';




@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PrincipalModule,
        WritingModule,
        ListeningModule,
        ReadingModule,
        SpeakingModule,
        GrammarModule,
        VocabularyModule,
        PracticaModule,
        EvaluacionModule,
        HttpClientModule,
        NgbModule,
        SharedModule
    ]
})
export class AppModule { }
