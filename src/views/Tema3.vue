<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Habits in the past</em> (Hábitos en el pasado)
    
    .row.mgb
      .col-12.col-xl-8(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo1")(data-aos="flip-up")
      .col-12.col-xl-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/1.png", alt="alt")
    
    .bg_grad-04
      .row.justify-content-center.mgb
        .col-xl-10
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema3/2.svg", alt="alt")
          .bgr_2.p-4
            p.colr.text-bold Conversation 4:
            span.text-bold.colr_4 <em>Teacher: </em> 
            span.colr <em>Daniel felt tickled pink when Karla helped him with his homework.</em>  
            span.colr_2  / Daniel se sintió muy feliz cuando Karla le ayudó con sus deberes.
            br
            span.text-bold.colr_4 <em>Teacher: </em> 
            span.colr <em>Marlon stayed home because he was afraid of getting out.</em>  
            span.colr_2  / Marlon se quedó en casa porque tenía miedo de salir.
            br
            span.text-bold.colr_4 <em>Teacher: </em> 
            span.colr <em>Bob felt on cloud nine when he saw snow for the first time.</em>  
            span.colr_2  / Bob se sintió en una nube cuando vio la nieve por primera vez.
            br
            span.text-bold.colr_4 <em>Teacher: </em> 
            span.colr <em>My teacher got angry due to our behavior in her class.</em>  
            span.colr_2  / Mi profesora se enfadó por nuestro comportamiento en  clase.
            br
            span.text-bold.colr_4 <em>Teacher: </em> 
            span.colr <em>I was spaced out during high school, but I changed in college.</em>  
            span.colr_2  / Durante el instituto, fui muy disperso, pero cambié en la universidad.
            TarjetaAudio.color-secundario.mt-3(
              :audio="require('@/assets/componentes/audios/3-1.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              
    p.colr As you can see in the previous examples, those expressions only show how the person felt at a moment in the past or a period of time. Therefore, in order to be able to communicate past routines and habits, let’s see how to use “used to” and “would”. 
    p Como se puede ver en los ejemplos anteriores, esas expresiones solo muestran cómo se sentía la persona en un momento del pasado o en un periodo de tiempo. Por lo tanto, para poder comunicar rutinas y hábitos pasados, veamos cómo utilizar "used to" y "would".

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 <em>Use of "used to" - narrative</em> (Uso de "<em>used to</em>" - narrativa)

    .row.mgb
      .col-12.col-xl-5(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/3.png", alt="alt")
      .col-12.col-xl-7(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo2")(data-aos="flip-up")

</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema3',
  components: {
    TraduccionAudio,
    TraduccionT,
  },
  data: () => ({
    modal1: false,
    dialogo1: [
      {
        textoIng:
          '<em>When talking about the past, it is important to clarify that some of those expressions we use to communicate activities that were a routine in the past or habits cannot just be told by using the simple past basic structures because they only talk about facts and events from the past, but they don’t allow you to show routines. So, if you want to talk about feelings and emotions using simple past, you can tell how you felt in a moment or period of time. Let’s see some examples:</em>',
        textoEsp:
          'Al hablar del pasado, es importante aclarar que algunas de esas expresiones que utilizamos para comunicar actividades que eran una rutina o hábitos en el pasado no pueden contarse solo utilizando las estructuras básicas del pasado simple, porque ellas hablan de hechos y eventos del pasado, pero no permiten mostrar rutinas. Entonces, si se quiere hablar de sentimientos y emociones utilizando el pasado simple, usted puede contar cómo se sintió en un momento o periodo de tiempo. Veamos algunos ejemplos:',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>Used to is an expression we use to talk about repeated actions in the past that we don’t do in the present, besides, it is also used to talk about states in the past which are no longer true. <br><br>The structures don’t change very much because “used to” is only an expression, not a grammar structure. Therefore, the structure of simple past is used in order to assemble the sentences. Let’s see how it works:</em>',
        textoEsp:
          '"<em>Used to</em>" es una expresión que se usa para hablar de acciones repetidas en el pasado y que no se hacen en el presente; además, también se utiliza para hablar de estados del pasado que ya no son ciertos. <br><br> Las estructuras no cambian mucho, porque "<em>used to</em>" es solo una expresión, no una estructura gramatical. Por lo tanto, se utiliza la estructura del pasado simple para armar las oraciones. Veamos cómo funciona:',
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
