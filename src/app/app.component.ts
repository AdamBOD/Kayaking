import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'Kayaking';
    menuOpened = false;
    
    menuButtonClicked () {
        console.log ("Clicked");
        this.menuOpened = !this.menuOpened;
    }
}
