<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Sequential linkers - Past time</em> (Conectores secuenciales - Tiempo pasado)

    .row.mgb
      .col-12.col-xl-8(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo1")(data-aos="flip-up")
      .col-12.col-xl-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema4/1.png", alt="alt")
    
    p.colr <em>Connectors in English are words or phrases with which two or more ideas can get related. There is a great diversity of connectors thanks to the fact that there are many ways to relate them, that is, sentences can be joined to complement each other, contradict each other, raise a cause or a conclusion, among other functions that are explained below.</em>
    p.mb-5 Los conectores en inglés son palabras o frases con los que se pueden relacionar dos o más ideas. Existe una gran diversidad de conectores gracias a que existen muchas formas de relacionarlas, es decir, se pueden unir oraciones para complementarse, contradecirse, plantear una causa o una conclusión, entre otras funciones, que se explican a continuación:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenido.p-4.h-100
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/4-1.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/tema4/2.svg' alt='AvatarTop')
        h4.text-center.colr_1 <em>First</em>
        p.text-center.colr_1 <em>It is used to initiate a sentence or a series of sentences.</em>
        p.text-center.mb-3 Es usado para iniciar una oración o serie de oraciones.
        .tarjeta.bgr_1.p-4.text-center
          p.mb-0.text-bold.colr <em>Example:</em>
          span.colr_4.text-bold <em>First, </em> 
          span.colr.text-bold <em>crack the egg.</em>
      .tarjeta.color-acento-contenido.p-4.h-100
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/4-2.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/tema4/3.svg' alt='AvatarTop')
        h4.text-center.colr_1 <em>Then</em>
        p.text-center.colr_1 <em>It is used to show the following event in a series.</em>
        p.text-center.mb-3 Se usa para mostrar el siguiente evento en una serie.
        .tarjeta.bgr_1.p-4.text-center
          p.mb-0.text-bold.colr <em>Example:</em>
          span.colr_4.text-bold <em>Then, </em> 
          span.colr.text-bold <em>add the flour.</em>
      .tarjeta.color-acento-contenido.p-4.h-100
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/4-3.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/tema4/4.svg' alt='AvatarTop')
        h4.text-center.colr_1 <em>Next</em>
        p.text-center.colr_1 <em>It is used to show the following event in a series.</em>
        p.text-center.mb-3 Se usa para mostrar el siguiente evento en una serie.
        .tarjeta.bgr_1.p-4.text-center
          p.mb-0.text-bold.colr <em>Example:</em>
          span.colr_4.text-bold <em>Next, </em> 
          span.colr.text-bold <em>mix it for a minute.</em>
      .tarjeta.color-acento-contenido.p-4.h-100
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/4-4.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/tema4/5.svg' alt='AvatarTop')
        h4.text-center.colr_1 <em>After</em>
        p.text-center.colr_1 <em>It is used to show the following event in a series; it can be proceeded by a subject or a verb in ING form.</em>
        p.text-center.mb-3 Se usa para mostrar el siguiente evento en una serie, puede ir seguido de un sujeto o un verbo en forma <em>ING</em>.
        .tarjeta.bgr_1.p-4.text-center
          p.mb-0.text-bold.colr <em>Example:</em>
          span.colr_4.text-bold <em>After mixing, </em> 
          span.colr.text-bold <em>add some oil.</em>
      .tarjeta.color-acento-contenido.p-4.h-100
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/4-5.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/tema4/6.svg' alt='AvatarTop')
        h4.text-center.colr_1 <em>After that</em>
        p.text-center.colr_1 <em>It is used to show the following event in a series.</em>
        p.text-center.mb-3 Se usa para mostrar el siguiente evento en una serie.
        .tarjeta.bgr_1.p-4.text-center
          p.mb-0.text-bold.colr <em>Example:</em>
          span.colr_4.text-bold <em>After that, </em> 
          span.colr.text-bold <em>heat the oven.</em>
      .tarjeta.color-acento-contenido.p-4.h-100
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/4-6.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/tema4/7.svg' alt='AvatarTop')
        h4.text-center.colr_1 <em>Before</em>
        p.text-center.colr_1 <em>It is used to show the previous event in a series.</em>
        p.text-center.mb-3 Se usa para mostrar el evento anterior en una serie.
        .tarjeta.bgr_1.p-4.text-center
          p.mb-0.text-bold.colr <em>Example:</em>
          span.colr_4.text-bold <em>Before cooking, </em> 
          span.colr.text-bold <em>put some butter on.</em>
      .tarjeta.color-acento-contenido.p-4.h-100
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/4-7.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop')
        h4.text-center.colr_1 <em>Before that</em>
        p.text-center.colr_1 <em>It is used to show the previous event in a series.</em>
        p.text-center.mb-3 Se usa para mostrar el evento anterior en una serie.
        .tarjeta.bgr_1.p-4.text-center
          p.mb-0.text-bold.colr <em>Example:</em>
          span.colr_4.text-bold <em>Before that, </em> 
          span.colr.text-bold <em>melt the butter.</em>
      .tarjeta.color-acento-contenido.p-4.h-100
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/4-8.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/tema4/9.svg' alt='AvatarTop')
        h4.text-center.colr_1 <em>Finally</em>
        p.text-center.colr_1 <em>It is used to finish a narration, to conclude a story.</em>
        p.text-center.mb-3 Se utiliza para terminar una narración, para concluir una historia.
        .tarjeta.bgr_1.p-4.text-center
          p.mb-0.text-bold.colr <em>Example:</em>
          span.colr_4.text-bold <em>Finally, </em> 
          span.colr.text-bold <em>cook it during thirty minutes.</em>

    p.colr Let’s see if you are able to complete the following sentences with the correct linkers:
    p.mb-5 Veamos si es capaz de completar las siguientes frases con los conectores correctos: 

    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Titulo de actividad - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.





</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema4',
  components: {
    TraduccionAudio,
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Telling a story is a difficult task when there are no sequential linkers to give a structure to the narration. That is why they are such an important piece to order and structure a story. In English, there are several linkers and they can be used in most tenses. </em>',
        textoEsp:
          'Contar una historia es una tarea difícil cuando no hay enlaces secuenciales que den una estructura a la narración. Por eso, son una pieza tan importante para ordenar y estructurar una historia. En inglés, existen varios conectores y se pueden utilizar en la mayoría de los tiempos verbales. ',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Teacher',
          img: require('@/assets/curso/tema4/10.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Teacher',
          textoIng:
            '***, I entered college, it was the best day of my ***, then I got graduated. I still can’t believe time really flies when you are having fun. However, *** finishing the ceremony I felt empty, like something was missing. That is why I talked to Professor Geller, my favorite teacher. He suggested studying my master’s degree, but ***, I had to make money to pay the fees, it was incredibly expensive. ***, I decided to ask for a student’s loan, it will be more expensive, but I won’t waste my time. ',
          textoEsp: '¿Qué hay, Tory?',
          audio: require('@/assets/componentes/audios/4-9.mp3'),
          palabra: 'UP',
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
