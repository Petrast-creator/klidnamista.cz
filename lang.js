// ── Language switcher for klidnamista.cz ──
(function () {
  const STORAGE_KEY = 'lang';

  // ── Translation map ──
  // Format: 'Czech text': 'English text'
  const T = {
    // Nav & shared
    'Naše klidná místa': 'Our Peaceful Places',
    'Kontakt': 'Contact',
    'Zpět na přehled': 'Back to overview',
    '© 2026 Naše klidná místa · Třebichovice, Česká republika': '© 2026 Our Peaceful Places · Třebichovice, Czech Republic',
    '© 2026 Naše klidná místa · Česká republika': '© 2026 Our Peaceful Places · Czech Republic',

    // index.html
    'Přímá rezervace · bez poplatků': 'Direct booking · no platform fees',
    'Útulná místa\nv srdci přírody': 'Cosy places\nin the heart of nature',
    'Útulná místav srdci přírody': 'Cosy places\nin the heart of nature',
    'Prohlédnout apartmány': 'Browse apartments',
    'Lipno · Šumava · Třebichovice': 'Lipno · Šumava · Třebichovice',
    'Bez poplatků platformy': 'No platform fees',
    'Oblíbené u hostů na Airbnb': 'Highly rated on Airbnb',
    'Rychlá reakce na vaše dotazy': 'Quick response to your enquiries',
    'Naše apartmány': 'Our apartments',
    'Každé místo má svůj charakter — vyberte si to, které vás osloví.': 'Each place has its own character — find the one that speaks to you.',
    'Jihočeský kraj': 'South Bohemian Region',
    'Váš prostor pro aktivní dny a klidné večery': 'Your base for active days and peaceful evenings',
    'Plzeňský kraj · NP Šumava': 'Plzeň Region · Šumava NP',
    'Rodinný apartmán na samotě u lesa': 'Family apartment in a forest retreat',
    'Naše vlastní rodinné místo v tichu šumavských lesů. Ideální zázemí pro rodiny a milovníky přírody.': 'Our own family place in the quiet of the Šumava forests. The ideal base for families and nature lovers.',
    'Středočeský kraj': 'Central Bohemia',
    'Chalupa pod jasany — dva apartmány': 'The Ash Tree Cottage — two apartments',
    'Více informací →': 'More information →',
    'Apartmán Liška — 4 hosté': 'Fox Apartment — 4 guests',
    'Apartmán Jelen — 4+ hostů': 'Deer Apartment — 4+ guests',
    'Vaše hostitelka': 'Your host',
    'Jmenuji se Petra a jsem milovnice přírody, pohybu a tvoření.': 'My name is Petra and I love nature, the outdoors and creative pursuits.',
    'O pronájem našich čtyř rodinných apartmánů se starám osobně – takže budete vždy mluvit přímo se mnou.': 'I personally manage all four of our family apartments — so you will always be speaking directly with me.',
    'Průměrné hodnocení': 'Average rating',
    'Hodnocení celkem': 'Total reviews',
    'Rychlost odpovědi': 'Response time',
    'Hostitelkou': 'Superhost',
    'Rezervujte přímo': 'Book directly',
    'Napište mi e-mailem a domluvíme vše osobně — bez poplatků platformy, s individuální péčí.': 'Write to me by email and we will arrange everything personally — no platform fees, with individual care.',
    'Petra Stahlová': 'Petra Stahlová',
    'Nebo rovnou rezervujte na Airbnb — pokud vám více vyhovuje rezervace přes platformu, na kterou jste zvyklí.': 'Or book directly on Airbnb — if you prefer booking through a platform you already know.',
    'Apartmán Lipno →': 'Lipno Apartment →',
    'Apartmán Srní →': 'Srní Apartment →',
    'Třebichovice – apartmán Liška →': 'Třebichovice – Fox Apartment →',
    'Třebichovice – apartmán Jelen →': 'Třebichovice – Deer Apartment →',

    // srni.html
    'Plzeňský kraj · Národní park Šumava': 'Plzeň Region · Šumava National Park',
    'Náš rodinný apartmán kousek za hranicí obce Srní na Šumavě je místem pro ty, kdo hledají klid, přírodu a prostor daleko od shonu.': 'Our family apartment just beyond the village of Srní in the Šumava mountains is a place for those seeking peace, nature and space far from the bustle of everyday life.',
    'Apartmán je součástí malého komplexu několika chalup, umístěných v tichu u lesa, mimo ruch obce. Je to skutečná samota — sousedé jsou, ale každý si žije svůj klidný život.': 'The apartment is part of a small cluster of cottages, set quietly by the forest, away from the village. It is a true retreat — neighbours are there, but each lives their own quiet life.',
    'K dispozici je předsíň, prostorný obývací pokoj s plně vybavenou kuchyní a jídelnou, dvě ložnice s manželskými postelemi a koupelna.': 'There is an entrance hall, a spacious living room with a fully equipped kitchen and dining area, two bedrooms with double beds, and a bathroom.',
    'K apartmánu patří úzká, ale dlouhá terasa s venkovním sezením. Hosté mohou využívat i venkovní prostory — posezení u ohniště a prostorný travnatý dvorek.': 'The apartment has a narrow but long terrace with outdoor seating. Guests may also use the outdoor areas — seating by the fire pit and a spacious grassy courtyard.',
    'Apartmán je naším rodinným místem. Rádi se o něj dělíme s hosty a budeme vděční, pokud se k němu budete chovat stejně.': 'This apartment is our family home. We love sharing it with guests and would be grateful if you treat it as such.',
    'Okolí Srní a Šumavský národní park nabízí široké možnosti pro milovníky přírody i aktivní turistiku.': 'The Srní area and Šumava National Park offer a wide range of options for nature lovers and active travellers.',
    'Okolní lesy a terény jsou ideální pro cyklistiku, horské túry i běhání, v zimě pak pro běžecké lyžování.': 'The surrounding forests and terrain are ideal for cycling, mountain hiking and running, and in winter for cross-country skiing.',
    'Otevřít v Mapy.cz →': 'Open in Mapy.cz →',

    // lipno.html
    'Jihočeský kraj · Hůrka u Horní Plané': 'South Bohemian Region · Hůrka near Horní Planá',
    'Váš prostor pro aktivní dnya klidné večery': 'Your base for active days\nand peaceful evenings',
    'Velký apartmán pro 6 lidí s terasou a zahradou — ideální základna pro cyklisty, turisty i milovníky přírody.': 'A large apartment for 6 people with a terrace and garden — an ideal base for cyclists, hikers and nature lovers.',
    'Moderní ubytování v dřevostavbě, ideální pro rodiny nebo skupiny přátel. Součástí je prostorná terasa a zahrada se soukromím.': 'Modern accommodation in a timber-frame building, ideal for families or groups of friends. The apartment includes a spacious terrace and a private garden.',
    'Apartmán jsme původně pořídili pro vlastní sportovní aktivity. Proto tu najdete: uzamykatelnou úschovnu kol, pumpu, nářadí pro drobné opravy.': 'We originally bought this apartment for our own sporting trips. That is why you will find: a lockable bike storage room, a pump, and tools for minor repairs.',
    'V kuchyni nechybí nic — espresso stroj na zrna, myčka, trouba, mrazák. Kuchyně je vybavená tak, jak jsme zvyklí mít vlastní.': 'The kitchen has everything — a bean-to-cup espresso machine, dishwasher, oven and freezer. The kitchen is equipped just as we like our own to be.',
    'K apartmánu patří dvě parkovací místa vzdálená jen pár metrů od hlavního vchodu i od Vaší terasy.': 'The apartment includes two parking spaces just a few metres from the main entrance and your terrace.',
    'Apartmán se nachází v malé obci Hůrka, jenom pár minut jízdy autem od Horní Plané.': 'The apartment is located in the small village of Hůrka, just a few minutes\' drive from Horní Planá.',
    'Okolí našeho apartmánu je ideální pro každého, kdo chce trávit čas v přírodě a objevovat nejhezčí části jižních Čech.': 'The area around our apartment is ideal for anyone wanting to spend time in nature and explore the most beautiful parts of South Bohemia.',
    'V krátké dojezdové vzdálenosti najdete také obchody s potravinami, restaurace, bistra i útulné cukrárny.': 'Within a short drive you will also find grocery shops, restaurants, bistros and charming cafés.',

    // trebichovice.html
    'Středočeský kraj · Třebichovice u Slaného': 'Central Bohemia · Třebichovice near Slaný',
    'Chalupa pod jasany': 'The Ash Tree Cottage',
    'Chalupa pod jasany skrývá na jednom podlaží dvě samostatná podkrovní apartmá — Lišku a Jelena.': 'The Ash Tree Cottage houses two separate attic apartments on one floor — Fox and Deer.',
    'V jednu chvíli pronajímám vždy jenom jeden z těchto apartmánů — nikdy se nestane, že by ve stejnou dobu ve vedlejším apartmánu bydlel někdo cizí.': 'At any one time I rent out only one of these apartments — it will never happen that a stranger is staying next door at the same time.',
    'Liška': 'Fox',
    'Jelen': 'Deer',
    'Apartmán Liška': 'Fox Apartment',
    'Apartmán Jelen': 'Deer Apartment',
    'Fotogalerie – Liška': 'Gallery – Fox',
    'Fotogalerie – Jelen': 'Gallery – Deer',
    'Vybavení – Liška': 'Amenities – Fox',
    'Vybavení – Jelen': 'Amenities – Deer',
    'Dostupnost a ceny – Liška': 'Availability & prices – Fox',
    'Dostupnost a ceny – Jelen': 'Availability & prices – Deer',
    'Menší z dvojice — útulný prostor s otevřeným půdorysem, kde postel, kuchyně a jídelna tvoří jeden vzdušný celek.': 'The smaller of the two — a cosy open-plan space where the bed, kitchen and dining area form one airy whole.',
    'Apartmán je ideální pro pár nebo malou rodinu až čtyř hostů. Je tu plně vybavená kuchyně, vlastní koupelna a soukromá terasa s posezením.': 'The apartment is ideal for a couple or a small family of up to four guests. There is a fully equipped kitchen, a private bathroom and a private terrace with seating.',
    'Větší z dvojice — prostorný podkrovní apartmán s třema ložnicemi, plně vybavenou kuchyní, jídelnou a obývacím pokojem.': 'The larger of the two — a spacious attic apartment with three bedrooms, a fully equipped kitchen, dining area and living room.',
    'Jelen pojme až šest hostů a hodí se skvěle pro rodiny s dětmi nebo skupinu přátel.': 'Deer can accommodate up to six guests and is perfect for families with children or a group of friends.',
    'Třebichovice jsou klidná obec u Slaného ve Středočeském kraji, obklopená lesy a poli. Chalupa leží přímo na okraji lesa.': 'Třebichovice is a quiet village near Slaný in the Central Bohemia region, surrounded by forests and fields. The cottage sits right on the edge of the forest.',
    'Autem se dostanete za cca 25 minut na okraj Prahy. Obchody a restaurace pak najdete v 10 minut vzdáleném Slaném.': 'By car you can reach the outskirts of Prague in approximately 25 minutes. Shops and restaurants can be found in Slaný, 10 minutes away.',
    'Kolem chalupy se pravidelně pohybuje zvěř — srnky jsou tu téměř každý den a často přespávají přímo na naší louce.': 'Wildlife regularly passes by the cottage — roe deer are here almost every day and often spend the night on our meadow.',
    'Který apartmán vás zajímá?': 'Which apartment are you interested in?',
    '— vyberte —': '— select —',
    'Liška (až 4 hosté)': 'Fox (up to 4 guests)',
    'Jelen (až 6 hostů)': 'Deer (up to 6 guests)',
    'Oba najednou (až 10 hostů)': 'Both at once (up to 10 guests)',
    'airbnb.cz/h/liska →': 'airbnb.cz/h/liska →',
    'airbnb.cz/h/jelen →': 'airbnb.cz/h/jelen →',

    // Gallery tabs
    'Vše (27)': 'All (27)',
    'Vše (15)': 'All (15)',
    'Vše (6)': 'All (6)',
    'Vše (8)': 'All (8)',
    'Exteriér & okolí': 'Exterior & surroundings',
    'Obývací pokoj': 'Living room',
    'Kuchyně & jídelna': 'Kitchen & dining',
    'Ložnice 1': 'Bedroom 1',
    'Ložnice 2': 'Bedroom 2',
    'Koupelna': 'Bathroom',
    'Koupelny': 'Bathrooms',
    'Interiér': 'Interior',
    'Kuchyně': 'Kitchen',
    'Ložnice': 'Bedrooms',

    // Shared UI
    'Fotogalerie': 'Gallery',
    'Vybavení': 'Amenities',
    'Lokalita': 'Location',
    'Dostupnost a ceny': 'Availability & prices',
    'Základní informace': 'Key information',
    'Napište mi': 'Get in touch',
    'Máte zájem o termín nebo otázku? Napište mi a ozvu se Vám co nejdříve.': 'Interested in dates or have a question? Write to me and I will get back to you as soon as possible.',
    'Vaše jméno': 'Your name',
    'E-mail': 'Email',
    'Příjezd': 'Arrival',
    'Odjezd': 'Departure',
    'Zpráva': 'Message',
    'Odeslat zprávu': 'Send message',
    'Rezervovat přes Airbnb →': 'Book on Airbnb →',
    'Adresa': 'Address',
    'Hosté': 'Guests',
    'Postele': 'Beds',
    'Hodnocení': 'Rating',
    'až 6': 'up to 6',
    'až 4': 'up to 4',
    '2× dvojlůžko+ rozkládací pohovka': '2× double bed+ sofa bed',
    '2× dvojlůžko2× jednolůžko': '2× double bed2× single bed',
    '2× dvojlůžko+ 2× jednolůžko': '2× double bed+ 2× single bed',
    '1× dvojlůžko+ 1× rozkládací pohovka': '1× double bed+ 1× sofa bed',
    '1,5': '1.5',

    // Calendar UI
    'Klikněte na den příjezdu a poté odjezdu': 'Click the arrival date, then the departure date',
    'Vyberte datum odjezdu': 'Select a departure date',
    'Záloha k rezervaci (30 %):': 'Deposit on booking (30%):',
    'Doplatek (týden před příjezdem):': 'Balance (one week before arrival):',
    'Zrušit výběr': 'Clear selection',
    'Zrušit': 'Clear',
    'ceny v Kč / noc, vč. DPH': 'prices in CZK / night, incl. VAT',
    'Volný den': 'Available',
    'Obsazeno': 'Occupied',
    'Min': 'Min',
    'nocí': 'nights',

    // Info sidebar
    'Příjezd: od 15:00': 'Check-in: from 15:00',
    'Odjezd: do 10:30': 'Check-out: by 10:30',
    'Odjezd: do 11:00': 'Check-out: by 11:00',
  };

  // ── Apply translations ──
  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'cs' ? 'EN' : 'CZ';

    if (lang === 'en') {
      translateNodes(document.body, T);
    } else {
      // Reload page to restore Czech (simplest approach for reverse)
      location.reload();
    }
  }

  function translateNodes(root, dict) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const parent = node.parentNode;
      if (!parent || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') return;
      const text = node.textContent.trim();
      if (text && dict[text]) {
        node.textContent = node.textContent.replace(text, dict[text]);
      }
    });

    // Also translate placeholders and values
    root.querySelectorAll('[placeholder]').forEach(el => {
      const ph = el.getAttribute('placeholder');
      if (dict[ph]) el.setAttribute('placeholder', dict[ph]);
    });
  }

  function getLang() {
    return localStorage.getItem('lang') || 'cs';
  }

  window.toggleLang = function () {
    const current = getLang();
    const next = current === 'cs' ? 'en' : 'cs';
    localStorage.setItem('lang', next);
    applyLang(next);
  };

  function init() {
    const lang = getLang();
    if (lang === 'en') {
      applyLang('en');
    } else {
      const btn = document.getElementById('lang-toggle');
      if (btn) btn.textContent = 'EN';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
