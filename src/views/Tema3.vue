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
              
    p.colr <em>As you can see in the previous examples, those expressions only show how the person felt at a moment in the past or a period of time. Therefore, in order to be able to communicate past routines and habits, let’s see how to use “used to” and “would”.</em> 
    p Como se puede ver en los ejemplos anteriores, esas expresiones solo muestran cómo se sentía la persona en un momento del pasado o en un periodo de tiempo. Por lo tanto, para poder comunicar rutinas y hábitos pasados, veamos cómo utilizar "<em>used to</em>" y "<em>would</em>".

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 <em>Use of "used to" - narrative</em> (Uso de "<em>used to</em>" - narrativa)

    .row.mgb
      .col-12.col-xl-5(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/3.png", alt="alt")
      .col-12.col-xl-7(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo2")(data-aos="flip-up")
    
    AcordionA.bgr_15.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      div(titulo="<em>Affirmative sentence:</em>")
        .row.justify-content-center
          .col-xl-8
            figure.mb-5.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema3/4.svg", alt="alt")
          .col-xl-auto.mt-4
            Audio.color-secundario(
              :audio="require('@/assets/componentes/audios/3-2.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
        
        p.text-bold.text-center <em>Examples:</em>

        .row.justify-content-center
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>My mom used to feel blue when I rode my motorcycle. </em>"
              :audio="require('@/assets/componentes/audios/3-3.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 Mi mamá solía sentirse triste cuando yo montaba mi motocicleta.
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>Natalia used to be yellow when she was at elementary school.</em>"
              :audio="require('@/assets/componentes/audios/3-4.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 Natalia solía ser cobarde cuando estaba en la escuela primaria.
      div(titulo="<em>Negative sentence:</em>")
        .row.justify-content-center
          .col-xl-8
            figure.mb-5.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema3/5.svg", alt="alt")
          .col-xl-auto.mt-4
            Audio.color-secundario(
              :audio="require('@/assets/componentes/audios/3-5.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
        
        p.text-bold.text-center <em>Examples:</em>

        .row.justify-content-center
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>My mom didn’t use to feel blue when I rode my motorcycle.</em>"
              :audio="require('@/assets/componentes/audios/3-6.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 Mi mamá no solía sentirse triste cuando yo montaba mi motocicleta..
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>Natalia didn’t use to be yellow when she was in elementary school.</em>"
              :audio="require('@/assets/componentes/audios/3-7.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 Natalia no solía ser cobarde cuando estaba en la escuela primaria.
      div(titulo="<em>Interrogative sentence:</em>")
        .row.justify-content-center
          .col-xl-8
            figure.mb-5.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema3/6.svg", alt="alt")
          .col-xl-auto.mt-4
            Audio.color-secundario(
              :audio="require('@/assets/componentes/audios/3-8.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
        
        p.text-bold.text-center <em>Examples:</em>

        .row.justify-content-center
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>Did my mom use to feel blue when I rode my motorcycle?  </em>"
              :audio="require('@/assets/componentes/audios/3-9.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 ¿Mi mamá solía sentirse triste cuando yo montaba mi motocicleta?
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>Did Natalia use to be yellow when she was at elementary school?</em>"
              :audio="require('@/assets/componentes/audios/3-10.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 ¿Natalia solía ser cobarde cuando estaba en la escuela primaria?
    
    p.mb-5 A continuación, se nombran algunas advertencias para identificar el uso correcto del “<em>used to</em>”.

    
    .row.mb-5
      .col-xl-6.bg_grad-08
        .row.justify-content-center
          .col-xl-4
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/7.png", alt="alt")
          .col-xl-8.d-flex.align-items-center
            div
              .row.mb-3 
                .col-auto 
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/9.svg", alt="alt")
                .col-xl-8
                  h4.mb-0.colr_4 <em>Warning #2</em>
                  h4 Advertencia #2
              p.colr_1 <em>We can also write negative sentences in order to talk about those routines that we didn’t have or something that was not part of our daily activities.</em> 
              p.mb-0.text-white También se pueden escribir frases negativas para hablar de aquellas rutinas que no teníamos o de algo que no formaba parte de nuestras actividades diarias.
      .col-xl-6.bg_grad-08
        .row.justify-content-center
          .col-xl-4
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema3/8.png", alt="alt")
          .col-xl-8.d-flex.align-items-center
            div
              .row.mb-3 
                .col-auto 
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/9.svg", alt="alt")
                .col-xl-8
                  h4.mb-0.colr_4 <em>Warning #3</em>
                  h4 Advertencia #3
              p.colr_1 <em>In case you need to know any information about some people’s routines or daily activities, you have to use an interrogative structure.</em> 
              p.mb-0.text-white En caso de que se necesite saber alguna información sobre las rutinas o actividades diarias de algunas personas, hay que utilizar una estructura interrogativa.
    
    p.colr <em>Let’s see if you are able to complete the following sentences with “used to” based on the structures seen:</em>
    p.mb-5 Veamos si es capaz de completar las siguientes frases con "<em>used to</em>" a partir de las estructuras vistas:

    Dialogo.color-primario.mb-5.pst_9(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Complete the following sentences with “used to” based on the structures seen.</em>
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 <em>Use of “would” for habits</em> (Uso de “<em>would</em>” para hábitos)

    .row.mgb
      .col-12.col-xl-7(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo3")(data-aos="flip-up")
      .col-12.col-xl-5(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/12.png", alt="alt")
    
    AcordionA.bgr_15.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      div(titulo="<em>Affirmative sentence:</em>")
        .row.justify-content-center
          .col-xl-8
            figure.mb-5.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema3/13.svg", alt="alt")
          .col-xl-auto.mt-4
            Audio.color-secundario(
              :audio="require('@/assets/componentes/audios/3-15.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
        
        p.text-bold.text-center <em>Examples:</em>

        .row.justify-content-center
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>Donna would eat pizza every time she was sad.</em>"
              :audio="require('@/assets/componentes/audios/3-16.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 Donna comía pizza cada vez que estaba triste.
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>Jeff would travel to Europe in the summer when he was rich.</em>"
              :audio="require('@/assets/componentes/audios/3-17.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 Jeff viajaba a Europa en verano cuando era rico.
      div(titulo="<em>Negative sentence:</em>")
        .row.justify-content-center
          .col-xl-8
            figure.mb-5.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema3/14.svg", alt="alt")
          .col-xl-auto.mt-4
            Audio.color-secundario(
              :audio="require('@/assets/componentes/audios/3-18.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
        
        p.text-bold.text-center <em>Examples:</em>

        .row.justify-content-center
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>Donna wouldn’t eat pizza every time she was sad.</em>"
              :audio="require('@/assets/componentes/audios/3-19.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 Donna no comía pizza cada vez que estaba triste.
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>Jeff wouldn’t travel to Europe in the summer when he was rich.</em>"
              :audio="require('@/assets/componentes/audios/3-20.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 Jeff no viajaba a Europa en verano cuando era rico.
      div(titulo="<em>Interrogative sentence:</em>")
        .row.justify-content-center
          .col-xl-8
            figure.mb-5.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema3/15.svg", alt="alt")
          .col-xl-auto.mt-4
            Audio.color-secundario(
              :audio="require('@/assets/componentes/audios/3-21.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
        
        p.text-bold.text-center <em>Examples:</em>

        .row.justify-content-center
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>Would Donna eat pizza every time she was sad? </em>"
              :audio="require('@/assets/componentes/audios/3-22.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 ¿Donna comía pizza cada vez que estaba triste?
          .col-xl-6
            TarjetaAudio.color-secundario.mb-3(
              texto="<em>Would Jeff travel to Europe in the summer when he was rich?</em>"
              :audio="require('@/assets/componentes/audios/3-23.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-3 ¿Jeff viajaba a Europa en verano cuando era rico?
    
    p.mb-5 A continuación, se nombran algunas advertencias para identificar el uso correcto del “<em>would</em>”

    .row.mb-5
      .col-xl-6.bg_grad-08
        .row.justify-content-center
          .col-xl-4
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema3/16.png", alt="alt")
          .col-xl-8.d-flex.align-items-center
            div
              .row.mb-3 
                .col-auto 
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/9.svg", alt="alt")
                .col-xl-8
                  h4.mb-0.colr_4 <em>Warning #4</em>
                  h4 Advertencia #4
              p.colr_1 <em>We can also write negative sentences in order to talk about those routines that we didn’t have or something that was not part of our daily activities.</em> 
              p.mb-0.text-white También se pueden escribir frases negativas para hablar de aquellas rutinas que no teníamos o de algo que no formaba parte de nuestras actividades diarias.
      .col-xl-6.bg_grad-08
        .row.justify-content-center
          .col-xl-4
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema3/17.png", alt="alt")
          .col-xl-8.d-flex.align-items-center
            div
              .row.mb-3 
                .col-auto 
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema3/9.svg", alt="alt")
                .col-xl-8
                  h4.mb-0.colr_4 <em>Warning #5</em>
                  h4 Advertencia #5
              p.colr_1 <em>In case you need to know any information about some people’s routines or daily activities, you have to use an interrogative structure.</em> 
              p.mb-0.text-white En caso de que se necesite saber alguna información sobre las rutinas o actividades diarias de algunas personas, hay que utilizar una estructura interrogativa.
    
    p.colr <em>Let’s see if you are able to complete the following sentences with “<b>would</b>” based on the structures seen:</em>
    p.mb-5 Veamos si es capaz de completar las siguientes frases con 
      span.colr_4.text-bold "would" 
      | a partir de las estructuras vistas:
    
    Dialogo.color-primario.mb-5.pst_9(:dialogo="dialogo4")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Complete the following sentences with “would” based on the structures seen.</em>
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

    p.colr Here are some other examples:
    p.mb-5 Aquí hay otros ejemplos:

    .bg_grad-09
      .row
        .col-xl-2
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema3/20.svg", alt="alt")
        .col-xl-6
          TraduccionT.color-acento-botones.bgr_16(:dialogo="dialogo5")(data-aos="flip-up")
          .row
            .col-xl-9
              TarjetaAudio.color-secundario.mb-3(
                :audio="require('@/assets/componentes/audios/3-28.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-4
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema3/21.png", alt="alt")



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
    dialogo3: [
      {
        textoIng:
          '<em>The use of “<b>would</b>” for talking about habits is not that common. “<b>Would</b>” is different from “<b>used to</b>” because it is an auxiliary verb and it doesn’t use the same structures of the simple past.<br><br>We can discuss past habits using “<b>would</b>” in much the same way, and with the same meaning as “<b>used to”. Here is the formula: subject + would + base form of the verb</b>. For the negative, <b>use subject + wouldn’t + base form of the verb</b>. <br><br>Some examples: <br><br> •	When we were young, our mother would cook delicious meals every day.   We could also say: “<b>Our mother used to cook delicious meals every day</b>.” <br><br> •	Every weekend, I would take a long bike ride during summer vacations.   <b>“Every weekend, I used to take a long bike ride...”</b> is also correct. Let’s see the structures:</em>',
        textoEsp:
          'El uso de "<em>would</em>" para hablar de hábitos no es tan común. "<em>Would</em>" es diferente de "<em>used to</em>" porque es un verbo auxiliar y no utiliza las mismas estructuras del pasado simple. <br><br>Podemos discutir hábitos pasados usando “<em>would</em>” de la misma manera y con el mismo significado que “<em>used to</em>”. Aquí está la fórmula: sujeto + <em>would</em> + forma base del verbo. Para la negación, sujeto + <em>wouldn’t</em> + forma base del verbo.Algunos ejemplos: <br><br> •	<em>When we were young, our mother would cook delicious meals every day</em>. También podríamos decir: “<em>Our mother used to cook delicious meals every day</em>.”  <br><br>•	<em>Every weekend, I would take a long bike ride during summer vacations</em>.   “<em>Every weekend, I used to take a long bike ride...</em>” también es correcto. Veamos las estructuras:',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em><b>Teacher:</b> Laura used to smoke when she was stressed, but she doesn’t do it anymore.<br><b>Teacher:</b> My cousins didn’t use to come home often until I got my new videogame.<br><b>Teacher:</b> Where did you use to go when you were bored? <br><b>Teacher:</b> I wouldn’t go to the gym because I was lazy. <br><b>Teacher:</b> I would go to the library every day in high school because my house was too noisy. </em>',
        textoEsp:
          '<em><b>Teacher:</b> Laura solía fumar cuando estaba estresada, pero ya no lo hace. <br><b>Teacher:</b> Mis primos no solían venir a casa seguido, hasta que compré mi nuevo videojuego.<br><b>Teacher:</b> ¿A dónde solías ir cuando estabas aburrido? <br><b>Teacher:</b> No iba al gimnasio porque era perezoso. <br><b>Teacher:</b> Yo iba todos los días a la biblioteca porque mi casa era muy ruidosa.',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Victor:',
          img: require('@/assets/curso/tema3/10.svg'),
        },
        {
          nombre: 'Gina:',
          img: require('@/assets/curso/tema3/11.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Victor:',
          textoIng: '<em>Where *** you use to go on vacation in summer?</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/3-11.mp3'),
          palabra: '<em>did</em>',
        },
        {
          personaje: 'Gina:',
          textoIng: '<em>I *** to travel to Costa Rica, my hometown.</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/3-12.mp3'),
          palabra: '<em>used</em>',
        },
        {
          personaje: 'Victor:',
          textoIng: '<em>Awesome! I *** use to travel when I was younger.</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/3-13.mp3'),
          palabra: '<em>didn’t</em>',
        },
        {
          personaje: 'Gina:',
          textoIng: '<em>That’s too bad, I have incredible memories.</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/3-14.mp3'),
        },
      ],
    },
    dialogo4: {
      personajes: [
        {
          nombre: 'Eddy:',
          img: require('@/assets/curso/tema3/22.svg'),
        },
        {
          nombre: 'Paula:',
          img: require('@/assets/curso/tema3/19.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Eddy:',
          textoIng:
            '<em>I *** (not/go) out every weekend when I was in college.</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/3-24.mp3'),
          palabra: '<em>wouldn’t go</em>',
        },
        {
          personaje: 'Paula:',
          textoIng:
            '<em>I know you *** (spend) your weekend playing videogames at home.</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/3-25.mp3'),
          palabra: '<em>would spend</em>',
        },
        {
          personaje: 'Eddy:',
          textoIng:
            '<em>What *** you do (do) on weekend when you were in college?</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/3-26.mp3'),
          palabra: '<em>would</em>',
        },
        {
          personaje: 'Paula:',
          textoIng:
            '<em>I had a boyfriend at college so I *** (spend) the whole weekend with him</em>',
          textoEsp: '',
          audio: require('@/assets/componentes/audios/3-27.mp3'),
          palabra: '<em>would spend</em>',
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
