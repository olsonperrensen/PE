import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DarkModeStatusService } from '../dark-mode-status.service';
import { ProgressBarService } from '../progress-bar/progress-bar.service';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div [ngClass]="{dark:switch_status,light:!switch_status}" class="modal-header">
      <h4 class="modal-title">Would you like to create an account?</h4>
      <button  
      [ngClass]="{darkb:switch_status,lightb:!switch_status}"
      type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div [ngClass]="{dark:switch_status,light:!switch_status}" class="modal-body">
      <p>Get all the benefits from our app, {{name}}!</p>
      <p> 
                   With an account, you can easily:</p>
            <div class="bodyItem__text">
                <div class="richText" data-controller="generic/ui/RichText" data-config="{&quot;mode&quot;:&quot;responsiveTable&quot;}" data-type="cms-Tekst">
                    <ul>
         <li>
         <p><strong>Manage your account</strong><br>
        By going to 'My details' , you can edit your personal details and subscribe to or unsubscribe from the NS newsletter.</p>
         </li>
        </ul>
        
        <ul>
         <p><li><strong>Product status</strong><br>
        By going to 'My products', you can view&nbsp;your NS products and check the remaining time on your&nbsp;season ticket or the status of your Keuzedagen.</li>
    </p></ul>
        
        <ul>
         <li>
         <p><strong>Order status</strong><br>
         For a full summary of your NS orders and their statuses,&nbsp;go to 'My Orders'.</p>
         </li>
                  <li>
         <p><strong>View travel history</strong><br>
         You can find a list of all your trips and the corresponding costs&nbsp;over the past 18 months by going to 'My travel history' . You can also add notes or print a summary to add to your expense claim.</p>
         </li>
         <li>
         <p><strong>View invoices</strong></li>
        </ul>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary" 
    routerLink="signup"
    (click)="activeModal.close('Close click')"
    >Yes</button>
      <button 
      [ngClass]="{darkb:switch_status,lightb:!switch_status}"
      type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `, 
  styles: [` 
  .dark { color: white; background-color: black; } 
  .darkb { filter: invert(1); } 
  .light{color: black; background-color: white;}
  .lightb {filter: invert(0); } 
  `]
})
export class NgbdModalContent implements OnInit{
  @Input() name: any;
  switch_status!:boolean
  constructor(public activeModal: NgbActiveModal,private darkModeStatus:DarkModeStatusService
    ) {
  }
ngOnInit(): void {
  this.switch_status = this.darkModeStatus.getStatus();
}
}

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit, OnDestroy {
  
  ngOnDestroy(): void {
    setTimeout(() => {
      this.progressBar.setProgressBar('reset');
    }, 800);
  }

  ngOnInit(): void {
    window.scroll({top:0,left:0,behavior:'smooth'});
    this.progressBar.setProgressBar('step5');
    const modalRef = this.modalService.open(NgbdModalContent,{ scrollable: true,centered:true },);
    modalRef.componentInstance.name = 'Bjorn';
  }
  constructor(private modalService: NgbModal, private darkModeStatus:DarkModeStatusService,
    private progressBar:ProgressBarService){}

    id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions:any = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 0
      },
      color: {
        value: "#f00"
      },
      shape: {
        type: ["circle", "square", "polygon"],
        options: {
          polygon: {
            sides: 6
          }
        }
      },
      opacity: {
        value: { min: 0, max: 1 },
        animation: {
          enable: true,
          speed: 1,
          startValue: "max",
          destroy: "min"
        }
      },
      size: {
        value: { min: 3, max: 7 }
      },
      life: {
        duration: {
          sync: true,
          value: 7
        },
        count: 1
      },
      move: {
        enable: true,
        gravity: {
          enable: true
        },
        drift: {
          min: -2,
          max: 2
        },
        speed: { min: 10, max: 30 },
        decay: 0.1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "destroy",
          top: "none"
        }
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60
        }
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360
        },
        animation: {
          enable: true,
          speed: 60
        }
      },
      roll: {
        darken: {
          enable: true,
          value: 25
        },
        enable: true,
        speed: {
          min: 15,
          max: 25
        }
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15
        }
      }
    },
    detectRetina: true,
    emitters: {
      direction: "none",
      spawnColor: {
        value: "#ff0000",
        animation: {
          h: {
            enable: true,
            offset: {
              min: -1.4,
              max: 1.4
            },
            speed: 0.1,
            sync: false
          },
          l: {
            enable: true,
            offset: {
              min: 20,
              max: 80
            },
            speed: 0,
            sync: false
          }
        }
      },
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.6
      },
      rate: {
        delay: 0.1,
        quantity: 100
      },
      size: {
        width: 0,
        height: 0
      }
    }
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
