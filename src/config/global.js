export default {
  global: {
    componenteFormativo:
      '<em>What did you use to do when you were bored?</em> <br> ¿Qué solías hacer cuando estabas aburrido?',
    descripcionCurso:
      'Este componente pretende repasar algunos de los tiempos gramaticales más comunes en inglés, como el presente simple, el pasado simple y el pasado continuo, para expresar ideas más complejas. Además del repaso de los temas, se mostrarán algunas características complementarias del tiempo pasado, como el uso de "<em>would</em>" y "<em>used to</em>" para hablar de rutinas en el pasado. Se incluirán los conectores secuenciales de pasado y el vocabulario de sentimientos y emociones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/flot6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/flot7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>My life used to be blue</em> (Mi vida solía ser triste)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Grammar review</em> (Repaso gramatical)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Present Simple</em> (Presente simple)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<em>Past Simple</em> (Pasado simple)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<em>Past Continuous</em> (Pasado continuo)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Habits in the past</em> (Hábitos en el pasado)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              '<em>Use of "used to" - narrative</em> (Uso de "<em>used to</em>" - narrativa) ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              '<em>Use of "would" for habits</em> (Uso de "<em>would</em>" para hábitos) ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<em>Sequential linkers - Past time</em> (Conectores secuenciales - Tiempo pasado)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>Past Simple</em> (Pasado simple)',
      referencia:
        '<em>BBC Learning English. (2019). Past simple and past continuous - 6 Minute Grammar</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uTB5I8V9Eog',
    },
    {
      tema: '<em>Past Continuous</em> (Pasado continuo)',
      referencia:
        '<em>BBC Learning English. (2018). The Past Continuous Tense: The Grammar Gameshow Episode 9</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MGLedoA3SSE',
    },
    {
      tema: '<em>Habits in the past</em> (Hábitos en el pasado)',
      referencia:
        '<em>British Council. (s. f.). Past habits - "used to", "would" and the past simple. British Council LearnEnglish.</em>',
      tipo: 'Artículo',
      link:
        'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/past-habits-used-to-would-and-the-past-simple ',
    },
    {
      tema:
        '<em>Sequential linkers - Past time</em> (Conectores secuenciales - Tiempo pasado)',
      referencia: '<em>OnEnglish Online. (2016). Time Linkers</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ik_DTkDE858 ',
    },
  ],
  glosario: [
    {
      termino: '<em>Base form</em> / Forma base',
      significado:
        'forma más básica de un verbo, sin ningún tipo de terminación específica.',
    },
    {
      termino: '<em>Past Simple</em> / Pasado Simple',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo en un momento o tiempo previo al ahora.',
    },
    {
      termino: '<em>Past continuous</em> / Pasado continuo',
      significado:
        'tiempo verbal que hace referencia a acciones que se estaban llevando a cabo en un momento del pasado.',
    },
    {
      termino: '<em>Time expressions</em> / Expresiones de tiempo:',
      significado:
        'son expresiones que dan información sobre el tiempo en que sucede algo y se emplean para hablar del momento en que se realiza una acción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia. (s. f.). Past time expressions (yesterday, last week, last night, two years ago). Ambiente Virtual de Idiomas.',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1987/mod_resource/content/17/contenido/index.html',
    },
    {
      referencia:
        'Equipo académico. (2021a). Aprende cómo usar correctamente el past perfect del inglés. British Council Colombia.',
      link:
        ' https://www.britishcouncil.co/blog/aprende-ingles/past-perfect?gclid=Cj0KCQjwr4eYBhDrARIsANPywCiFZGTlAb1sBuwQfP5RNcoGFmoK_D63LaqQvK7uuuTcxAZHqULSnvQaAuRJEALw_wcB',
    },
    {
      referencia:
        'Equipo académico. (2021b). Estructura, reglas y ejemplos del present simple en inglés.  British Council Colombia.',
      link: 'https://www.britishcouncil.co/blog/aprende-ingles/present-simple',
    },
    {
      referencia:
        'Equipo académico. (2021c). Past simple del inglés: uso, estructura y conjugación. British Council Colombia.',
      link: 'https://www.britishcouncil.co/blog/aprende-ingles/past-simple',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo de desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jesús Edgardo Contreras Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Validación diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
