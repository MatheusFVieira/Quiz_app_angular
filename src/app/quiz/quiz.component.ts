import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService, Pergunta } from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Output() quizFinalizado = new EventEmitter<number>();

  perguntas: Pergunta[] = [];
  indiceAtual = 0;
  pontuacao = 0;
  respostaSelecionada: number | null = null;
  respondeu = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.perguntas = this.quizService.getPerguntas();
  }

  get perguntaAtual(): Pergunta {
    return this.perguntas[this.indiceAtual];
  }

  get progresso(): number {
    return (this.indiceAtual / this.perguntas.length) * 100;
  }

  selecionar(index: number): void {
    if (this.respondeu) return;
    this.respostaSelecionada = index;
    this.respondeu = true;
    if (index === this.perguntaAtual.respostaCorreta) {
      this.pontuacao++;
    }
  }

  proxima(): void {
    if (this.indiceAtual < this.perguntas.length - 1) {
      this.indiceAtual++;
      this.respostaSelecionada = null;
      this.respondeu = false;
    } else {
      this.quizFinalizado.emit(this.pontuacao);
    }
  }
}
