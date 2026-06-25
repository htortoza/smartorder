jun 24, 2026

## Reunión del 24 jun 2026 a las 10:54 GMT-04:00 \- Transcripción

### 00:00:01

**Cristian Borgoño:** Sí,

**Henry Tortoza:** ya voy a voy a tomar nota de la reunión para sacar un informe rapidito después que terminemos.

**Cristian Borgoño:** al Lucho no lo vaya a llamar.

**Henry Tortoza:** Met al Lucho. Sí, sería bueno.

**Cristian Borgoño:** Sí,

**Henry Tortoza:** A

**Cristian Borgoño:** porque mis preocupaciones son por él,

**Henry Tortoza:** ver,

**Cristian Borgoño:** así que al final lo que lo opine importa.

**Henry Tortoza:** perfecto. Mira, estuve hablando con Luz Mila y me dice que claro que necesita que yo le agregue las tareas de la planificación a su a su espacio de cuándo podríamos tener eh Pixi que le ponga cuándo vamos a tener la primera reunión con cliente, cuándo el consultor qué información debe entregarme ella como consultor y qué es lo que le vamos a mostrar en la primera reunión de clientes. para

**Cristian Borgoño:** David me

**Henry Tortoza:** que

**Cristian Borgoño:** habló.

**Henry Tortoza:** estamos, Luchito todo listo para

**Luis Vera:** Bien, bien.

**Henry Tortoza:** mañana.

**Luis Vera:** No,

**Henry Tortoza:** ¿Cómo que no? Si entramos para que me hicieras una presentación.

**Luis Vera:** no.

**Henry Tortoza:** Lo de mañana

**Luis Vera:** ¿Cómo te voy a presentar si no sé qué vamos a presentar?

### 00:01:27

**Henry Tortoza:** chutal.

**Cristian Borgoño:** Dame un momento.

**Henry Tortoza:** Si no te preocupes, Cristian. Y yo confiando

**Luis Vera:** Terminé la Terminé la ¿Cómo se llaman?

**Henry Tortoza:** en

**Luis Vera:** Migraciones.

**Henry Tortoza:** eso.

**Cristian Borgoño:** Y, ¿qué tal? ¿Qué tal funciona? ¿Lo probaste?

**Luis Vera:** Lo probé. Funciona este.

**Cristian Borgoño:** Buena. Yaste el problema.

**Henry Tortoza:** Maravilloso.

**Luis Vera:** Ah,

**Cristian Borgoño:** Simulaste un problema.

**Luis Vera:** no.

**Cristian Borgoño:** Un problema es que falla un tenant y tengáis que hacer un app para ese tenan propio. Bueno, lo preparaste para eso, ¿cierto? Y lo otro es que los downs también funcionen.

**Luis Vera:** Ah, ya no, todavía no está listo.

**Cristian Borgoño:** Ya. Y la la otra cosita que tiene que tener es que el script de arranque es la es el primero, o sea, la base de datos como está ahora es nuestra primera migración y como segunda migración una sit básica para poder arrancar rápido, pero sin producto, sin nada.

**Henry Tortoza:** No.

**Cristian Borgoño:** No solamente lo básico para que esté si es que es necesario, si no no.

**Luis Vera:** ¿Cómo?

### 00:02:37

**Luis Vera:** No te entendí.

**Cristian Borgoño:** La primera migración es toda la estructura de la base de datos como está ahora final,

**Luis Vera:** Ya.

**Cristian Borgoño:** ¿cierto? Completa con todos los cratables, todos los in todo ya.

**Luis Vera:** Sí, sí, sí.

**Cristian Borgoño:** Y si es necesario una sit inicial para cada cliente por porque vaya a tener las unidades de medida que tienen que estar partiendo, ¿cierto? algunos datos registro ahí que van a ser iguales para todos. Esa primera, sí, entonces partís con dos migraciones.

**Luis Vera:** Pero eso ya lo tienen. ¿Para qué vamos a tener

**Cristian Borgoño:** Pero,

**Luis Vera:** eso?

**Cristian Borgoño:** ¿cómo estamos arrancando un cliente nuevo?

**Luis Vera:** Ah,

**Cristian Borgoño:** ¿Cachá?

**Luis Vera:** ya te entendí.

**Cristian Borgoño:** Cuando creamos un cliente nuevo, nosotros vamos a tener que hacer solamente un registro en la base de datos, en la master DB. Tenan nuevo, no tiene migración, ¿cierto? y vamos a hacer un app y se va a migrar y se va a instalar la base de datos sola. Esa es la gracia.

**Luis Vera:** Ya, ya, ya, ya, ya, ya,

**Cristian Borgoño:** Ya,

**Luis Vera:** ya entendí. Entonces, básicamente, migración uno,

**Cristian Borgoño:** por eso tenéis que

### 00:03:35

**Luis Vera:** esquema, migración dos, sí, producción.

**Cristian Borgoño:** Exacto. Y después de ahí en adelante todas las modificaciones que hagamos en la base de datos tienen que ir a migraciones porque se van a actualizar solo los usuarios y los vamos a hacer por con GitHub

**Luis Vera:** Ya.

**Cristian Borgoño:** actions.

**Luis Vera:** Okay.

**Cristian Borgoño:** Ya, esa h hay que probarlas también.

**Luis Vera:** ¿Cómo lo provocó? Get actions.

**Cristian Borgoño:** No, no lo probéis con Gancho, pero podéis probarlos con Docker para hacer los downloads up,

**Luis Vera:** Ah.

**Cristian Borgoño:** crear un nuevo y ver qué pasa, porque tú cacháis que estos códigos automatizados se pueden pitir la base de datos, entonces tenéis que probar harto antes de de

**Luis Vera:** O sea,

**Cristian Borgoño:** pasar.

**Luis Vera:** si está malo el SQL se pueden pedir la base de

**Cristian Borgoño:** Sí. Y también tiene que correr dentro de una transacción toda la migración.

**Luis Vera:** datos.

**Cristian Borgoño:** Cada migración es una transacción,

**Luis Vera:** Sí, así es.

**Cristian Borgoño:** pero yo me imagino que el código que te haya generado la vía está con la transacción, así que

**Luis Vera:** Cada migración en cada tenan es una transacción.

**Cristian Borgoño:** Exacto. Ya. Okay. Vamos. Eh, Luchito, te doy un contexto.

### 00:04:50

**Cristian Borgoño:** El el Henry quiere preparar la la presentación para mañana y su idea es mostrar todo el

**Luis Vera:** Ya todo.

**Cristian Borgoño:** producto.

**Henry Tortoza:** No entra.

**Cristian Borgoño:** Yo por un eh yo por un lado soy contrario a esa

**Luis Vera:** Oh.

**Cristian Borgoño:** idea. Yo quería mostrar solamente lo nuevo,

**Henry Tortoza:** comilla.

**Cristian Borgoño:** cachá. Lo lo nuevo es lo de reportería que estáis trabajando como novedad. demos de lo nuevo para que si nos llegan a preguntar cualquier cosa para atrás, nosotros salgamos con la promesa de no va a haber un manual que lo vamos a entregar con todo lo que tiene. Ya puede ser, es más rápido, nos van a preguntar más cosas y habría que defenderse contra eso.

**Henry Tortoza:** Perfecto.

**Cristian Borgoño:** Lo otro es un punto medio, mostrar las funcionalidades principales, que es como una solicitud normal y hacerse el hón con una cosa. Lo que me asusta de presentar más módulos es que la idea es que se presente con permiso y perfiles como como es, ¿cierto?

**Luis Vera:** Claro, con usuario diferente.

**Cristian Borgoño:** Y con usuarios diferentes y toda la cuestión. Y no quiero que vean errores porque tampoco sé cuántos has van a fallar en esa

**Luis Vera:** Típico que en la demo live fallan has huevas que nunca habían fallado.

### 00:06:08

**Cristian Borgoño:** cachái. Exactamente, porque nunca la habíamos probado y no quiero que quedemos en evidencia porque va a parecer que no hemos terminado. Ya ya pasó en la última presentación que fue como una reunión con hartos gerentes y ahí se anotaron hartos errores que yo los tenía anotaditos.

**Luis Vera:** Ah,

**Cristian Borgoño:** que sé que no lo hemos reparado.

**Luis Vera:** no lo hemos reparado.

**Cristian Borgoño:** Exactamente. Entonces, no quiero que descubran esa ha. Por eso quería quería presentar lo que de verdad funciona y lo que está bien, no lo que podría potencialmente fallar.

