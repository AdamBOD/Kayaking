import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'Kayaking';
    menuOpened = false;

    constructor(private router: Router) {}
    
    menuButtonClicked () {
        console.log ("Clicked");
        this.menuOpened = !this.menuOpened;
    }

    optionClicked (event) {
        const option = event.currentTarget.children[0].innerText;
        var optionLink = option.toString().replace(" ", "-").toLowerCase();
        this.router.navigateByUrl (optionLink);
        this.menuOpened = false;
    }
}
