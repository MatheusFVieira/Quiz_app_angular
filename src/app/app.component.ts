import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { ResultadoComponent } from './resultado/resultado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuizComponent, ResultadoComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  finalizado = false;
  pontuacao = 0;

  onFinalizar(p: number) {
    this.pontuacao = p;
    this.finalizado = true;
  }

  onReiniciar() {
    this.finalizado = false;
    this.pontuacao = 0;
  }
}