**Luis Vera:** decir

**Cristian Borgoño:** Porque si mostramos cualquier cosita por otro lado, nos van a empezar a preguntar, "¿Y cómo hacemos esto? ¿Y cómo hacemos esto?" Y cómo y vamos a tener que mostrar todo el rato todas las funcionalidades y vamos a terminar llegando conteo donde la hua no está clara, donde falla falla la cuestión de los permisos y y vamos a tener que volver a presentar todo con admin para protegernos, pero van a ver que la navegación es rara, todos se van a incomodar, va a ser muy difícil explicar que esa ha funciona bien sin la demo con usuario y me preocupa. Entonces le decía a Henry que no quería hacer eso porque alguien tiene que arreglarla y tendría que pedírtelas a ti porque muchos de

### 00:07:18

**Henry Tortoza:** Hm.

**Cristian Borgoño:** esos errores lo hemos tratado de arreglar muchas veces, se lo estábamos dando la do y el maxi y no terminan siendo reparados. Siempre aparece otro detalle y otro

**Luis Vera:** Y si lo arreglo yo y dejo las migraciones para el

**Cristian Borgoño:** detalle, eso sí podríais hacer porque el levantamiento va a ser después de la presentación.

**Luis Vera:** viernes.

**Cristian Borgoño:** Cachá. Pero eso significa que hay que dejarlo pulido completo.

**Luis Vera:** O sea, te arreglo los errores que encontraste que tenía anotado.

**Henry Tortoza:** Ya,

**Cristian Borgoño:** Sí,

**Henry Tortoza:** ya, chicos, pero hagamos algo.

**Cristian Borgoño:** pero y si aparecen más.

**Henry Tortoza:** Veamos, o sea, hagamos algo. Establezcamos un flujo de lo que queremos mostrar.

**Cristian Borgoño:** Sí, esa esa es

**Henry Tortoza:** Veamos los errores que se consiguen en ese flujo y solo reparemos eso y si nos preguntan algo fuera de eso,

**Cristian Borgoño:** la

**Henry Tortoza:** le decimos, "Miren, va a haber un centro de conocimiento del cual vamos a a a darle a ustedes para que puedan trabajar y no sé, ahí nos inventamos cualquier

**Cristian Borgoño:** claro, porque el levantamiento de esto en staging va a estar para la próxima

**Henry Tortoza:** cosa.

**Cristian Borgoño:** semana, cachá.

### 00:08:18

**Cristian Borgoño:** A pesar de que los consultores tienen, ellos saben que está como en Develop, pero ahora va a ser staging. Se supone que lo que va hasta ahí va a ser estable, estable de verdad.

**Henry Tortoza:** Mhm.

**Cristian Borgoño:** Y ese es como un compromiso.

**Luis Vera:** M.

**Cristian Borgoño:** Lo que más me preocupa que le decía Henry era el tiempo. Mostrar todo era muy largo y nos arriesgamos a que teníamos que reparar todos

**Luis Vera:** Espérate,

**Henry Tortoza:** Sí.

**Cristian Borgoño:** los errores ahora y tenemos un día para hacer esa hua.

**Luis Vera:** los consultores van a ocupar la versión en staging,

**Cristian Borgoño:** Sí, lo que está ahora, lo que está ahora lo transformamos staging con David. Yo dije, mira, ningún huevón ha salido a producción,

**Luis Vera:** entonces.

**Cristian Borgoño:** nadie lo está usando, no me voy a calentar la cabeza haciendo un staging aparte nuevo y esto es producción, ¿no? Hón, lo que está ahora es top station.

**Luis Vera:** O sea, que cuando nosotros metamos algo sting hay que avisar en el chal.

**Cristian Borgoño:** Sí, en realidad nosotros tenemos que avisar cuando pasemos a producción. En staging nos vamos a avisar a consultoría para que revise lo nuevo antes de pasar a

**Henry Tortoza:** Yes.

**Cristian Borgoño:** producción,

**Luis Vera:** Ah, sí,

### 00:09:19

**Cristian Borgoño:** ¿cachá? Y nosotros trabajamos con nuestro develop donde la c\*\*\*\*\* si queremos. O sea, ese va a ser el flujo de aparte, pero centrémonos en la presentación. No quiero presentar todo porque es más largo que la cresta y vamos a tener que probar con usuarios

**Henry Tortoza:** No sé si eso está

**Cristian Borgoño:** distintos y yo sé que van a fallar algunas huevas y nos van a preguntar por notificaciones. Yo lo ocultaría al tiro porque lo tengo programado para

**Henry Tortoza:** He.

**Cristian Borgoño:** después.

**Luis Vera:** Y es que igual presentar solo reportes,

**Cristian Borgoño:** ¿Por

**Luis Vera:** presentar solo reportes que es como lo nuevo es como muy poco para toda la producción que le van a poner de juntar a la gente, micrófono,

**Cristian Borgoño:** qué le están metiendo tanta

**Luis Vera:** cámara,

**Cristian Borgoño:** caca?

**Luis Vera:** vamos a quedar como unos farsantes.

**Henry Tortoza:** No sé, es fue ese fue el Benjón.

**Luis Vera:** Sí.

**Henry Tortoza:** Eh, entonces a mí me gustaría que hagamos algo que nos llegue que nos lleve a reporte, un flujo anterior que termin reportes y mostrar reporte.

**Luis Vera:** Una pregunta, ¿vamos a usar demo para presentar?

**Henry Tortoza:** Mhm.

**Cristian Borgoño:** Sí.

**Luis Vera:** Ya. Entonces tengo que mergiarin en main.

### 00:10:50

**Luis Vera:** Espérate. Esta es la roma producción o no. O todavía no.

**Cristian Borgoño:** Eh, p\*\*\*, hón, no sé cuál rama se está subiendo a la actual. No creo que no ha tocado nada de eso. El el David

**Luis Vera:** Ah, entonces la margión más.

**Cristian Borgoño:** todavía por si no mostramos local, no importa. Hón,

**Luis Vera:** Entonces,

**Cristian Borgoño:** si la la lo que necesitamos es que Henry quiere meter

**Henry Tortoza:** Mhm. que funciona la H.

**Cristian Borgoño:** datos para hacer una demo buena, hay que tener empresas productos, un montón de huevadas preparadas, configuradas, cachá, y pega administrativa que no quiero que hagáis.

**Luis Vera:** si esa pega administrativa se hace con puras consultas SQL y que las consultas SQL te la haga la hay que saber pedírsela. Eso sí.

**Cristian Borgoño:** ¿Cómo? ¿A qué te referís con eso?

**Luis Vera:** Mira, por ejemplo, ya dame un lote de 500 productos con los campos, ya después agrega estos productos con los campos, bla, bla, bla, a la empresa, bla, bla, bla, en la tabla, bla, bla, bla, listos de SQL y así vaya haciéndolo rápido en vez de hacerlo por el sistema.

**Cristian Borgoño:** Y y no van a ver fotos, habría que usar demo.

### 00:12:03

**Luis Vera:** Eh, no, no van a haber fotos, a no ser que no no van a ver fotos.

**Cristian Borgoño:** que si eso te toma mucho

**Luis Vera:** Eh, unaora

**Cristian Borgoño:** y hacer eso y reparar los errores. Sea, a mí no me preocupa tu tiempo, por eso quería acotar la reunión a una huevada muy pequeña. Hón, si al final la gente va a pelear igual por cualquier hueva,

**Luis Vera:** depende de los errores Porque no me

**Cristian Borgoño:** así que prefiero enfocarlo en en una pelea de un puro

**Luis Vera:** acuerdo muy bien de los errores.

**Cristian Borgoño:** frente.

**Luis Vera:** Por ejemplo, me acuerdo que había uno cuando tú tienes cambios sin

**Cristian Borgoño:** Déjame ver.

**Luis Vera:** guardar, te sacó el audífono. Ah, ya. Por ejemplo, me acuerdo uno que sucede cuando tenéis cambios sin guardar y queréis navegar

**Cristian Borgoño:** con

**Luis Vera:** y te sale un modal si queréis guardar o te queréis ir. Ya, por ejemplo, esa hueva la sacaría básicamente que te deje navegar sin guardar en vez de tener que arreglarlo y que y probar a ver si surgen más errores, ¿cachá?

