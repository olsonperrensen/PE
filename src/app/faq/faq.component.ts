import { Component, OnInit } from '@angular/core';
import * as a from 'angular-animations';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations:[
    a.bounceInDownOnEnterAnimation(),
    a.bounceInLeftOnEnterAnimation(),
    a.bounceInRightOnEnterAnimation(),
    a.bounceInUpOnEnterAnimation(),
    a.rotateInDownRightOnEnterAnimation(),
    a.rotateInDownLeftOnEnterAnimation(),
    
  ]
})
export class FaqComponent implements OnInit {

  all_text = [`Vietnam's air-conditioned trains are the ideal way for independent travellers to get around Vietnam. You might even meet some Vietnamese people. Inexperienced travellers sometimes think they'll save time by using internal flights, but an overnight train ride from Hanoi to Hué or Danang actually saves time over flying, because the train leaves Hanoi in the evening and arrives in Hué next morning, city centre to city centre, saving a hotel bill too.

  But it's more than this, the train journey is a genuine Vietnamese experience, an integral part of your trip. Air-conditioned trains link Hanoi, Hué, Danang, Nha Trang, and Saigon (Ho Chi Minh City). Hoi An is just 30km by bus or taxi from Danang. There are also trains from Hanoi to Haiphong (for Halong Bay) and Hanoi to Lao Cai (for Sapa). See an interactive route map of trains in Southeast Asia.`,
  `Rice fields, palm trees, water buffalo, Vietnamese towns and villages... You get a real insight into Vietnam when you travel by train, both urban and rural, which you don't get from 35,000 feet. And if you're good at people watching you'll get insights on board the train, too - the real Vietnam is as much inside as outside the train. The most magical part of a Hanoi to Saigon train journey is the world-class scenic section between Hué and Danang.

  The train runs along the South China Sea, snaking from cliff to jungle-covered cliff past beaches and islands, then heads through the lush green mountains via the Hai Van Pass to reach Danang. In Vietnamese it's Đèo Hải Vân meaning 'Ocean Cloud Pass', and I can't think of a better name. In the bright Vietnamese sun, the vivid blue skies, green waters and yellow beaches will take your breath away... See the video, Hanoi-Saigon by train.`,
  `Since the end of the Vietnamese war, the official name for the conurbation as a whole has been Ho Chi Minh City (HCMC). However, the city centre is still officially called Saigon, which is the city's traditional and historic name.

  In fact, the city appears as Sai Gon in all Vietnamese railway timetables, it will say Sai Gon on your train ticket and as you can see from the photo, it actually says 'Sai Gon' in big letters on the station itself. The ruling elite may toe the line and call it Ho Chi Minh, but everyone else calls it Saigon. So do what the locals do, call it Saigon!`,
  `Trains between Hanoi & Saigon are sometimes referred to as the Reunification Express by guide books and tourist agencies, although there are now a whole range of trains on this route and no single train officially carries this name.

  The line was completed by the French in 1936, and trains linked Hanoi to Saigon until 1954, when Vietnam was divided into north and south and the railway was cut. The trains resumed on 31 December 1976, unifying the country once more. You too can easily travel the length of Vietnam using the reunification railway, an experience in its own right.
  
  Over the last decade the Hanoi-Saigon train service has steadily improved with more trains & newer more comfortable rolling stock. Here are the principal trains, there are additional trains at peak times such as the Tet holiday period. Schematic map of Vietnamese Railways routes. Interactive map of Hanoi-Saigon Reunification Railway, zoom in to see detail Interactive map of train, bus & ferry routes in Southeast Asia. Quick links: Fares Ticket advice Buy tickets online What are the trains like? Recommended hotels`,
  `All these trains run every day except trains SE7 & SE8 which only run at busy periods. Hanoi to Saigon is 1,726km or 1,070 miles. See interactive map of Hanoi-Saigon Reunification Railway, zoom in to see detail. Map of Saigon showing station. Map of Hanoi showing station. If an 04:30 or 05:20 arrival in Saigon or Hanoi seems uncomfortably early, remember that in Southeast Asia it's usual to rise earlier than most westerners do, and you'll find plenty of taxis available at this time. It's not like arriving in a western city that early, so don't worry! SE1, SE2, SE3, SE4: The best trains, with air-conditioned soft sleepers (4-berth), air-conditioned hard sleepers (6-berth), air-conditioned soft seats.

  Trains SE3 & SE4 were equipped with smartly-refurbished cars in 2015, trains SE1 & SE2 got similar refurbished cars in 2016. Trains SE1 & SE2 also have a handful of VIP 2-berth compartments (only about 4 per train). SE1 & SE2 also convey privately-run Livitrans tourist sleepers between Hanoi, Hue & Danang. Trains SE3 & SE4 also convey privately-run Violette Trains tourist sleepers between Hanoi, Hue & Danang, see the Livitrans & Violette section below. SE5, SE6, SE9, SE10: Air-conditioned soft sleepers (4-berth), air-conditioned hard sleepers (6-berth), air-conditioned soft seats, air-conditioned hard seats, ordinary hard seats. Trains SE5 & SE6 were allegedly re-equipped with some of the latest modern seats cars & sleeping-cars in January 2018. SE7, SE8: Only runs at busy times, check online if it's running a month or two ahead. Air-con soft sleepers, air-con hard sleepers, air-con soft seats. SE19, SE20: Air-conditioned soft sleepers, air-conditioned hard sleepers, air-conditioned soft seats, air-conditioned hard seats, ordinary hard seats. SE21, SE22: Air-conditioned soft sleepers, air-conditioned hard sleepers, air-conditioned soft seats, air-conditioned hard seats. SE11, SE12, SE25, SE26: On certain dates you'll find additional seasonal trains.`
]

  isHiddenZero = false;
  isHiddenOne = false;
  isHiddenTwo = false;
  isHiddenThree = false;
  isHiddenFour = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(a:number)
  {
    switch (a) {
      case 0:
        this.isHiddenZero = !this.isHiddenZero;
        break;
      case 1:
      this.isHiddenOne = !this.isHiddenOne;
      break;
      case 2:
      this.isHiddenTwo = !this.isHiddenTwo;
      break;
      case 3:
      this.isHiddenThree = !this.isHiddenThree;
      break;
      case 4:
      this.isHiddenFour = !this.isHiddenFour;
      break;
    
      default:
        break;
    }
  }

}
