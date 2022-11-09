<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg_grad-01
      .row.mb-5.p-2.p-lg-4.mb-5
        .col-12.col-xl-8.d-flex.align-items-center.position-relative(data-aos="fade-right")
          .tarjeta.bgr.p-5
            p.mb-0 Las formas de hablar de eventos del pasado, presente o futuro varían según el nivel de conocimiento de vocabulario y estructuras gramaticales que el locutor posea para presentar las ideas que desea exponer. Por tal motivo, se hace imperativa la necesidad de elevar el nivel de las estructuras y el vocabulario usado al momento de expresar las ideas; incluso si ellas son estructuras de gramática básica, hay elementos que se pueden incluir con el fin de elevar el nivel de la conversación. Para lograr tal fin, durante este componente, se hará un repaso de elementos gramaticales básicos, como el <b>presente simple, pasado simple y pasado continuo</b>, y se enfocará hacia la creación de oraciones complejas. Además, se trabajará el “<b><em>used to</em></b>” y el “<b><em>would</em></b>” como elementos para complementar el pasado al contar no solo hechos, sino rutinas que se tenían. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se le invita a explorar el video que se presenta a continuación:
          img.pst(src="@/assets/curso/introduccion/img2.svg", alt="alt")
        .col-12.col-xl-4(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/introduccion/img1.png", alt="alt")
   
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .bg_grad-02(data-aos="flip-up")
      .p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/introduccion/img3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Introducción
                p Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.   
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('downloads/introduccion.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Introduccion',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>In order to transmit the information received from everyday and work situations, taking into account the functions and forms of language, it is important to consult and master reported speech, regular and irregular verbs and passive voice. <br><br> To evoke facts in line with characters or historical events that have already happened, it is necessary to keep in mind: simple past; and to talk about work, social and family life, it is essential to use phrasal verbs. <br><br> In this initial component, you will learn how to manage verb tenses in order to spontaneously narrate topics such as Let’s talk about my job, How I got the job, My interview (My interview) and My social and family life.</em>',
        textoEsp:
          'Con el fin de transmitir la información recibida de situaciones cotidianas y laborales, teniendo en cuenta las funciones y formas del lenguaje, es importante consultar y tener dominio del reported speech (reporte de frases), los verbos regulares e irregulares y la passive voice (voz pasiva).  <br><br> Para evocar hechos acordes con personajes o eventos históricos, que ya sucedieron, es necesario tener presente el pasado simple; y para conversar sobre el trabajo, la vida social y familiar, es fundamental usar los <em>phrasal verbs.</em> <br><br> En este componente, aprenderá cómo manejar los tiempos verbales con el fin de narrar, de manera espontánea, temáticas tales como <em>Let’s talk about my job</em> (Hablemos de mi trabajo), <em>How I got the job</em> (Cómo me dieron el empleo), <em>My interview</em> (Mi entrevista) y <em>My social and family life</em> (Mi vida social y familiar).',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
