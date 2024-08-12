export const treatments = [
    {
        label: 'Gynecology',
        id: 'gynecology',
        treatments: [
            {
                label: 'Adolescent Medicine', route: 'adolscent', id: 'adolscent',
                description: [
                    `Adolescent medicine focuses on the physical, emotional, and social health of young people during their transition from childhood to adulthood. 
                    It addresses the unique medical and developmental needs of adolescents, including growth and puberty, mental health, 
                    sexual health, and preventive care. This field aims to provide comprehensive and age-appropriate care, fostering healthy development and well-being.`,

                    `Dr. Arpana Jain also specializes in adolescent medicine, providing dedicated care for young women navigating the transition from childhood to adulthood. 
                    She understands the unique challenges and health concerns that adolescents face, including menstrual irregularities, hormonal changes, and reproductive health education.
                    Dr. Jain emphasizes preventive care, early intervention, and education to empower young women to make informed decisions 
                    about their health. Her compassionate approach ensures that adolescents feel comfortable and supported during their medical consultations and treatments.`
                ],
                headingText: `Adolescent Care with Dr. Arpana Jain`,
                imgSrc: `treatments/gynecology/adolscent.jpg`
            },
            {
                label: 'Menstrual Problems', route: 'menstural', id: 'menstural',
                description: [
                    `Menstrual problems encompass a range of issues related to the menstrual cycle, including irregular periods, heavy bleeding, 
                    painful cramps, and conditions like amenorrhea (absence of periods) or dysmenorrhea (painful periods). These problems can significantly 
                    impact a woman's quality of life and may be indicative of underlying health conditions such as hormonal imbalances, polycystic ovary syndrome (PCOS), 
                    or endometriosis. Proper diagnosis and management are essential to ensure overall reproductive health and well-being.`,
                    `Dr. Arpana Jain is highly experienced in diagnosing and treating menstrual problems, offering personalized care to women of all ages. 
                    She takes a comprehensive approach, assessing each patient's symptoms, medical history, and lifestyle to identify the root cause of menstrual issues. 
                    Dr. Jain provides effective treatments tailored to individual needs, ranging from lifestyle modifications and medication to advanced surgical interventions when necessary. 
                    Her compassionate and understanding approach ensures that women receive the support and care they need to manage and overcome their menstrual health challenges.`
                ],
                headingText: `Menstrual Health with Dr. Arpana Jain`,
                imgSrc: `treatments/gynecology/menstural.jpg`
            },
            {
                label: 'Polycystic Ovarian Syndrome (PCOS)', route: '/gynecology/pcos', id: 'pcos', description: [
                    `Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting women of reproductive age. It is characterized by irregular menstrual cycles, 
                    excessive androgen levels, and polycystic ovaries. Symptoms of PCOS can include weight gain, acne, hirsutism (excessive hair growth), and infertility. 
                    PCOS is also associated with insulin resistance, which can increase the risk of developing 
                    type 2 diabetes and other metabolic conditions. Early diagnosis and management are crucial for preventing long-term health issues and improving overall quality of life.`,
                    `Dr. Arpana Jain is an expert in diagnosing and managing PCOS, offering a comprehensive and individualized approach to care. 
                    She understands the complex nature of PCOS and its impact on a woman's health and well-being. Dr. Jain works closely with her 
                    patients to develop personalized treatment plans that address both the symptoms and underlying causes of PCOS. These plans may 
                    include lifestyle modifications, hormonal therapy, and other medical interventions aimed at restoring hormonal balance and improving fertility. 
                    Dr. Jain's compassionate care and expertise help women manage PCOS effectively and lead healthier, more fulfilling lives.`
                ],
                headingText: `PCOS Management with Dr. Arpana Jain`,
                imgSrc: `treatments/gynecology/pcos.jpg`
            },
            { label: 'Urinary Problems in Females', route: '', description: 'Urinary Problems in Females' },
            { label: 'Vaginal Discharge', route: '', description: 'Vaginal Discharge' },
            { label: 'Menopause', route: '', description: 'Menopause' },
            { label: 'Cancer Screening', route: '', description: 'Cancer Screening' },
            { label: 'Cervical Cancer', route: '', description: 'Cervical Cancer' },
            { label: 'Ovarian Cysts', route: '', description: 'Ovarian Cysts' },
            { label: 'Colposcopy', route: '', description: 'Colposcopy' },
            { label: 'Pelvic Floor Repair', route: '', description: 'Pelvic Floor Repair' }
        ]
    },
    {
        label: 'Obstetrics',
        id: 'obstetrics',
        treatments: [
            {
                label: 'Pre pregnancy Care', route: '/obstetrics/pre', id: 'pre', description: [
                    `Pre-pregnancy care, also known as preconception care, involves a series of health evaluations and interventions that prepare a woman for a healthy pregnancy. 
                    This care focuses on optimizing a woman’s health before conception by addressing any existing medical conditions, providing nutritional guidance, ensuring vaccinations are up to date, 
                    and discussing lifestyle modifications. 
                    Pre-pregnancy care aims to identify and mitigate any potential risks to both the mother and the future baby, leading to a healthier pregnancy and reducing complications.`,
                    `Dr. Arpana Jain offers specialized pre-pregnancy care, guiding women through the essential steps to ensure they are in the best possible health before conception. 
                    She provides comprehensive assessments, including medical history reviews, physical examinations, and necessary screenings, to identify any factors that could impact pregnancy. 
                    Dr. Jain works closely with her patients to develop personalized plans that include nutritional advice, lifestyle adjustments, and management of any pre-existing conditions.
                    Her goal is to help women achieve optimal health, setting the foundation for a safe and successful pregnancy journey.`
                ],
                headingText: `Pre-Pregnancy Care with Dr. Arpana Jain`,
                imgSrc: `treatments/obstetrics/pre-preg.jpg`
            },
            { label: 'Pregnancy Care', route: '', description: 'Pregnancy Care' },
            { label: 'Laparoscopy For Ectopic Pregnancy', route: '', description: 'Laparoscopy For Ectopic Pregnancy' },
            { label: 'Recurrent Pregnancy Loss', route: '', description: 'Recurrent Pregnancy Loss' },
            { label: 'Pregnancy Ultrasound Scan', route: '', description: 'Pregnancy Ultrasound Scan' },
            { label: 'Painless Delivery', route: '', description: 'Painless Delivery' },
            { label: 'Abortion', route: '', description: 'Abortion' },
            { label: 'Breastfeeding Your Child', route: '', description: 'Breastfeeding Your Child' },
            { label: 'Cardiotocography', route: '', description: 'Cardiotocography' },
            { label: 'Contraception', route: '', description: 'Contraception' }
        ]
    },
    {
        label: 'Surgeries',
        treatments: [
            { label: 'Caesarean Delivery', route: '', description: 'Caesarean Delivery' },
            { label: 'Laparoscopic Hysterectomy', route: '', description: 'Laparoscopic Hysterectomy' },
            { label: 'Laparoscopic Myomectomy', route: '', description: 'Laparoscopic Myomectomy' },
            { label: 'Vaginoplasty', route: '', description: 'Vaginoplasty' },
            { label: 'Operative Hysteroscopy', route: '', description: 'Operative Hysteroscopy' },
            { label: 'Tubal Ligation', route: '', description: 'Tubal Ligation' },
            { label: 'Hymenoplasty', route: '', description: 'Hymenoplasty' },
            { label: 'Tuboplasty', route: '', description: 'Tuboplasty' },
            { label: 'Laparoscopy For Ectopic Pregnancy', route: '', description: 'Laparoscopy For Ectopic Pregnancy' }
        ]
    },
    {
        label: 'Infertility',
        treatments: [
            { label: 'Intrauterine Insemination (IUI)', route: '', description: 'Intrauterine Insemination (IUI)' },
            { label: 'In Vitro Fertilization (IVF)', route: '', description: 'In Vitro Fertilization (IVF)' }
        ]
    }
]
