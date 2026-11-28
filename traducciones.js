/* =====================================================================
   TRADUCCIONES de Omnia Tria (inglés y francés).
   El español está en index.html; aquí solo van las otras versiones.
   ===================================================================== */
const IDIOMAS = ["es", "en", "fr"];

const UI = {
  es: { inicio: "Inicio", galeria: "Galería", anteriores: "Anteriores", articulos: "Artículos",
        articulo1: "artículo", articuloN: "artículos", piezas: "piezas",
        vacioTema: "Todavía no hay artículos en este tema.", pronto: "Muy pronto, el primer artículo.",
        indiceDe: n => "Índice de " + n.toLowerCase(), frase: "Frase", detalle: "Detalle", publicadaEn: "Publicada en",
        todoEn: n => "← Todo en " + n, anterior: "← Anterior", siguiente: "Siguiente →",
        laEscena: "La escena", verYoutube: "▶ Ver en YouTube", video: "Vídeo",
        tresDelDia: "Las tres del día", verAnteriores: "Ver anteriores →", verGaleria: "Ver galería →",
        galeriaIntro: "Todas las «tres del día», de la más reciente a la más antigua.", hoyPortada: "hoy en portada",
        fotoDia: "Foto del día", cerrar: "Cerrar", idioma: "Idioma",
        meses: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
        fecha: (d, m, a) => d + " de " + m + " de " + a, comillas: t => "«" + t + "»" },
  en: { inicio: "Home", galeria: "Gallery", anteriores: "Earlier posts", articulos: "Posts",
        articulo1: "post", articuloN: "posts", piezas: "pieces",
        vacioTema: "No posts in this section yet.", pronto: "The first post is coming soon.",
        indiceDe: n => "Index: " + n, frase: "Quote", detalle: "Details", publicadaEn: "Published in",
        todoEn: n => "← All in " + n, anterior: "← Previous", siguiente: "Next →",
        laEscena: "The scene", verYoutube: "▶ Watch on YouTube", video: "Video",
        tresDelDia: "Today's three", verAnteriores: "See earlier →", verGaleria: "See the gallery →",
        galeriaIntro: "Every “today's three”, newest first.", hoyPortada: "on the home page today",
        fotoDia: "Photo of the day", cerrar: "Close", idioma: "Language",
        meses: ["January","February","March","April","May","June","July","August","September","October","November","December"],
        fecha: (d, m, a) => d + " " + m + " " + a, comillas: t => "“" + t + "”" },
  fr: { inicio: "Accueil", galeria: "Galerie", anteriores: "Articles précédents", articulos: "Articles",
        articulo1: "article", articuloN: "articles", piezas: "pièces",
        vacioTema: "Pas encore d'articles dans cette rubrique.", pronto: "Le premier article arrive bientôt.",
        indiceDe: n => "Index : " + n.toLowerCase(), frase: "Citation", detalle: "Détail", publicadaEn: "Publié dans",
        todoEn: n => "← Rubrique " + n, anterior: "← Précédent", siguiente: "Suivant →",
        laEscena: "La scène", verYoutube: "▶ Voir sur YouTube", video: "Vidéo",
        tresDelDia: "Les trois du jour", verAnteriores: "Voir les précédentes →", verGaleria: "Voir la galerie →",
        galeriaIntro: "Toutes les « trois du jour », de la plus récente à la plus ancienne.", hoyPortada: "aujourd'hui en une",
        fotoDia: "Photo du jour", cerrar: "Fermer", idioma: "Langue",
        meses: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
        fecha: (d, m, a) => (d === 1 ? "1er" : d) + " " + m + " " + a, comillas: t => "« " + t + " »" }
};

/* Nombres de los temas y de la primera columna de cada índice. */
const TEMAS_TRAD = {
  en: { Sinestesia: "Synaesthesia", Frases: "Quotes", "Películas": "Films", Arte: "Art", Historias: "Stories",
        Literatura: "Literature", "Música": "Music", Musicales: "Musicals", Series: "TV series" },
  fr: { Sinestesia: "Synesthésie", Frases: "Citations", "Películas": "Films", Arte: "Art", Historias: "Histoires",
        Literatura: "Littérature", "Música": "Musique", Musicales: "Comédies musicales", Series: "Séries" }
};
const QUIEN_TRAD = {
  en: { Obra: "Work", Autor: "Author", "Película": "Film", Historia: "Story", Pieza: "Piece", Musical: "Musical", Serie: "Series" },
  fr: { Obra: "Œuvre", Autor: "Auteur", "Película": "Film", Historia: "Histoire", Pieza: "Morceau", Musical: "Comédie musicale", Serie: "Série" }
};
const DESCRIPCION_TRAD = {
  Sinestesia: {
    en: "Posts that blend the arts: painting, music, film, literature… Whatever won't fit in a single section.",
    fr: "Des articles qui mêlent les arts : peinture, musique, cinéma, littérature… Tout ce qui ne tient pas dans une seule rubrique."
  }
};
/* Títulos de las fotos del día. */
const OBRAS_TRAD = {
  "Autorretrato": { en: "Self-portrait", fr: "Autoportrait" },
  "Magnetita": { en: "Magnetite", fr: "Magnétite" }
};

