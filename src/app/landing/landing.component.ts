import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TimelineModule } from 'primeng/timeline';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FooterComponent, CarouselModule, TimelineModule, OverlayPanelModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss', animations: [
    trigger('activeSlide', [
      state('active', style({
        transform: 'translateY(0)',
        opacity: 1,
      })),
      state('inActive', style({
        transform: 'translateY(50px)',
        opacity: 0,
      })),
      transition('active => inActive', [
        animate('1s')
      ]),
      transition('inActive => active', [
        animate('1s')
      ])
    ]),
    trigger('activeSlideP', [
      state('active', style({
        transform: 'translateY(0)',
        opacity: 1,
      })),
      state('inActive', style({
        transform: 'translateY(50px)',
        opacity: 0,
      })),
      transition('active => inActive', [
        animate('1s')
      ]),
      transition('inActive => active', [
        animate('1s 1s')
      ])
    ]),
  ]
})
export class LandingComponent {
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    center: true,
    navText: ['<img src="assets/icons/left.svg" width="50px" height="50px">', '<img src="assets/icons/right.svg"  width="50px" height="50px">'],
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true
      },
      600: {
        items: 1,
        nav: true,
        loop: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      }
    },
    nav: true
  }


  firstTrimester = [
    {
      week: '4', color: '#c5b2e9', heading: `Things to Know`, description: `The first month of the first trimester begins in the third week after your 
      last menstrual period. During this initial month, you may experience a range of physical and emotional changes. There are also 
      several concerns to be aware of, including the risk of ectopic pregnancy, higher chances of miscarriage, and exposure to teratogens.` },
    {
      week: '9', color: '#c5b2e9', heading: `Fetal Development`, description: `In the second month of the first trimester, your baby is now just under an inch long and has developed into a tiny human being. 
      The heart is beating, the brain is developing, and all limbs, including hands and feet, have formed. The eyes, however, are still in the process of fully developing.`
    },
    {
      week: '13', color: '#c5b2e9', heading: `Baby Movement`, description: `In the third month of the first trimester, your baby is now officially a fetus and measures between two and four inches long. By the end of this month, all organs are present, and even fingernails are developing.
      Your baby is also moving her arms and legs, though you won’t feel it yet. Additionally, the rate of miscarriage drops at this stage.`
    },
  ]
  secondTrimester = [
    {
      week: '18', color: '#c5b2e9', heading: `Pregnancy Health`, description: `By the fourth month of pregnancy, your baby is five to six inches long and weighs up to four ounces. The face and heart are fully formed,
      although the lungs are still developing. During this month, your baby’s eyes will open, and he or she will begin feeling the urge to suck.`
    },
    {
      week: '22', color: '#c5b2e9', heading: `Pregnancy Comfort`, description: `During the fifth month of pregnancy, your baby is now about 10 ounces and measures six to nine inches long. The baby is covered with a fine protective hair called lanugo. 
      This month, your baby will develop fingerprints and permanent teeth buds behind the fully formed baby teeth. For little girls, the ovaries also develop at this time, and the baby's sex can often be determined through an ultrasound.`
    },
    {
      week: '27', color: '#c5b2e9', heading: `Yoga & Exercise`, description: `During the sixth month of pregnancy, your baby is about 10 inches long and weighs over a pound. 
      You’ll be aware of the baby's movements as he or she stretches and hiccups. The baby's eyes can now open and close, vocal cords are functioning, and “finishing touches” 
      like eyebrows have formed.` },
  ]
  thirdTrimester = [
    {
      week: '31', color: '#c5b2e9', heading: `Healthy Sleep`, description: `In the seventh month of pregnancy, your baby is starting to develop fat under his or her skin. 
      The baby is now almost 12 inches long and weighs between two and four pounds. At this stage, your baby can see, hear, and taste, and the brain and nervous system are growing rapidly.`
    },
    {
      week: '36', color: '#c5b2e9', heading: `Relax with Music`, description: `By the eighth month of pregnancy, your baby's brainwaves resemble those of a newborn. 
      The baby may be a foot (12 inches) or longer and weigh around five pounds. The lungs and brain continue to develop, and other body systems are refining 
      in preparation for life outside the womb. Movements may slow as the baby fills more of the uterus and has less room to stretch. By the end of the month, 
      most babies are head down and descending into the pelvic area.`
    },
    {
      week: '40', color: '#c5b2e9', heading: `Lower Anxiety`, description: `In the ninth month of pregnancy, your baby’s lungs are maturing, and the layer of hair that protected 
      them in the uterus is being shed. The brain is growing tremendously during this last month. Your baby now measures about 18 to 21 inches long and weighs around six to eight pounds.` },
  ]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activatedRoute.fragment.subscribe(fragment => {
          if (fragment) {
            this.scrollTo(fragment);
          }
        });
      }
    });
  }

  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
    }
  }


  goToAboutPage() {
    this.router.navigateByUrl('/about')
  }


}
