import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [],
  template: `
    <p>
      I am from library! lib works!
    </p>
  `,
  styles: ``
})
export class MyLibComponent {

}
