import { NgClass, NgStyle } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgStyle, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  showMenu = false;

  menuList = [
    {
      label: 'About',
      items: [
        {
          label: 'Dr. Arpana Jain',
          router: 'about'
        },
        // {
        //   label: 'Gallery',
        //   router: 'gallery'
        // },
      ],
      collpased: true,
      styles: { width: '250px', 'grid-template-columns': 'repeat(1, 1fr)', left: 0 }
    },
    {
      label: 'Gynecology',
      items: [
        {
          label: 'Adolescent Medicine',
          router: 'treatment/gynecology/adolscent'
        },
        {
          label: 'Menstrual Problems',
          router: 'treatment/gynecology/menstural'
        },
        {
          label: 'Polycystic Ovarian Syndrome (PCOS)',
          router: 'treatment/gynecology/pcos'
        },
        {
          label: 'Urinary Problems in Females',
          router: 'treatment/gynecology/urinaryprob'
        },
        {
          label: 'Vaginal Discharge',
          router: 'treatment/gynecology/vaginaldischarge'
        },
        {
          label: 'Menopause',
          router: 'treatment/gynecology/menopause'
        },
        {
          label: 'Cancer Screening',
          router: 'treatment/gynecology/cancerscreening'
        },
        {
          label: 'Cervical Cancer',
          router: 'treatment/gynecology/cervicalcancer'
        },
        {
          label: 'Ovarian Cysts',
          router: 'treatment/gynecology/ovariancysts'
        },
        {
          label: 'Colposcopy',
          router: 'treatment/gynecology/Colposcopy'
        },
        {
          label: 'Pelvic Floor Repair',
          router: 'treatment/gynecology/pelvicfloorrepair'
        },
      ],
      collpased: true,
      styles: { width: '580px', 'grid-template-column': 'repeat(3,1fr)', left: '10%' }
    },
    {
      label: 'Obstetrics',
      items: [
        {
          label: 'Pre pregnancy Care',
          router: 'treatment/obstetrics/pre'
        },
        {
          label: 'Pregnancy Care',
          router: 'treatment/obstetrics/PregnancyCare'
        },
        {
          label: 'Laparoscopy For Ectopic Pregnancy',
          router: 'treatment/obstetrics/LaparoscopyEctopic'
        },
        {
          label: 'Recurrent Pregnancy Loss',
          router: 'treatment/obstetrics/RecurrentPregnancyLoss'
        },
        {
          label: 'Pregnancy Ultrasound Scan',
          router: 'treatment/obstetrics/PregUltrasound'
        },
        {
          label: 'Painless Delivery',
          router: 'treatment/obstetrics/PainlessDelivery'
        },
        {
          label: 'Abortion',
          router: 'treatment/obstetrics/Abortion'
        },
        {
          label: 'Breastfeeding Your Child',
          router: 'treatment/obstetrics/Breastfeeding'
        },
        {
          label: 'Cardiotocography',
          router: 'treatment/obstetrics/Cardiotocography'
        },
        {
          label: 'Contraception',
          router: 'treatment/obstetrics/Contraception'
        }
      ],
      collpased: true,
      styles: { width: '580px', 'grid-template-column': 'repeat(3,1fr)', left: '20%' }
    },
    {
      label: 'Surgeries',
      items: [
        {
          label: 'Caesarean Delivery',
          router: 'treatment/surgeries/caesarean'
        },
        {
          label: 'Laparoscopic Hysterectomy',
          router: 'treatment/surgeries/laparoscopichysterectomy'
        },
        {
          label: 'Laparoscopic Myomectomy',
          router: 'treatment/surgeries/laparoscopicmyomectomy'
        },
        {
          label: 'Vaginoplasty',
          router: 'treatment/surgeries/vaginoplasty'
        },
        {
          label: 'Operative Hysteroscopy',
          router: 'treatment/surgeries/operativehysteroscopy'
        },
        {
          label: 'Tubal Ligation',
          router: 'treatment/surgeries/tuballigation'
        },
        {
          label: 'Hymenoplasty',
          router: 'treatment/surgeries/hymenoplasty'
        },
        {
          label: 'Tuboplasty',
          router: 'treatment/surgeries/tuboplasty'
        },
        {
          label: 'Laparoscopy For Ectopic Pregnancy',
          router: 'treatment/surgeries/laparoscopyectopic'
        }
      ],
      collpased: true,
      styles: { width: '580px', 'grid-template-column': 'repeat(3,1fr)', left: '30%' }
    },
    {
      label: 'Infertility',
      items: [
        {
          label: 'Intrauterine Insemination (IUI)',
          router: 'treatment/infertility/intrauterineinsemination'
        },
        {
          label: 'In Vitro Fertilization (IVF)',
          router: 'treatment/infertility/ivf'
        },
      ],
      collpased: true,
      styles: { width: '250px', 'grid-template-columns': 'repeat(1, 1fr)' }
    },
  ]

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {
    document.addEventListener('click', () => {
      this.collapseAll();
    });

  }

  scrollTo(elementId: string) {
    this.router.navigate([''], { fragment: elementId })
  }

  closeOtherMenu(label: string) {
    const menuItem = this.menuList.find(menu => {
      return menu.label === label;
    })
    if (menuItem && !menuItem.collpased) {
      menuItem.collpased = true;
      return;
    }
    this.collapseAll();
  }

  toggleSubMenu(label: string, event: Event) {
    event.stopPropagation();
    this.closeOtherMenu(label)
    this.menuList.forEach(menu => {
      if (menu.label === label) {
        menu.collpased = !menu.collpased;
      }
    })
  }

  openSubMenu(label: string) {
    this.closeOtherMenu(label);
    this.menuList.forEach(menu => {
      if (menu.label === label) {
        if (menu.collpased) {
          menu.collpased = false;
        }
      }
    })
  }

  collapseAll() {
    this.menuList.forEach(menu => {
      menu.collpased = true;
    })
  }

}
