import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @ViewChild('scrollTrigger') scrollTrigger!: ElementRef;

  ngOnInit(): void {
    this.scrollTrigger.nativeElement.addEventListener('click', () => {
      this.hideNavbarCollapse();
    });
  }

  hideNavbarCollapse(): void {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }
}
