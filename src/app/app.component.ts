import { DOCUMENT } from '@angular/common';
import { Component, Renderer2, Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'Kayaking';
    menuOpened = false;

    constructor(private router: Router,
                private renderer: Renderer2,
                @Inject(DOCUMENT) private document: Document,) {}
    
    menuButtonClicked () {
        console.log ("Clicked");
        this.menuOpened = !this.menuOpened;

        if (this.menuOpened) {
            this.renderer.addClass (this.document.body, 'overlayOpen');
        } else {
            this.renderer.removeClass (this.document.body, 'overlayOpen');
        }
    }

    optionClicked (event) {
        const option = event.currentTarget.children[0].innerText;
        var optionLink = option.toString().replace(" ", "-").toLowerCase();
        this.router.navigateByUrl (optionLink);
        this.menuOpened = false;
        this.renderer.removeClass (this.document.body, 'overlayOpen');
    }
}
