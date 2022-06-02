import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  private originalURL = '';

  //@Input() will receive this value from the component that is calling this one
  @Input() description = '';

  //set lets the url variable more dynamic. 
  @Input()
  set url(url: string) {
    if (url.startsWith('data')) {//it's a internal URL from the application
      this.originalURL = url;
    } else {
      this.originalURL = `${API}/imgs/${url}`;//it's the external API. Using the interpolation to concatenate
    }
  }

  get url(): string {
    return this.originalURL;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
