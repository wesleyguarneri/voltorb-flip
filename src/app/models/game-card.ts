export interface GameCard{
    value: string; 
    type: string;   
    isFlipped: boolean;
    backImage: string;
    frontImage: string;
    bombMemo: boolean;
    oneMemo: boolean;
    twoMemo: boolean;
    threeMemo: boolean;
}