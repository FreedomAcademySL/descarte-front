export enum TransactionStatus {
  Completed = 'Completed',
  Cancelled = 'Cancelled',
  Mint = 'Mint',
  Progress = 'In Progress',
}

export interface TransactionColumns {
  date: string;
  accountId: JSX.Element;
  to: JSX.Element;
  source: JSX.Element;
  status: JSX.Element;
  transfer: JSX.Element;
}
