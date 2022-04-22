import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Journey } from '../journey';
import { JourneyCheckupService } from '../journey-checkup.service';
import { JourneyDetailsService } from '../journey-details.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  NghiTemp = [
    {"CITY": "S\u00e0i G\u00f2n", "KM": "0", "DATE": "13/04/2022", "ARRIVE-HR": "20:10", "LEAVE-HR": "20:10"}, {"CITY": "D\u0129 An", "KM": "19", "DATE": "13/04/2022", "ARRIVE-HR": "20:39", "LEAVE-HR": "20:42"}, {"CITY": "Bi\u00ean H\u00f2a", "KM": "29", "DATE": "13/04/2022", "ARRIVE-HR": "20:54", "LEAVE-HR": "20:57"}, {"CITY": "Long Kh\u00e1nh", "KM": "77", "DATE": "13/04/2022", "ARRIVE-HR": "21:57", "LEAVE-HR": "22:00"}, {"CITY": "B\u00ecnh Thu\u1eadn", "KM": "175", "DATE": "13/04/2022", "ARRIVE-HR": "23:51", "LEAVE-HR": "23:56"}, {"CITY": "Nha Trang", "KM": "411", "DATE": "14/04/2022", "ARRIVE-HR": "04:16", "LEAVE-HR": "04:23"}, {"CITY": "Tuy Ho\u00e0", "KM": "528", "DATE": "14/04/2022", "ARRIVE-HR": "06:39", "LEAVE-HR": "06:42"}, {"CITY": "Di\u00eau Tr\u00ec", "KM": "630", "DATE": "14/04/2022", "ARRIVE-HR": "08:39", "LEAVE-HR": "08:54"}, {"CITY": "B\u1ed3ng S\u01a1n", "KM": "709", "DATE": "14/04/2022", "ARRIVE-HR": "10:21", "LEAVE-HR": "10:24"}, {"CITY": "Qu\u1ea3ng Ng\u00e3i", "KM": "798", "DATE": "14/04/2022", "ARRIVE-HR": "11:55", "LEAVE-HR": "12:00"}, {"CITY": "Tam K\u1ef3", "KM": "861", "DATE": "14/04/2022", "ARRIVE-HR": "13:06", "LEAVE-HR": "13:09"}, {"CITY": "Tr\u00e0 Ki\u1ec7u", "KM": "901", "DATE": "14/04/2022", "ARRIVE-HR": "14:05", "LEAVE-HR": "14:08"}, {"CITY": "\u0110\u00e0 N\u1eb5ng", "KM": "935", "DATE": "14/04/2022", "ARRIVE-HR": "14:51", "LEAVE-HR": "15:16"}, {"CITY": "Hu\u1ebf", "KM": "1038", "DATE": "14/04/2022", "ARRIVE-HR": "17:48", "LEAVE-HR": "17:55"}, {"CITY": "\u0110\u00f4ng H\u00e0", "KM": "1104", "DATE": "14/04/2022", "ARRIVE-HR": "19:14", "LEAVE-HR": "19:17"}, {"CITY": "\u0110\u1ed3ng H\u1edbi", "KM": "1204", "DATE": "14/04/2022", "ARRIVE-HR": "21:00", "LEAVE-HR": "21:15"}, {"CITY": "\u0110\u1ed3ng L\u00ea", "KM": "1290", "DATE": "14/04/2022", "ARRIVE-HR": "23:03", "LEAVE-HR": "23:06"}, {"CITY": "H\u01b0\u01a1ng Ph\u1ed1", "KM": "1339", "DATE": "15/04/2022", "ARRIVE-HR": "00:09", "LEAVE-HR": "00:12"}, {"CITY": "Y\u00ean Trung", "KM": "1386", "DATE": "15/04/2022", "ARRIVE-HR": "01:10", "LEAVE-HR": "01:13"}, {"CITY": "Vinh", "KM": "1407", "DATE": "15/04/2022", "ARRIVE-HR": "01:38", "LEAVE-HR": "01:48"}, {"CITY": "Thanh Ho\u00e1", "KM": "1551", "DATE": "15/04/2022", "ARRIVE-HR": "04:27", "LEAVE-HR": "04:30"}, {"CITY": "Ninh B\u00ecnh", "KM": "1611", "DATE": "15/04/2022", "ARRIVE-HR": "05:39", "LEAVE-HR": "05:42"}, {"CITY": "Nam \u0110\u1ecbnh", "KM": "1639", "DATE": "15/04/2022", "ARRIVE-HR": "06:14", "LEAVE-HR": "06:17"}, {"CITY": "Ph\u1ee7 L\u00fd", "KM": "1670", "DATE": "15/04/2022", "ARRIVE-HR": "06:56", "LEAVE-HR": "07:08"}, {"CITY": "H\u00e0 N\u1ed9i", "KM": "1726", "DATE": "15/04/2022", "ARRIVE-HR": "08:21", "LEAVE-HR": "08:21"}
  ]
  
  userJourney!:Journey;

  isFetching:boolean=true;
  isDatepicker:boolean=true;

  constructor(private router:Router, private aRoute: ActivatedRoute, 
    private journeyDetails:JourneyDetailsService, private journeyCheckup:JourneyCheckupService) { }

  ngOnInit(): void {

    // DEPRECATED 

    // this.userJourney = {
    //   from: this.aRoute.snapshot.params['from'],
    //   to: this.aRoute.snapshot.params['to'],
    //   date: this.aRoute.snapshot.params['date'],
    // }

    // Service integration 
    this.userJourney = this.journeyDetails.getUserJourney();

    console.log(`From table.component:${this.userJourney.from}-${this.userJourney.to}-${this.userJourney.date}`);

    setTimeout(() => {
      this.isFetching = false;
    }, 3000);
  }

  // Go to the next 'step'
  public onClick()
  {
    /*if(!this.isDatepicker)
    {
      this.router.navigate(['order']);
    }*/
    if(this.journeyCheckup.doCheckup())
    {
      this.isDatepicker = true;
      this.router.navigate(['order']);
    }
    else
    {
      this.isDatepicker = false;

    }
  }

}
