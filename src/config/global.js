export default {
  global: {
    componenteFormativo: 'Planeación organizacional y de talento humano',
    descripcionCurso:
      'Conocer cómo está compuesta una organización a nivel de personal es importante para cumplir los objetivos de la misma, debido a que se podrá generar un orden y planeación acordes con las verdaderas necesidades que se tienen a través de las funciones específicas para cada área de gestión. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Niveles organizacionales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Proceso administrativo',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Áreas funcionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Direccionamiento estratégico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Análisis FODA',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Factores del entorno empresarial',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Provisión de necesidades de personal',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      texto:
        'Peralzate. (2017). EDUCATIVO #1. ¿Qué es una organización? (Video). YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/V_NE3DyOluo',
    },
    {
      texto:
        'Economía desde casa. (2020). ¿Cuáles son las áreas funcionales de una empresa? + [FUNCIONES] | Economía de la empresa 05#. (Video). YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/kyLpGyWr7lY',
    },
    {
      texto:
        'Conociendo más. (2021). ¿Qué es la gestión empresarial? Planificar, organizar, dirigir y controlar. “Conociendo más”. (Video). YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/xtc6cqg49EA',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente',
      significado:
        'conjunto de circunstancias o factores sociales, culturales, morales, económicos, profesionales, etc., que rodean una cosa o a una persona, colectividad e influyen en su desarrollo o estado.',
    },
    {
      termino: 'Competencias',
      significado: 'capacidad para el desarrollo de algo.',
    },
    {
      termino: 'Entorno',
      significado:
        'conjunto de circunstancias o factores sociales, culturales, morales, económicos, profesionales, etc., que rodean una cosa o a una persona, colectividad o época e influyen en su estado o desarrollo.',
    },
    {
      termino: 'Estrategia',
      significado:
        'serie de acciones meditadas, encaminadas hacia un fin determinado.',
    },
    {
      termino: 'Función',
      significado:
        'actividad particular que realiza una persona o una cosa dentro de un sistema de elementos, personas, relaciones, etc., con un fin determinado.',
    },
    {
      termino: 'Interacción',
      significado:
        'acción, relación o influencia recíproca entre dos o más personas o cosas.',
    },
    {
      termino: 'Objetivos',
      significado: 'fin que se quiere alcanzar y al cual se dirige una acción.',
    },
    {
      termino: 'Organización',
      significado:
        'grupo de personas y medios organizados con un fin determinado.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'relación existente entre los beneficios que proporciona una determinada operación o cosa y la inversión o el esfuerzo que se ha hecho; cuando se trata del rendimiento financiero; se suele expresar en porcentajes.',
    },
    {
      termino: 'Toma de decisiones',
      significado: 'determinación definitiva adoptada en un asunto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bueno, E. (1991). Dirección estratégica de la empresa. Metodología, técnicas y casos. Pirámide.',
    },
    {
      referencia:
        'Chiavenato, I. (2002). Administración en los nuevos tiempos, Mc Graw Hill.',
    },
    {
      referencia:
        'Hernández y Rodríguez, S. (2002). Administración, pensamiento, proceso, estrategia y vanguardia, Mc Graw Hill.',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Villalobos Barreto',
        cargo: 'Experto temático',
        centro: 'Sena Distrito Capital - Grupo De Apoyo Administrativo – Cgi.',
      },
      {
        nombre: 'Alex García',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y Los Servicios – CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
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
        nombre: 'Jesús Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
