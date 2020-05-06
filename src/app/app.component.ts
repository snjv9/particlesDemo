import { Component, OnInit } from '@angular/core';
declare let particlesJS: any; // Required to be properly interpreted by TypeScript.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public ngOnInit():void{
    this.invokeParticles();
  }
  title = 'particlesDemo';
  public invokeParticles():void{
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
      
    });
  }
  
}