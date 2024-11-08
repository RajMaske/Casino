import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-transaction-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-management.component.html',
  styleUrl: './transaction-management.component.css'
})
export class TransactionManagementComponent {
  transactions = [
    { id: 'T-001', user: 'Alice Johnson', amount: 250.0, status: 'pending' },
    { id: 'T-002', user: 'Bob Smith', amount: 500.0, status: 'approved' },
    { id: 'T-003', user: 'Charlie Brown', amount: 150.0, status: 'pending' },
    { id: 'T-004', user: 'Diana Prince', amount: 750.0, status: 'declined' }
  ];

  approve(transactionId: string) {
    const transaction = this.transactions.find(t => t.id === transactionId);
    if (transaction) {
      transaction.status = 'approved';
    }
  }

  decline(transactionId: string) {
    const transaction = this.transactions.find(t => t.id === transactionId);
    if (transaction) {
      transaction.status = 'declined';
    }
  }
}
