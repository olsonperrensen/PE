import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  onMouseOver(div:HTMLDivElement)
  {
    this.renderer.setStyle(div,"border", "solid 1px skyblue");
  }
  onMouseLeave(div:HTMLDivElement)
  {
    this.renderer.setStyle(div,"border", "transparent");
  }

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

}
