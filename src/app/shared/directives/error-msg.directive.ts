import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ErrorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color : string = 'red';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor:string) {
    this.htmlElement.nativeElement.style.color =valor;
    this._color = valor;
  }

  // @Input() mensaje:string = 'Este campo es necesario.';

  @Input() set mensaje( valor:string ) {
    this.htmlElement.nativeElement.innerText = valor;    
  }


  constructor( private _el:ElementRef<HTMLElement> ) {
    this.htmlElement = _el
   }

  ngOnChanges(changes: SimpleChanges): void {

    // if (changes['mensaje']) {
    //    const mensaje =  changes['mensaje'].currentValue;
    //    this.htmlElement.nativeElement.innerText = mensaje;     
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color =color;
    // }


   
  }


  ngOnInit(): void {
    // this.setColor();
    // this.setMensaje();
  }

  setClass():void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }



  // setColor = ( ):void => {
  //   this.htmlElement.nativeElement.style.color = this.color;
  //   this.htmlElement.nativeElement.classList.add( 'form-text' );
  // }

  // setMensaje = ():void => {
  //   this.htmlElement.nativeElement.innerText = this.mensaje; 
  // }

}