**Cristian Borgoño:** Sí, podría ser. Déjame ver. Aquí tengo, ¿dónde está la unión? Ah, hay un error de redirección al crear un conteo que va al inventario.

### 00:13:46

**Luis Vera:** Ya, ese error es facilito.

**Cristian Borgoño:** Sí, ese error es ahuevonado. Eh, ese error que dijiste tú pasa al en un solo conteo.

**Luis Vera:** Ya cuando entr el conteo

**Cristian Borgoño:** Sí, el conteo también tiene errores de permiso. Hay un error en cambiar de empresa, el de siempre. Probablemente esté en todas partes esa huón. El módulo de producción tiene un error matemático,

**Henry Tortoza:** H

**Cristian Borgoño:** el de las unidades de medida.

**Luis Vera:** Ah, hay que debe ser un error de una línea.

**Cristian Borgoño:** Al navegar en proveedores también hay un error. Ah, y ahora me acordé que tenemos que modificar cómo funciona proveedores, pero no lo vamos a hacer ahora. Lo que sí me parece como super, mira, esto es super ahuevonado, terriblemente va para arreglar, pero para no entrar nosotros tenemos CPP.

**Luis Vera:** Ya conto,

**Cristian Borgoño:** ¿Qué es el CP?

**Luis Vera:** pero medio ponderado.

**Cristian Borgoño:** Ya tienen que pasarlo. Lo tenemos que cambiar a PMP.

**Henry Tortoza:** PM era PMP.

**Luis Vera:** PMP

**Cristian Borgoño:** Sí, precio medio ponderado,

**Luis Vera:** aquí.

**Cristian Borgoño:** hón, es una es una estupidez,

**Luis Vera:** Ok.

**Cristian Borgoño:** pero vaya a darte cuenta que si no lo cambiamos consultoría y el Juan van a empezar a huar ya,

### 00:15:15

**Henry Tortoza:** Sí.

**Cristian Borgoño:** pero no. Y son como esas cositas no más. Pero lo de los errores de los permisos me preocupa porque vamos a tener que crear un bodeguero, un administrador que no pueda hacer nada más y las notificaciones nosotros las tenemos desactivadas, entonces no van a llegar.

**Luis Vera:** Sí, por las notificaciones habría que decir, yo creo que habría que decir la verdad, no más.

**Cristian Borgoño:** No, yo ya dije por qué no van, pero ahora en la todos se supone que todos saben por qué no van, porque yo ya dije por qué no van. El David también sabe por qué no van,

**Henry Tortoza:** Sí, pero no todos. Hón, recuerda que hay gente que ni siquiera conoce Smar Orderen,

**Cristian Borgoño:** pero en la demo no en

**Henry Tortoza:** entonces hay que decir que se está trabajando en ello y ya.

**Cristian Borgoño:** la demo prefiero descontarle esta que nosotros teníamos motor notificaciones. Lo queremos mejorar ya porque estamos en proceso de pasar a producción y eso es una hada técnica que hay que resolver

**Henry Tortoza:** Ok.

**Cristian Borgoño:** y chao. Así que ahí me la puedo sacar con eso porque en realidad se envían o lo otro es que se muestre la notificación y decir que este este motor funciona a media más que nada porque nos tenemos que cambiar por una cuestión de infraestructura tenemos que pulir estos para prepararlos para la nueva infraestructura.

### 00:16:31

**Luis Vera:** que eso es la verdad. Eso, de hecho,

**Cristian Borgoño:** La verdad,

**Luis Vera:** eso diría yo,

**Cristian Borgoño:** por eso si yo no tengo miedo en decir la verdad.

**Luis Vera:** ¿no? Hay que ir con la verdad por delante.

**Cristian Borgoño:** Así que acotado se me ocurrió lo siguiente, hacer una prueba de de solicitud, solicitar a un proveedor, un proveedor donde nosotros podamos podamos hacerlo. Recibimos el mail, mostramos que recibimos el mail, aprobamos aprobamos la cotización o o mejor todavía. Esto le manda un mail al proveedor, pero muy probablemente que los proveedores no puedan aprobar. Mostráis la página de la proveedor, decís que se puede aprobar aquí y no aprobáis ahí, sino que el nombre del proveedor por un permiso, los mariáis un poquito, los mandáis a otro módulo. No sé, hón, puede ser eso, puede ser contraproducente mariarlo un poco. La cosa es que quiero hacer la presentación en pedí estas huevas, recepcioné estas cosas y generé esta evidencia. Eh, listo. Desactivar los web. Sí, para que no no ocurran errores extraños. Y después decir, y si vamos acá tenemos inventario. Acá tenemos la unidades que pasó. Mostramos inventarios cuando van en movimiento y mostramos el inventario final una vez recepcionado y después decimos y queremos ver reportería.

### 00:17:51

**Cristian Borgoño:** Podemos ver la reportería de ayer, vemos que no tenemos nada y en la reportería de hoy sí tenemos. Acá está. Y eso es todo lo que yo mostraría.

**Henry Tortoza:** Ya no parecer que eso está

**Cristian Borgoño:** cachá,

**Luis Vera:** Sí,

**Henry Tortoza:** bien.

**Luis Vera:** está Conteo.

**Cristian Borgoño:** ¿eh? Y esto está pensado,

**Luis Vera:** A mí no me hace sentido mostrarlo si va a cambiar tanto

**Cristian Borgoño:** ¿no? Claro.

**Henry Tortoza:** Déjalo fuera.

**Luis Vera:** después.

**Cristian Borgoño:** Y después podríamos mostrar un módulo de producción, ya también tenemos producción, que es una cosa muy importante. Por ahora tenemos producción por agrupación, lo vamos a extender. Hay planes, el Cristian va a hablar más de eso. Corta. Por ahora la producción es yo elijo una receta prediseñada en mis productos maestro, bla, bla. Produzco. Listo, está en inventario. Acá está. Ahora voy a reportería y puedo ver el cambio otra vez y volvemos reportería. Entonces, nos vamos a jugar ahí con esas dos y está ahí. Podemos mencionar que inventarios tiene. Se pueden hacer conteo e lo estamos revisando ya que no observaron un poco lo la jefatura, así que lo tenemos lo tenemos desactivado y con una falla ahí que sabemos.

### 00:18:57

**Cristian Borgoño:** Eso fue hecho a propósito, ya que no era el motivo de la presentación y nos podemos sacar también un poquito por ahí.

**Luis Vera:** Una vez me dijo Renata que le habían comentado que sería bueno que los conteos fueran

**Cristian Borgoño:** Sí, pues, huón,

**Luis Vera:** programados.

**Cristian Borgoño:** si está en mi planificación tengo programaciones

**Luis Vera:** Ah, ya. Entonces podemos decir eso porque conteo va a cambiar mucho en cuanto a lo que va a hacer realmente.

**Cristian Borgoño:** y no se tiene que decir conteo va a cambiar.

**Luis Vera:** Así

**Cristian Borgoño:** Eh, también vamos a expandir producción, vamos a expandir conteo, lo vamos a mejorar porque tú a pesar de que se puedan contar y se hacen movimiento inventario,

**Luis Vera:** que

**Cristian Borgoño:** no queda claro. Estamos estamos viendo eso a pesar de que está, pero no no no vayamos por mostrar eso, cachái, porque va a cambiar y no tiene ningún sentido mostrarlo ahora. Y sería como la presentación, esto es smart orden. Mucha gente levanta la mano, va a hacer preguntas, pero siempre te las podéis sacar. Cristian va a profundizar ahí y te sacáis todas las balas con esa con esa frase. Y después yo cuando presente voy a decir, "Bien, esto es lo que tenemos planificado. Hemos estado conversando con los consultores, con la parte y llegamos a esta planificación está muy buena y ahí se va a enojar mucha gente y ahí me toca a mí controlar.

### 00:20:12

**Henry Tortoza:** No,

**Cristian Borgoño:** Mira,

**Henry Tortoza:** igual salió salió bien la última vez.

**Cristian Borgoño:** sabéis que yo digo mucho que se una de esas no se enoja

**Henry Tortoza:** Entonces sí,

**Cristian Borgoño:** nadie.

**Henry Tortoza:** la última vez salió super bien, hón,

**Cristian Borgoño:** Sí,

**Henry Tortoza:** entonces dudo mucho que la

**Cristian Borgoño:** pero es que nadie había prometido sistema de integración a ningún cliente.

**Henry Tortoza:** gente

