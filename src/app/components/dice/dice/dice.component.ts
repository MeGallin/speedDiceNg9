import { Component, OnInit } from '@angular/core';
import { TypeWriterService } from '../../../services/type-writer.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  public diceOne: number;
  public diceOneView: number;
  public diceTwoView: number;
  public diceThreeView: number;
  public diceTwo: number;
  public diceThree: number;
  public total: number;
  public double: boolean;
  public triple: boolean;
  public tripleMessage: string = "You're a triple WINNA! Go straight to HOME!";
  public doubleMessage: string = 'Double spin again';
  public maxSpinMessage: string =
    'Moola! Get 500 from each player and GO to HOME!';
  public passOnDice: string;

  public typeWriterText = 'SPEED DICE';

  public clickCounter: number = 0;

  constructor(private _typeWriter: TypeWriterService) {}

  ngOnInit(): void {
    this._typeWriter
      .typeWriter(this.typeWriterText)
      .subscribe(r => (this.typeWriterText = r));
  }
  spinDice() {
    // Counter
    this.clickCounter += 1;
    this.double = null;
    this.triple = null;

    this.diceOne = Math.floor(Math.random() * 6 + 1);
    this.diceTwo = Math.floor(Math.random() * 6 + 1);
    this.diceThree = Math.floor(Math.random() * 6 + 1);

    this.total = null;
    this.diceOneView = this.diceOne;
    this.diceTwoView = this.diceTwo;
    this.diceThreeView = this.diceThree;

    setTimeout(() => {
      this.diceOneView = null;
    }, 500);

    setTimeout(() => {
      this.diceTwoView = null;
    }, 1000);

    setTimeout(() => {
      this.diceThreeView = null;
    }, 1500);

    setTimeout(() => {
      this.total = this.diceOne + this.diceTwo + this.diceThree;
    }, 2000);

    // Checking for doubles
    if (
      this.diceOne === this.diceTwo ||
      this.diceTwo === this.diceThree ||
      this.diceThree === this.diceOne
    ) {
      this.double = true;
      this.triple = false;
    } else {
      this.double = false;
      this.passOnDice = 'Please pass on the dice';
    }
    //Checking for Tripple
    if (
      this.diceOne === this.diceTwo &&
      this.diceTwo === this.diceThree &&
      this.diceThree === this.diceOne
    ) {
      this.triple = true;
      this.double = false;
    }
    // Check for Max spin
    if (
      this.diceOne === this.diceTwo &&
      this.diceTwo === this.diceThree &&
      this.diceThree === this.diceOne &&
      this.total === 18
    ) {
      this.triple = false;
      this.double = false;
      this.maxSpinMessage;
    }
  }
}
