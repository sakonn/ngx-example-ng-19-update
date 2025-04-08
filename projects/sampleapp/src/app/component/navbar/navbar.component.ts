import { Component, OnInit } from '@angular/core';
import { LangSelectorComponent } from '../lang-selector/lang-selector.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [LangSelectorComponent],
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
