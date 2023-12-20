import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Directive({
    selector: '[appFormError]'
})

export class ErrorDirective {

  private _errors: ValidationErrors | null = null;
  private _dirty: boolean = false;
  private _touched: boolean = false;
  private _nativeElement: any;

  @Input() set touched(value: boolean) {
    this._touched = value;
    this.setMessage();
  }

  @Input() set dirty(value: boolean) {
    this._dirty = value;
    this.setMessage();
  }

  @Input() set errors(value: ValidationErrors | null) {
    this._errors = value;
    this.setMessage();
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this._nativeElement = elementRef.nativeElement;
  }

  setMessage(): void {
    if (this._touched || this._dirty) {
      if (this._errors) {
        this.applyStyles(''); // Limpiar el contenido antes de mostrar nuevos mensajes
        if (this._errors['required']) {
          this.applyErrorStyles('El campo es requerido');
        } else if (this._errors['minlength']) {
          this.applyErrorStyles(`El número de caracteres debe ser ${this._errors['minlength']['requiredLength']}, pero tienes ${this._errors['minlength']['actualLength']}.`);
        } else if (this._errors['maxlength']) {
          this.applyErrorStyles(`El número de caracteres debe ser ${this._errors['maxlength']['requiredLength']}, pero tienes ${this._errors['maxlength']['actualLength']}.`);
        } else if (this._errors['email']) {
          this.applyErrorStyles('El campo tiene que ser de tipo email');
        }
      } else {
        this.applySuccessStyles('Campo valido');
      }
    }
  }

  private applyStyles(message: string): void {
    this._nativeElement.innerText = message;
    this.renderer.setStyle(this._nativeElement, 'color', '#ffffff');
    this.renderer.setStyle(this._nativeElement, 'display', 'block');
    this.renderer.setStyle(this._nativeElement, 'margin-top', '1px');
    this.renderer.setStyle(this._nativeElement, 'font-size', '13px');
  }

  private applyErrorStyles(message: string): void {
    this.applyStyles(message);
    this.renderer.setStyle(this._nativeElement, 'color', 'red');
  }

  private applySuccessStyles(message: string): void {
    this.applyStyles(message);
    this.renderer.addClass(this._nativeElement, 'success-color');
  }
}