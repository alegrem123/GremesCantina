import React, { useState, useEffect, useRef } from "react";
import VinoDettaglio from "@/components/VinoDettglio";

const BOTTLE_IMG =
  "/vino.png";

const vini = [
  {
    name: "Gremes Bianco",
    annata: "2023",
    varietale: "Pinot Grigio · Trentino DOC",
    tipoLabel: "Bianco",
    tipo: "bianco",
    desc: "Struttura sapida, note di mela selvatica e pietra focaia. Freschezza alpina che persiste.",
    descLunga:
      "Il Gremes Bianco nasce dai vigneti più alti del Maso Plotegher, dove il suolo di porfido rosso e le escursioni termiche notturne conferiscono al Pinot Grigio una mineralità quasi tagliente. Fermentato in acciaio inox a temperatura controllata, esprime un profilo varietale purissimo: non interveniamo sul vino se non per preservarne l'identità di luogo. Un bianco da meditazione oltre che da tavola.",
    prezzo: "€ 18",
    scheda: [
      { label: "Vitigno", value: "Pinot Grigio 100%" },
      { label: "Denominazione", value: "Trentino DOC" },
      { label: "Comune", value: "Maso Plotegher, Trento (TN)" },
      { label: "Altitudine", value: "560–600 m s.l.m." },
      { label: "Esposizione", value: "Sud-sudovest" },
      { label: "Suolo", value: "Porfido rosso e depositi morenici" },
      { label: "Vendemmia", value: "Manuale, fine settembre" },
      { label: "Vinificazione", value: "Acciaio inox, fermentazione a freddo" },
      {
        label: "Affinamento",
        value: "4 mesi in acciaio + 2 mesi in bottiglia",
      },
      { label: "Alcol", value: "13% vol." },
      { label: "Temperatura di servizio", value: "8–10 °C" },
      {
        label: "Abbinamenti",
        value: "Trota di torrente, risotto agli asparagi, formaggi freschi",
      },
    ],
    organolettica: [
      {
        tipo: "Vista",
        desc: "Giallo paglierino luminoso con riflessi verdolini e ottima limpidezza.",
      },
      {
        tipo: "Olfatto",
        desc: "Mela Golden selvatica, pera williams, fiori bianchi, pietra focaia e sentori di limone candito.",
      },
      {
        tipo: "Gusto",
        desc: "Attacco fresco e sapido, corpo medio, buona persistenza aromatica con finale minerale. Acidità vivace e bilanciata.",
      },
    ],
    processo: [
      {
        titolo: "Selezione in Vigna",
        desc: "La vendemmia del Pinot Grigio avviene manualmente nella terza settimana di settembre. Ogni grappolo è selezionato a mano per garantire perfetta maturità fenolica senza eccesso di zuccheri.",
      },
      {
        titolo: "Pressatura Soffice",
        desc: "Le uve vengono pressate intere con pressa pneumatica a bassa pressione. Il mosto viene lasciato decantare a freddo per 12 ore prima dell'avvio della fermentazione.",
      },
      {
        titolo: "Fermentazione in Acciaio",
        desc: "Fermentazione alcolica a temperatura controllata (16–18 °C) con lieviti indigeni selezionati dalla nostra cantina. Durata: 18–22 giorni.",
      },
      {
        titolo: "Affinamento e Imbottigliamento",
        desc: "4 mesi sui lieviti fini in vasca inox, poi riposo in bottiglia per altri 2 mesi prima della commercializzazione. Imbottigliamento senza filtrazione grossolana.",
      },
    ],
  },
  {
    name: "Gremes Rosso Riserva",
    annata: "2020",
    varietale: "Teroldego · Trentino DOC",
    tipoLabel: "Rosso",
    tipo: "rosso",
    desc: "Colore rubino profondo. Frutti neri maturi, spezie alpine, tannini eleganti e persistenti.",
    descLunga:
      "La Riserva è il vino che più di ogni altro racconta l'ambizione della cantina. Il Teroldego, vitigno autoctono trentino di carattere indomito, cresce sui nostri terreni più antichi, con radici che toccano la roccia madre a meno di un metro di profondità. Vendemmia tardiva, macerazione lunga, affinamento in botti di rovere di Slavonia: un vino che richiede pazienza per essere capito e ricordato.",
    prezzo: "€ 32",
    scheda: [
      { label: "Vitigno", value: "Teroldego 100%" },
      { label: "Denominazione", value: "Trentino DOC Superiore" },
      { label: "Comune", value: "Maso Plotegher, Trento (TN)" },
      { label: "Altitudine", value: "520–560 m s.l.m." },
      { label: "Esposizione", value: "Sud" },
      { label: "Suolo", value: "Ghiaia calcarea e argilla rossa" },
      { label: "Vendemmia", value: "Manuale, prima decade di ottobre" },
      {
        label: "Vinificazione",
        value: "Macerazione 18–22 giorni in tini di legno",
      },
      {
        label: "Affinamento",
        value: "18 mesi in botti grandi di rovere + 12 mesi in bottiglia",
      },
      { label: "Alcol", value: "14% vol." },
      { label: "Temperatura di servizio", value: "16–18 °C" },
      {
        label: "Abbinamenti",
        value:
          "Selvaggina di montagna, brasato al Teroldego, formaggi stagionati",
      },
    ],
    organolettica: [
      {
        tipo: "Vista",
        desc: "Rosso rubino con sfumature violacee, denso e concentrato. Unghia porpora.",
      },
      {
        tipo: "Olfatto",
        desc: "More, mirtilli selvatici, viola appassita, spezie di montagna (pepe nero, cannella), cioccolato fondente e cenni di terra dopo l'arieggiamento.",
      },
      {
        tipo: "Gusto",
        desc: "Ingresso morbido e avvolgente. Tannini fitti ma setosi. Lunga persistenza con finale caldo, speziato e di grande eleganza.",
      },
    ],
    processo: [
      {
        titolo: "Vendemmia Tardiva e Selezione",
        desc: "La raccolta avviene nei primi giorni di ottobre, quando la buccia del Teroldego ha raggiunto la massima concentrazione polifenolica. Selezione rigida in vigna: solo i grappoli perfetti entrano in cantina.",
      },
      {
        titolo: "Macerazione Lunga in Tini di Legno",
        desc: "La pigiatura è delicata per preservare l'integrità delle bucce. La macerazione dura 18–22 giorni con rimontaggi manuali due volte al giorno per favorire l'estrazione gentile.",
      },
      {
        titolo: "Affinamento in Rovere di Slavonia",
        desc: "Il vino riposa 18 mesi in botti grandi di rovere di Slavonia da 25–30 hl. Nessun passaggio in barrique: vogliamo che il legno accompagni, non domini.",
      },
      {
        titolo: "Riposo in Bottiglia",
        desc: "Ulteriori 12 mesi di affinamento in bottiglia in cantina a temperatura costante (14 °C) prima della messa in commercio.",
      },
    ],
  },
  {
    name: "Plotegher Brut",
    annata: "2019",
    varietale: "Metodo Classico · Trentodoc",
    tipoLabel: "Spumante",
    tipo: "spumante",
    desc: "Bollicine fini e persistenti, perlage elegante. Agrumi canditi, crosta di pane, finale minerale.",
    descLunga:
      "Il Plotegher Brut è la nostra dichiarazione d'amore per il Trentodoc, la denominazione delle bollicine di montagna. Pinot Nero e Chardonnay in parti uguali, vinificati separatamente e assemblati in fase di tirage. Oltre 36 mesi sui lieviti in bottiglia: un tempo di attesa che si traduce in complessità autentica, non costruita.",
    prezzo: "€ 28",
    scheda: [
      { label: "Vitigni", value: "Pinot Nero 50% · Chardonnay 50%" },
      { label: "Denominazione", value: "Trentodoc" },
      { label: "Comune", value: "Maso Plotegher, Trento (TN)" },
      { label: "Altitudine", value: "540–580 m s.l.m." },
      { label: "Metodo", value: "Classico (rifermentazione in bottiglia)" },
      { label: "Suolo", value: "Porfido e calcare morenico" },
      { label: "Vendemmia", value: "Manuale, metà agosto (base spumante)" },
      { label: "Affinamento sui lieviti", value: "36+ mesi" },
      { label: "Dosaggio", value: "Brut (< 12 g/l)" },
      { label: "Alcol", value: "12.5% vol." },
      { label: "Temperatura di servizio", value: "6–8 °C" },
      {
        label: "Abbinamenti",
        value:
          "Aperitivo, crostacei, risotto allo zafferano, antipasti di pesce di lago",
      },
    ],
    organolettica: [
      {
        tipo: "Vista",
        desc: "Giallo dorato luminoso. Perlage finissimo, persistente, colonna di bollicine elegante.",
      },
      {
        tipo: "Olfatto",
        desc: "Crosta di pane fresca, agrumi canditi (mandarino, cedro), mela cotogna, sfumature di lievito nobile e note tostate di nocciola.",
      },
      {
        tipo: "Gusto",
        desc: "Effervescenza setosa, acidità fresca e vivace. Buona struttura, finale sapido con nota minerale dolce e persistente.",
      },
    ],
    processo: [
      {
        titolo: "Vendemmia Precoce",
        desc: "Per il vino base da spumantizzare, la vendemmia avviene a metà agosto, con uve ricche di acidità naturale e a basso grado zuccherino: la base ideale per le bollicine d'alta quota.",
      },
      {
        titolo: "Vinificazione Separata dei Vitigni",
        desc: "Pinot Nero (vinificato in bianco) e Chardonnay vengono fermentati separatamente in acciaio inox. L'assemblage (cuvée) avviene in inverno dopo valutazione organolettica.",
      },
      {
        titolo: "Tirage e Rifermentazione in Bottiglia",
        desc: "La cuvée viene imbottigliata con l'aggiunta di liqueur de tirage (vino, zucchero, lieviti selezionati). La rifermentazione in bottiglia avviene in cantina a 12 °C.",
      },
      {
        titolo: "Affinamento sui Lieviti e Sboccatura",
        desc: "36 mesi di affinamento sui lieviti in bottiglia orizzontale. Remuage, dégorgement e aggiunta della liqueur d'expédition. Ogni bottiglia è numerata a mano.",
      },
    ],
  },
  {
    name: "Gremes Gewürz",
    annata: "2022",
    varietale: "Gewürztraminer · Alto Adige DOC",
    tipoLabel: "Bianco",
    tipo: "bianco",
    desc: "Bouquet aromatico di litchi, rosa e spezie orientali. Morbido, avvolgente, persistente.",
    descLunga:
      "Il Gewürztraminer è il vitigno più capriccioso e affascinante della nostra collezione. Richiede un microclima preciso, una raccolta quasi chirurgica e mano leggera in cantina per non soffocare il suo bouquet esplosivo. Il nostro cresce su terreni di origine vulcanica a ridosso del fondovalle, dove la rifrazione termica serale esalta l'aromaticità naturale delle bacche. Un vino che non si fa avanzare: si beve, si ricorda.",
    prezzo: "€ 22",
    scheda: [
      { label: "Vitigno", value: "Gewürztraminer 100%" },
      { label: "Denominazione", value: "Alto Adige DOC" },
      { label: "Comune", value: "Maso Plotegher, Trento (TN)" },
      { label: "Altitudine", value: "480–520 m s.l.m." },
      { label: "Esposizione", value: "Sud-est" },
      { label: "Suolo", value: "Origine vulcanica, ricco di minerali" },
      { label: "Vendemmia", value: "Manuale, prima decade di ottobre" },
      { label: "Vinificazione", value: "Pressatura soffice, acciaio inox" },
      { label: "Affinamento", value: "6 mesi sui lieviti fini" },
      { label: "Alcol", value: "13.5% vol." },
      { label: "Temperatura di servizio", value: "10–12 °C" },
      {
        label: "Abbinamenti",
        value:
          "Formaggi erborinati, cucina etnica speziata, foie gras, dessert alla frutta esotica",
      },
    ],
    organolettica: [
      {
        tipo: "Vista",
        desc: "Giallo dorato carico con riflessi ambrati. Ottima intensità cromatica.",
      },
      {
        tipo: "Olfatto",
        desc: "Esplosivo: litchi, rosa canina, petali di fiori bianchi, zenzero, cannella, mango maturo e sfumature di spezie orientali.",
      },
      {
        tipo: "Gusto",
        desc: "Morbido e avvolgente all'ingresso. Corpo pieno, alcolicità percepita equilibrata dalla componente acida. Persistenza aromatica intensa.",
      },
    ],
    processo: [
      {
        titolo: "Raccolta a Maturità Fenolica Ottimale",
        desc: "Il Gewürztraminer viene raccolto quando i terpeni (responsabili dell'aromaticità) raggiungono il loro picco. La raccolta è manuale, cassetta per cassetta, in ore fresche mattutine.",
      },
      {
        titolo: "Criomacerazione Prefermentativa",
        desc: "Le uve intere vengono lasciate a contatto con le bucce per 6–8 ore a 5 °C prima della pressatura. Questa tecnica esalta l'estrazione degli aromi varietali terpènici.",
      },
      {
        titolo: "Fermentazione a Bassa Temperatura",
        desc: "Fermentazione lenta a 15 °C con lieviti selezionati per la valorizzazione aromatica. Durata: 25–30 giorni per preservare ogni sfumatura del bouquet.",
      },
      {
        titolo: "Affinamento sui Lieviti Fini",
        desc: "6 mesi a contatto con i lieviti fini su fondo vasca. Periodico batonnage delicato per aggiungere complessità e morbidezza senza perdere freschezza.",
      },
    ],
  },
  {
    name: "Vigna Alta",
    annata: "2021",
    varietale: "Marzemino · Trentino DOC",
    tipoLabel: "Rosso",
    tipo: "rosso",
    desc: "Il vitigno simbolo del Trentino in versione d'altura: violetta, mora, spezie gentili.",
    descLunga:
      "Vigna Alta prende il nome dalla parcella più elevata del maso, 640 metri di quota dove il Marzemino — vitigno identitario del Trentino — esprime una leggerezza di carattere impossibile da replicare in pianura. Violetta fresca, frutti di bosco, una speziatura gentile: un rosso che non fatica per convincerti, ti seduce semplicemente.",
    prezzo: "€ 26",
    scheda: [
      { label: "Vitigno", value: "Marzemino 100%" },
      { label: "Denominazione", value: "Trentino DOC" },
      { label: "Comune", value: "Vigna Alta, Maso Plotegher (TN)" },
      { label: "Altitudine", value: "620–640 m s.l.m." },
      { label: "Esposizione", value: "Sud-sudest" },
      { label: "Suolo", value: "Morenico, ghiaia calcarea fine" },
      { label: "Vendemmia", value: "Manuale, fine settembre" },
      {
        label: "Vinificazione",
        value: "Macerazione breve 8–10 giorni, acciaio",
      },
      { label: "Affinamento", value: "8 mesi acciaio + 3 mesi bottiglia" },
      { label: "Alcol", value: "13% vol." },
      { label: "Temperatura di servizio", value: "14–16 °C" },
      {
        label: "Abbinamenti",
        value:
          "Carni bianche arrosto, taglieri di salumi trentini, pizza, pasta al ragù",
      },
    ],
    organolettica: [
      {
        tipo: "Vista",
        desc: "Rosso rubino di media intensità, unghia violacea. Limpido e brillante.",
      },
      {
        tipo: "Olfatto",
        desc: "Violetta fresca, mora di rovo, mirtillo, lampone, cenni di pepe rosa e liquirizia dolce.",
      },
      {
        tipo: "Gusto",
        desc: "Fresco, sciolto, beverino. Tannini levigati, acidità gradevole, finale su note fruttate e floreali. Leggero e preciso.",
      },
    ],
    processo: [
      {
        titolo: "Vendemmia in Quota",
        desc: "A 640 metri il Marzemino matura lentamente. La raccolta si sposta a fine settembre quando le temperature notturne sotto i 10 °C hanno fissato la struttura aromatica nel frutto.",
      },
      {
        titolo: "Macerazione Breve a Temperatura Controllata",
        desc: "Per preservare la leggerezza varietale, la macerazione sulle bucce dura solo 8–10 giorni a 24 °C con follature leggere. L'obiettivo è estrarre colore e frutto, non tannini aggressivi.",
      },
      {
        titolo: "Affinamento in Acciaio",
        desc: "8 mesi in vasca inox per preservare la freschezza e il profilo fruttato. Nessun legno: la cifra del Vigna Alta è la purezza di espressione.",
      },
    ],
  },
  {
    name: "Gremes Rosé",
    annata: "2023",
    varietale: "Pinot Nero · Trentino DOC",
    tipoLabel: "Rosato",
    tipo: "rosato",
    desc: "Colore cerasuolo luminoso. Fragoline di bosco, petali di rosa, freschezza viva e golosa.",
    descLunga:
      "Il nostro rosato nasce da una scelta precisa: vinificare il Pinot Nero in rosa anziché in rosso per catturarne il lato più luminoso e gastronomico. La brevissima macerazione di 4 ore cede al mosto quel colore cerasuolo vivido che è garanzia di cura artigianale. Nessuna aggiunta di solfiti oltre al minimo necessario. Un vino da estate, da mare mancato, da domenica in vigna.",
    prezzo: "€ 20",
    scheda: [
      { label: "Vitigno", value: "Pinot Nero 100%" },
      { label: "Denominazione", value: "Trentino DOC" },
      { label: "Comune", value: "Maso Plotegher, Trento (TN)" },
      { label: "Altitudine", value: "540–570 m s.l.m." },
      { label: "Esposizione", value: "Sud" },
      { label: "Suolo", value: "Sabbie e ghiaie di porfido" },
      { label: "Vendemmia", value: "Manuale, seconda settimana di settembre" },
      { label: "Vinificazione", value: "Saignée, macerazione 4 ore, acciaio" },
      { label: "Affinamento", value: "3 mesi acciaio + 1 mese bottiglia" },
      { label: "Alcol", value: "12.5% vol." },
      { label: "Temperatura di servizio", value: "8–10 °C" },
      {
        label: "Abbinamenti",
        value:
          "Antipasti estivi, salmone, sashimi, insalate tiepide, pizza bianca",
      },
    ],
    organolettica: [
      {
        tipo: "Vista",
        desc: "Rosa cerasuolo luminoso con riflessi salmone. Intensità cromatica media, trasparente e brillante.",
      },
      {
        tipo: "Olfatto",
        desc: "Fragoline di bosco, petali di rosa, lampone fresco, melograno, leggero tocco di agrume bianco.",
      },
      {
        tipo: "Gusto",
        desc: "Fresco, asciutto, godibile. Buona acidità, finale pulito e leggermente sapido. Bevuta snella e soddisfacente.",
      },
    ],
    processo: [
      {
        titolo: "Raccolta Fresca e Veloce",
        desc: "Il Pinot Nero per il rosé viene raccolto in cassette da 15 kg nelle prime ore del mattino, quando l'uva è ancora fresca, e trasportato rapidamente in cantina per evitare ossidazioni.",
      },
      {
        titolo: "Metodo Saignée",
        desc: "Le uve vengono delicatamente diraspate e pigiate. Dopo sole 4 ore di macerazione a freddo sulle bucce, il mosto rosa viene separato (saignée) e trasferito in acciaio inox.",
      },
      {
        titolo: "Fermentazione Fresca",
        desc: "Fermentazione a 14 °C con lieviti selezionati per profili fruttati. Durata: 20 giorni. Minimo intervento per preservare la spontaneità aromatica.",
      },
    ],
  },
];

