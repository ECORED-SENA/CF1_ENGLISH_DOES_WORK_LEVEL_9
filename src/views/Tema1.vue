<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>My life used to be blue</em> (Mi vida solía ser triste)
    
    .row.mgb
      .col-12.col-xl-8(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo1")(data-aos="flip-up")
      .col-12.col-xl-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/1.png", alt="alt")
    
    .bg_grad-03
      .tarjeta.bgr_1.p-4.mgb
        h4.text-center.colr <em>Vocabulary</em> / Vocabulario 
        p.mb-0.text-center.colr <em>Expressions that can be used in English to have a more complex conversation.</em>
        p.mb-5.text-center Expresiones que se pueden usar en inglés para tener una conversación más compleja.
        .row.justify-content-center.mb-3
          .col-xl-2
            .tarjeta.p-2.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}" style='height: 311px')
              .tarjeta.bgr_1.p-4.positio-relative
                p.mb-0.text-center.text-bold <em>Feel blue</em>
                Audio.color-acento-botones.pst_1(
                  :audio="require('@/assets/componentes/audios/1-1.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
          .col-xl-2
            .tarjeta.p-2.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}" style='height: 311px')
              .tarjeta.bgr_1.px-3.py-4.positio-relative
                p.mb-0.text-center.text-bold <em>Green with envy</em>
                Audio.color-acento-botones.pst_2(
                  :audio="require('@/assets/componentes/audios/1-2.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
          .col-xl-2
            .tarjeta.p-2.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/4.png')})`}" style='height: 311px')
              .tarjeta.bgr_1.p-4.positio-relative
                p.mb-0.text-center.text-bold <em>Fed up</em>
                Audio.color-acento-botones.pst_3(
                  :audio="require('@/assets/componentes/audios/1-3.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
          .col-xl-2
            .tarjeta.p-2.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}" style='height: 311px')
              .tarjeta.bgr_1.p-4.positio-relative
                p.mb-0.text-center.text-bold <em>On cloud nine</em>
                Audio.color-acento-botones.pst_2(
                  :audio="require('@/assets/componentes/audios/1-4.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
          .col-xl-2
            .tarjeta.p-2.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}" style='height: 311px')
              .tarjeta.bgr_1.p-4.positio-relative
                p.mb-0.text-center.text-bold <em>Tickled pink</em>
                Audio.color-acento-botones.pst_4(
                  :audio="require('@/assets/componentes/audios/1-5.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
        .row.justify-content-center
          .col-xl-2
            .tarjeta.p-2.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/7.png')})`}" style='height: 311px')
              .tarjeta.bgr_1.p-4.positio-relative
                p.mb-0.text-center.text-bold <em>To be yellow</em>
                Audio.color-acento-botones.pst_2(
                  :audio="require('@/assets/componentes/audios/1-6.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
          .col-xl-2
            .tarjeta.p-2.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/8.png')})`}" style='height: 311px')
              .tarjeta.bgr_1.px-3.py-4.positio-relative
                p.mb-0.text-center.text-bold <em>Chilled out</em>
                Audio.color-acento-botones.pst_1(
                  :audio="require('@/assets/componentes/audios/1-7.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
          .col-xl-2
            .tarjeta.p-2.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/9.png')})`}" style='height: 311px')
              .tarjeta.bgr_1.p-4.positio-relative
                p.mb-0.text-center.text-bold <em>Spaced out</em>
                Audio.color-acento-botones.pst_4(
                  :audio="require('@/assets/componentes/audios/1-8.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
          .col-xl-2
            .tarjeta.p-2.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/10.png')})`}" style='height: 311px')
              .tarjeta.bgr_1.p-4.positio-relative
                p.mb-0.text-center.text-bold <em>Shaken up</em>
                Audio.color-acento-botones.pst_6(
                  :audio="require('@/assets/componentes/audios/1-9.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
          .col-xl-2
            .tarjeta.p-2.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/11.png')})`}" style='height: 311px')
              .tarjeta.bgr_1.p-4.positio-relative
                p.mb-0.text-center.text-bold <em>To be on pins and needles</em>
                Audio.color-acento-botones.pst_5(
                  :audio="require('@/assets/componentes/audios/1-10.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
    
    p.colr <em>When talking about feelings and emotions in English, it is natural to use some expressions that may sound odd due to vocabulary used to express them. Some of them are expressed with colors, as you can see in the following example.</em>
    p.mb-5 Cuando se habla de sentimientos y emociones en inglés, es natural utilizar algunas expresiones que pueden sonar extrañas debido al vocabulario utilizado para expresarlas. Algunas de ellas se expresan con colores, como puede ver en el siguiente ejemplo.

    .bg_grad-04
      .row.justify-content-center.mgb
        .col-xl-10
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/12.svg", alt="alt")
          .bgr_2.p-4
            p.colr.text-bold <em>Conversation</em> 1:
            span.text-bold.colr_4 <em>Sara: </em> 
            span.colr <em>Hey, Danny! How’re you doing?</em> 
            br
            span.text-bold <em>Danny: </em> 
            span.colr <em>Hi, Sara, not so good, I feel blue today.</em>
            br
            span.text-bold.colr_4 <em>Sara: </em> 
            span.colr <em>Why? What happened?</em> 
            br
            span.text-bold <em>Danny: </em> 
            span.colr <em>I was green with envy when my brother showed me his new car, that’s terrible of me.</em>
            .row.mt-3.justify-content-between
              .col-12.col-lg-9
                TarjetaAudio.color-secundario(
                  :audio="require('@/assets/componentes/audios/1-11.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-12.col-lg-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Ver traducción 
                  i.fas.fa-language
                  .indicador--click(v-if="mostrarIndicador")
    
    ModalA(:abrir-modal.sync="modal1")
      p.colr.text-bold Conversación 1 :
      span.text-bold.colr_4 Sara: 
      span Hola, Danny, ¿cómo te va? 
      br
      span.text-bold Danny: 
      span Hola, Sara, no muy bien, <b>me siento triste</b> hoy.
      br
      span.text-bold.colr_4 Sara: 
      span ¿Por qué? ¿Qué pasó?
      br
      span.text-bold Danny: 
      span Estaba muy celoso cuando mi hermano me mostró su carro nuevo, eso es terrible de mi parte.
    
    p.colr <em>Some other expressions related to feelings and emotions use adverbs to complement the sentence. Let's test how much you learned using the vocabulary. Complete the following dialogue.</em>
    p.mb-5 Algunas otras expresiones relacionadas con sentimientos y emociones usan adverbios para complementar la frase. Probemos cuánto se aprendió utilizando el vocabulario. Complete el siguiente diálogo. 

    h3.colr <em>Practice dialogue</em> / Diálogo de práctica
    p.colr.mb-5 A continuación, se presenta el siguiente diálogo entre dos personajes que utilizan expresiones relacionadas con sentimientos y emociones.

    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Dialogue Feelings and emotions</em> / Diálogo sentimientos y emociones 
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.


</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema1',
  components: {
    TraduccionAudio,
    TraduccionT,
  },
  data: () => ({
    modal1: false,
    dialogo1: [
      {
        textoIng:
          '<em>In English, there are a lot of ways to express ideas, feelings and emotions. Some of them are specific words that you can find in a dictionary; however, some others are expressions called “idioms”, which are more elaborated and common in everyday speech. Expressions such as “to be all at sea” or “to be hopping mad” are common in native English speakers.   <br> As the previous ones, there are some other expressions that you can use in English in order to have a more complex conversation. Here are some other expressions:</em>',
        textoEsp:
          'En inglés, hay muchas formas de expresar ideas, sentimientos y emociones. Algunas de ellas son palabras específicas que se pueden encontrar en un diccionario; sin embargo, otras son expresiones llamadas "<em>idioms</em>", que son más elaboradas y comunes en el habla cotidiana. Expresiones como "<em>to be all at sea</em>", o "<em>to be hopping mad</em>" son comunes en los hablantes nativos de inglés.<br>Como las anteriores, hay otras expresiones que se pueden usar en inglés para tener una conversación más compleja. Conozca otras expresiones.',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Gio',
          img: require('@/assets/curso/tema1/13.svg'),
        },
        {
          nombre: 'Tory',
          img: require('@/assets/curso/tema1/14.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Gio',
          textoIng: '<em>What’s *** Tory?</em>',
          textoEsp: '¿Qué hay, Tory?',
          audio: require('@/assets/componentes/audios/1-12.mp3'),
          palabra: '<em>UP</em>',
        },
        {
          personaje: 'Tory',
          textoIng: '<em>Not much, Gio, I feel completely ***!</em>',
          textoEsp: 'No mucho, Geo, ¡me siento harta!',
          audio: require('@/assets/componentes/audios/1-13.mp3'),
          palabra: '<em>FED UP</em>',
        },
        {
          personaje: 'Gio',
          textoIng:
            '<em>Really? I am on *** nine! But, tell me, what’s going on?</em>',
          textoEsp: '¿En serio? ¡Yo estoy súper feliz! Pero, dime, ¿qué pasa?',
          audio: require('@/assets/componentes/audios/1-14.mp3'),
          palabra: '<em>CLOUD</em>',
        },
        {
          personaje: 'Tory',
          textoIng: '<em>I can imagine you *** the test, but I failed it.</em>',
          textoEsp: 'Me imagino que tú pasaste el examen, pero yo lo perdí.',
          audio: require('@/assets/componentes/audios/1-15.mp3'),
          palabra: '<em>PASSED</em>',
        },
      ],
    },
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
