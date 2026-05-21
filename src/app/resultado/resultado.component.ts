import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resultado',
  standalone: true,
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  @Input() pontuacao = 0;
  @Input() total = 0;
  @Output() reiniciar = new EventEmitter<void>();

  get emoji(): string {
    const perc = this.pontuacao / this.total;
    if (perc === 1) return '🏆';
    if (perc >= 0.6) return '👏';
    return '💪';
  }

  get mensagem(): string {
    const perc = this.pontuacao / this.total;
    if (perc === 1) return 'Perfeito! Você acertou tudo!';
    if (perc >= 0.6) return 'Muito bem! Bom desempenho!';
    return 'Continue praticando!';
  }
}