const TIPO_LABELS = {
  tutti: "Tutti",
  bianco: "Bianchi",
  rosso: "Rossi",
  rosato: "Rosati",
  spumante: "Spumanti",
};

export default function Collezione() {
  const [filtro, setFiltro] = useState("tutti");
  const [vinoAperto, setVinoAperto] = useState(null);
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    filtro === "tutti" ? vini : vini.filter((v) => v.tipo === filtro);

  return (
    <>
      <style>{`
        .col-root {
          background: #F7F0E6;
          padding: 7rem 2rem;
        }
        .col-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .col-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .col-eyebrow {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 1.2rem;
        }
        .col-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 400;
          color: #5B2034;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .col-subheading {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(58,46,40,0.6);
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .col-filters {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .col-filter-btn {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 0.6rem 1.4rem;
          border: 1px solid rgba(201,169,110,0.4);
          background: transparent;
          color: rgba(58,46,40,0.6);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .col-filter-btn:hover,
        .col-filter-btn.active {
          border-color: #7A2D45;
          background: #7A2D45;
          color: #F7F0E6;
        }
        .col-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .col-card {
          background: #fff;
          border: 1px solid rgba(201,169,110,0.2);
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
          cursor: pointer;
        }
        .col-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .col-card-img-wrap {
          overflow: hidden;
          height: 300px;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .col-card-img {
          height: 100%;
          width: 100%;
          object-fit: contain;
          transition: transform 0.35s ease;
          transform-origin: center center;
        }
        .col-card:hover .col-card-img {
          transform: scale(1.03);
        }
        .col-card-tipo {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7A2D45;
          background: rgba(232,213,176,0.9);
          padding: 0.3rem 0.7rem;
        }
        .col-card-body {
          padding: 1.8rem 2rem;
        }
        .col-card-varietal {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 0.5rem;
        }
        .col-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 500;
          color: #5B2034;
          margin-bottom: 0.25rem;
        }
        .col-card-annata {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          color: rgba(58,46,40,0.5);
          margin-bottom: 0.9rem;
        }
        .col-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          color: rgba(58,46,40,0.75);
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }
        .col-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.2rem;
          border-top: 1px solid rgba(201,169,110,0.2);
        }
        .col-card-price {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 500;
          color: #7A2D45;
        }
        .col-card-btn {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 0.55rem 1.2rem;
          border: 1px solid rgba(92,26,46,0.4);
          color: #7A2D45;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .col-card-btn:hover {
          background: #7A2D45;
          color: #F7F0E6;
          border-color: #7A2D45;
        }
        @media (max-width: 900px) {
          .col-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .col-root { padding: 4.5rem 1.5rem; }
          .col-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .col-card-img-wrap { height: 240px; }
        }
      `}</style>

      <section id="collezione" className="col-root" ref={ref}>
        <div className="col-inner">
          <div className="col-header">
            <span className="col-eyebrow">Collezione</span>
            <h2 className="col-heading">I Nostri Vini</h2>
            <p className="col-subheading">
              Ogni etichetta è l'espressione di un suolo, un millesimo, una
              scelta di vigna. Clicca su un vino per scoprirne la storia
              completa.
            </p>
          </div>

          <div className="col-filters">
            {Object.entries(TIPO_LABELS).map(([key, label]) => (
              <button
                key={key}
                className={`col-filter-btn${filtro === key ? " active" : ""}`}
                onClick={() => setFiltro(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="col-grid">
            {filtered.map((v, i) => (
              <div
                className={`col-card${revealed ? " visible" : ""}`}
                key={v.name}
                style={{ transitionDelay: revealed ? `${i * 80}ms` : "0ms" }}
                onClick={() => setVinoAperto(v)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setVinoAperto(v)}
                aria-label={`Scopri ${v.name}`}
              >
                <div className="col-card-img-wrap">
                  <img
                    className="col-card-img"
                    src={v.img || BOTTLE_IMG}
                    alt={v.name}
                    loading="lazy"
                  />
                  <span className="col-card-tipo">{TIPO_LABELS[v.tipo]}</span>
                </div>
                <div className="col-card-body">
                  <p className="col-card-varietal">{v.varietale}</p>
                  <h3 className="col-card-name">{v.name}</h3>
                  <p className="col-card-annata">Millesimo {v.annata}</p>
                  <p className="col-card-desc">{v.desc}</p>
                  <div className="col-card-footer">
                    <span className="col-card-price">{v.prezzo}</span>
                    <button
                      className="col-card-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setVinoAperto(v);
                      }}
                    >
                      Scopri →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {vinoAperto && (
        <VinoDettaglio vino={vinoAperto} onClose={() => setVinoAperto(null)} />
      )}
    </>
  );
}
