<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Áreas funcionales

    .row.justify-content-center.align-items-center.pt-5
      .col-lg-5.up
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img34.png', alt='')    
      .col-lg-7.my-3.up 
        p(data-aos="fade-down") Una vez comprendido el desarrollo de la unidad temática a este punto, la pregunta a resolver es quiénes hacen las actividades en las empresas y la respuesta, aunque es obvia, son las personas, pero se debe tener en cuenta que la interacción que existe dentro de la organización la hacen por medio de procesos, áreas o departamentos según lo tenga propuesto o diseñado cada compañía.
        .bg-cajon
          .cajon.color-secundario.p-4.mt-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Para comprender un poco más lo expuesto anteriormente, en la siguiente figura se presentan las áreas funcionales de las organizaciones en donde interactúan las personas que ejecutan las actividades de planeación, organización, dirección y control.
    .bg13
      img.img-a.img-t.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img35.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")        
      .col-auto.d-none.d-lg-block.up             
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img19.png', alt='')       
      .col-lg-9.up 
        p(data-aos="fade-down").mb-0 #[b Se invita a conocer un poco la explicación de cada una de las áreas funcionales:] 

    SlyderA(tipo="b").mt-5(data-aos="fade-left") 
      .row.justify-content-center.align-items-center
        .col-11
          .row.justify-content-center.align-items-center.bg7.p-4.b-rad          
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img39.svg', alt='')
            .col-lg-6
              h4 Contable
              .color-fondo-text.bg-color
                .color-fondo-text__texto 
                  p Realiza la gestión de proyectar a la empresa a nivel financiero para la toma de decisiones apoyando la consecución del capital económico.            

      .row.justify-content-center.align-items-center
        .col-11
          .row.justify-content-center.align-items-center.bg8.p-4.b-rad       
            .col-lg-6
              h4 Producción
              .color-fondo-text.bg-color
                .color-fondo-text__texto 
                  p Desarrolla las actividades de elaboración de productos o servicios según la actividad económica de la empresa, es decir adelantan la gestión técnica, además de velar por la calidad de la misma.
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img40.svg', alt='')
      .row.justify-content-center.align-items-center
        .col-11
          .row.justify-content-center.align-items-center.bg9.p-4.b-rad 
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img41.svg', alt='')
            .col-lg-6
              h4 Dirección
              .color-fondo-text.bg-color
                .color-fondo-text__texto 
                  p Es el equipo que genera las estrategias generales de la organización para el cumplimiento de la misión, visión y objetivos organizacionales.
      .row.justify-content-center.align-items-center
        .col-11
          .row.justify-content-center.align-items-center.bg10.p-4.b-rad 
            .col-lg-6
              h4 Administración
              .color-fondo-text.bg-color
                .color-fondo-text__texto 
                  p Área enfocada en la coordinación de todos los recursos de la empresa con el propósito de establecer un orden de ellos en la misma, suministrando a cada área lo necesario para que pueda hacer su actividad de forma adecuada y sin generar faltantes ni desperdicios.

            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img42.svg', alt='')  
      .row.justify-content-center.align-items-center
        .col-11
          .row.justify-content-center.align-items-center.bg11.p-4.b-rad 
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img43.svg', alt='')
            .col-lg-6
              h4 Ventas
              .color-fondo-text.bg-color
                .color-fondo-text__texto 
                  p Es la dependencia encargada de atraer nuevos clientes y mantener los actuales vendiéndoles los productos o servicios que ofrece la empresa. Es decir, generan las estrategias para el crecimiento de la empresa a través de la oferta de los productos y servicios generando ingresos y apertura de nuevos mercados para el cumplimiento de la misión y visión organizacional.           

      .row.justify-content-center.align-items-center
        .col-11
          .row.justify-content-center.align-items-center.bg12.p-4.b-rad 
            .col-lg-6
              h4 Gestión humana
              .color-fondo-text.bg-color
                .color-fondo-text__texto 
                  p Es el área encargada de generar estrategias para la consecución del personal, su óptimo desarrollo, motivación, equidad, buenas relaciones, seguridad e higiene, ambiente y su administración. Dentro de sus actividades ejerce la creación de cargos, preselección, contratación, afiliación, capacitación, evaluación, bienestar y todas aquellas actividades en pro del crecimiento de la empresa por medio del capital humano.
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img44.svg', alt='')

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5(data-aos="fade-down") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0 Todas las áreas funcionales de la organización desarrollan su planeación, organización, dirección y control teniendo en cuenta la misión, visión y estrategias generales que provengan de la alta dirección.               
</template>

<script>
export default {
  name: 'Tema2',
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