**Cristian Borgoño:** Ahora todo el mundo vendió smart con huevas que no van a estar, huevas que no están o van a estar después.

**Luis Vera:** ¿Por

**Henry Tortoza:** entiendo tu punto.

**Cristian Borgoño:** Entonces, por eso yo te digo que van a pelear, pero yo también me la saco. El cliente que está priorizado aquí es cadaqu 100% todo el

**Henry Tortoza:** punto

**Cristian Borgoño:** rato. Y ahí vamos a ver qué tan si los consultores son maricones sonrientes.

**Luis Vera:** qué?

**Cristian Borgoño:** Porque yo le he mostrado la planificación a las personas que están viendo y me dicen, "Está bien, está bien, está bien." ¿Cachá?

**Luis Vera:** Hm.

**Cristian Borgoño:** Pero bueno, eso es entonces es como mi forma de acotar para no mostrar eh solicitud entre tienda, para no mostrar solicitud entre otras empresas, mencionarlo no más, se pueden hacer.

### 00:21:13

**Cristian Borgoño:** Hay tres modos. Vamos a mostrar esta que es la es la base principal y después si se quieren entretiendas, sí, sí se puede.

**Luis Vera:** Claro.

**Cristian Borgoño:** Sí se puede, pero después en la en la planificación se va a cambiar ese modo. Cristian va a hablar al respecto. Corta.

**Luis Vera:** ¿Y qué va a cambiar entre tienda?

**Cristian Borgoño:** Eh, vamos a crear una modalidad centro de producción,

**Luis Vera:** Ah, ya. Sí, me

**Cristian Borgoño:** ya que es como tenemos que pensar muy bien ahí porque podríamos cambiar diseño, podríamos cambiar código,

**Luis Vera:** encantado.

**Cristian Borgoño:** cómo funcionan las herramientas de solicitudes en el Core, pero la idea de eso es para resolver los problemas que van a preguntar. ¿Cómo pido a otra tienda? ¿Cómo le pido a central compra? ¿Cómo le puedo enviar a mí otras tiendas si son otra relación social? Con todo eso va eh ahora se puede hacer, pero se puede se tratan a las tiendas y a las empresas como proveedores. Vamos a hacer una modalidad central compra para que eso sea más fácil de entender, que él se adecúa más a la a las necesidades. Y yo cuando presente esa huevada les voy a decir, entonces a partir de la próxima semana que está proyectado, vamos a tener que empezar a tener reuniones porque hay que aterrizar esto.

### 00:22:27

**Cristian Borgoño:** Juan, por favor, cachá. Y me tiro la pelota para allá porque yo ellos no tienen tiempo para ver esas cosas. Entonces, todo lo que se atrasen ellos para mí mover la g.

**Luis Vera:** M.

**Cristian Borgoño:** pasó ahora con Pixi que Giovanni todavía no me dice, "Juntémonos para aclarar esto, así que después voy a mover la gan" y cuando me pregunté con lanch le dije, "Hón, pero no hemos podido coordinar nada la semana que te dije que coordinemos, así que mañana le voy a recordar meter temas de otras cosas, huón porque va a estar Giovanni, ¿cierto? Giovanni tiene un problema con ese mal order orden. Lo vendió para launch para salir con todo para septiembre. Las cosas que quiere Giovanni, eh, nosotros las tenemos, pero nada más para finales de septiembre y principios de octubre. Entonces va a decir, "p\*\*\*, es que yo le dije al cliente que si no salgo con eso, no sale el cliente y le decir, ya tenemos que ponernos de acuerdo, sentarnos con Virginia, con Juan, contigo para ver cómo resolver esta cosa de los plazos, porque no puedo mover esto para atrás y también y ahí aprovecho, oye, a todo esto teníamos que ver esta semana que vamos de ver las cosas para de Pixis para lunch, mezclo peras con manzana, empiezo a mostrar evidencia que estos huevones no coordinan conmigo y y me

### 00:23:46

**Henry Tortoza:** Es que no coordinan con nadie,

**Cristian Borgoño:** zafo.

**Henry Tortoza:** huón. Ponen fechas que les sale del forro y

**Cristian Borgoño:** coordinamos para que no pase de nuevo eso,

**Henry Tortoza:** ya.

**Cristian Borgoño:** porque quiero ver lo que vamos a hacer con las tasas de conversión de

**Henry Tortoza:** Sí. Ah, Luz Mila me estaba presionando con con Pix y yo le dije,

**Cristian Borgoño:** Pixi.

**Henry Tortoza:** "Guan, levantemos un mes diciéndole que estamos levantando esto. Ya, ¿qué vamos a hacer? La primera reunión nos conectamos, le mostramos un moc, le decimos, mira, va a ser así, así. que nos los van a querer cambiar, sí, pero le tenemos que decir que no va a ser así, así, así. Esto es un SAS, esta es la información que está, no va a cambiar. Y primer mes y ese primer mes es mostramos,

**Cristian Borgoño:** No hay modificaciones en P.

**Henry Tortoza:** pedimos datos y le estamos diciendo, estamos conectando. Listo.

**Cristian Borgoño:** Sí, sí, tranquilo. Me imagino que no estaba muy contente.

**Henry Tortoza:** No, no estaba nada contenta,

**Cristian Borgoño:** No, en consultoría,

### 00:24:38

**Henry Tortoza:** pero

**Cristian Borgoño:** este mes va a tratar de destruir. Julio va a ser un mes bélico con consultorío.

**Henry Tortoza:** sí, me

**Cristian Borgoño:** Así que Luchito, ojo ahí. Cuando se acerquen a pedir cosas,

**Henry Tortoza:** imagino.

**Cristian Borgoño:** habla con Henry, habla con Cristianón. Escribe en la frente esa hua o sabéis

**Henry Tortoza:** Sí,

**Cristian Borgoño:** que hagamos algo chistoso. Hón, imprime un imprimamos un papelito con ese mensaje.

**Henry Tortoza:** bueno.

**Cristian Borgoño:** Habla con Henry si es producto, habla con Cristian si es técnico. Y cuando se te acerca un consultor tú decí, "Uy, sabéis que yo tengo algo de ti para ti que me pasaron los chiquillos." y le pasáis el papelito para que no te mueven,

**Luis Vera:** ¿Cuándo?

**Cristian Borgoño:** no te pidan cosas, que el otro día te pidieron cosas y la hiciste. La Renata y hay que tener

**Luis Vera:** Ah.

**Cristian Borgoño:** cuidado con eso porque nosotros podemos hacer todo lo que nos piden en los tiempos que nos piden y seguir manteniendo la gan, ¿cierto? Yo creo que no hay ningún problema, pero no quiero que sepan ya. Ellos tienen que tienen que dejar de hacer eso y nosotros tenemos que dejar de

### 00:25:47

**Luis Vera:** H

**Cristian Borgoño:** tratarlos como los jefes porque en este caso nosotros somos jefes del producto. Nuestra pega es proteger nuestro producto porque después cualquier falla estos huevones dicen,

**Henry Tortoza:** Sí.

**Cristian Borgoño:** "No, desarrollas como a pesar que no le hayamos hecho todos los favores del mundo." Y a mí ya me está

**Henry Tortoza:** Sí, no agradecen,

**Cristian Borgoño:** pasando.

**Henry Tortoza:** no agradecen que uno los ayude y también pasa que nos ponen más pega que la m\*\*\*\*\* sin necesidad cuando nosotros tenemos nuestros nuestros tiempos bien establecidos para no tener un burnout.

**Cristian Borgoño:** Tú cacháis que mira una ha muy simple, la carga masiva de productos, Luchito, no creamos documentos nosotros para que nos manden las cosas, ¿cierto? Ya la Virginia todavía no manda las huevas.

**Luis Vera:** Sí.

**Cristian Borgoño:** Y se supone que era urgente. Y eso urgente salió porque Juan alegó con Felipe que nosotros no estamos haciendo las cosas y estábamos atrasándole sus sus levantamientos con clientes. Entonces me llegó un reto David que cómo es posible que la huevada de está esa ha dos meses ahí te mandó el correo, no hay hecho nada y fue como hón p\*\*\* la huada molestó al Henry la Virginia le pidió cosas Henry te pidió algo a ti yo le pidió algo terminamos mandándole dos cosas diferentes.

### 00:27:17

**Henry Tortoza:** Mhm.

