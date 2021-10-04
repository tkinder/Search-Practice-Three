import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRandomBgColor]',
})
export class RandomBgColorDirective implements OnInit {
  // Initialize random color variable
  color: string;

  // Get access to the element we place "appRandomBgColor" on && Inject the renderer package
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // Run a function on initialization of this directive
  ngOnInit(): void {
    // Generate Random Color (Found on StackOverflow)
    this.color = this.getRandomColor();

    // Set the bg style on the "elementRef"
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.color
    );
  }

  // Listen for a hover event and update our background styles
  @HostListener('mouseenter') onMouseHover() {
    // Generate a new random color
    this.color = this.getRandomColor();

    // Set the bg on the "elementRef" to our new color
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.color
    );
  }

  // Function that generates a random color
  getRandomColor() {
    return (
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  }
}
