import {Symbol} from "./Symbol";

export class Effect {
  canvasWidth: number;
  canvasHeight: number;
  fontSize: number;
  columns: any;
  symbols: any[];
  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 25;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
  initialize() {
    try {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasWidth);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('CanvasERR', e);
    }
  }
  resize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
}