/* Artículos: mismo orden de piezas que en español. */
const TRAD = {
  "3-canciones-de-musicales": {
    en: { titulo: "3 songs from musicals",
          entradilla: "Today, three songs from musicals performed by great artists.",
          items: [
            { texto: "The first, Easy Terms, from the musical Blood Brothers, sung by Michael Ball, one of my favourite artists: a great vocal range and great performances. I'll be posting more of him over time." },
            { subtitulo: "Rachelle Ann Go and Lea Salonga",
              texto: "The second is a great duet by Rachelle Ann Go and Lea Salonga. Rachelle is a great singer, remembered for her part in the 25th anniversary of Miss Saigon. Lea Salonga is one of the greats: besides Miss Saigon, where she played the lead, Kim, she has been in many others, and she is remembered for her Éponine in Les Misérables.",
              videos: [ { titulo: "Rachelle Ann Go and Lea Salonga" } ] },
            { titulo: "Les Misérables",
              texto: "The third is unbeatable: Philip Quast in Les Misérables." }
          ],
          cierre: "All three can be bought second-hand very cheaply: there's no excuse not to own them.",
          nota: { titulo: "Now showing", pie: "Les Misérables, Teatro Apolo, Madrid",
                  texto: "Les Misérables is currently running in Madrid. I went to see it and it is every bit as good as the best London productions. You have to go and see it." } },
    fr: { titulo: "3 chansons de comédies musicales",
          entradilla: "Aujourd'hui, trois chansons de comédies musicales interprétées par de grands artistes.",
          items: [
            { texto: "La première, Easy Terms, de la comédie musicale Blood Brothers, interprétée par Michael Ball, l'un de mes artistes préférés : une grande tessiture et de grandes interprétations. J'en publierai d'autres de lui au fil du temps." },
            { subtitulo: "Rachelle Ann Go et Lea Salonga",
              texto: "La deuxième est un superbe duo de Rachelle Ann Go et Lea Salonga. Rachelle est une grande chanteuse, dont on se souvient pour sa participation au 25e anniversaire de Miss Saigon. Lea Salonga est l'une des plus grandes : outre Miss Saigon, où elle tenait le rôle principal, Kim, elle a joué dans bien d'autres, et l'on se souvient de son Éponine dans Les Misérables.",
              videos: [ { titulo: "Rachelle Ann Go et Lea Salonga" } ] },
            { titulo: "Les Misérables",
              texto: "La troisième est insurpassable : Philip Quast dans Les Misérables." }
          ],
          cierre: "Les trois s'achètent d'occasion à très bon prix : aucune excuse pour ne pas les avoir.",
          nota: { titulo: "À l'affiche", pie: "Les Misérables, Teatro Apolo, Madrid",
                  texto: "Les Misérables est actuellement à l'affiche à Madrid. Je suis allé le voir et il n'a rien à envier aux meilleures mises en scène londoniennes. Il faut aller le voir." } }
  },

  "el-nadador": {
    en: { titulo: "The Swimmer: a painting, a book and a film",
          entradilla: "Three ways to dive into the pool: a painting, a short story and the film that came out of it.",
          items: [
            { subtitulo: "David Hockney, 1967 · A painting",
              texto: "A painting that breeds unease. Muted colours; we know someone is there, but we can't see them; horizontals and verticals set against the splash. Solitude and infinity: we gaze into the distance and leave civilisation behind.\n\nHockney, they say, was born with synaesthesia. What colour would he see when he heard the splash?" },
            { titulo: "The Swimmer", subtitulo: "John Cheever · A book",
              texto: "A man decides to swim home, pool by pool, through his neighbours' gardens. It starts like any summer afternoon and doesn't end the way you'd expect.\n\nI recommend buying the 2025 Penguin edition (one day we'll talk about how this publisher began)." },
            { titulo: "The Swimmer", subtitulo: "Frank Perry, 1968 · A film",
              texto: "The adaptation of Cheever's story, starring Burt Lancaster. The score is by Marvin Hamlisch, his first for the cinema.",
              videos: [ { titulo: "The film" }, { titulo: "The soundtrack" } ] }
          ] },
    fr: { titulo: "Le Nageur : un tableau, un livre et un film",
          entradilla: "Trois façons de plonger dans la piscine : un tableau, une nouvelle et le film qui en est né.",
          items: [
            { subtitulo: "David Hockney, 1967 · Une image",
              texto: "Un tableau qui engendre l'inquiétude. Les couleurs éteintes ; on sait qu'il y a quelqu'un, mais on ne le voit pas ; l'horizontalité et la verticalité mêlées aux éclaboussures. La solitude et l'infini : nous regardons au loin et laissons la civilisation derrière nous.\n\nOn dit que Hockney est né synesthète. Quelle couleur verrait-il en entendant le plongeon ?" },
            { titulo: "Le Nageur", subtitulo: "John Cheever · Un livre",
              texto: "Un homme décide de rentrer chez lui à la nage, de piscine en piscine, à travers les jardins de ses voisins. Cela commence comme un après-midi d'été ordinaire et ne finit pas comme on s'y attend.\n\nJe recommande l'édition Penguin de 2025 (un jour, nous parlerons des origines de cet éditeur)." },
            { titulo: "Le Plongeon", subtitulo: "Frank Perry, 1968 · Un film",
              texto: "L'adaptation de la nouvelle de Cheever, avec Burt Lancaster. La musique est de Marvin Hamlisch, sa toute première pour le cinéma.",
              videos: [ { titulo: "Le film" }, { titulo: "La bande originale" } ] }
          ] }
  },

  "3-libros-de-umberto-eco": {
    en: { titulo: "3 books by Umberto Eco",
          entradilla: "Three books in which Umberto Eco poured all his learning. You don't need to read them from the start: open them at any page and read the poems he chose, the stories, look at the pictures…",
          items: [
            { titulo: "History of Beauty",
              texto: "I remember buying it: October 2005, at El Corte Inglés in Sabadell. I saw it and couldn't resist. Love at first sight. A hardback bound in white cloth, stamped in blue, with its magnificent dust jacket, its many stories and its superb pictures.\n\nEco traces how the idea of beauty has changed in Western art, from ancient Greece to today, with images and texts by the philosophers and writers of each age." },
            { titulo: "On Ugliness",
              texto: "When I saw more were coming out, I didn't wait long to buy them. This is the flip side of the first: monsters, demons, the grotesque, caricature… A journey showing that ugliness changes with the times just as much as beauty." },
            { titulo: "The Book of Legendary Lands",
              texto: "Places that never existed but that many people believed in: Atlantis, El Dorado, the kingdom of Prester John, the island of Utopia… A journey through the geography of the imagination." }
          ],
          cierre: "Three books beautifully published by Lumen. Essential, if you can find them." },
    fr: { titulo: "3 livres d'Umberto Eco",
          entradilla: "Trois livres où Umberto Eco a mis tout son savoir. Inutile de les lire depuis le début : on peut les ouvrir à n'importe quelle page et lire les poèmes qu'il a choisis, ses histoires, regarder ses images…",
          items: [
            { titulo: "Histoire de la beauté",
              texto: "Je me souviens de l'avoir acheté : octobre 2005, au Corte Inglés de Sabadell. Je l'ai vu et je n'ai pas pu résister. Un coup de foudre. Un livre relié en toile blanche, titré en bleu, avec sa magnifique jaquette, ses multiples histoires et ses images superbes.\n\nEco retrace l'évolution de l'idée de beauté dans l'art occidental, de la Grèce antique à nos jours, avec des images et des textes de philosophes et d'écrivains de chaque époque." },
            { titulo: "Histoire de la laideur",
              texto: "Quand j'ai vu qu'il y en avait d'autres, je n'ai pas tardé à les acheter. Voici l'autre face du premier : monstres, démons, le grotesque, la caricature… Un parcours qui montre que la laideur change avec les époques autant que la beauté." },
            { titulo: "Histoire des lieux de légende",
              texto: "Des lieux qui n'ont jamais existé mais auxquels beaucoup ont cru : l'Atlantide, l'Eldorado, le royaume du Prêtre Jean, l'île d'Utopie… Un voyage dans la géographie de l'imaginaire." }
          ],
          cierre: "Trois livres parfaitement édités par Lumen. Indispensables, si vous les trouvez." }
  },

  "3-versiones-de-lovers": {
    en: { titulo: "Lovers by Shigeru Umebayashi, 3 versions",
          entradilla: "Lovers is the theme from House of Flying Daggers (Zhang Yimou, 2004). An epic piece where fighting and love intertwine, with a powerful melody that carries a sense of hope.",
          items: [
            { subtitulo: "Traditional Chinese instruments",
              texto: "The most Eastern version, played on traditional Chinese instruments.",
              videos: [ { titulo: "With traditional Chinese instruments" } ] },
            { titulo: "Lovers, instrumental version", subtitulo: "Violin, cello and symphonic strings",
              texto: "There are two versions: one gives the spotlight to the solo violin and cello, the other uses the orchestra's full string section.",
              videos: [ { titulo: "Solo violin and cello" }, { titulo: "Full symphonic strings" } ] },
            { subtitulo: "Symphony orchestra and soprano",
              texto: "The complete version: full orchestra plus soprano voice. In the film it is sung by Kathleen Battle.",
              videos: [ { titulo: "Orchestra and soprano" } ] }
          ],
          cierre: "We'll be talking about more pieces by Shigeru Umebayashi, one of the great film composers." },
    fr: { titulo: "Lovers de Shigeru Umebayashi, 3 versions",
          entradilla: "Lovers est le thème du film Le Secret des poignards volants (House of Flying Daggers, Zhang Yimou, 2004). Un thème épique où se mêlent le combat et l'amour, avec une mélodie puissante qui porte en elle une espérance.",
          items: [
            { subtitulo: "Instruments traditionnels chinois",
              texto: "La version la plus orientale, avec des instruments traditionnels chinois.",
              videos: [ { titulo: "Avec des instruments traditionnels chinois" } ] },
            { titulo: "Lovers, version instrumentale", subtitulo: "Violon, violoncelle et cordes symphoniques",
              texto: "Il en existe deux versions : l'une donne la vedette au violon solo et au violoncelle, l'autre fait appel à toutes les cordes de l'orchestre symphonique.",
              videos: [ { titulo: "Violon et violoncelle solistes" }, { titulo: "Avec toutes les cordes symphoniques" } ] },
            { subtitulo: "Orchestre symphonique et soprano",
              texto: "La version complète : orchestre symphonique et voix de soprano. Dans le film, c'est Kathleen Battle qui la chante.",
              videos: [ { titulo: "Orchestre et soprano" } ] }
          ],
          cierre: "Nous reparlerons d'autres thèmes de Shigeru Umebayashi, l'un des grands compositeurs de musique de film." }
  },

  "3-westerns-de-clint-eastwood": {
    en: { titulo: "3 westerns by Clint Eastwood",
          entradilla: "Here is one of the best western trilogies, even if nobody ever called it that. These are films with no sentimentality, about good people fighting evil and circumstance. I've seen them many times and they're etched in my mind. If you haven't seen them, you should.",
          items: [
            { titulo: "The Outlaw Josey Wales",
              texto: "Josey Wales is a Missouri farmer whose family is murdered by militiamen during the Civil War. He joins the guerrillas and, when the war ends, refuses to surrender, and a price is put on his head. He flees west and, without meaning to, picks up other losers along the way who become his new family.",
              escena: "When Josey Wales goes to see Ten Bears, the Comanche chief, to offer him a deal: peace or war. No tricks, man to man.",
              escenaPie: "Ten Bears, in The Outlaw Josey Wales.",
              video: { titulo: "The scene on video" } },
            { titulo: "Pale Rider",
              texto: "A nameless preacher arrives at a camp of gold prospectors whom a powerful mining boss wants to drive off their land. Nobody knows where he comes from or who he is, but he's clearly not just a preacher. The title comes from the Book of Revelation: the rider on the pale horse.",
              escena: "The ending, when the rider leaves and vanishes as mysteriously as he came.",
              video: { titulo: "The arrival", texto: "When the pale rider arrives, the Angel of Death arrives." } },
            { titulo: "Unforgiven",
              texto: "William Munny was a ruthless gunfighter, but now he's a widowed farmer raising his children. He takes one last job: claiming the bounty on two cowboys who disfigured a woman. It's a western that dismantles the myth of the gunfighter. It won four Oscars, including Best Picture and Best Director.",
              escena: "The final showdown. I'll say no more.",
              video: { titulo: "The scene on video" } }
          ],
          cierre: "Best watched in order of release: you can see how Eastwood turns the western on its head." },
    fr: { titulo: "3 westerns de Clint Eastwood",
          entradilla: "Voici l'une des meilleures trilogies de western, même si personne ne l'a jamais baptisée ainsi. Des films sans sensiblerie, sur des gens de bien qui luttent contre le mal et contre les circonstances. Je les ai vus de nombreuses fois et ils sont gravés dans ma mémoire. Si vous ne les avez pas vus, vous devriez.",
          items: [
            { titulo: "Josey Wales hors-la-loi",
              texto: "Josey Wales est un fermier du Missouri dont la famille est massacrée par des miliciens pendant la guerre de Sécession. Il rejoint la guérilla et, à la fin de la guerre, refuse de se rendre ; sa tête est mise à prix. Il fuit vers l'Ouest et, sans le vouloir, recueille en chemin d'autres laissés-pour-compte qui deviennent sa nouvelle famille.",
              escena: "Quand Josey Wales va trouver Ten Bears, le chef comanche, pour lui proposer un marché : la paix ou la guerre. Sans ruse, d'homme à homme.",
              escenaPie: "Ten Bears, dans Josey Wales hors-la-loi.",
              video: { titulo: "La scène en vidéo" } },
            { titulo: "Pale Rider, le cavalier solitaire",
              texto: "Un prédicateur sans nom arrive dans un camp de chercheurs d'or qu'un puissant patron de mine veut chasser de leurs terres. Personne ne sait d'où il vient ni qui il est, mais il est évident que ce n'est pas qu'un prédicateur. Le titre vient de l'Apocalypse : le cavalier du cheval pâle.",
              escena: "La fin, quand le cavalier s'en va et disparaît aussi mystérieusement qu'il est venu.",
              video: { titulo: "L'arrivée", texto: "Quand arrive le cavalier pâle, arrive l'Ange de la Mort." } },
            { titulo: "Impitoyable",
              texto: "William Munny était un tueur sans pitié ; il est aujourd'hui un fermier veuf qui élève ses enfants. Il accepte un dernier contrat : toucher la prime offerte pour deux cow-boys qui ont défiguré une femme. Un western qui démonte le mythe du pistolero. Il a remporté quatre Oscars, dont ceux du meilleur film et du meilleur réalisateur.",
              escena: "Le combat final. Je n'en dis pas plus.",
              video: { titulo: "La scène en vidéo" } }
          ],
          cierre: "Mieux vaut les voir dans l'ordre de sortie : on voit comment Eastwood retourne le western." }
  },

  "3-frases-para-empezar": {
    en: { titulo: "3 quotes to start with",
          items: [
            { subtitulo: "Legendary Manchester United manager",
              contexto: "A journalist asked him: “Mr Ferguson, how do you manage to keep renewing the same team successfully over the years?”",
              cita: "It's simple. You just have to keep getting rid of the idiots.",
              texto: "To improve, you first need motivated people who know what they're doing and want to be part of the project. He doesn't say good footballers, or good or bad people: you have to get rid of the fools. Over time I'll dedicate many quotes to them.\n\n“If fools could fly, we'd never see the sky.”" },
            { subtitulo: "Writer",
              cita: "You can fight an ideology, but not a feeling.",
              texto: "And that's what we see today: heightened feelings about everything and for everything." },
            { subtitulo: "Filmmaker",
              cita: "A psychotic is someone who believes two and two make five; a neurotic is someone who knows two and two make four, but doesn't like it.",
              texto: "I'm a neurotic: every day I like fewer things." }
          ] },
    fr: { titulo: "3 citations pour commencer",
          items: [
            { subtitulo: "Entraîneur légendaire de Manchester United",
              contexto: "Un journaliste lui a demandé : « Monsieur Ferguson, comment faites-vous pour renouveler avec succès une même équipe au fil des années ? »",
              cita: "C'est simple. Il suffit de se débarrasser des imbéciles.",
              texto: "Pour progresser, il faut d'abord des gens motivés, qui savent ce qu'ils font et qui veulent participer au projet. Il ne parle pas de bons footballeurs, ni de bonnes ou de mauvaises personnes : il faut se débarrasser des idiots. Au fil du temps, je leur consacrerai bien des citations.\n\n« Si les idiots volaient, on ne verrait plus le ciel. »" },
            { subtitulo: "Écrivain",
              cita: "On peut combattre une idéologie, mais pas un sentiment.",
              texto: "Et c'est bien ce que l'on voit aujourd'hui : des sentiments exacerbés pour tout et en tout." },
            { subtitulo: "Cinéaste",
              cita: "Un psychotique est quelqu'un qui croit que deux et deux font cinq ; un névrosé, quelqu'un qui sait que deux et deux font quatre, mais que ça ne lui plaît pas.",
              texto: "Je suis névrosé : chaque jour, j'aime moins de choses." }
          ] }
  }
};