**Cristian Borgoño:** Así que yo dije Virginia Virginia mándame esto y mándamelo por el click al tiro el lunes. Esto fue la semana pasada el lunes de la semana pasada y no ha mandado nada. Y pasó lo mismo con la API, ¿te acordáis? Que la API que estando que la

**Henry Tortoza:** Sí.

**Cristian Borgoño:** ventamos, tenemos la hicimos la con documentación. Ayer le pregunté, "Oye, Virginia, no he tenido noticias de la integración de la API, del equipo externo. ¿Qué pasó? No me han dicho nada. Tengo una tarea que quiero cerrar, la tengo ahí para tal fecha y no me dicen nada." Y ahí le dije, "Es que como no me ha respondido, parece que no era nada urgente,

**Luis Vera:** Espera

**Cristian Borgoño:** entonces creo que tenemos que refinir lo que es urgente." Y me dijo, "No, no es que está ahí." No, si es que era urgente, pero todavía no me responde. Y me dije, no, si no funciona la cosa, porque si va a estar así peso, ¿para qué no me apuro,

**Henry Tortoza:** Totalmente.

**Cristian Borgoño:** cachá?

**Henry Tortoza:** Total,

**Cristian Borgoño:** Así que por eso no más, Luchito, como dice David, los consultores no son amigos, huevón.

### 00:28:17

**Henry Tortoza:** gente.

**Cristian Borgoño:** Estos huevones son el enemigo dentro de la empresa.

**Luis Vera:** H

**Cristian Borgoño:** Consultoría quiere quiere externalizar desarrollo. Esa es la verdad. Y si no general analiza desarrollo, Juan va a empezar a cobrarnos hora y va a tener que salir del presupuesto desarrollo y nosotros no trabajamos con hora. La ha es guerra campal y además que cada vez están cachando que nosotros nos queremos pitear a consultoría con las cosas que estamos haciendo. Hón, entonces si esa esa hua es así, est una guerra, ganan ellos, ganamos nosotros y queremos ganar nosotros, obviamente. Ya vamos. ¿Qué te parece esa presentación,

**Henry Tortoza:** Se puso muy agresivo.

**Cristian Borgoño:** Henry?

**Henry Tortoza:** Me parece que me parece que está super bien.

**Cristian Borgoño:** Acotada.

**Henry Tortoza:** ¿Cómo la definiste?

**Cristian Borgoño:** Luchito,

**Henry Tortoza:** Era justamente lo que quería que hiciéramos.

**Cristian Borgoño:** Luchito, ¿qué opináis? ¿Podemos hacer esa presentación de aquí a mañana? ¿Tener algo listo con esa estrategia?

**Luis Vera:** Eh, se puede. Sí,

**Cristian Borgoño:** ¿Ya estáis preparado para usar tu comodín de hablen con el Cristian después?

**Luis Vera:** podríamos tener una una PPT especial para eso.

### 00:29:30

**Cristian Borgoño:** Porque sí, sí, no, porque el Tomás prometió algo en la anterior y yo le tuve que mandar un mensaje interno de que deje prometer alguien le preguntó, "¿Podemos tener esto?" Y el hón dijo, "Sí, si podemos, concha de tu madre." Le dije, "No, nunca es

**Henry Tortoza:** que no no respondamos si podemos, sino hablen con el

**Cristian Borgoño:** hable." Bueno, eso, eso.

**Henry Tortoza:** Cristian.

**Cristian Borgoño:** Hablen con el Cristian si es técnico con el Cristian, si es producto con Henry. Que les cueste la ha le metámosle

**Henry Tortoza:** Y a mí lo que a mí lo que me pasa es que el malvado de David dijo que

**Cristian Borgoño:** burocracia.

**Henry Tortoza:** teníamos el Smart Order definido, huevón, y nadie lo definió. ¿Qué más?

**Cristian Borgoño:** Es ah no estaba definido, pero Felipe dijo que estaba definido. Hón, la definición de su order que está ahí es asquerosamente mal. De hecho es otra cosa. Yo lo redefiní, solo que no lo documenté nunca.

**Henry Tortoza:** Claro,

**Cristian Borgoño:** Así que es bueno, en vez de buscar esa redefinición, definámoslo por lo que es ahora y por lo que va a ser.

### 00:30:43

**Henry Tortoza:** tenemos que hacerla.

**Cristian Borgoño:** Ah, y para mañana para decir lo que es.

**Henry Tortoza:** Ya. ¿Qué es Smart Order y qué es lo que quiere ser?

**Cristian Borgoño:** Smarondil quiere hacer un planning. Es un planning para inventario. Ahí Juan usó otra palabra y Felipe le dijo, "Juan es lo mismo." ¿Te acordáis?

**Henry Tortoza:** los si me acuerdo que dio como una sigla

**Cristian Borgoño:** No, no, no fue una sigla, una palabra de recompra, no era con R, no la anoté porque también la encontré, no sé, lo mismo que decir un planning.

**Henry Tortoza:** Ya.

**Cristian Borgoño:** Entonces, eso es un planning para gestión de inventario y está pensado para eso.

**Luis Vera:** Ok.

**Cristian Borgoño:** Eh, con el enfoque inicial es hospitalidad, evaluando la evolución hacia retail. evaluando. Eso es importante porque Retail tiene WMS, ¿cierto? Creo que se llama así la ha y claro,

**Henry Tortoza:** Sí, sí, sí.

**Cristian Borgoño:** pero pero plan digo, pero hospitalidad no tanto, entonces más simplificar el inventario para hospitalidad. Por eso todavía estamos enfocando para allá

**Henry Tortoza:** un RMP es lo que había dicho él.

**Cristian Borgoño:** esa bien y parte por ahí.

### 00:32:41

**Cristian Borgoño:** Sí, pues un reemplace RMP

**Henry Tortoza:** Si tengo que dejar no estoy seguro tampoco. Voy a revisarlo,

**Cristian Borgoño:** ya,

**Henry Tortoza:** pero

**Cristian Borgoño:** pero lo estamos viendo como un planning. Vamos a planificar el recambio.

**Henry Tortoza:** igual

**Cristian Borgoño:** Por ahí va la ha Vamos a planificar la restitución con R la palabra dijo. Me imagino que debe ser la R de RMP.

**Henry Tortoza:** podría ser reconciliación de inventario. No, no, no lo tengo nota. Tampoco.

**Cristian Borgoño:** Ya no, pero eso es un planning,

**Henry Tortoza:** para gestión de inventario.

**Cristian Borgoño:** nos va a Claro, nos va a ayudar a mantener el inventario sano. Eh, está pensado para que en un futuro tenga pronósticos, bla, bla, bla, bla, bla, bla. Todo pensado para eso y para facilitar la compra. Eso es Smart, no es eso no más. Es más que eso. Entonces,

**Luis Vera:** Eso,

**Cristian Borgoño:** todas las herramientas de aquí para allá tienen que ser para pensar en eso.

**Luis Vera:** eso lo va a decir Henry.

**Cristian Borgoño:** Sí, Henry, con eso está entonces podía hacer un plan, ¿cierto?

**Henry Tortoza:** Sí, con eso puedo hacer puedo hacer alto más lo que me envió el Lucho creo que puedo hacer un híbrido entre esos

### 00:34:12

**Cristian Borgoño:** Entonces

**Luis Vera:** Ah,

**Henry Tortoza:** dos.

**Luis Vera:** te tengo que enviarlo de reporte aparte,

**Henry Tortoza:** Sí,

**Cristian Borgoño:** sí,

**Henry Tortoza:** porfa. Lo tenemos listo, ¿cierto?

**Luis Vera:** ¿eh? No,

**Henry Tortoza:** Te lo voy a estar para mañana. Puedes decirme que no.

**Luis Vera:** sí,

**Henry Tortoza:** y los errores que íbamos a resolver

**Cristian Borgoño:** pero sí va a estar para mañana.

**Luis Vera:** de hecho.

**Cristian Borgoño:** Pues si estuvo el lunes, lleva dos días listos.

**Luis Vera:** Ah, reporte. No,

**Henry Tortoza:** ya.

**Luis Vera:** pero me refería a es que le pasé un texto que explica el lenguaje no tan técnico qué hacía y que no hacía mal order y ahí no está reporte. A eso me

**Cristian Borgoño:** Ah, ya. No, pues entonces mándale los nuevos reportes. Ya. Y entre los detalles de la parte inventario que mira,

**Luis Vera:** refiero.

