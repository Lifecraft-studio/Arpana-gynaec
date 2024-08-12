import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgStyle, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu = false;

  menuList = [
    {
      label: 'About',
      items: [
        {
          label: 'Dr. Arpana Jain',
          router: 'about'
        },
        {
          label: 'Gallery',
          router: 'gallery'
        },
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
          router: ''
        },
        {
          label: 'Vaginal Discharge',
          router: ''
        },
        {
          label: 'Menopause',
          router: ''
        },
        {
          label: 'Cancer Screening',
          router: ''
        },
        {
          label: 'Cervical Cancer',
          router: ''
        },
        {
          label: 'Ovarian Cysts',
          router: ''
        },
        {
          label: 'Colposcopy',
          router: ''
        },
        {
          label: 'Pelvic Floor Repair',
          router: ''
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
          router: ''
        },
        {
          label: 'Laparoscopy For Ectopic Pregnancy',
          router: ''
        },
        {
          label: 'Recurrent Pregnancy Loss',
          router: ''
        },
        {
          label: 'Pregnancy Ultrasound Scan',
          router: ''
        },
        {
          label: 'Painless Delivery',
          router: ''
        },
        {
          label: 'Abortion',
          router: ''
        },
        {
          label: 'Breastfeeding Your Child',
          router: ''
        },
        {
          label: 'Cardiotocography',
          router: ''
        },
        {
          label: 'Contraception',
          router: ''
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
          router: ''
        },
        {
          label: 'Laparoscopic Hysterectomy',
          router: ''
        },
        {
          label: 'Laparoscopic Myomectomy',
          router: ''
        },
        {
          label: 'Vaginoplasty',
          router: ''
        },
        {
          label: 'Operative Hysteroscopy',
          router: ''
        },
        {
          label: 'Tubal Ligation',
          router: ''
        },
        {
          label: 'Hymenoplasty',
          router: ''
        },
        {
          label: 'Tuboplasty',
          router: ''
        },
        {
          label: 'Laparoscopy For Ectopic Pregnancy',
          router: ''
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
          router: ''
        },
        {
          label: 'In Vitro Fertilization (IVF)',
          router: ''
        },
      ],
      collpased: true,
      styles: { width: '250px', 'grid-template-columns': 'repeat(1, 1fr)' }
    },
    {
      label: 'Contact Us',
      router: ''
    },
  ]

  constructor(private router: Router) { }

  scrollTo(elementId: string) {
    this.router.navigate([''], { fragment: elementId })
  }

  toggleSubMenu(label: string) {
    const menuItem = this.menuList.find(menu => {
      return menu.label === label;
    })
    if (menuItem && !menuItem.collpased) {
      menuItem.collpased = true;
      return;
    }
    this.collapseAll();
    this.menuList.forEach(menu => {
      if (menu.label === label) {
        menu.collpased = !menu.collpased;
      }
    })
  }

  collapseAll() {
    this.menuList.forEach(menu => {
      menu.collpased = true;
    })
  }
}
