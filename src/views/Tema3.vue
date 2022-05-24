<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Direccionamiento estratégico

    .row.justify-content-center.align-items-center
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img45.png', alt='')

      .col-lg-8
        p(data-aos="fade-down") Las organizaciones buscan ser sostenibles y competitivas en el mercado, tanto así que cada día se ven reflejadas distintas estrategias en todos los niveles para llegar a sus clientes y crecer.
        .row.justify-content-center.align-items-center        
          .col-auto.d-none.d-lg-block
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img3.png', alt='')       
          .col-lg-11
            p(data-aos="fade-down").mb-0.p-blue #[b El direccionamiento estratégico son los planes, políticas, programas, normas y sistemas que crean las organizaciones a nivel general para que las empresas perduren en el tiempo cumpliendo sus objetivos y razón de ser para los cuales fueron creadas, es decir son planteamientos a largo plazo y constantes para que las compañías sean duraderas.]
        .bg-cajon
          .cajon.color-primario.p-4.mt-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Los pilares del direccionamiento estratégico son la misión, visión y valores organizacionales que generan un plan de respuesta que es la planeación estratégica.   

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Análisis FODA 
    .row.justify-content-start.align-items-stretch
      .col-lg-7.bg-gray.px-5.py-4
        p(data-aos="fade-down") Para un adecuado direccionamiento estratégico se deben tener en cuenta los objetivos a los cuales se quieren llegar, ya sean a nivel social, rentable o crecimiento y, para ello, se debe implementar una herramienta de diagnóstico que permita conocer la situación actual de la empresa y generar así las estrategias adecuadas y llegar a cumplir las metas.
        .row.justify-content-center.align-items-center.p-1        
          .col-auto.d-none.d-lg-block
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img47.svg', alt='')       
          .col-lg-10
            p(data-aos="fade-down").mb-0.c-purple #[b Una herramienta de diagnóstico óptima para la gestión, es el análisis FODA que tiene como propósito brindar información del estado actual de la empresa para generar las estrategias de respuesta según sea necesario.]
      .col-lg-3.bg-gray.px-5.py-4             
    .row.justify-content-end.align-items-center                  
      .col-lg-5.p-0.up.m-top.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img46.svg', alt='')
    img.img-a.img-t.mt-3.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/img46.svg', alt='')
    p(data-aos="fade-down").mt-5.p-under.size-t #[b El análisis FODA diagnostica cuatro (4) entornos de la organización que son:]  
    .bg5
      //- .row.mt-5
      //-   .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
      //-     .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
      //-       .indicador--hover(v-if="indicadorTarjetaSlide")
      //-       .tarjeta-slide__contenedor
      //-         .tarjeta-slide__contenido.p-4.p-xl-5
      //-           h5.p-color1.text-center.pt-4 Fortalezas
      //-           p.text-white Son de carácter interno de la organización se evalúa cómo se encuentra la empresa frente al objetivo descrito versus a lo que está bien.
      //-         .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img49.jpg')})`}")
      //-           h3.text-center.p-flip_img.p-color1.py-3 Fortalezas

      //-   .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
      //-     .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
      //-       .indicador--hover(v-if="indicadorTarjetaSlide")
      //-       .tarjeta-slide__contenedor
      //-         .tarjeta-slide__contenido.p-4.p-xl-5
      //-           h5.p-color1.text-center.pt-4 Oportunidades
      //-           p.text-white Son de carácter externo de la organización se evalúa cómo se encuentra la empresa frente al objetivo descrito versus la gestión que podría hacer para mejorar.
      //-         .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img50.jpg')})`}")
      //-           h3.text-center.p-flip_img.p-color1.py-3 Oportunidades

      //-   .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-left")
      //-     .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
      //-       .indicador--hover(v-if="indicadorTarjetaSlide")
      //-       .tarjeta-slide__contenedor
      //-         .tarjeta-slide__contenido.p-4.p-xl-5
      //-           h5.p-color1.text-center.pt-4 Debilidades
      //-           p.text-white Son de carácter interno de la organización se evalúa cómo se encuentra la empresa frente al objetivo descrito versus a lo que no funciona bien.
      //-         .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img51.jpg')})`}")
      //-           h3.text-center.p-flip_img.p-color1.py-3 Debilidades 

      //-   .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-left")
      //-     .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
      //-       .indicador--hover(v-if="indicadorTarjetaSlide")
      //-       .tarjeta-slide__contenedor
      //-         .tarjeta-slide__contenido.p-4.p-xl-5
      //-           h5.p-color1.text-center.pt-4 Amenazas
      //-           p.text-white Son de carácter externo de la organización se evalúa cómo se encuentra la empresa frente al objetivo descrito versus problemas que se puedan presentar que puedan afectar la consecución del mismo.
      //-         .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img52.jpg')})`}")
      //-           h3.text-center.p-flip_img.p-color1.py-3 Amenazas

    .row.justify-content-center
      .col-lg-12
        .row.mb-4.mb-md-5(data-aos="fade-down")
          .col-lg-3.my-3
            .tarjeta.tarjeta-foto-hover
              .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img49.jpg')
              .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                h4.text-center.p-color1.mb-0 Fortalezas
              .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                .p-4.text-center
                  h4.p-color1 Fortalezas
                  p.mb-0.text-white Son de carácter interno de la organización se evalúa cómo se encuentra la empresa frente al objetivo descrito versus a lo que está bien.

          .col-lg-3.my-3
            .tarjeta.tarjeta-foto-hover
              .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img50.jpg')
              .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                h4.text-center.p-color1.mb-0 Oportunidades
              .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                .p-4.text-center
                  h4.p-color1 Oportunidades
                  p.mb-0.text-white Son de carácter externo de la organización se evalúa cómo se encuentra la empresa frente al objetivo descrito versus la gestión que podría hacer para mejorar.

          .col-lg-3.my-3
            .tarjeta.tarjeta-foto-hover
              .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img51.jpg')
              .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                h4.text-center.p-color1.mb-0 Debilidades
              .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                .p-4.text-center
                  h4.p-color1 Debilidades
                  p.mb-0.text-white Son de carácter interno de la organización se evalúa cómo se encuentra la empresa frente al objetivo descrito versus a lo que no funciona bien.

          .col-lg-3.my-3
            .tarjeta.tarjeta-foto-hover
              .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img52.jpg')
              .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
                h4.text-center.p-color1.mb-0 Amenazas
              .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                .p-4.text-center
                  h4.p-color1 Amenazas
                  p.mb-0.text-white Son de carácter externo de la organización se evalúa cómo se encuentra la empresa frente al objetivo descrito versus problemas que se puedan presentar que puedan afectar la consecución del mismo.                        
                                                      

      p(data-aos="fade-down").mt-5 Una vez se tienen los resultados de la situación actual de la empresa, se generan las estrategias de respuesta para cada uno de los cuatro entornos como se representa en la siguiente tabla.
    .row.justify-content-center.align-items-center                  
      .col-lg-10.up
        .titulo-sexto.color-acento-botones.mt-5
          h5 Tabla 1.
          span Presentación de matriz FODA y estrategias

        .tabla-a.color-acento-botones.mt-3.up 
          table
            thead
              tr.text-center.text-white.bg-tr.size-t
                <td colspan="4"> <b>Matriz FODA y estrategias</b> </td>
            tbody
              tr
                <td colspan="4"> </td>            
              tr.bg-tr1
                td.text-center.cel-b.size-t #[b Fortalezas]
                td.text-center.cel-b.size-t #[b Estrategias FO]
                td.text-center.cel-b.size-t #[b Debilidades]
                td.text-center.cel-b.size-t #[b Estrategias DO]
              tr
                td.text-center.cel-b F -1
                td.text-center.cel-b E -1
                td.text-center.cel-b D -1
                td.text-center.cel-b E -1

              tr.bg-tr1
                td.text-center.cel-b F -2
                td.text-center.cel-b E -2
                td.text-center.cel-b D -2
                td.text-center.cel-b E -2
              tr
                td.text-center.cel-b F -3
                td.text-center.cel-b E -3
                td.text-center.cel-b D -3
                td.text-center.cel-b E -3        

              tr.bg-tr1
                td.text-center.cel-b F -4
                td.text-center.cel-b E -4
                td.text-center.cel-b D -4
                td.text-center.cel-b E -4     

              tr
                td.text-center.cel-b #[b Oportunidades]
                td.text-center.cel-b #[b Estrategias FA]
                td.text-center.cel-b #[b Amenazas]
                td.text-center.cel-b #[b Estrategias DA]
              tr.bg-tr1
                td.text-center.cel-b O -1
                td.text-center.cel-b E -1
                td.text-center.cel-b A -1
                td.text-center.cel-b E -1

              tr
                td.text-center.cel-b O -2
                td.text-center.cel-b E -2
                td.text-center.cel-b A -2
                td.text-center.cel-b E -2
              tr.bg-tr1
                td.text-center.cel-b O -3
                td.text-center.cel-b E -3
                td.text-center.cel-b A -3
                td.text-center.cel-b E -3        

              tr
                td.text-center.cel-b O -4
                td.text-center.cel-b E -4
                td.text-center.cel-b A -4
                td.text-center.cel-b E -4        


    .row.justify-content-center.align-items-center.mt-5               
      .col-lg-8.bg-purp.p-3(data-aos="flip-down") 
        .row.justify-content-center.align-items-center     
          .col-auto.d-none.d-lg-block
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img47.svg', alt='')       
          .col-lg-10
            p(data-aos="fade-down") Se generan estrategias 
              span.p-blue #[b FO ]
              span que nacen de la comparación de las fortalezas y oportunidades. 
            p(data-aos="fade-down") Se generan estrategias 
              span.p-blue #[b FA ]
              span que nacen de la comparación de las fortalezas y amenazas.
            p(data-aos="fade-down") Se generan estrategias 
              span.p-blue #[b DO ]
              span que nacen de la comparación de las debilidades y oportunidades.
            p(data-aos="fade-down").mb-0 Se generan estrategias 
              span.p-blue #[b DA ]
              span que nacen de la comparación de las debilidades y amenazas.
     
    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Factores del entorno empresarial
    p(data-aos="fade-down") Una vez visto el análisis FODA, surgen varios interrogantes con el entorno que rodea a la empresa, debido a que se pudo identificar que se hizo un diagnóstico interno, pero también se tuvo en cuenta el externo.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img52.svg', alt='')

      .col-lg-6
        .row.justify-content-center.align-items-center.bg-yellow.py-3.px-1        
          .col-auto.d-none.d-lg-block
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img53.png', alt='')       
          .col-lg-10
            p(data-aos="fade-down").mb-0 El entorno organizacional es un grupo compuesto por partes interesadas que influyen en la gestión continua de las actividades de la empresa con las que interactúa y pueden afectar o beneficiar los objetivos y metas de la compañía. 
        p(data-aos="fade-down").mt-4 Por eso, desde la dirección estratégica se debe conocer y tener en cuenta cada variable del entorno para la planeación y proyectos que se deseen emplear dentro de la organización.
    .bg14
      p(data-aos="fade-down").mt-5.p-under.size-t #[b A continuación, se representan algunos de los factores del entorno empresarial.]
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-6
          .row.justify-content-center.mb-5
            .col-md-9
              SlyderF(columnas="col-12")
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img55.svg', alt='')
                  h4.text-center Microentorno
                  ul.lista-ul--color
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Clientes.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Proveedores.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Normas y leyes- legislación.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Economía nacional.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Medio ambiente.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Competencia.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Tecnológico.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Otros mercados. 
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img55.svg', alt='')
                  h4.text-center Macroentorno
                  ul.lista-ul--color
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Tecnología.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Política.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Mercado internacional.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Economía internacional.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Normas internacionales.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img55.svg', alt='')
                  h4.text-center Interno
                  ul.lista-ul--color
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Contratación.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Mercado laboral.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Derechos.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Deberes.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Políticas.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Sistemas de gestión.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img55.svg', alt='')
                  h4.text-center Interno
                  ul.lista-ul--color
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Funcionarios.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Clima.
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Cultura
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Canales de comunicación
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Toma de decisiones
                    li 
                      i.fas.fa-caret-right
                      p.mb-0 Bienestar del personal, capacitación, desarrollo y satisfacción de los empleados.

        .col-lg-6
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img56.png', alt='')  

      .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mt-5(data-aos="fade-down") 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-12
            .bloque-texto-a__texto.p-4
              p.mb-0 Las organizaciones desarrollan sus actividades en un entorno con el cual deben interactuar, y la planeación que se haga debe incluir en sus estrategias estas variables para mitigar situaciones de riesgo que impidan cumplir con la misión, visión y proyectos organizacionales.            

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Provisión de necesidades de personal
    .bg5
      .row.justify-content-center.align-items-center
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img57.png', alt='')

        .col-lg-8
          p(data-aos="fade-down") Para dar respuesta a la misión, visión, proyectos y retos del entorno organizacional las empresas definen su planta de personal con diferentes competencias, aptitudes, conocimientos, experiencia y experticia para gestionar cada situación.
          .row.justify-content-center.align-items-center        
            .col-auto.d-none.d-lg-block
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img3.png', alt='')       
            .col-lg-11
              p(data-aos="fade-down").mb-0.p-blue #[b Las organizaciones no solo compiten por los clientes externos, que son los que compran o consumen productos y servicios, sino que también lo hacen en el mercado laboral para atraer el personal más cualificado que pueda aportar a las diferentes necesidades de las empresas. Así como en el mercado se ofrecen productos y servicios según la oferta y la demanda, lo mismo sucede con el personal laboral y las empresas. ]
          p(data-aos="fade-down").mt-4 Entonces, ¿qué es el mercado laboral? 

      .bloque-texto-g1.color-primario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-left")
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/img58.png')})`}"
        )
        .bloque-texto-g1__texto.p-4
          h4.mb-0 #[b Mercado laboral]
          br          
          br
          p Son la demanda, vacantes, convocatorias laborales que existen y se presentan, así como la oferta que son los candidatos cualificados según cada perfil para desempeñar los diferentes puestos laborales.         

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img59.png', alt='')

        .col-lg-9
          .row.justify-content-center.align-items-center     
            .col-auto.d-none.d-lg-block
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img69.svg', alt='')       
            .col-lg-10
              p(data-aos="fade-down") Es muy importante tener en cuenta el impacto que genera en la economía este mercado, porque en ocasiones existe personal muy calificado o descalificado para ejercer ciertas funciones, o se presentan situaciones que ciertas profesiones no tienen demanda como puede también pasar poca oferta, generando un desequilibrio en la ocupación de personas laboralmente en un país, causando deserción a otros, perdiendo mano de obra o simplemente realizando actividades ajenas a la profesión.         
          p(data-aos="fade-down") El mercado laboral cuenta con una estructura que genera variables de empleabilidad que se visualizarán en la siguiente lista.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6.up.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img60.svg', alt='')
      .col-lg-4.up
        .bg-blue.p-4.shw
          ul.lista-ul--color
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Salario mínimo.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Derechos.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Deberes.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Contratos.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Conocimientos.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Seguridad social.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Tasa de desempleo.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Formación.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Experiencia.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Demanda de profesiones específicas.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Edad mínima para trabajar.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Horas laborales.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Desempleo. 
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Informalidad.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Independientes.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Mayor preparación.
            li(data-aos="fade-down") 
              i.fas.fa-caret-right
              p.mb-0 Aumento de ingresos.
    .bg15  
      .row.justify-content-center.align-items-center.my-5.color2.p-3(data-aos="flip-down")        
        .col-auto.d-none.d-lg-block
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img47.svg', alt='')       
        .col-lg-11
          p(data-aos="fade-down").mb-0 Para realizar la demanda de personas en el mercado laboral, las organizaciones hacen un diagnóstico y planeación de las necesidades que tienen frente las funciones a ejecutar, para cumplir la planeación estratégica de la empresa. 

      p(data-aos="fade-down").p-under #[b Estructuración de cargos]

      .row.justify-content-center.align-items-center.mt-5
        .col-lg-7.up
          p(data-aos="fade-down") Es el orden que se da al personal que integra la organización, sea de forma jerárquica, por áreas, actividades, competencias, requisitos del cargo y demás funciones que se requieran para formalizar la gestión de los funcionarios.
          .row.justify-content-center.align-items-center      
            .col-auto.d-none.d-lg-block
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img63.svg', alt='')       
            .col-lg-9
              p(data-aos="fade-down").mb-0.c-purple #[b Tiene como objetivo incentivar que los propósitos de la organización sean también de los empleados, conocer las necesidades de funciones, requisitos, ambiente, conocimientos, experiencias y demás condiciones para establecer un perfil idóneo.]
          .bg-cajon1
            .cajon.color-secundario.p-4.mt-4.up(data-aos="flip-down")
              p(data-aos="fade-down").mb-0 Una vez establecidas las actividades y responsabilidades, sirve también para la asignación de salarios.
              
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img62.png', alt='')

      .row.justify-content-center.align-items-center.mt-5        
        .col-auto.d-none.d-lg-block
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img64.svg', alt='')       
        .col-lg-9
          p(data-aos="fade-down").mb-0.p-blue #[b Para establecer este proceso se generan una serie de pasos, que en la siguiente figura se representan.]
 
      .row.justify-content-center.align-items-center.mt-5        
        .col-8.up 
          .titulo-sexto.color-acento-botones
            h5 Figura 3. 
            span Pasos para elaboración de la estructura de cargos
          img.img-a.img-t.mt-2(data-aos="zoom-in")(src='@/assets/curso/temas/img65.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5        
      .col-auto.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img64.svg', alt='')       
      .col-lg-9
        p(data-aos="fade-down").mb-0.p-blue #[b A continuación, se exponen cada uno de los pasos para la elaboración de estructura de cargos.]

    .bg16
      .row.justify-content-center.align-items-center.mt-5        
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img67.png', alt='') 
        .col-lg-8
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Identificar la necesidad de personal en la organización")
              .col-11
                p En las organizaciones, con frecuencia, cada líder de proceso manifiesta por medio de una requisición de personal, ya sea para cargo nuevo o existente, las necesidades de funcionarios, las que el área de talento humano recibe y hace el estudio pertinente construyendo información para la creación de cada cargo, o también por cambios en el entorno en el cual se encuentra la empresa.          
                .cajon.color-primario.p-4.mt-4
                  p.mb-0 El área de talento humano evalúa la necesidad cuando es cargo nuevo por medio de una serie de entrevistas que le ayudan en la recolección de la información para entender por qué se necesitaría crearlo, que van desde la identificación de objetivos a la evaluación final para la aprobación. 

            .row(numero="2" titulo="Objetivo del cargo")
              .col-11
                p En esta etapa se evalúa la necesidad que solventará la creación, el beneficio de implementarlo al proceso solicitante y a la empresa, definiendo cuál es el propósito del cargo para asignar las funciones de forma correcta. 

            .row(numero="3" titulo="Funciones que desempeñará")
              .col-11
                p Se desarrolla una serie de entrevistas con el área que hace la solicitud identificando cuales serían las funciones claves que realizaría y que en la actualidad no se hacen o por sobre carga la mantienen otros trabajadores. 

            .row(numero="4" titulo="Requisitos para desempeñar las funciones según ambiente físico")
              .col-11
                p Se hace un estudio sobre qué se necesita para realizar las funciones clave, el espacio en el que habitaría el nuevo colaborador y las normas de seguridad y salud en el trabajo. 

            .row(numero="5" titulo="Procesos y cargos con quien interactuará")
              .col-11
                p Se hace una identificación sobre los procesos internos que se benefician y cómo sería la relación frente a la producción que reciba como entradas, también cuáles serían sus salidas y a quién o qué área las recibe.

            .row(numero="6" titulo="Autoridad, atribuciones y responsabilidades")
              .col-11
                p Se establece según los procesos con los cuales interactúa y según sus funciones si tiene mando sobre las personas como también qué tipo de atribuciones puede tomarse con los recursos físicos de la organización, también la importancia de la entrega de las actividades frente al cliente interno y externo, dando así un nivel de responsabilidad. 

            .row(numero="7" titulo="Conocimientos, experiencia y competencias para desempeñar las tareas")
              .col-11
                p Una vez identificado el objetivo, funciones, autoridad, responsabilidades y procesos, se hace la valoración de las habilidades, estudios, actitudes, aptitudes, experticia, cursos y demás componentes del ser, saber y saber hacer que se requieren para ejecutar las tareas asignadas y adaptación a la cultura organizacional y sus relaciones laborales de forma exitosa.

            .row(numero="8" titulo="Evaluación del cargo")
              .col-11
                p Una vez se tiene toda la información anteriormente vista, se procede a compilarla y estudiar la necesidad para revisar su viabilidad. 
                .cajon.color-primario.p-4.mt-4
                  p.mb-0 Esta fase en la mayoría de casos las organizaciones las gestionan en comités con la alta gerencia para dar su aprobación y asignación salarial acorde a las bases establecidas en la empresa; también se presentan contrapropuestas o negación.                                                 
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        .row.justify-content-center.align-items-center.my-5.color1.p-3(data-aos="flip-down")        
          .col-auto.d-none.d-lg-block
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img70.svg', alt='')       
          .col-lg-11
            p(data-aos="fade-down").mb-0 Es de aclarar que la creación de cargos puede también nacer de un nuevo procedimiento, norma o cambios en el entorno que vive la organización.
        p(data-aos="fade-down").mt-4 En la fase final del proceso, una vez el cargo es aprobado, ya sea en comité o por la alta gerencia, se procede a hacer la formalización de la creación del perfil del cargo con la información anteriormente recolectada. El “perfil de cargos” es un documento en el que están descritas, de forma puntual, las características y actividades que debe desarrollar el funcionario en el cargo, así como la formación y competencias que se requieren.

        .tarjeta.color-primario.p-3.mt-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/book.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.mb-0 #[b Aquí se puede descargar un formato esqueleto para la creación de un perfil de cargos y funciones.]
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/perfiles_de_cargos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download        
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img68.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5               
      .col-lg-12.bg-purp.p-3(data-aos="flip-down") 
        .row.justify-content-center.align-items-center     
          .col-auto.d-none.d-lg-block
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img47.svg', alt='')       
          .col-lg-10
            p(data-aos="fade-down").mb-0 Con esta información, se procede a gestionar las convocatorias, selección y vinculación. Se espera que el contenido temático de esta formación sea de gran apoyo cada día en su gestión; al tiempo que se invita a resolver la actividad didáctica que servirá como refuerzo de lo aprendido.

                 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