**Cristian Borgoño:** entradas y salidas. Ah, esa es la huevada, ¿no? Nosotros no íbamos a ampliar conteo, Henry. Vamos a ampliar inventario, el módulo inventario. Vamos a agregar las etiquetas de entrada, etiquetas de salida.

**Henry Tortoza:** ¿Qué es esa hada de etiqueta dentro de etiqueta?

### 00:35:09

**Cristian Borgoño:** Es la huevada de que nosotros tenemos salida de inventario por merma y por venta, pero podríamos hacerlas personalizadas para que el cliente, el usuario pueda elegir las que quiera y pueda inventar las cumpleaños, las de cualquier huevada más.

**Henry Tortoza:** Ya me acordé. Ah, pero qué pasa.

**Cristian Borgoño:** Claro, todo eso se iba a ampliar. ¿Y por qué hay que ampliarlo? porque va a tocar la API de venta. Entonces,

**Henry Tortoza:** Ha.

**Cristian Borgoño:** la API de reducción de inventario, perdón, no hay que hablar nunca de venta en ese malor, está prohibida esa palabra por si acaso. Y claro, y nosotros vamos a mejorar allá, vamos a mostrar más estadísticas, vamos a mejorar las herramientas, tod esa la, o sea, es una mejora total de los módulos principales, o sea, los segundos módulos, porque la modalidad central es la mejora para el módulo de compra, las modalidades de producción y de inventario son las mejoras para esos otros dos módulos que son tres las tres funciones principales de orden producir, comprar y gestionar inventario. No hay más,

**Henry Tortoza:** producir,

**Cristian Borgoño:** no hay más funciones las tres cosas que hace mal order y todas las herramientas

**Henry Tortoza:** comprar y gestionar.

**Cristian Borgoño:** que saquemos van a tener con una visión para esas tres cosas.

### 00:36:24

**Cristian Borgoño:** Reporterías transversal, ¿cachá?

**Henry Tortoza:** Pero reportería es solo sacar información, ¿cierto?

**Cristian Borgoño:** Sí, sí.

**Henry Tortoza:** Exportar información.

**Cristian Borgoño:** Reportería es transversal. Si se puede comprar, va a haber reportería para ver las compras.

**Henry Tortoza:** Ya.

**Cristian Borgoño:** Si tenemos inventario, hay reportería inventario, que es la reportería que está trabajando en Luis. Es la principal. Todo gira alrededor del inventario, ¿cierto? Después va a haber reportería de producción,

**Henry Tortoza:** F.

**Cristian Borgoño:** después va a haber reportería de conteo, reportería de la hada que se nos ocurre va a haber reportería. Por eso te digo que es transversal, no es como la función principal de Smart Orderen. Y lo otro es que va a salir levantada con una API para integrarse 100% dia uno con sistema de integraciones, que ya también lo mencionamos cuando mostramos sistema de integraciones, ¿cierto? Entonces,

**Henry Tortoza:** Mhm.

**Cristian Borgoño:** lo volvemos a recordar ahí a Fielen.

**Henry Tortoza:** La reducción de inventarios se puede hacer directo. Eh, a ver, en la página que cree dice, hay un texto que dice, "Estandarice sus flujos de compra y automatice la deducción de recetas mediante integración API, visibilidad y trazabilidad total para su cadena logística." Eso está bien,

### 00:37:59

**Henry Tortoza:** tiene sentido.

**Cristian Borgoño:** Hm. No, no del todo, porque la cadena logística es un doble MS y significa que nosotros tenemos

**Henry Tortoza:** Ya

**Cristian Borgoño:** lotes bultos y no tenemos ni lotes ni bultos por por entonces no

**Henry Tortoza:** después para entonces que hay una logística.

**Cristian Borgoño:** no mencionéis logística. tenéis que estar clarísimo que es una simplificación del manejo del inventario con visión hacia hospitalidad, porque es nuestra primera visión y con y que tenemos esta ambición de escalar hacia a una gestión avanzada para llegar a retail como objetivo. para que quede ahí,

**Henry Tortoza:** Perfecto.

**Cristian Borgoño:** porque si alguien dice que se lo ofrecía retail, le faltan funciones, obvio,

**Henry Tortoza:** No está pensado para ahí,

**Cristian Borgoño:** todavía no está pensada para retail y las funciones de retail es un objetivo a largo

**Henry Tortoza:** huevón.

**Cristian Borgoño:** plazo. Tiene que quedar claro. Primero resolvemos hospitalidad, no es como Pixis, que es transversal, cachá.

**Henry Tortoza:** Sí.

**Cristian Borgoño:** Oh, esta trabajar con la me hace aprender palabras nuevas. Me vas a hablar como la

**Henry Tortoza:** Ya. ¿Cómo se sienten los dos para mañana? ¿Están cómodos con todo?

### 00:39:28

**Cristian Borgoño:** Yuchito, me preocupa tu tiempo. Tú no decís si es que se puede o no.

**Henry Tortoza:** Sí.

**Luis Vera:** Se puede,

**Cristian Borgoño:** ¿Te puede ayudar Maxi en algo o preferís que no?

**Luis Vera:** eh, prefiero prefiero que

**Cristian Borgoño:** Okay, dale.

**Henry Tortoza:** No,

**Cristian Borgoño:** Maxi está trabajando en los test arreglando las que hizo porque testigo que el código estuviera

**Henry Tortoza:** que

**Luis Vera:** No.

**Cristian Borgoño:** escrito, ¿no? No, que funcionara.

**Henry Tortoza:** el código está escrito. Sí. Okay, perfecto. Se escribió código. Sí. Okay,

**Cristian Borgoño:** Sí, hón,

**Henry Tortoza:** perfecto.

**Cristian Borgoño:** porque nosotros probamos un test uno solo, ¿te cachaste?

**Henry Tortoza:** Adelante.

**Cristian Borgoño:** Lo hicimos fallar y la ha pasó. fue como p\*\*\*.

**Henry Tortoza:** Me encanta,

**Cristian Borgoño:** Y menos mal que me di cuenta porque cuando estaba trabajando en la huevada de automatizar esos procesos con

**Henry Tortoza:** huevón.

**Cristian Borgoño:** ella, me di cuenta que la iba a cometía el error de verificar esa hueva y yo dije, "Ah, concha de tu madre, y tuve que crear una regla explícita para prohibir a la vida hacer esa m\*\*\*\*\*." Y así uno se

### 00:40:23

**Cristian Borgoño:** va se va dando cuenta.

**Henry Tortoza:** Sig aprendiendo.

**Cristian Borgoño:** Ah, otra cosita, Lochito, aprovechando que estáis acá, mañana,

**Henry Tortoza:** Bueno,

**Cristian Borgoño:** la mañana como a las 10 va a llegar un candidato y lo vamos a entrevistar.

**Luis Vera:** el equipo que entrevistaba.

**Cristian Borgoño:** Lo vamos. El equipo va a ser tú, el David y yo. Lo vamos a entrevistar y lo vamos a volar al tiro.

**Luis Vera:** Ya.

**Cristian Borgoño:** Después vamos a probar a ver si lo podemos hacer eso a velocidad de la luz.

**Luis Vera:** Pero la entrevista de va a ser por el Culture Deck o esa ya

**Cristian Borgoño:** Sí, sí. La misma la misma entrevista.

**Luis Vera:** pasó la de

**Cristian Borgoño:** No, no, la entrevista la Sí,

**Luis Vera:** Sprint.

**Cristian Borgoño:** la misma entrevista que hemos estado haciendo, pero los participantes a ser tú, el David y yo, porque David me preguntó a quién podía invitar, que iba a haber a que invitar y yo le dije, "Hón, en mi proceso prefieríamos los hones que ya lo hicieron, que ya entienden para no explicarle de nuevo a otra persona.

**Henry Tortoza:** Claro.

**Luis Vera:** Hm.

**Cristian Borgoño:** Entonces me dijo, "Ya, Luchito, ya Luchito, así que háete ese tiempo mañana en la mañana va a haber una horita o un poco más que vaya a estar ocupado en esto." Este es el candidato que fue ayer,

### 00:41:39

**Luis Vera:** Ya

**Cristian Borgoño:** ¿lo viste?

**Luis Vera:** no allá no había nadie que no

**Cristian Borgoño:** ¿Fue ayer, no?

**Luis Vera:** conociera.

**Cristian Borgoño:** ¿O antes?

**Henry Tortoza:** Eh,

