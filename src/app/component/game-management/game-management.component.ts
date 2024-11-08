// game-management.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-management',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './game-management.component.html',
  styleUrls: ['./game-management.component.css']
})
export class GameManagementComponent {
  games = [
    { id: 1, title: 'Blackjack', description: 'Classic card game', category: 'Cards', minBet: 5, maxBet: 500 },
    { id: 2, title: 'Roulette', description: 'Spin to win', category: 'Casino', minBet: 10, maxBet: 1000 },
    { id: 3, title: 'Poker', description: 'Texas Hold\'em', category: 'Cards', minBet: 25, maxBet: 2000 },
  ];
  
  gameForm: FormGroup;
  isEditMode = false;
  selectedGame: any;

  constructor(private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      title: [''],
      description: [''],
      category: [''],
      minBet: [''],
      maxBet: ['']
    });
  }

  onAddGame() {
    this.isEditMode = false;
    this.gameForm.reset();
  }

  onEditGame(game: any) {
    this.isEditMode = true;
    this.selectedGame = game;
    this.gameForm.patchValue(game);
  }

  onDeleteGame(gameId: number) {
    this.games = this.games.filter(game => game.id !== gameId);
  }

  onSubmit() {
    const gameData = this.gameForm.value;
    if (this.isEditMode) {
      Object.assign(this.selectedGame, gameData);
    } else {
      this.games.push({ id: this.games.length + 1, ...gameData });
    }
  }
}