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
    en: { titulo: "Books by Umberto Eco",
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
    fr: { titulo: "Livres d'Umberto Eco",
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
    en: { titulo: "Westerns by Clint Eastwood",
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
    fr: { titulo: "Westerns de Clint Eastwood",
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

/* =====================================================================
   CHINO (zh) y JAPONÉS (ja)
   ===================================================================== */
IDIOMAS.push("zh", "ja");

UI.zh = { inicio: "首页", galeria: "画廊", anteriores: "往期文章", articulos: "文章",
  articulo1: "篇文章", articuloN: "篇文章", piezas: "件作品",
  vacioTema: "本栏目暂无文章。", pronto: "第一篇文章即将发布。",
  indiceDe: n => n + "索引", frase: "名言", detalle: "详情", publicadaEn: "发表于",
  todoEn: n => "← 全部" + n, anterior: "← 上一篇", siguiente: "下一篇 →",
  laEscena: "名场面", verYoutube: "▶ 在 YouTube 上观看", video: "视频",
  tresDelDia: "今日三幅", verAnteriores: "查看往期 →", verGaleria: "查看画廊 →",
  galeriaIntro: "所有“今日三幅”，按时间由近及远排列。", hoyPortada: "今日首页",
  fotoDia: "今日图片", cerrar: "关闭", idioma: "语言",
  meses: [], fecha: (d, m, a, n) => a + "年" + n + "月" + d + "日", comillas: t => "“" + t + "”" };

UI.ja = { inicio: "ホーム", galeria: "ギャラリー", anteriores: "過去の記事", articulos: "記事",
  articulo1: "件の記事", articuloN: "件の記事", piezas: "作品",
  vacioTema: "このカテゴリーにはまだ記事がありません。", pronto: "最初の記事はまもなく公開します。",
  indiceDe: n => n + "の索引", frase: "名言", detalle: "詳細", publicadaEn: "掲載記事",
  todoEn: n => "← " + n + "の記事一覧", anterior: "← 前の記事", siguiente: "次の記事 →",
  laEscena: "名場面", verYoutube: "▶ YouTubeで見る", video: "動画",
  tresDelDia: "今日の三枚", verAnteriores: "過去の三枚を見る →", verGaleria: "ギャラリーを見る →",
  galeriaIntro: "すべての「今日の三枚」を新しい順に。", hoyPortada: "本日のトップ",
  fotoDia: "今日の一枚", cerrar: "閉じる", idioma: "言語",
  meses: [], fecha: (d, m, a, n) => a + "年" + n + "月" + d + "日", comillas: t => "「" + t + "」" };

TEMAS_TRAD.zh = { Sinestesia: "通感", Frases: "名言", "Películas": "电影", Arte: "艺术", Historias: "故事",
  Literatura: "文学", "Música": "音乐", Musicales: "音乐剧", Series: "剧集" };
TEMAS_TRAD.ja = { Sinestesia: "共感覚", Frases: "名言", "Películas": "映画", Arte: "アート", Historias: "物語",
  Literatura: "文学", "Música": "音楽", Musicales: "ミュージカル", Series: "ドラマ" };
QUIEN_TRAD.zh = { Obra: "作品", Autor: "作者", "Película": "电影", Historia: "故事", Pieza: "曲目", Musical: "音乐剧", Serie: "剧集" };
QUIEN_TRAD.ja = { Obra: "作品", Autor: "作者", "Película": "映画", Historia: "物語", Pieza: "曲", Musical: "ミュージカル", Serie: "ドラマ" };
DESCRIPCION_TRAD.Sinestesia.zh = "融合多种艺术的文章：绘画、音乐、电影、文学……一切无法归入单一栏目的内容。";
DESCRIPCION_TRAD.Sinestesia.ja = "絵画、音楽、映画、文学……複数の芸術が交わる記事。ひとつのカテゴリーに収まらないものをここに。";
OBRAS_TRAD["Autorretrato"].zh = "自画像"; OBRAS_TRAD["Autorretrato"].ja = "自画像";
OBRAS_TRAD["Magnetita"].zh = "磁铁矿"; OBRAS_TRAD["Magnetita"].ja = "磁鉄鉱";

Object.assign(TRAD["3-canciones-de-musicales"], {
  zh: { titulo: "3 首音乐剧歌曲",
    entradilla: "今天，三首由伟大艺术家演绎的音乐剧歌曲。",
    items: [
      { subtitulo: "Easy Terms · 迈克尔·鲍尔",
        texto: "第一首是音乐剧《Blood Brothers》中的《Easy Terms》，由迈克尔·鲍尔演唱。他是我最喜欢的艺术家之一：音域宽广，演绎出色。以后我会陆续分享更多他的作品。" },
      { titulo: "西贡小姐", subtitulo: "Rachelle Ann Go 与莉雅·萨隆加",
        texto: "第二首是 Rachelle Ann Go 与莉雅·萨隆加的精彩二重唱。Rachelle 是一位出色的歌手，人们记得她参演了《西贡小姐》25 周年纪念演出。莉雅·萨隆加是最伟大的歌手之一：除了在《西贡小姐》中饰演女主角金之外，她还参演了许多其他作品，她在《悲惨世界》中饰演的艾潘妮尤其令人难忘。",
        videos: [ { titulo: "Rachelle Ann Go 与莉雅·萨隆加" } ] },
      { titulo: "悲惨世界",
        texto: "第三首无可超越：Philip Quast 在《悲惨世界》中的演绎。" }
    ],
    cierre: "这三张唱片都能以很实惠的价格买到二手的：没有理由不收藏。",
    nota: { titulo: "正在上演", pie: "《悲惨世界》，马德里阿波罗剧院",
            texto: "《悲惨世界》目前正在马德里上演。我去看了，丝毫不逊色于伦敦最好的版本。一定要去看。" } },
  ja: { titulo: "ミュージカルの名曲 3 選",
    entradilla: "今日は、偉大なアーティストが歌うミュージカルの曲を三つ。",
    items: [
      { subtitulo: "Easy Terms · マイケル・ボール",
        texto: "一曲目は、ミュージカル『Blood Brothers』の「Easy Terms」。歌うのはマイケル・ボール、私の大好きなアーティストの一人です。声域が広く、表現力も素晴らしい。これから少しずつ、彼の歌をもっと紹介していきます。" },
      { titulo: "ミス・サイゴン", subtitulo: "Rachelle Ann Go とレア・サロンガ",
        texto: "二曲目は、Rachelle Ann Go とレア・サロンガによる見事なデュエット。Rachelle は素晴らしい歌手で、『ミス・サイゴン』25周年記念公演への出演で知られています。レア・サロンガは最高の歌い手の一人。『ミス・サイゴン』で主人公キムを演じたほか、数多くの作品に出演し、『レ・ミゼラブル』のエポニーヌでも記憶されています。",
        videos: [ { titulo: "Rachelle Ann Go とレア・サロンガ" } ] },
      { titulo: "レ・ミゼラブル",
        texto: "三曲目は他の追随を許さない、『レ・ミゼラブル』の Philip Quast。" }
    ],
    cierre: "三枚とも中古でとても手頃に買えます。持っていない理由はありません。",
    nota: { titulo: "上演中", pie: "『レ・ミゼラブル』マドリード、アポロ劇場",
            texto: "『レ・ミゼラブル』はいまマドリードで上演中です。観に行きましたが、ロンドンの最高の舞台にまったく引けを取りません。ぜひ観に行ってください。" } }
});

Object.assign(TRAD["el-nadador"], {
  zh: { titulo: "游泳者：一幅画、一本书和一部电影",
    entradilla: "跳进泳池的三种方式：一幅画、一篇短篇小说，以及由它改编的电影。",
    items: [
      { subtitulo: "大卫·霍克尼，1967 · 一幅画",
        texto: "一幅令人不安的画。色彩黯淡；我们知道那里有一个人，却看不见他；水平与垂直交织，又被水花打破。孤独与无限：我们望向远方，把文明抛在身后。\n\n据说霍克尼天生具有通感。听到水花声时，他会看到什么颜色呢？" },
      { titulo: "游泳者", subtitulo: "约翰·契弗 · 一本书",
        texto: "一个男人决定游泳回家，穿过邻居们的花园，一个泳池接一个泳池。故事像一个普通的夏日午后那样开始，结局却出人意料。\n\n我推荐购买企鹅出版社 2025 年的版本（改天我们再聊聊这家出版社的起源）。" },
      { titulo: "游泳者", subtitulo: "弗兰克·佩里，1968 · 一部电影",
        texto: "改编自契弗的短篇小说，由伯特·兰卡斯特主演。配乐出自马文·哈姆利施之手，这是他的第一部电影配乐。",
        videos: [ { titulo: "电影" }, { titulo: "原声音乐" } ] }
    ] },
  ja: { titulo: "泳ぐ人：一枚の絵、一冊の本、一本の映画",
    entradilla: "プールに飛び込む三つの方法：一枚の絵、一篇の短編小説、そしてそこから生まれた映画。",
    items: [
      { subtitulo: "デイヴィッド・ホックニー、1967 · 一枚の絵",
        texto: "不安をかき立てる絵。くすんだ色彩。誰かがいるのはわかるのに、その姿は見えない。水平と垂直の構図に、水しぶきが割り込む。孤独と無限。私たちは彼方を見つめ、文明を後にする。\n\nホックニーは生まれつき共感覚を持っていたと言われます。水しぶきの音を聞いて、彼には何色が見えたのでしょう？" },
      { titulo: "泳ぐ人", subtitulo: "ジョン・チーヴァー · 一冊の本",
        texto: "ある男が、近所の家々の庭を抜けて、プールからプールへと泳いで家に帰ろうと決める。よくある夏の午後のように始まり、思いもよらない結末を迎えます。\n\nペンギン社の2025年版をおすすめします（この出版社の誕生の話は、またいつか）。" },
      { titulo: "泳ぐひと", subtitulo: "フランク・ペリー、1968 · 一本の映画",
        texto: "チーヴァーの短編をバート・ランカスター主演で映画化した作品。音楽はマーヴィン・ハムリッシュ、彼にとって初めての映画音楽です。",
        videos: [ { titulo: "映画" }, { titulo: "サウンドトラック" } ] }
    ] }
});

Object.assign(TRAD["3-libros-de-umberto-eco"], {
  zh: { titulo: "翁贝托·埃科的书",
    entradilla: "翁贝托·埃科倾注了全部学识的三本书。不必从头读起：随便翻开哪一页，读他挑选的诗、他讲的故事，看看那些图片……",
    items: [
      { titulo: "美的历史", subtitulo: "翁贝托·埃科，2004",
        texto: "我还记得买它的时候：2005 年 10 月，在萨瓦德尔的英国宫百货。我一看到就无法抗拒，一见钟情。白色布面精装，蓝色烫印，配着精美的护封，书中有许多故事和绝美的图片。\n\n埃科追溯了西方艺术中美的观念如何演变，从古希腊一直到今天，并配有各个时代哲学家和作家的图像与文字。" },
      { titulo: "丑的历史", subtitulo: "翁贝托·埃科，2007",
        texto: "看到还有续作出版，我很快就买了下来。这本是第一本的另一面：怪物、魔鬼、怪诞、漫画……它告诉我们，丑和美一样随时代而变。" },
      { titulo: "传说之地的历史", subtitulo: "翁贝托·埃科，2013",
        texto: "那些从未存在、却曾被许多人相信的地方：亚特兰蒂斯、黄金国、祭司王约翰的王国、乌托邦岛……一次穿越想象地理的旅行。" }
    ],
    cierre: "三本书都由 Lumen 出版社精心出版。如果能找到，一定要收藏。" },
  ja: { titulo: "ウンベルト・エーコの本",
    entradilla: "ウンベルト・エーコがその知識のすべてを注ぎ込んだ三冊。最初から読む必要はありません。どのページを開いても、彼が選んだ詩や物語を読み、図版を眺めることができます……",
    items: [
      { titulo: "美の歴史", subtitulo: "ウンベルト・エーコ、2004",
        texto: "買ったときのことを覚えています。2005年10月、サバデルのエル・コルテ・イングレスで。目にした瞬間、抗えませんでした。一目惚れです。白い布張りのハードカバーに青の箔押し、見事なカバー、たくさんの物語、そして素晴らしい図版。\n\nエーコは、古代ギリシャから現代まで、西洋美術における美の観念がどう変わってきたかを、各時代の哲学者や作家の図版と文章でたどります。" },
      { titulo: "醜の歴史", subtitulo: "ウンベルト・エーコ、2007",
        texto: "続きが出ると知って、すぐに買いました。一冊目の裏の顔です。怪物、悪魔、グロテスク、カリカチュア……醜さもまた、美と同じように時代とともに変わることを示す旅です。" },
      { titulo: "伝説の土地の歴史", subtitulo: "ウンベルト・エーコ、2013",
        texto: "存在しなかったのに、多くの人が信じた場所。アトランティス、エル・ドラード、プレスター・ジョンの王国、ユートピア島……想像力の地理をめぐる旅です。" }
    ],
    cierre: "三冊ともLumen社による見事な造本。見つけたら、ぜひ手元に。" }
});

Object.assign(TRAD["3-versiones-de-lovers"], {
  zh: { titulo: "梅林茂的《Lovers》，3 个版本",
    entradilla: "《Lovers》是电影《十面埋伏》（张艺谋，2004）的主题曲。一首史诗般的乐曲，交织着战斗与爱情，旋律恢宏，蕴含着希望。",
    items: [
      { subtitulo: "中国传统乐器",
        texto: "最具东方韵味的版本，由中国传统乐器演奏。",
        videos: [ { titulo: "中国传统乐器版" } ] },
      { titulo: "Lovers，器乐版", subtitulo: "小提琴、大提琴与交响弦乐",
        texto: "有两个版本：一个以小提琴独奏和大提琴为主角，另一个则由交响乐团的全部弦乐演奏。",
        videos: [ { titulo: "小提琴与大提琴独奏" }, { titulo: "全体交响弦乐" } ] },
      { subtitulo: "交响乐团与女高音",
        texto: "完整版：交响乐团加上女高音。电影中由凯瑟琳·芭特尔演唱。",
        videos: [ { titulo: "乐团与女高音" } ] }
    ],
    cierre: "梅林茂是最伟大的电影配乐作曲家之一，我们以后还会介绍他的更多作品。" },
  ja: { titulo: "梅林茂の「Lovers」、3つのバージョン",
    entradilla: "「Lovers」は映画『LOVERS』（チャン・イーモウ監督、2004年。原題『十面埋伏』）のテーマ曲。戦いと愛が交錯する壮大な曲で、その力強い旋律には希望が込められています。",
    items: [
      { subtitulo: "中国の伝統楽器",
        texto: "最も東洋的なバージョン。中国の伝統楽器で演奏されます。",
        videos: [ { titulo: "中国の伝統楽器で" } ] },
      { titulo: "Lovers、インストゥルメンタル版", subtitulo: "ヴァイオリン、チェロ、交響弦楽",
        texto: "二つのバージョンがあります。ソロ・ヴァイオリンとチェロが主役のものと、交響楽団の弦楽器すべてで奏でるものです。",
        videos: [ { titulo: "ヴァイオリンとチェロのソロ" }, { titulo: "交響弦楽すべてで" } ] },
      { subtitulo: "交響楽団とソプラノ",
        texto: "完全版：交響楽団にソプラノの歌声が加わります。映画ではキャスリーン・バトルが歌っています。",
        videos: [ { titulo: "オーケストラとソプラノ" } ] }
    ],
    cierre: "映画音楽の偉大な作曲家の一人、梅林茂の曲は、これからも紹介していきます。" }
});

Object.assign(TRAD["3-westerns-de-clint-eastwood"], {
  zh: { titulo: "克林特·伊斯特伍德的西部片",
    entradilla: "这是最好的西部三部曲之一，尽管从没有人这样称呼过它。这些电影毫不煽情，讲的是好人与邪恶、与命运抗争的故事。我看过很多遍，早已铭刻在心。如果你还没看过，真该看看。",
    items: [
      { titulo: "The Outlaw Josey Wales", subtitulo: "克林特·伊斯特伍德，1976",
        texto: "乔西·威尔斯是密苏里州的一位农民，南北战争期间，他的家人被民兵杀害。他加入了游击队；战争结束后，他拒绝投降，被悬赏通缉。他向西逃亡，一路上不知不觉收留了其他落魄之人，他们成了他的新家人。",
        escena: "乔西·威尔斯去见科曼奇族酋长十熊，向他提出一个交易：和平还是战争。没有诡计，男人对男人。",
        escenaPie: "十熊，《The Outlaw Josey Wales》。",
        video: { titulo: "名场面视频" } },
      { titulo: "苍白骑士", subtitulo: "克林特·伊斯特伍德，1985",
        texto: "一位无名的牧师来到一个淘金者营地，一个有权势的矿业大亨想把这些人赶出他们的土地。没有人知道他从哪里来、是谁，但显然他不只是个牧师。片名出自《启示录》：骑灰色马的骑士。",
        escena: "结尾，骑士离去，像他到来时一样神秘地消失。",
        video: { titulo: "到来", texto: "苍白骑士到来之时，死亡天使也随之降临。" } },
      { titulo: "不可饶恕", subtitulo: "克林特·伊斯特伍德，1992",
        texto: "威廉·芒尼曾是冷酷无情的枪手，如今是一位独自抚养孩子的鳏夫农民。他接下最后一份差事：领取两名毁了一个女人容貌的牛仔的赏金。这是一部拆解枪手神话的西部片，获得四项奥斯卡奖，包括最佳影片和最佳导演。",
        escena: "最后的决斗。不多说了。",
        video: { titulo: "名场面视频" } }
    ],
    cierre: "最好按上映顺序观看：你会看到伊斯特伍德如何一步步颠覆西部片。" },
  ja: { titulo: "クリント・イーストウッドの西部劇",
    entradilla: "誰もそう呼んだことはないけれど、これは最高の西部劇三部作のひとつです。感傷に流されず、悪と、そして運命と闘う善き人々の映画。何度も観て、頭に焼きついています。まだ観ていないなら、ぜひ。",
    items: [
      { titulo: "アウトロー", subtitulo: "クリント・イーストウッド、1976",
        texto: "ジョージー・ウェールズはミズーリの農夫。南北戦争中、民兵に家族を殺されます。ゲリラに加わり、戦争が終わっても降伏を拒んだため、首に賞金をかけられる。西へ逃れる道中、意図せずほかのはぐれ者たちを拾い、彼らが新しい家族になっていきます。",
        escena: "ジョージー・ウェールズがコマンチ族の酋長テン・ベアーズに会いに行き、取引を持ちかける場面。平和か、戦争か。小細工なし、男と男の話。",
        escenaPie: "テン・ベアーズ、『アウトロー』より。",
        video: { titulo: "名場面の動画" } },
      { titulo: "ペイルライダー", subtitulo: "クリント・イーストウッド、1985",
        texto: "名もなき牧師が、有力な鉱山主に土地を追われそうな金鉱掘りたちの野営地にやって来ます。どこから来たのか、何者なのか誰も知らない。でも、ただの牧師でないことは明らかです。題名はヨハネの黙示録の「青ざめた馬」に乗る者から。",
        escena: "ラスト、来たときと同じように謎めいて、騎手が去り消えていく場面。",
        video: { titulo: "到来", texto: "ペイルライダーが来るとき、死の天使が来る。" } },
      { titulo: "許されざる者", subtitulo: "クリント・イーストウッド、1992",
        texto: "ウィリアム・マニーはかつて冷酷な無法者でしたが、今は子どもを育てる男やもめの農夫。ある女性の顔を傷つけたカウボーイ二人の賞金を手に入れる、最後の仕事を引き受けます。ガンマンの神話を解体する西部劇で、作品賞と監督賞を含むアカデミー賞4部門を受賞しました。",
        escena: "最後の決闘。これ以上は言いません。",
        video: { titulo: "名場面の動画" } }
    ],
    cierre: "公開順に観るのがおすすめです。イーストウッドが西部劇をひっくり返していく様子がわかります。" }
});

Object.assign(TRAD["3-frases-para-empezar"], {
  zh: { titulo: "开篇三句名言",
    items: [
      { titulo: "亚历克斯·弗格森爵士", subtitulo: "曼联传奇主教练",
        contexto: "一位记者问他：“弗格森先生，这些年来您是如何成功地不断更新同一支球队的？”",
        cita: "很简单。只需要不断把蠢人赶走。",
        texto: "想要进步，首先需要有干劲的人，他们懂自己在做什么，并且愿意参与其中。他说的不是好球员，也不是好人或坏人：要把笨蛋清出去。今后我会为他们奉上很多名言。\n\n“如果笨蛋会飞，我们就看不见天空了。”" },
      { titulo: "吉列尔莫·卡夫雷拉·因方特", subtitulo: "作家",
        cita: "意识形态可以对抗，情感却不能。",
        texto: "如今我们正是如此：对一切、为一切，情绪都过于激昂。" },
      { titulo: "伍迪·艾伦", subtitulo: "电影人",
        cita: "精神病患者相信二加二等于五；神经症患者知道二加二等于四，却不喜欢这个答案。",
        texto: "我是神经症患者：喜欢的东西一天比一天少。" }
    ] },
  ja: { titulo: "はじめの名言 3 つ",
    items: [
      { titulo: "サー・アレックス・ファーガソン", subtitulo: "マンチェスター・ユナイテッドの伝説的監督",
        contexto: "ある記者が尋ねました。「ファーガソンさん、何年にもわたって同じチームを成功させながら刷新し続けるには、どうすればいいのですか？」",
        cita: "簡単だよ。愚か者を追い出し続ければいい。",
        texto: "成長するには、まず意欲があり、自分の仕事をわかっていて、プロジェクトに加わりたいと思う人が必要です。良い選手とも、善人とも悪人とも言っていない。愚か者を外せ、ということです。これから彼らにたくさんの名言を捧げていきます。\n\n「愚か者が空を飛べたら、空は見えなくなるだろう。」" },
      { titulo: "ギジェルモ・カブレラ・インファンテ", subtitulo: "作家",
        cita: "イデオロギーとは闘える。だが感情とは闘えない。",
        texto: "いま私たちが目にしているのは、まさにそれ。あらゆることに、高ぶった感情があふれています。" },
      { titulo: "ウディ・アレン", subtitulo: "映画監督",
        cita: "精神病患者とは二足す二は五だと信じる人。神経症患者とは二足す二が四だとわかっているが、それが気に入らない人。",
        texto: "私は神経症です。好きなものが日に日に減っていきます。" }
    ] }
});