**Cristian Borgoño:** ¿Cuándo fue, Henry?

**Henry Tortoza:** es como es como la Javi con cabello corto.

**Cristian Borgoño:** ¿Cuándo fue? ¿Fue ayer o anteayer?

**Henry Tortoza:** Fire Fire. Es como es como la Javi con cabello corto.

**Luis Vera:** ¿Y

**Cristian Borgoño:** Tú lo miras y este informático.

**Henry Tortoza:** Es la es la Javi con cabello

**Cristian Borgoño:** Tú lo miráis y decí este de hecho si lo veí en la calle decí informático todo el

**Henry Tortoza:** corto.

**Cristian Borgoño:** rato. Es como es

**Luis Vera:** para qué para qué puesto es el mismo de Mil

**Cristian Borgoño:** para Sí,

**Luis Vera:** On?

**Cristian Borgoño:** porque Jonathan,

**Henry Tortoza:** Sí.

**Cristian Borgoño:** perdón, Yamil encuentro pega. y ya llevaba ya trabajando en esa pega y fue como p\*\*\* la hua y ahí el David dijo, "p\*\*\*, es que este proceso es muy largo, tenemos que hacerlo corto." Y le dije, "Ya, pero hón es que no podemos tener la reunión evaluar y contratar al tiro, tenemos que tener a más huevones." Sí,

### 00:42:39

**Luis Vera:** Casi todos los precios son largos.

**Cristian Borgoño:** es que está urgido. Yo le dije, "No, es que sabéis que yo creo que las cosas no tenemos que hacerlas tan encima también.

**Henry Tortoza:** Sí, sí. ¿Qué tal? muy si realmente los procesos en desarrollo son

**Cristian Borgoño:** Sí.

**Luis Vera:** Son largo.

**Henry Tortoza:** largos.

**Luis Vera:** Mi hermano lleva buscando y a veces le tiran cinco entrevistas a la Junior.

**Cristian Borgoño:** Sí, nosotros, claro, nosotros para Junior Cach y nosotros la hicimos super corta. La cosa es que necesita que sea más larga, pero lo que sea más larga es los tiempos que usamos nosotros. Creo que él se enfocó más, no en cuánto nos demoramos, sino en que en cuánto nos demoramos en coordinar, porque Antonio no podía siempre y Javier tenía que andar pidiéndole permiso al que el único tiempo que yo pude controlar era el tuyo,

**Henry Tortoza:** Claro.

**Cristian Borgoño:** ¿cachá?

**Luis Vera:** Hm.

**Cristian Borgoño:** Entonces nosotros dos siempre estábamos, pero los otros dos había que buscar. Entonces, en vez de hacerla el mismo día, la tenía que tirar para dos días más y un candidato podía demorar una semana. Esa hueva es pajera. Podríamos hacer un día y entrevistar a tres candidatos y tenerlos evaluados al tiro.

### 00:43:43

**Cristian Borgoño:** Al día siguiente llamar a otros dos y otra vez otro día tres candidatos y en una semana ya tenemos seis candidatos evaluados. Eso a eso lo que David se refería con velocidad,

**Luis Vera:** Hm.

**Cristian Borgoño:** cachá. Y al Vicente estaba super entusiasmado, quería trabajar. Que sí, que sí, huevón. Recibió la oferta. ¿Viste que este huevón siempre dijo, "Me gustaría ir y yo voy a Santiago", dijo toda la huevada. Ya,

**Luis Vera:** Sí,

**Cristian Borgoño:** pues, resulta que después cuando tuvo la oferta se echó para atrás.

**Luis Vera:** por la

**Cristian Borgoño:** No, se echó para atrás porque dijo,

**Luis Vera:** plata.

**Cristian Borgoño:** "No, es que igual estoy cómodo donde mis papás no quieren ir a Santiago seguido." Y este hón le dijo que tenía que venir eh dos semanas, dos veces, dos veces a la semana le pidió. Y ahí como que Pero él sabía que tenía que venir dos veces a la semana.

**Luis Vera:** Ah.

**Cristian Borgoño:** Sí, es como que le cayó la teja, se dio cuenta que era la realidad y que ya no iba a estar en la casa con los papás, que lo ayudaban mucho y fue como, no sé, hón, se echó para atrás o mostró la carta oferta en la pega y la y los hones se dieron cuenta que se iba a ir y le ofrecieron más lucas o incluso menos o incluso menos de lo que le ofrecíamos nosotros,

### 00:44:47

**Luis Vera:** también puede ser,

**Cristian Borgoño:** pero el hón sacó los cálculos y pasaz que dijo,

**Luis Vera:** pero algo lo subir.

**Cristian Borgoño:** "Huevón, si gano más me voy para Dot Solution, pero tengo que ir o gano un poquito menos y me quedo acá cómodo como en mi estatus cu y el buen eligió el estatus

**Henry Tortoza:** Pero es que eso pasa, hón,

**Cristian Borgoño:** cu

**Henry Tortoza:** eso pasó también. O sea,

**Luis Vera:** Henry

**Henry Tortoza:** a mí me pasó, yo me quedé yo me quedé por ciertas mínimos

**Luis Vera:** lo

**Henry Tortoza:** detallejos.

**Cristian Borgoño:** Sí, sí. Entonces, nada que hacer y al final va a ser Jonathan el que va a trabajar.

**Luis Vera:** Jonathan.

**Cristian Borgoño:** Sí.

**Luis Vera:** ¿Y por qué otra persona?

**Cristian Borgoño:** ¿Cómo?

**Luis Vera:** ¿Por qué quieren contratar otra persona más?

**Cristian Borgoño:** Porque iban a traer dos.

**Luis Vera:** Ah, siempre fueron

**Cristian Borgoño:** No,

**Luis Vera:** dos.

**Cristian Borgoño:** fueron uno.

**Henry Tortoza:** Mhm.

**Cristian Borgoño:** Hicimos unos movimientos con David para que pudieran hacer dos unos movimientos ahí de

**Luis Vera:** M,

**Cristian Borgoño:** plata a toda

**Luis Vera:** son movimientos de plata incluida la célula actual de

**Cristian Borgoño:** a toda la empresa.

**Luis Vera:** nosotros.

**Cristian Borgoño:** El David es todos los desarrolladores.

### 00:45:47

**Cristian Borgoño:** Así que entre los dos hicimos movimiento y buscamos una forma de ahorrar plata y va a traerse dos. Y entonces este otro candidato que va a entrevistar es para tener el segundo para sacar Móil War.

**Luis Vera:** Y es para el mismo puesto sem

**Cristian Borgoño:** Sí o no sé,

**Luis Vera:** misioner.

**Cristian Borgoño:** en realidad hay que ver porque este loquito que va a llegar no es semisenial, pero te puedo hablar mañana el contexto en la mañana para que nos cuadremos con David. Ya, eso. Ah, listo. Volviendo al tema de la de la presentación, estamos okay. Entonces, Henry, podéis darle de aquí en

**Henry Tortoza:** Eh, sí, yo voy a sacar un resumen del flujo que me dijiste,

**Cristian Borgoño:** adelante.

**Henry Tortoza:** anoté lo que lo que me comentaste de la definición y tento definir algo para mostrar mañana y en la tarde, Luchito, cuando tenga Digamos, cuando tengas como cambios o todo bien definido, hacemos una prueba de de lo que vamos a mostrar mañana, si les parece.

**Luis Vera:** Me

**Cristian Borgoño:** Ya. Pues entonces tú, Luchito,

**Luis Vera:** parece.

**Cristian Borgoño:** podíis tener las cosas como para mañana, considerando que vamos a estar ahorita con esta entrevista, ¿no?

**Henry Tortoza:** Ya.

### 00:46:59

**Cristian Borgoño:** Ya. Oye,

**Luis Vera:** ¿Qué?

**Cristian Borgoño:** si necesitáis más tiempo, si son las 5 y decís, concha de tu madre, me falta tiempo. Dime a ver si te ayudo a ver si podemos hacer algo. Por ejemplo, si es que tenéis que quedarte hasta más tarde. Por último, el viernes no trabajáis. Ahí vemos.

**Luis Vera:** No, no creo que más

**Henry Tortoza:** Uh.

**Cristian Borgoño:** Ya, ya, bacán porque pues mira qué bu esto huevón.

**Luis Vera:** tarde.

**Cristian Borgoño:** Me gusta más me gusta

**Henry Tortoza:** No honesto.

**Cristian Borgoño:** esa.

