import { Injectable } from '@angular/core';

export interface Pergunta {
  texto: string;
  opcoes: string[];
  respostaCorreta: number;
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  perguntas: Pergunta[] = [
    {
      texto: 'Qual é a capital do Brasil?',
      opcoes: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
      respostaCorreta: 2
    },
    {
      texto: 'Quanto é 12 × 12?',
      opcoes: ['124', '144', '132', '148'],
      respostaCorreta: 1
    },
    {
      texto: 'Qual linguagem roda no navegador nativamente?',
      opcoes: ['Python', 'Java', 'JavaScript', 'C++'],
      respostaCorreta: 2
    },
    {
      texto: 'Quem escreveu Dom Casmurro?',
      opcoes: ['José de Alencar', 'Machado de Assis', 'Clarice Lispector', 'Eça de Queiroz'],
      respostaCorreta: 1
    },
    {
      texto: 'Qual planeta é o maior do sistema solar?',
      opcoes: ['Saturno', 'Netuno', 'Terra', 'Júpiter'],
      respostaCorreta: 3
    }
  ];

  getPerguntas(): Pergunta[] {
    return this.perguntas;
  }
}
