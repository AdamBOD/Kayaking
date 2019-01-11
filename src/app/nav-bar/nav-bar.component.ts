import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  previouslySelected
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navButtonClicked (event) {
    const nav = event.currentTarget.innerText;
    var navLink = nav.toString().replace(" ", "-").toLowerCase();
    this.router.navigateByUrl (navLink);
  }
}
