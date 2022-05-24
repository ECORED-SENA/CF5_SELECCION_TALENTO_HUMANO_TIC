<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Organización
    .bg2  
      .row.justify-content-center.align-items-center
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img4.png', alt='')

        .col-lg-8
          p(data-aos="fade-down") Una organización es un conjunto de personas que interactúan para conseguir unos objetivos y metas. Dentro de las empresas, se hace indispensable aplicar esta gestión para darles un orden a las actividades humanas y medios que se utilizan para conseguir los propósitos misionales y visionales.
          .row.justify-content-center.align-items-center        
            .col-auto.d-none.d-lg-block
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img3.png', alt='')       
            .col-lg-11
              p(data-aos="fade-down").mb-0 Entendiendo esto, se dice que una empresa es una organización con objetivos, propósitos y metas, los cuales consigue de forma ordenada y coordinada a través del desarrollo de sus actividades. 
          .cajon.color-primario.p-4.mt-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0  Las organizaciones están agrupadas dentro de diferentes tipos. Las empresas pueden clasificarse y diferenciarse por la procedencia de su capital, por su tamaño, por el lugar de operación, por el sector económico y a nivel de personal; esta última categoría se divide en formales e informales. A continuación, se explicará cada una de las anteriores agrupaciones. 

          p(data-aos="fade-down").mt-4 Ahora, se verán los tres tipos de procedencia de capital que puede tener una empresa.


      .row.justify-content-center.align-items-stretch.mt-5
        .col-lg-4.my-3
          .tarjeta--boton.color-primario.p-5.b-sh(data-aos="fade-left")
            .row.justify-content-center.mb-3
              .col-7
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img6.svg', alt='')
            h4.text-center Pública
            ul.lista-ul--color
              li 
                i.far.fa-dot-circle.li-color
                p.mb-0 Propiedad del estado.
              li 
                i.far.fa-dot-circle.li-color
                p.mb-4 El recurso económico proviene del estado.       
        .col-lg-4.my-3
          .tarjeta--boton.color-primario.b-sh(@mouseover="indicadorTarjetaFlip = false").p-5(data-aos="fade-down")
            .indicador--hover(v-if="indicadorTarjetaFlip")

            .row.justify-content-center.mb-3
              .col-7
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img7.svg', alt='')
            h4.text-center Privada
            ul.lista-ul--color
              li 
                i.far.fa-dot-circle.li-color
                p.mb-0 Propiedad de particular o una sociedad privada.
              li 
                i.far.fa-dot-circle.li-color
                p.mb-0 El recurso económico proviene de capital privado.   
        .col-lg-4.my-3
          .tarjeta--boton.color-primario.b-sh.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-3
              .col-7
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img8.svg', alt='')
            h4.text-center Mixta
            ul.lista-ul--color
              li 
                i.far.fa-dot-circle.li-color
                p.mb-0 Propiedad compartida.
              li 
                i.far.fa-dot-circle.li-color
                p.mb-4 El recurso proviene del capital público y privado.             

      .row.justify-content-center.align-items-center.my-5.color1.p-3(data-aos="flip-down")        
        .col-auto.d-none.d-lg-block
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img9.png', alt='')       
        .col-lg-11
          p(data-aos="fade-down").mb-0 Se debe tener en cuenta que las empresas privadas buscan generar riqueza a través de actividades mercantilistas aumentando su capital. Por otro lado, las empresas del Estado manejan dos campos de acción: uno con el enfoque de obtener beneficios para su propio sostenimiento, y otro, con el propósito de brindar un bien común y suplir las necesidades básicas de las personas que gobiernan. 

    h4.up(data-aos="fade-down").mt-5 También se pueden clasificar las empresas de acuerdo a su tamaño. Las siguientes se encuentran dentro de esta categoría.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8.up
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Microempresas")  
            .col-11
              p Son aquellas que su número de funcionarios 
                span.c-purple no supera los 10.  

          .row(numero="2" titulo="Pequeña")  
            .col-11
              p Son aquellas que su número no supera los  
                span.c-purple 50 funcionarios.

          .row(numero="3" titulo="Mediana")  
            .col-11
              p Son aquellas que van de 
                span.c-purple 51 a 250 funcionarios.

          .row(numero="4" titulo="Grandes")  
            .col-11
              p Son aquellas que el número de funcionarios van de  
                span.c-purple 251 en adelante.
      .col-lg-4.up
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img10.png', alt='')

    .tarjeta.color-primario.p-3.mt-5(data-aos="flip-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-2
          img.img-a.img-t(src="@/assets/curso/temas/img11.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              h3.mb-1 Decreto 957 de 2019
              p.mb-0 En Colombia se expidió el Decreto 957 de 2019, estableciendo una nueva clasificación del tamaño empresarial basada en el criterio único de ingresos por actividades ordinarias, ya que se debe tener en cuenta que el ingreso de las tecnologías de la información y comunicación ha hecho crecer las organizaciones y no necesariamente en capital humano.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/decreto_957_del_05_de_junio_de_2019.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .bg3.py-5
      p(data-aos="fade-down") Otra forma de clasificar a la empresas es dependiendo del lugar de operación, es decir, de acuerdo con el sitio o ubicación en la cual la empresa desarrolla sus actividades.  
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-6
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img13.png', alt='')
        .col-lg-6
          .row.justify-content-center.mb-5
            .col-md-9
              SlyderF(columnas="col-12")
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img14.svg', alt='')
                  h4.text-center Locales
                  p.text-center Realizan su actividad económica en una sola ciudad o municipio.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img15.svg', alt='')
                  h4.text-center Regionales
                  p.text-center Desarrollan su actividad económica en varias ciudades del departamento.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img16.svg', alt='')
                  h4.text-center Nacionales
                  p.text-center Llevan a cabo su actividad económica en varias ciudades en el país.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img17.svg', alt='')
                  h4.text-center Multinacionales
                  p.text-center Adelantan su actividad económica en el país y fuera de él.              

    .row.justify-content-center.align-items-center
      .col-lg-6.my-3.up
        p(data-aos="fade-down") En la medida que las empresas desarrollan sus actividades, estas pueden ir creciendo no solo en su tamaño, sino también expandirse abarcando el mercado y haciéndose más reconocidas y competitivas. Es decir, en un momento puede ser una empresa local, pero luego, normalmente después de varios años, puede convertirse en una empresa regional, nacional o una multinacional.  

        .row.justify-content-center.align-items-center.mt-4(data-aos="flip-down")        
          .col-auto.d-none.d-lg-block
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img19.png', alt='')       
          .col-lg-9
            p(data-aos="fade-down").p-blue.mb-0 #[b Finalmente, las empresas se pueden clasificar según el sector económico en el cual desarrollen sus actividades:]           

      .col-lg-6.up
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img18.png', alt='')

    .bg4
      //- .row.justify-content-center.align-items-center.pt-5
      //-   .col-lg-6
      //-     img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img19.svg', alt='')          
      //-   .col-lg-6
      //-     ImagenInfografica.color-secundario.mb-5
      //-       template(v-slot:imagen)
      //-         img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img20.svg', alt='')
      //-       .tarjeta.color-acento-botones.p-3(x="31.4%" y="25.5%" numero="")
      //-         .row.justify-content-center.align-items-center
      //-           .col-8.p-0
      //-             .h5 Primarias
      //-           .col-auto.p-0
      //-             img.img-w(src='@/assets/curso/temas/01.svg', alt='')
      //-         p Desarrollan su actividad económica a través de los recursos naturales.                  
      //-       .tarjeta.color-primario.text-white.p-3(x="65.8%" y="22%" numero="")
      //-         .row.justify-content-center.align-items-center
      //-           .col-8.p-0
      //-             .h5 Secundarias                  
      //-           .col-auto.p-0
      //-             img.img-w(src='@/assets/curso/temas/02.svg', alt='')
      //-         p Llevan a cabo su actividad económica a través de la transformación de los productos.                  
      //-       .tarjeta.color-acento-botones.p-3(x="31.5%" y="68%" numero="")
      //-         .row.justify-content-center.align-items-center
      //-           .col-8.p-0
      //-             .h5 Terciarias
      //-           .col-auto.p-0
      //-             img.img-w(src='@/assets/curso/temas/03.svg', alt='')
      //-         p Desarrollan su actividad económica al brindar servicios y comercio.                  
      //-       .tarjeta.color-primario.text-white.p-3(x="65.8%" y="68%" numero="")
      //-         .row.justify-content-center.align-items-center
      //-           .col-8.p-0
      //-             .h5 Cuaternarias
      //-           .col-auto.p-0
      //-             img.img-w(src='@/assets/curso/temas/04.svg', alt='')
      //-         p Brinda apoyo a las unidades de líneas. Siempre están dependiendo de la alta gerencia y por lo general su comucación ingresa por la derecha o izquierda del rectángulo o cuadrado, y brindan asesoramiento a los demás departamentos o unidades. también llamada línea staff, se representa de manera punteada.

      .row.mt-5.d-flex.align-items-center.justify-content-center
        .col.col-12.col-lg-4.d-flex.justify-content-end
          img.img450(src='@/assets/curso/temas/img19.svg', alt='', class='img-fluid')
        .col.col-12.col-lg-7
          .row.d-flex.justify-content-center.position-relative
            .col-12
              .simbologia.d-flex.justify-content-center
                img.img180(src='@/assets/curso/temas/img19_1.svg', alt='', class='img-fluid' @mouseover="btnIndice = 0"  @mouseleave="btnIndice = null")
                img.img180(src='@/assets/curso/temas/img19_2.svg', alt='', class='img-fluid' @mouseover="btnIndice = 1"  @mouseleave="btnIndice = null")
            .col-12
              .simbologia.d-flex.justify-content-center
                  img.img180(src='@/assets/curso/temas/img19_3.svg', alt='', class='img-fluid' @mouseover="btnIndice = 2"  @mouseleave="btnIndice = null")
                  img.img180(src='@/assets/curso/temas/img19_4.svg', alt='', class='img-fluid' @mouseover="btnIndice = 3"  @mouseleave="btnIndice = null")

            div.dialogo(
                v-for="(boton, index) in botones" 
                v-if="(index === btnIndice)" 
                :style="{left:boton.left, top:boton.top}"
                :class="{dialogo__azul: boton.color === 'azul', dialogo__gris: boton.color === 'gris'}")
              div.position-relative
                p.titulo_modal(:class="{titulo_modal_azul: boton.color === 'azul', titulo_modal_gris: boton.color === 'gris'}") {{ boton.numero }}
              h5 {{ boton.titulo }}
              p {{ boton.texto }}      

      .cajon.color-acento-contenido.p-4.mt-5(data-aos="flip-down")
        p(data-aos="fade-down").mb-0 Las organizaciones hacen una o varias actividades en su gestión mercantil; por lo tanto, cuando se dedican solo a una actividad se les denomina como monoproductora; y cuando hace el ejercicio con diferentes actividades se les llama multiproductora.

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/img22.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Sin embargo, sin importar el tipo de empresa donde se pueda clasificar, 
            span.c-purple #[b uno de los aspectos más relevantes de una empresa es lo que se conoce con el nombre de filosofía organizacional.] 
            span Tal elemento forma la identidad y determina el actuar frente a las situaciones que enfrentan las empresas, tanto a nivel interno como a externo; este concepto aplica para todos los tipos de organización. 
            span.c-purple #[b El siguiente recurso amplía el concepto:]

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/SSXAijwp3U4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   

    p(data-aos="fade-down").mt-5 Una vez comprendido lo anterior, se aprenderá más sobre la filosofía organizacional por medio de la misión, visión y valores que son sus bases; en la siguiente figura se conocerán cada una de ellas.

    .titulo-sexto.color-acento-botones
      h5 Figura 1. 
      span Bases de la filosofía organizacional                   
    img.img-a.img-t.mt-2(data-aos="zoom-in")(src='@/assets/curso/temas/img23.svg', alt='')
    .bg5
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-6.up
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img24.png', alt='')    
        .col-lg-6.my-3.up
          .row.justify-content-center.align-items-center(data-aos="flip-down")        
            .col-auto.d-none.d-lg-block            
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img19.png', alt='')       
            .col-lg-9
              p(data-aos="fade-down").mb-0 #[b Una vez se establecen las bases de la filosofía organizacional se crea una cultura.]           
          p(data-aos="fade-down").mt-4 Como las organizaciones están compuestas por personas dentro de las mismas, desde su fundación y transformación con los años se crea una cultura organizacional que rige la forma de actuar de cada empresa;  para entender un poco más sobre el tema, a continuación se brindan las siguientes definiciones:
      .row.justify-content-center.align-items-stretch.mt-5
        .col-lg-6.text-white.bg-purple.p-5(data-aos="fade-left")
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img25.svg', alt='')
          p(data-aos="fade-down").mt-4 Es un conjunto de tradiciones, costumbres, ideas y forma de hacer las cosas de un grupo de personas o comunidad y que las diferencia de otras.
          .row.justify-content-end.align-items-end.mt-4
            .col-2.d-none.d-lg-block
              img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img27.svg', alt='')

        .col-lg-6.text-white.bg-purple.p-5(data-aos="fade-right")
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img26.svg', alt='')
          p(data-aos="fade-down").mt-4 Es un conjunto de valores creencias, tradiciones, ideas, forma de hacer las cosas y tomar decisiones a nivel interno y externo en empresa que la diferencia de las demás.  Esta cultura organizacional influye en el actuar interno del personal, procesos y jerarquización; y a nivel externo con el mercado, clientes, proveedores y partes interesadas.
          .row.justify-content-end.align-items-end.mt-4
            .col-2.d-none.d-lg-block
              img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img27.svg', alt='')

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Niveles organizacionales       
    .bg5
      .row.justify-content-center.align-items-center.pt-5
        .col-lg-5.up
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img29.png', alt='')    
        .col-lg-7.my-3.up 
          p(data-aos="fade-down") Como se estudió anteriormente, las organizaciones se crean con propósitos y la importancia de cumplirlos es la razón de ser para fundarlas, por eso se debe tener un direccionamiento continuo basado en estrategias, cumpliendo unos roles de los integrantes que deben asumir teniendo en cuenta que todos no pueden hacer las mismas actividades o tareas, ya que la división del trabajo o responsabilidades conllevan a que cada persona aporte su grano de arena en la consecución de las metas establecidas.
          .bg-cajon
            .cajon.color-secundario.p-4.mt-4(data-aos="flip-down")
              p(data-aos="fade-down").mb-0 Para ello, en las organizaciones se generan unos niveles para dar un orden y una secuencia lógica a los procesos que se deban llevar a cabo para conseguir el éxito empresarial.

      p(data-aos="fade-down").mt-5 A continuación, se verá ese orden reflejado en 
        span.c-purple los niveles organizacionales. 
      img.img-a.img-t.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img30.svg', alt='')    
      
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Proceso administrativo
  
    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img31.jpg', alt='')
    .row.justify-content-center.align-items-center
      .col-10.img-text(data-aos="flip-down")
        p.p-3.mb-0.d-none.d-lg-block Este proceso está basado en unas fases secuenciales que tienen como propósito darle un orden a las organizaciones para garantizar el cumplimiento de la misión, visión y estrategias para lograr su sostenibilidad. En la siguiente figura se representan las fases para una mayor comprensión.            

    p.bg-p1.p-3.mb-0.d-block.d-lg-none Este proceso está basado en unas fases secuenciales que tienen como propósito darle un orden a las organizaciones para garantizar el cumplimiento de la misión, visión y estrategias para lograr su sostenibilidad. En la siguiente figura se representan las fases para una mayor comprensión.  

    .titulo-sexto.color-acento-botones.mt-5
      h5 Figura 2. 
      span Presentación fases del proceso administrativo        
    img.img-a.img-t.mt-2(data-aos="zoom-in")(src='@/assets/curso/temas/img31.svg', alt='')

    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mt-5(data-aos="fade-down") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0 Este proceso en realidad lo viven todos los seres humanos en sus vidas cotidianas ya sean sus hogares, estudio o trabajo, lo importante es identificar y aplicar las fases para una mejor gestión de las metas y propósitos que se tienen.
    p(data-aos="fade-down").mt-5.p-under #[b Se invita a conocer más sobre cada una de estas fases:]      
    SlyderA.mt-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-11
          .row.justify-content-center.align-items-center.bg7.p-4.b-rad  
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img33.svg', alt='')
            .col-lg-6
              h5 Planear
              .color-fondo-text.bg-color
                .color-fondo-text__texto 
                  p Se hace un diagnóstico de la situación actual que se quiere mejorar, se generan estrategias que brinden soluciones y se establecen las actividades ya sean inmediatas a corto, mediano o largo plazo.
      .row.justify-content-center.align-items-center
        .col-11
          .row.justify-content-center.align-items-center.bg8.p-4.b-rad  
            .col-lg-6
              h5 Organizar
              .color-fondo-text.bg-color
                .color-fondo-text__texto 
                  p Se establece el personal que las va a desempeñar y los recursos necesarios para la buena gestión.
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img36.svg', alt='')
      .row.justify-content-center.align-items-center
        .col-11
          .row.justify-content-center.align-items-center.bg9.p-4.b-rad  
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img37.svg', alt='')
            .col-lg-6
              h5 Dirigir
              .color-fondo-text.bg-color
                .color-fondo-text__texto 
                  p Es el proceso de seguimiento de las actividades delegadas a cada área o personal responsable, en su ejecución por cada líder de proceso para guiar, motivar y generar el trabajo en equipo para el cumplimiento de la planeación establecida.
      .row.justify-content-center.align-items-center
        .col-11
          .row.justify-content-center.align-items-center.bg10.p-4.b-rad  
            .col-lg-6
              h5 Controlar
              .color-fondo-text.bg-color
                .color-fondo-text__texto 
                  p Se verifica el cumplimiento de las actividades propuestas, haciendo mediciones por medio de indicadores de gestión, revisando el desempeño, mirando dificultades en el proceso y tomando decisiones para las acciones correctivas y de mejora continua para mitigar el riesgo de incumplimiento de lo planeado.

            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img38.svg', alt='')          

          
    .cajon.color-acento-contenido.p-4.mt-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 Se debe tener en cuenta que en la fase controlar se miden las actividades planeadas versus las ejecutadas para tomar las acciones pertinentes de perfeccionamiento.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
    btnIndice: null,
    botones: [
      {
        numero: '01',
        color: 'gris',
        left: '50%',
        top: '30%',
        titulo: 'Primarias',
        texto:
          'Desarrollan su actividad económica a través de los recursos naturales.',
      },
      {
        numero: '02',
        color: 'azul',
        left: '50%',
        top: '30%',
        titulo: 'Secundarias',
        texto:
          'Llevan a cabo su actividad económica a través de la transformación de los productos.',
      },
      {
        numero: '03',
        color: 'gris',
        left: '50%',
        top: '0%',
        titulo: 'Terciarias',
        texto:
          'Desarrollan su actividad económica al brindar servicios y comercio.',
      },
      {
        numero: '04',
        color: 'azul',
        left: '50%',
        top: '0%',
        titulo: 'Cuaternarias',
        texto:
          'Brinda apoyo a las unidades de líneas. Siempre están dependiendo de la alta gerencia y por lo general su comucación ingresa por la derecha o izquierda del rectángulo o cuadrado, y brindan asesoramiento a los demás departamentos o unidades. también llamada línea staff, se representa de manera punteada.',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
