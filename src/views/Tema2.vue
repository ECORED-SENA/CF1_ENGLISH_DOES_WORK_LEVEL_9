<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Grammar review</em> (Repaso gramatical)

    .row.mgb
      .col-12.col-xl-8(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo1")(data-aos="flip-up")
      .col-12.col-xl-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/1.png", alt="alt")
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 <em>Present Simple</em> (Presente simple)
    
    .row.mgb
      .col-12.col-xl-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/2.png", alt="alt")
      .col-12.col-xl-8(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo2")(data-aos="flip-up")
    
    .bg_grad-05
      .row.mb-5
        .col-xl-9
          p.colr <em>The simple present tense is conjugated using the basic form of the verb (it is the same as the infinitive, but without the word “to”). It is of great importance to consider that, when a verb is conjugated in the third-person singular, an "s" must be added at the end.</em> 
          p.mgb El tiempo presente simple se conjuga utilizando la forma básica del verbo (viene siendo igual al infinitivo, pero sin la palabra “to”). Resulta de gran importancia considerar que, cuando se conjuga un verbo en la tercera persona del singular, debe añadirse una “s” al final.
          .row
            .col-auto.d-flex.align-items-center
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema2/4.svg", alt="alt")
            .col-xl-10
              p.colr Now, you are invited to listen to the following BBC Learning English Podcast, where the grammatical concepts and the use of regular and irregular verbs using the simple present will be explained.
              span Ahora, le invitamos a escuchar el 
              span.colr_4 podcast de la BBC Learning English, 
              span donde se explicarán los conceptos gramaticales y el uso de los verbos regulares e irregulares utilizando el presente simple.

        .col-xl-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/3.png", alt="alt")
      
      SlyderF.mgb(columnas="col-lg-6 col-xl-12")
        div
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/5.png", alt="alt")
          .row.justify-content-center
            .col-xl-8
              TarjetaAudio.color-secundario(
                texto="Present simple - positives, negatives, and question forms… "
                :audio="require('@/assets/componentes/audios/2-1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        div
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/6.png", alt="alt")
          .row.justify-content-center
            .col-xl-8
              TarjetaAudio.color-secundario(
                texto="Present simple - positives, negatives, and question forms… "
                :audio="require('@/assets/componentes/audios/2-2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        div
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/7.png", alt="alt")
          .row.justify-content-center
            .col-xl-8
              TarjetaAudio.color-secundario(
                texto="Present simple - positives, negatives, and question forms… "
                :audio="require('@/assets/componentes/audios/2-3.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        div
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/8.png", alt="alt")
          .row.justify-content-center
            .col-xl-8
              TarjetaAudio.color-secundario(
                texto="Present simple - positives, negatives, and question forms… "
                :audio="require('@/assets/componentes/audios/2-4.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        div
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/9.png", alt="alt")
          .row.justify-content-center
            .col-xl-8
              TarjetaAudio.color-secundario(
                texto="Present simple - positives, negatives, and question forms… "
                :audio="require('@/assets/componentes/audios/2-5.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    
    p.colr <em>In the following table, you can see the form of conjugation, which will depend on the subject or grammatical person being spoken about, taking into account whether it is in a singular or plural number.</em>
    p.mb-5 En la siguiente tabla, puede observarse la forma de conjugación, que va a depender del sujeto o persona gramatical de quien se habla, tomando en cuenta si está en número singular o plural.


    


</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema2',
  components: {
    TraduccionAudio,
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Due to the nature of this component, it is necessary to review some important grammar, such as Present Simple, Past Simple, and Past Continuous. The idea is to start expressing more complex ideas by using basic grammar structures which will complement the knowledge acquired throughout the course.</em>',
        textoEsp:
          'Debido a la naturaleza de este componente, es necesario repasar algunas estructuras gramaticales importantes, como el presente simple, pasado simple y pasado continuo. La idea es empezar a expresar ideas más complejas mediante el uso de estructuras gramaticales básicas, lo cual complementará el conocimiento adquirido en el curso.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>The present simple is one of the most common tenses when speaking because it is the one used to express about everyday activities, facts from the present, likes, dislikes, and routines in general.  So let’s take a look at the basic structures:</em>',
        textoEsp:
          'El presente simple es uno de los tiempos más comunes a la hora de hablar, porque es el que se utiliza para expresar actividades cotidianas, hechos del presente, gustos, disgustos y rutinas en general. Entonces, veamos las estructuras básicas:',
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
