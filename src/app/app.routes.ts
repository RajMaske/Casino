// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TransactionManagementComponent } from './component/transaction-management/transaction-management.component';
import { UserManagementComponent } from './component/user-management/user-management.component';
import { GameManagementComponent } from './component/game-management/game-management.component';
import { SettingsComponent } from './component/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserManagementComponent },
  { path: 'transactions', component: TransactionManagementComponent },
  { path: 'games', component: GameManagementComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: 'dashboard' }
];