**Henry Tortoza:** Pudo haber dicho, "p\*\*\*, hón, sí, ya no trabajo el

**Cristian Borgoño:** Sí.

**Luis Vera:** Quiz sabe ser ahuevonado también.

**Cristian Borgoño:** No, no, no, no. Hón,

**Henry Tortoza:** viernes.

**Cristian Borgoño:** sabéis que está bien, pues, hón, porque si me decís que está listo, yo ahora sé que está listo. En el peor de los casos, lo vay a terminar viendo en una horita mañana. No va a ser como los chiquillos que me dijeron que estaba listo y se tuvieron que quedar los dos hasta las 12 y

**Henry Tortoza:** Si, esa no es la

### 00:47:43

**Cristian Borgoño:** super estresado y después diciéndome que, "Ah, es que tú me pediste las cosas muy encima."

**Henry Tortoza:** idea.

**Cristian Borgoño:** Hón, ya eso no más, cabrón.

**Henry Tortoza:** Listo. Muchas gracias,

**Cristian Borgoño:** Ah,

**Luis Vera:** Estamos listos.

**Henry Tortoza:** chicos.

**Cristian Borgoño:** Henry puede que la reunión con Balvi no vaya hoy día porque la están pidiendo para

**Henry Tortoza:** Okay, mejor para mí.

**Cristian Borgoño:** mañana a las 12,

**Henry Tortoza:** Oh,

**Cristian Borgoño:** pero David les dijo que no.

**Henry Tortoza:** qué horrible para mañana.

**Cristian Borgoño:** David les dijo que no, sino que a ver si se puede tener a las 4:30. No sé si va a ser la presentación mañana. ¿A las 3 o a las 4?

**Henry Tortoza:** a las 3\.

**Cristian Borgoño:** Ah, ya. Entonces, a las 4:30 de

**Henry Tortoza:** No,

**Cristian Borgoño:** mañana

**Henry Tortoza:** pero mañana después de la presentación vamos a quedarnos compartiendo y seguramente hablando, o sea,

**Cristian Borgoño:** es bueno esa reunir de media hora ya y es para

**Henry Tortoza:** ya. Okay.

**Cristian Borgoño:** presentar, pero yo igual le voy a tener las cosas listas hoy día al a

### 00:48:36

**Henry Tortoza:** ¿Cómo va?

**Cristian Borgoño:** Ricardo.

**Henry Tortoza:** ¿Cómo va Edu con Barbie Fu? Bien.

**Cristian Borgoño:** ¿Queréis saber? Hón, a ver.

**Henry Tortoza:** No sé, pero ¿cómo cómo se

**Cristian Borgoño:** eh vi partido mecánico. Listo,

**Henry Tortoza:** siente?

**Cristian Borgoño:** me acaba de terminar el documento de del RFP de partido mecánico que se lo voy a lo voy a revisar y se lo voy a mandar a George.

**Henry Tortoza:** J.

**Cristian Borgoño:** Y el sacado va a terminar antes de de entrega,

**Henry Tortoza:** Buenísimo.

**Cristian Borgoño:** así que vamos a tener un código adelantado, un dos dos desarrollos entregados y buen

**Henry Tortoza:** Buenísimo.

**Cristian Borgoño:** estamos esta h terminamos el viernes. Si este hón me manda los documentos, terminamos el viernes y no ha hecho venta.

**Henry Tortoza:** Estuvo super buena la solución.

**Cristian Borgoño:** Y de hecho hoy día le voy a decir a Ricardo que el avance va tan bien que lo único que

**Henry Tortoza:** Entonces,

**Cristian Borgoño:** necesitamos para poder trabajar así es que si George adelanta y nos manda un documento explicando lo que lo que necesita con estas vistas slificadas para los datos, eh hasta podríamos terminar antes de dos meses, pero no lo voy a decir eso.

### 00:49:37

**Henry Tortoza:** no,

**Cristian Borgoño:** Se va a cumplir este dos meses y me gusta. Y la idea es que ellos estén más adelantados que nosotros para que nosotros tengamos todos los días poder hacer entregas.

**Henry Tortoza:** Pero

**Cristian Borgoño:** Porque entregué un ayer, entregué ahora hoy día. Si este hón me aprueba hoy día, entregamos mañana. Y el viernes, ¿qué entregamos? No tengo nada que hacer el viernes. Así que voy a voy a mover la gana y voy a empezar a adelantar lo que tenía para el final, que ese era el warehouse. Cachá. y le vamos a decir si no tenemos nada que hacer, vamos a adelantar esto. Así que la idea es que ustedes no estén pidiendo. Todos los días podemos entregar parte de las vistas, así que vamos terriblemente rápido.

**Henry Tortoza:** Buenísimo, huón. Qué buena solución. Funcionó.

**Cristian Borgoño:** Sí, por otro lado,

**Henry Tortoza:** Me

**Cristian Borgoño:** te van a tomar el tiempo a ti porque hay que ver ventas,

**Henry Tortoza:** alegra.

**Cristian Borgoño:** hay que ver comics y hay que ver las estas fiscales. Entonces, si nuestro desarrollo va tan rápido, vamos a tener que ir igual de rápido con las vistas.

### 00:50:28

**Henry Tortoza:** Hm. Ahí podemos, ahí podemos solucionar, no te preocupes.

**Cristian Borgoño:** Así que vaya a tener que tener un día de balif

**Henry Tortoza:** Sí,

**Cristian Borgoño:** también para que te juntí

**Henry Tortoza:** un día completo, de verdad que sí.

**Cristian Borgoño:** y ver vista o todos los o cada tres o tres días, pero una pura reunión para ver vista. No, yo prefiero que sea un solo día.

**Henry Tortoza:** Sí, yo también prefiero hacer un solo día, sentarme con él, comenzar a construirla, que la vea, la revisamos y que salga hón idealmente.

**Cristian Borgoño:** Sí,

**Henry Tortoza:** Ya, pero perfecto.

**Cristian Borgoño:** ya dale,

**Henry Tortoza:** Muchísimas gracias,

**Luis Vera:** Henry,

**Cristian Borgoño:** hablamos.

**Henry Tortoza:** chiquillo.

**Luis Vera:** una cosa,

**Henry Tortoza:** Dime,

**Luis Vera:** este,

**Henry Tortoza:** Luito.

**Luis Vera:** la meeting se transcribe y se guarda,

**Henry Tortoza:** Sí.

**Cristian Borgoño:** ¿Por

**Luis Vera:** se guarda en ti o en todo lo que tuvieron.

**Henry Tortoza:** debería enviarse un correo a todos los que estuvimos con esos tres.

**Luis Vera:** Ah, ya,

**Henry Tortoza:** De todas maneras, si no se transcribe, ya te la

**Cristian Borgoño:** qué

**Luis Vera:** ya. Ah,

**Henry Tortoza:** pasó.

**Luis Vera:** para revisar y hacer la pregunta a la vida. Ayer caché que el henry esta base lo encontré muy útil. Huón,

**Cristian Borgoño:** en la raja?

**Henry Tortoza:** Es demasiado útil. Demasiado,

**Luis Vera:** por ejemplo,

**Cristian Borgoño:** De hecho,

**Henry Tortoza:** demasiado útil.

**Luis Vera:** ahora le puedo preguntar el flujo que dijo el Cristian,

**Cristian Borgoño:** Ajá.

**Luis Vera:** puedo preguntar las tareas.

**Cristian Borgoño:** Sí, es la raja. Estoy

**Luis Vera:** Eh, está

**Henry Tortoza:** No, es es mi secretario, me redacta la las reuniones,

**Cristian Borgoño:** secretario.

**Luis Vera:** bueno.

**Henry Tortoza:** después lo desgloso en tarea y saco todas las tareas que tengan que hacer y con Barbue saco toda la mayoría de las pantallas, ya solo quedo con cambio. Entonces, funciona muchísimo.

**Cristian Borgoño:** Ya, ya, chiquillos,

**Luis Vera:** Bueno,

**Cristian Borgoño:** estamos hablando.

**Luis Vera:** ya están hablando.

**Henry Tortoza:** Un abrazo, que tengan un bonito día.

**Luis Vera:** Dios.

**Henry Tortoza:** Ciao. Ciao.

### La transcripción finalizó después de 00:52:14

*Esta transcripción editable se generó por computadora y puede contener errores. Los usuarios también pueden cambiar el texto después de que se cree.*