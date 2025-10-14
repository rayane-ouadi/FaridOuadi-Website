document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Translations dictionary
  const translations = {
    En: {
      shortDes: " A lawyer with over 20 years of experience, providing professional and reliable legal services in Algeria, fully committed to defending your rights and upholding the law.",
      title2: "Info",
      longDes: " With over 20 years of experience in the field of law, I provide my clients in the People's Democratic Republic of Algeria with high-quality legal services marked by professionalism and reliability, with a firm commitment to defending their rights and delivering effective legal advice and solutions in accordance with Algerian laws and regulations, upholding the highest standards of competence and integrity.",
      btnInfo: "More Information",
      loca: "Algeria, Tizi Ouzou",
      infoabout1: "EXPERIANCE",
      infoabout2: "COURTCASE",
      contactme: "Contact Me",
      workinghours: "Working Hours: Open Sunday to Thursday from 8:00 AM to 7:00 PM. Closed on Fridays and Saturdays<",
      copyrighttxt:"© 2025 Rayane_Ouadi / Farid_Ouadi. All rights reserved."


    },
    Fr: {
      shortDes: "Avocat expérimenté avec plus de 20 ans de pratique, offrant des services juridiques professionnels, fiables et adaptés à vos besoins en Algérie. Engagé avec rigueur et intégrité à défendre vos droits et à faire respecter la loi.",
      title2: "Informations",
      longDes: "Avec plus de 20 ans d'expérience dans le domaine du droit, j'offre à mes clients en République Algérienne Démocratique et Populaire des services juridiques de haute qualité marqués par le professionnalisme et la fiabilité, avec un engagement ferme à défendre leurs droits et à fournir des conseils et des solutions juridiques efficaces conformément aux lois et réglementations algériennes, en respectant les plus hauts standards de compétence et d'intégrité.",
      btnInfo: "Plus d'informations",
      loca: "Algerie, Tizi Ouzou",

      infoabout1: "Expérience",
      infoabout2: "affaire judiciare",
      contactme: "Contactez-moi",
      workinghours: "Horaires d'ouverture : Ouvert du dimanche au jeudi de 8 h à 19 h. Fermé les vendredis et samedis.",
      copyrighttxt:"© 2025 Rayane_Ouadi / Farid_Ouadi. All rights reserved."
    },
    Tm: {
      shortDes: "ⵄⵡⴰⴹⵉ ⴼⴰⵔⵉⴷ ⴰⴷ ⵉⵜⵜⵓⵙⵏ ⴰⵎⵓⵔⴰⴱ ⴰⴷⵔⴼⵍⵉ ⴳ ⴷⵣⴰⵢⴻⵔ ⵙ ⵓⵙⵏⴻⴷ ⵏ ⵓⵙⵔⴻⴳ ⵏ 20 ⵏ ⵉⵙⴳⴳⵯⴰⵙⵏ. ⴰⵏⴰⵎⵓⵔ ⵏ ⴱⵉⵊⴰⵢⴰ, ⵉⵜⵜⵓⵙⵏ ⴰⵎⵓⵔⴰⴱ ⵉⵎⵏⴰⴷⵏ ⴳ ⵓⵙⴻⴳⵯⵎⴰⵙ ⴰⴷⵔⴼⵍⵉ ⴷ ⵓⵙⴻⴳⵯⵎⴰⵙ ⴰⴷⵔⴼⵍⵉ ⵏ ⵜⴰⵏⴰⴷⵉ, ⵉⵜⵜⴰⵔⵣⵓ ⵜⴰⵎⵓⵔⴰⴱⵜ ⵏ ⵄⵡⴰⴹⵉ ⵙ ⵜⵎⵓⵔⴰⴱⵜ ⴷ ⵓⵙⵏⴻⴷ.",
      title2: "ⵉⵏⴼⵓ",
      longDes: "ⵙ ⵓⴳⴰⵔ ⵏ 20 ⵏ ⵢⵉⵙⴻⴳⴳⴰⵙⴻⵏ ⵏ ⵜⵎⵓⵙⵙⵏⵉ ⴷⴻⴳ ⵓⵅⴻⴷⴷⵉⵎ ⵏ ⵍⵇⴰⵏⵓⵏ, ⵜⵜⴰⴽⴻⵖ ⵉ ⵢⵉⵎⴷⴰⵏⴻⵏ ⴷⵉ Lezzayer ⵉⵣⴻⵔⴼⴰⵏ ⵏ ⵍⵇⴰⵏⵓⵏ ⵢⴻⵜⵜⵡⴰⴽⴻⵍⴼⴻⵏ, ⴷ ⵉⵅⴻⴷⴷⴰⵎⴻⵏ, ⵢⴻⵔⵏⴰ ⵜⵜⵡⴰⵃⴻⵜⵜⵎⴻⵏ ⵖⴻⴼ ⵢⵉⴳⵎⴰⴹ. ⵙⵙⴰⵡⴹⴻⵖ ⴰⴷ ⵙⴼⴰⵢⴷⵉⵖ ⵙⴻⴳ ⵍⵇⴰⵏⵓⵏ ⵙⴻⴳ ⴱⴻⵊⴰⵢⴰ ⵢⴻⵔⵏⴰ ⵙⴻⴳ ⵡⴰⵙⵎⵉ ⴰⵢ ⴷⴼⴽⵉⵖ ⵛⵛⵖⴻⵍⵉⵏⵓ ⵉ ⵍⵎⴻⵏⴷ ⵏ ⵓⵙⵙⴻⵇⴷⴻⵛ ⵏ ⵢⵉⵎⴷⴰⵏⴻⵏ, ⵏ ⵜⴽⴻⴱⴱⴰⵏⵉⵢⵉⵏ, ⴷ ⵜⴻⵙⴷⴰⵡⵉⵢⵉⵏ ⵙ ⵜⵖⴻⵍⵍⵉⵙⵜ (sécurité) ⴻⴷ ⵜⵖⴰⵡⵙⵉⵡⵉⵏ ⵏ ⵜⵖⴰⵡⵙⵉⵡⵉⵏ.\ⵏ\ⵏⵙⵙⵏⴻⵖ ⵜⴰⵎⴰⵣⵉⵖⵜ, ⵜⴰⴼⵕⴻⵏⵙⵉⵙⵜ, ⴷ ⵜⴰⵄⵕⴰⴱⵜ, ⵜⵜⴹⴻⵎⵎⵉⵍⴻⵖ ⴷⴰⴽⴽⴻⵏ ⵢⴰⵍ ⴰⵎⴷⴰⵏ ⴰⴷ ⴰⵙⴷ-ⵢⴻⵜⵜⵓⵏⴻⴼⴽ ⵍⴻⵡⵚⴰⵢⴰⵜ ⵉⴱⴰⵏⴻⵏ ⴻⴷ ⵜⴳⴻⵎⵎⵉ ⵉⵊⴻⵀⴷⴻⵏ ⴰⵢ ⴷⵢⴻⵜⵜⵡⴰⵙⴱⴻⴷⴷⴻⵏ ⵖⴻⴼ ⵍⴻⵃⵙⴰⴱ ⵏ ⵡⴰⵢⴻⵏ ⴰⵢ ⵃⵡⴰⵊⴻⵏ. ⵜⴰⵎⵓⵙⵙⵏⵉⵉⵏⵓ ⵜⴻⵜⵜⵃⴰⵣ ⴰⵟⴰⵙ ⵏ ⵜⴻⵎⵙⴰⵍ ⵜⵉⵣⴻⵔⴼⴰⵏⵉⵏ, ⵢⴻⵔⵏⴰ ⵜⵜⵏⴰⴷⵉⵖ ⴰⴷ ⴷⵙⵙⵉⵡⴹⴻⵖ ⵜⵉⴼⵔⴰⵜ ⵏ ⵜⵖⴰⵡⵙⵉⵡⵉⵏ ⵙ ⵜⵖⴰⵡⵍⴰ ⵢⴻⵔⵏⴰ ⴰⴷ ⵃⵓⴷⴷⵔⴻⵖ ⵉⵣⴻⵔⴼⴰⵏ ⵏ ⵢⵉⵎⴻⴽⴽⵉⵢⴻⵏⵉⵏⵓ ⵙ ⵓⵙⵡⵉⵔ ⵏ ⵜⵎⵓⵙⵙⵏⵉ () ⴰⵢ ⴷⵢⴻⵍⵍⴰⵏ ⵙ ⵡⴰⵣⴰⵍⵏⵏⴻⵙ.",
      btnInfo: "ⵓⴳⴰⵔ ⵏ ⵉⵙⴰⵍⵍⴻⵏ.",
      loca: "ⵍⴷⵣⴰⵢⴻⵔ, ⵜⵉⵣⵉ",
      infoabout1: "ⵜⴰⵔⵎⵉⵜ",
      infoabout2: "ⵜⴰⵎⵙⴰⵍⵜ ⵏ ⵛⵛⵕⴻⵄ",
      contactme: "ⵔⵣⵓ ⵖⵓⵔⵉ",
      workinghours: "ⴰⵙⵙ ⵏ ⵓⵅⴻⴷⴷⵉⵎ: Yeldi ⵙⴻⴳ ⵡⴰⵙⵙ ⵏ ⵍⵃⴻⴷⴷ ⴰⵔ ⵡⴰⵙⵙ ⵏ ⵍⴻⵅⵎⵉⵙ ⵙⴻⴳ 8:00 ⵏ ⵜⵎⴻⴷⴷⵉⵜ ⴰⵔ 7:00 ⵏ ⵜⵎⴻⴷⴷⵉⵜ. ⵢⴻⵜⵜⵡⴰⵇⵇⴻⵏ ⴰⵙⵙ ⵏ ⵍⵊⴻⵎⵄⴰ ⴷ ⵙⵙⴻⴱⵜ<",
      copyrighttxt:"© 2025 Raya ne_Ouadi / Farid_Ouadi. All rights reserved."
    },
    Ar: {
      shortDes: "محامٍ بخبرة تفوق 20 عامًا، أقدّم خدمات قانونية احترافية وموثوقة في الجمهورية الجزائرية، دفاعًا عن حقوقكم وبالتزام تام بالقانون.",
      title2: "معلومات",
      longDes: "بخبرة تمتد لأكثر من عشرين عامًا في مجال المحاماة، أقدّم لعملائي في الجمهورية الجزائرية خدمات قانونية عالية الجودة تتّسم بالمهنية والموثوقية، مع التزام راسخ بالدفاع عن حقوقهم وتقديم استشارات وحلول قانونية فعّالة، وفقًا لأحكام القوانين والتشريعات الجزائرية وبأعلى معايير الكفاءة والنزاهة.",
      btnInfo: "مزيد من المعلومات",
      loca: "الجزائر، تيزي وزو",
      infoabout1: "خبرة",
      infoabout2: "قضية في المحكمة",
      contactme: "تواصل معي",
      workinghours: "ساعات العمل: مفتوح من الأحد إلى الخميس من الساعة 8:00 صباحًا حتى 7:00 مساءً. مغلق يومي الجمعة والسبت.",
      copyrighttxt:"© ٢٠٢٥ ريان_وادي / فريد_وادي. جميع الحقوق محفوظة."
    }
  };

 function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  if (lang === "Ar") {
    document.body.classList.add("arabic");
  } else {
    document.body.classList.remove("arabic");
  }

  localStorage.setItem("lang", lang);
}

  const switcher = document.getElementById("langSwitcher");
  switcher.addEventListener("change", e => {
    applyLanguage(e.target.value);
  });
  

  const saved = localStorage.getItem("lang") || "En";
  switcher.value = saved;
  applyLanguage(saved);
});

const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
  const target = + counter.getAttribute("data-target");
    let cur = 0;

  function updateCounter(){
    const increment = target / 500;

    if(cur < target) {
      cur += increment
    counter.textContent = Math.ceil(cur) + "+";

    requestAnimationFrame(updateCounter)
    } else{
      counter.textContent = target + " +";
    }
  }
  updateCounter();
});