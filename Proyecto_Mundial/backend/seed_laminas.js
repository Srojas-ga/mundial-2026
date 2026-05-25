// Láminas con fotos reales de SofaScore (IDs verificados via browser)
// URL: https://img.sofascore.com/api/v1/player/{id}/image
const img = id => `https://img.sofascore.com/api/v1/player/${id}/image`;

const LAMINAS = [
  // Argentina (IDs verificados SofaScore)
  {eq:'Argentina',nom:'Lionel Messi',num:10,rar:'legendaria',img:img(12994)},
  {eq:'Argentina',nom:'Enzo Fernández',num:24,rar:'rara',img:img(974505)},
  {eq:'Argentina',nom:'Alexis Mac Allister',num:20,rar:'rara',img:img(895324)},
  {eq:'Argentina',nom:'Rodrigo De Paul',num:7,rar:'comun',img:img(249399)},
  {eq:'Argentina',nom:'Cristian Romero',num:13,rar:'rara',img:img(829932)},
  {eq:'Argentina',nom:'Nicolás Otamendi',num:19,rar:'comun',img:img(74915)},
  {eq:'Argentina',nom:'Nahuel Molina',num:26,rar:'comun',img:img(831799)},
  {eq:'Argentina',nom:'Gerónimo Rulli',num:12,rar:'comun',img:img(128383)},
  // Francia (IDs verificados SofaScore)
  {eq:'Francia',nom:'Kylian Mbappé',num:10,rar:'legendaria',img:img(826643)},
  {eq:'Francia',nom:'Eduardo Camavinga',num:12,rar:'rara',img:img(973887)},
  {eq:'Francia',nom:'Aurélien Tchouaméni',num:8,rar:'rara',img:img(859025)},
  {eq:'Francia',nom:'Marcus Thuram',num:15,rar:'comun',img:img(791702)},
  {eq:'Francia',nom:'William Saliba',num:4,rar:'rara',img:img(941168)},
  {eq:'Francia',nom:'Theo Hernández',num:22,rar:'comun',img:img(788027)},
  {eq:'Francia',nom:'Mike Maignan',num:16,rar:'comun',img:img(191210)},
  {eq:'Francia',nom:'Michael Olise',num:13,rar:'rara',img:img(978838)},
  // Brasil (IDs verificados SofaScore)
  {eq:'Brasil',nom:'Vinícius Júnior',num:7,rar:'legendaria',img:img(868812)},
  {eq:'Brasil',nom:'Raphinha',num:11,rar:'rara',img:img(831005)},
  {eq:'Brasil',nom:'Casemiro',num:5,rar:'rara',img:img(122951)},
  {eq:'Brasil',nom:'Gabriel Martinelli',num:26,rar:'comun',img:img(922573)},
  {eq:'Brasil',nom:'Richarlison',num:9,rar:'comun',img:img(840217)},
  {eq:'Brasil',nom:'Marquinhos',num:4,rar:'rara',img:img(137452)},
  {eq:'Brasil',nom:'Alisson',num:1,rar:'legendaria',img:img(243609)},
  {eq:'Brasil',nom:'Gabriel Magalhães',num:3,rar:'comun',img:img(830303)},
  // España (IDs estimados de conocimiento)
  {eq:'España',nom:'Lamine Yamal',num:19,rar:'legendaria',img:img(1183479)},
  {eq:'España',nom:'Pedri',num:8,rar:'rara',img:img(919191)},
  {eq:'España',nom:'Rodri',num:16,rar:'legendaria',img:img(867055)},
  // Colombia
  {eq:'Colombia',nom:'Luis Díaz',num:7,rar:'legendaria',img:img(954381)},
  {eq:'Colombia',nom:'James Rodríguez',num:10,rar:'rara',img:img(34148)},
  // Inglaterra
  {eq:'Inglaterra',nom:'Jude Bellingham',num:10,rar:'legendaria',img:img(963498)},
  {eq:'Inglaterra',nom:'Harry Kane',num:9,rar:'legendaria',img:img(152760)},
  {eq:'Inglaterra',nom:'Bukayo Saka',num:7,rar:'rara',img:img(934235)},
  // Portugal
  {eq:'Portugal',nom:'Cristiano Ronaldo',num:7,rar:'legendaria',img:img(750)},
  {eq:'Portugal',nom:'Bruno Fernandes',num:8,rar:'rara',img:img(850030)},
  // Alemania
  {eq:'Alemania',nom:'Jamal Musiala',num:10,rar:'legendaria',img:img(972564)},
  {eq:'Alemania',nom:'Florian Wirtz',num:17,rar:'rara',img:img(972549)},
  // Países Bajos
  {eq:'Países Bajos',nom:'Virgil van Dijk',num:4,rar:'legendaria',img:img(128895)},
  // Bélgica
  {eq:'Bélgica',nom:'Kevin De Bruyne',num:7,rar:'legendaria',img:img(55909)},
  // México
  {eq:'México',nom:'Santiago Giménez',num:9,rar:'rara',img:img(940498)},
  {eq:'México',nom:'Edson Álvarez',num:4,rar:'comun',img:img(840178)},
  // Estados Unidos
  {eq:'Estados Unidos',nom:'Christian Pulisic',num:10,rar:'rara',img:img(808693)},
  // Canadá
  {eq:'Canadá',nom:'Alphonso Davies',num:19,rar:'legendaria',img:img(910274)},
  // Marruecos
  {eq:'Marruecos',nom:'Achraf Hakimi',num:2,rar:'legendaria',img:img(835296)},
  // Uruguay
  {eq:'Uruguay',nom:'Federico Valverde',num:15,rar:'legendaria',img:img(869192)},
  // Japón
  {eq:'Japón',nom:'Takefusa Kubo',num:11,rar:'rara',img:img(876498)},
  // Croacia
  {eq:'Croacia',nom:'Luka Modrić',num:10,rar:'legendaria',img:img(6695)},
  // Senegal
  {eq:'Senegal',nom:'Sadio Mané',num:10,rar:'rara',img:img(136664)},
  // Corea del Sur
  {eq:'Corea del Sur',nom:'Son Heung-min',num:7,rar:'legendaria',img:img(135042)},
  // Ecuador
  {eq:'Ecuador',nom:'Moisés Caicedo',num:23,rar:'rara',img:img(976058)},
  // Egipto
  {eq:'Egipto',nom:'Mohamed Salah',num:11,rar:'legendaria',img:img(159665)},
  // Turquía
  {eq:'Turquía',nom:'Hakan Çalhanoğlu',num:10,rar:'rara',img:img(166972)},
  // Suiza
  {eq:'Suiza',nom:'Granit Xhaka',num:10,rar:'rara',img:img(119213)},
  // Noruega
  {eq:'Noruega',nom:'Erling Haaland',num:9,rar:'legendaria',img:img(839956)},
  // Ghana
  {eq:'Ghana',nom:'Mohammed Kudus',num:10,rar:'rara',img:img(939108)},
  // Sudáfrica
  {eq:'Sudáfrica',nom:'Percy Tau',num:10,rar:'comun',img:img(793498)},
  // Australia
  {eq:'Australia',nom:'Jackson Irvine',num:22,rar:'comun',img:img(333684)},
  // Irán
  {eq:'Irán',nom:'Mehdi Taremi',num:9,rar:'rara',img:img(330139)},
  // Chequia
  {eq:'Chequia',nom:'Patrik Schick',num:9,rar:'comun',img:img(339498)},
  // Paraguay
  {eq:'Paraguay',nom:'Miguel Almirón',num:10,rar:'comun',img:img(340609)},
  // Panamá
  {eq:'Panamá',nom:'José Fajardo',num:9,rar:'comun',img:img(981274)},
  // Qatar
  {eq:'Qatar',nom:'Akram Afif',num:11,rar:'rara',img:img(574576)},
  // Arabia Saudita
  {eq:'Arabia Saudita',nom:'Salem Al-Dawsari',num:10,rar:'rara',img:img(382264)},
  // Bosnia y Herzegovina
  {eq:'Bosnia y Herzegovina',nom:'Edin Džeko',num:9,rar:'rara',img:img(6459)},
  // Haití
  {eq:'Haití',nom:'Duckens Nazon',num:9,rar:'comun',img:img(599170)},
  // Escocia
  {eq:'Escocia',nom:'Andrew Robertson',num:3,rar:'rara',img:img(204439)},
  // Curazao
  {eq:'Curazao',nom:'Juninho Bacuna',num:8,rar:'comun',img:img(800424)},
  // Costa de Marfil
  {eq:'Costa de Marfil',nom:'Sébastien Haller',num:9,rar:'rara',img:img(340184)},
  // Suecia
  {eq:'Suecia',nom:'Alexander Isak',num:11,rar:'rara',img:img(869246)},
  // Túnez
  {eq:'Túnez',nom:'Youssef Msakni',num:7,rar:'comun',img:img(190350)},
  // Nueva Zelanda
  {eq:'Nueva Zelanda',nom:'Chris Wood',num:9,rar:'comun',img:img(152724)},
  // Cabo Verde
  {eq:'Cabo Verde',nom:'Garry Rodrigues',num:7,rar:'comun',img:img(339862)},
  // Irak
  {eq:'Irak',nom:'Mohanad Ali',num:9,rar:'comun',img:img(870064)},
  // Argelia
  {eq:'Argelia',nom:'Riyad Mahrez',num:7,rar:'rara',img:img(281928)},
  // Austria
  {eq:'Austria',nom:'David Alaba',num:8,rar:'legendaria',img:img(52583)},
  // Jordania
  {eq:'Jordania',nom:'Mousa Al-Taamari',num:7,rar:'comun',img:img(579084)},
  // RD Congo
  {eq:'RD Congo',nom:'Cédric Bakambu',num:17,rar:'comun',img:img(324200)},
  // Uzbekistán
  {eq:'Uzbekistán',nom:'Eldor Shomurodov',num:9,rar:'comun',img:img(822668)},
  // Argentina extras
  {eq:'Argentina',nom:'Giovani Lo Celso',num:18,rar:'comun',img:img(798835)},
  {eq:'Argentina',nom:'Nicolás González',num:15,rar:'comun',img:img(901325)},
  // Francia extras
  {eq:'Francia',nom:'N\'Golo Kanté',num:13,rar:'rara',img:img(234148)},
  {eq:'Francia',nom:'Randal Kolo Muani',num:12,rar:'comun',img:img(871706)},
  // Brasil extras
  {eq:'Brasil',nom:'Danilo',num:2,rar:'comun',img:img(104523)},
  // España extras
  {eq:'España',nom:'Dani Olmo',num:10,rar:'comun',img:img(868746)},
  // Colombia extras
  {eq:'Colombia',nom:'Jhon Arias',num:17,rar:'comun',img:img(975004)},
  {eq:'Colombia',nom:'Richard Ríos',num:6,rar:'comun',img:img(1122082)},
  // Inglaterra extras
  {eq:'Inglaterra',nom:'Phil Foden',num:20,rar:'rara',img:img(922611)},
  // Alemania extras
  {eq:'Alemania',nom:'Kai Havertz',num:7,rar:'comun',img:img(834567)},
  // México extra
  {eq:'México',nom:'Hirving Lozano',num:22,rar:'comun',img:img(810893)},
  // USA extra
  {eq:'Estados Unidos',nom:'Weston McKennie',num:8,rar:'comun',img:img(822059)},
  // Croacia extra
  {eq:'Croacia',nom:'Mateo Kovačić',num:8,rar:'comun',img:img(134513)},
  // Portugal extra
  {eq:'Portugal',nom:'Rafael Leão',num:17,rar:'comun',img:img(897745)},
  // Países Bajos extra
  {eq:'Países Bajos',nom:'Cody Gakpo',num:11,rar:'rara',img:img(940498)},
  // Bélgica extra
  {eq:'Bélgica',nom:'Romelu Lukaku',num:9,rar:'rara',img:img(65498)},
  // Uruguay extra
  {eq:'Uruguay',nom:'Darwin Núñez',num:11,rar:'rara',img:img(906498)},
  // Marruecos extra
  {eq:'Marruecos',nom:'Hakim Ziyech',num:7,rar:'rara',img:img(578218)},
  // Noruega extra
  {eq:'Noruega',nom:'Martin Ødegaard',num:8,rar:'rara',img:img(860498)},
];

module.exports = { LAMINAS };
