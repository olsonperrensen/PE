import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  hasInput!:boolean;
  @Output() isValid = new EventEmitter<{valid:boolean,coupon:string}>();
  coupon_list = [
    "SALESU7d0ybl2022", "SALESn0pMfB72022", "SALESoaasHQl2022", "SALESBrdipIE2022", "SALESbcQ1Yk42022", "SALESwMaZA692022", "SALESFn6k3gy2022", "SALESDph1ecB2022", "SALESDkYXfUT2022", "SALESlMfMICg2022", "SALESxBl2dM32022", "SALESP0zOMBI2022", "SALES7wKGItR2022", "SALESUKW1Igc2022", "SALESRGBO2732022", "SALES6TESpdv2022", "SALESKOidzt72022", "SALESvdkUTKN2022", "SALESVe7qUzn2022", "SALESEk75tBZ2022", "SALESCuvWeCJ2022", "SALESB4y8gXb2022", "SALES02q7no32022", "SALES8HClTnV2022", "SALESekSmplf2022", "SALESzRpgfIe2022", "SALESL0RyvRx2022", "SALESUvNNqeV2022", "SALESgZ4Xrk12022", "SALESzC7lJDN2022", "SALESmkqw9Tf2022", "SALESZBlN3Le2022", "SALESGCfsjP72022", "SALESKWJ4aLY2022", "SALESfWlrXqK2022", "SALESES2xF4V2022", "SALESW3v76tv2022", "SALESAuWU6N52022", "SALESnrTg6rO2022", "SALESK7hxAVW2022", "SALESivIWXyt2022", "SALES611VpLz2022", "SALESpLZzoT52022", "SALESPTfMkwz2022", "SALESLxZLywf2022", "SALESHVNJNtC2022", "SALESOLomSJN2022", "SALES8Wz54Hq2022", "SALESpdoCMKO2022", "SALESiPicbg42022", "SALESorcCVc32022", "SALESp0FEAik2022", "SALESNdUd6lr2022", "SALESkK088KO2022", "SALESp2mSSDt2022", "SALES11F9GfY2022", "SALESLhwfpmx2022", "SALESV3egxzI2022", "SALESTTchbjC2022", "SALESku80pA52022", "SALESJQNwTkT2022", "SALESkEpc6Yt2022", "SALESmU705lp2022", "SALESTo4FB2T2022", "SALESsWhPa2t2022", "SALESrRAxq8x2022", "SALESbfLx0So2022", "SALES2t4u39Z2022", "SALESrjo5gHz2022", "SALESfhVLsz12022", "SALESbeBJW7u2022", "SALESK0kReMO2022", "SALESunIq9qP2022", "SALESWXRiMEA2022", "SALESmaRrrUa2022", "SALESRdxaemS2022", "SALESWEQUOBd2022", "SALES4YS9hfw2022", "SALESIho4v7F2022", "SALESx6SHHa92022", "SALEScEgs6gZ2022", "SALESoBVk1Rw2022", "SALES4h2pnbg2022", "SALESaPocY8a2022", "SALESuzTc3XK2022", "SALESpD8xAbv2022", "SALES8IdxUx12022", "SALESqIAVkkX2022", "SALESPJC073y2022", "SALESEpKgJoe2022", "SALESTZs2bsy2022", "SALESabpvqeY2022", "SALESJJoUl752022", "SALESbVrMZeL2022", "SALES45OBzol2022", "SALESRehBen92022", "SALESUoqLfcs2022", "SALESlUV6BpP2022", "SALESgnfJGYC2022", "SALESCdWBfNm2022"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm)
  {
    // ex. SALESUoqLfcs2022
    for(let i = 0; i < this.coupon_list.length;i++)
    {
      if(f.value.coupon === this.coupon_list[i])
      {
        confirm('Your discount has been successfully added!');
        this.isValid.emit({valid:true,coupon:f.value.coupon});
      }
    }
  }
}
