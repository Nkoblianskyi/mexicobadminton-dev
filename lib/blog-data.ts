export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  img: string
  category: string
  readTime: string
  body: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'fundamentos-del-servicio',
    title: 'Los Fundamentos del Servicio en Bádminton',
    excerpt:
      'El servicio es la única jugada donde tienes control total sobre el inicio del punto. Aprende por qué dominarlo transforma tu juego por completo.',
    img: '/images/blog-1.png',
    category: 'Técnica',
    readTime: '6 min',
    body: [
      'En ningún otro momento del juego tienes tanto control como en el servicio. Es el único golpe en el que tú decides cuándo empieza el punto, qué trayectoria toma el volante y hacia qué zona de la cancha va dirigido. Sin embargo, muchos jugadores lo tratan como un mero trámite antes de que empiece "el juego real". Ese error les cuesta puntos constantemente.',
      'El bádminton moderno distingue principalmente cuatro tipos de servicio: el saque corto, el saque largo, el saque de palo y el saque falso. Cada uno tiene un propósito táctico específico y debe ejecutarse con precisión técnica para que sea efectivo.',
      'El saque corto es el más común en dobles. Su objetivo es obligar al rival a devolver desde arriba de la red hacia arriba, cediendo la iniciativa. Para que sea efectivo, el volante debe pasar apenas por encima del borde superior de la red y caer inmediatamente detrás de la línea de saque corto. Un milímetro de más en la altura lo convierte en una oportunidad de ataque para el rival.',
      'El saque largo o de fondo es el preferido en simples. Envía el volante al punto más alejado de la cancha del rival, obligándolo a retroceder y perdiendo el control del centro. La clave técnica está en la transferencia de peso de la pierna trasera a la delantera durante la ejecución, generando potencia sin sacrificar precisión.',
      'El saque de palo o drive es una variante avanzada que cruza la cancha horizontalmente a media altura. Sorprende al rival que espera un saque corto y puede ganar el punto directamente si el oponente no reacciona a tiempo. Requiere práctica deliberada para que la trayectoria sea la correcta.',
      'El aspecto más ignorado del servicio es la rutina pre-saque. Los mejores jugadores del mundo tienen rituales muy definidos antes de cada saque: posición de pies, postura del cuerpo, mirada. Estos rituales no son superstición, son herramientas de concentración que reducen la variabilidad en la ejecución.',
      'Para mejorar el servicio, trabaja con un cesto de volantes durante al menos veinte minutos al final de cada sesión de entrenamiento. Marca con cinta adhesiva las zonas objetivo en la cancha y lleva un registro de tus aciertos. La consistencia en el saque es una habilidad que se desarrolla con repetición específica y feedback constante.',
    ],
  },
  {
    slug: 'dobles-estrategia-rotacion',
    title: 'Estrategia de Rotación en Dobles',
    excerpt:
      'Los mejores doblistas no piensan individualmente. La rotación y el posicionamiento definen al equipo ganador.',
    img: '/images/blog-2.png',
    category: 'Táctica',
    readTime: '7 min',
    body: [
      'Si hay algo que distingue a una pareja de dobles de élite de una pareja amateur, no es la potencia individual de sus smashes ni la velocidad de sus movimientos. Es la sincronización. La capacidad de dos jugadores para moverse como una sola unidad, anticipar la posición del otro y cubrir la cancha sin necesidad de comunicación verbal constante.',
      'La rotación en dobles se basa en un principio simple pero profundo: cuando uno ataca, el otro está en posición de rematar; cuando uno defiende, el otro cubre el espacio. Este principio genera dos formaciones fundamentales: la diagonal de ataque y la paralela de defensa.',
      'En la formación diagonal de ataque, los dos jugadores se ubican uno detrás del otro en el eje vertical de la cancha. El jugador delantero está cerca de la red, presionando los levantamientos del rival y buscando golpes interceptores. El jugador trasero busca el smash o el drop desde la zona de fondo. Esta disposición maximiza el ángulo de ataque y minimiza los espacios que el rival puede explotar.',
      'La formación paralela de defensa coloca a los jugadores lado a lado, cada uno responsable de su mitad de la cancha. Se adopta cuando el rival está atacando. La clave es la profundidad de posición: ambos jugadores deben estar lo suficientemente atrás para tener tiempo de reaccionar al smash, pero no tan atrás que no puedan llegar a los drops cortos.',
      'La transición entre estas dos formaciones es lo que distingue al buen doblista del excepcional. Debe ocurrir de forma fluida, sin instrucciones en voz alta, basada en la lectura del juego. Cuando la pareja levanta un lob al rival, ambos jugadores deben moverse automáticamente hacia la posición defensiva. Cuando la pareja intercepta y presiona hacia abajo, la transición al ataque debe ser inmediata.',
      'Un ejercicio fundamental para trabajar la rotación es el "3-en-1". Un jugador está solo en un lado de la red y los dos compañeros en el otro. El jugador solo golpea a cualquier parte de la cancha y la pareja debe rotar correctamente según cada situación. Este ejercicio fuerza a anticipar movimientos y automatizar los cambios de formación bajo presión real de juego.',
      'La comunicación no verbal es otro elemento crítico. Las parejas veteranas desarrollan un lenguaje de señas o toques de raqueta que les permite indicar qué tipo de saque se va a ejecutar o qué zona se va a defender. Este nivel de sincronización solo se logra con muchas horas compartidas en la cancha, no con teoría.',
    ],
  },
  {
    slug: 'entrenamiento-fisico-especifico',
    title: 'Entrenamiento Físico Específico para el Bádminton',
    excerpt:
      'Velocidad, agilidad y potencia explosiva: los tres pilares del acondicionamiento físico en este deporte.',
    img: '/images/blog-3.png',
    category: 'Entrenamiento',
    readTime: '8 min',
    body: [
      'El bádminton es el deporte de raqueta más exigente físicamente del mundo. Un partido de alto nivel puede incluir más de doscientos cambios de dirección, con desplazamientos de entre dos y cuatro metros en décimas de segundo. La frecuencia cardíaca se mantiene entre el 85 y el 95 por ciento del máximo durante los intercambios. Prepararse específicamente para estas demandas no es opcional: es la diferencia entre aguantar un partido completo y perder los últimos sets por agotamiento.',
      'El componente más importante del acondicionamiento físico en bádminton es la velocidad de reacción y aceleración. No se trata de velocidad en línea recta como en el atletismo, sino de la capacidad de partir desde el punto central hacia cualquier dirección con la menor latencia posible. Los ejercicios de escalera de coordinación, los sprints con cambio de dirección y las reacciones a estímulos visuales son los más transferibles al rendimiento real en cancha.',
      'La fuerza explosiva de las piernas es el segundo pilar. El smash, el salto de red y la recuperación tras cada golpe dependen directamente de la potencia generada desde el tren inferior. Los ejercicios de pliometría, como los saltos a cajón, los saltos en profundidad y los multisaltos laterales, desarrollan esta capacidad de forma específica.',
      'El trabajo de core y estabilidad lumbar es frecuentemente subestimado pero absolutamente crítico. Cada golpe en bádminton implica una rotación de tronco que transfiere energía desde las piernas hasta la raqueta. Un core débil es un eslabón roto en esa cadena cinética: se pierde potencia y se aumenta el riesgo de lesiones en la zona lumbar y en el hombro.',
      'La resistencia aeróbica permite mantener la calidad técnica en los momentos finales del partido, cuando el cansancio acumulado afecta la toma de decisiones y la precisión de los golpes. El entrenamiento interválico de alta intensidad, con períodos de trabajo de diez a quince segundos seguidos de descansos cortos, replica la estructura energética real del juego mejor que el trote continuo.',
      'La flexibilidad y la movilidad articular merecen sesiones específicas. La cadera, el hombro y el tobillo son las articulaciones más exigidas en bádminton. Una rutina diaria de diez minutos de movilidad dinámica antes de entrenar y de estiramientos estáticos al finalizar reduce el riesgo de lesiones y mejora el rango de movimiento en los gestos técnicos.',
      'El descanso y la recuperación son el componente más ignorado del entrenamiento físico. El cuerpo mejora durante el descanso, no durante el ejercicio. Un programa de entrenamiento bien diseñado incluye días de recuperación activa, monitoreo de las cargas semanales y suficientes horas de sueño. Sin recuperación, el entrenamiento más exigente del mundo solo produce sobreentrenamiento y lesiones.',
    ],
  },
  {
    slug: 'psicologia-del-jugador-de-badminton',
    title: 'La Psicología del Jugador de Bádminton',
    excerpt:
      'La concentración, el manejo de la presión y la resiliencia mental son habilidades entrenables que definen al campeón.',
    img: '/images/blog-4.png',
    category: 'Mental',
    readTime: '6 min',
    body: [
      'En el bádminton, la diferencia técnica entre dos jugadores del mismo nivel puede ser mínima. Lo que define quién gana un partido reñido no suele ser quién tiene el smash más potente o el saque más preciso: es quién mantiene la calma cuando el marcador está 19-20 en el tercer set, quién se recupera de un error que le costó tres puntos seguidos, quién ejecuta con confianza el golpe más difícil en el momento más tenso.',
      'La concentración en bádminton es especialmente desafiante porque el tiempo entre puntos es muy corto. No hay tiempo para obsesionarse con el error anterior ni para proyectarse en el resultado final. El jugador mentalmente entrenado aprende a vivir en el presente del punto, no en el pasado del error ni en el futuro del marcador.',
      'Una herramienta muy eficaz para resetear la mente entre puntos es la rutina entre rally. Consiste en una secuencia fija de acciones: ajustar la empuñadura, mirar la raqueta, respirar lentamente, posicionarse. Esta rutina actúa como un interruptor que cierra el punto anterior y abre el siguiente con la mente en blanco y lista para actuar.',
      'El manejo de la presión requiere familiarizarse con ella durante el entrenamiento. Un error común es practicar en condiciones cómodas y esperar rendir bien bajo presión competitiva. Los mejores entrenadores introducen deliberadamente situaciones de presión en los entrenamientos: puntos de desempate ficticios, ejercicios con penalización por errores, partidos con espectadores. El objetivo es que la presión se vuelva familiar, no aterradora.',
      'La resiliencia, la capacidad de recuperarse de una situación adversa, es quizás la habilidad mental más valiosa. En bádminton, un parcial de cuatro puntos seguidos en contra puede ocurrir en cuestión de dos minutos. La respuesta del jugador a ese momento define si la situación se convierte en derrota o en plataforma de remontada.',
      'La visualización es otra técnica respaldada por la ciencia del deporte. Antes de un partido, los jugadores mentalmente preparados se visualizan ejecutando sus mejores golpes, tomando decisiones acertadas, respondiendo bien a la adversidad. Esta práctica activa las mismas vías neuronales que el entrenamiento físico real y construye confianza sin desgaste físico.',
      'Desarrollar la fortaleza mental no requiere un psicólogo deportivo de élite. Requiere consistencia en pequeños hábitos: llevar un diario de entrenamiento, establecer objetivos de proceso en lugar de resultados, practicar técnicas de respiración y aprender a analizar los partidos con objetividad. La mente, como el cuerpo, mejora con entrenamiento sistemático.',
    ],
  },
  {
    slug: 'volante-tipos-y-seleccion',
    title: 'El Volante: Tipos, Materiales y Cómo Elegir el Correcto',
    excerpt:
      'No todos los volantes son iguales. Entender las diferencias puede cambiar radicalmente tu experiencia en la cancha.',
    img: '/images/blog-5.png',
    category: 'Equipamiento',
    readTime: '5 min',
    body: [
      'El volante es el elemento más singular del bádminton. No existe ningún otro artefacto deportivo equivalente: esa combinación de base semiesférica y plumas o materiales que crean una resistencia aerodinámica única, haciendo que el objeto desacelere drásticamente después del golpe y que la parábola de vuelo sea diferente según la altitud, la temperatura y la humedad del aire.',
      'Existen dos grandes categorías de volantes: los de plumas naturales y los sintéticos. Los de plumas naturales, generalmente de ganso o pato, ofrecen una experiencia de vuelo superior y son el estándar en competencias oficiales. Sus plumas crean una resistencia aerodinámica que genera la parábola de desaceleración característica del bádminton de alto nivel. El problema es su fragilidad y su precio.',
      'Los volantes sintéticos, fabricados con nylon u otros polímeros, son significativamente más duraderos y económicos. Su vuelo es diferente al de plumas: tienden a ser más rápidos en los golpes finales y la parábola no replica exactamente a la del volante natural. Para entrenamiento básico y juego recreativo son una excelente opción. Para competencia seria, la mayoría de los jugadores prefieren los de plumas.',
      'La velocidad del volante es un factor crítico que depende de las condiciones ambientales. A mayor altitud, el aire es menos denso y el volante vuela más rápido. A mayor temperatura, también. Por eso los volantes se clasifican por velocidad, generalmente en una escala del 75 al 79 en la nomenclatura de los fabricantes principales. Un volante adecuado para Ciudad de México no es el mismo que para una ciudad costera al nivel del mar.',
      'Para saber si la velocidad de un volante es correcta para tus condiciones, realiza la prueba del golpe de fondo: desde el fondo de la cancha, golpea el volante con un clear completo apuntando al eje central. Si el volante cae entre 53 y 99 centímetros por delante de la línea de fondo trasera, la velocidad es la correcta. Si cae demasiado corto, usa un número más alto. Si pasa la línea, uno más bajo.',
      'El almacenamiento del volante afecta directamente su rendimiento. Los volantes de plumas deben guardarse en su estuche cilíndrico, lejos de la humedad extrema y del calor directo. Antes de usarlos en condiciones de mucho frío, se recomienda calentarlos brevemente para que las plumas recuperen su elasticidad natural.',
      'Para el jugador que empieza, un volante sintético de media gama es suficiente para aprender todos los fundamentos. A medida que el nivel mejora y la sensibilidad de los golpes se agudiza, la transición al volante de plumas ofrece un feedback mucho más rico que acelera el desarrollo técnico. La inversión en buenos volantes es, en realidad, una inversión en la calidad del entrenamiento.',
    ],
  },
  {
    slug: 'badminton-en-mexico-expansion',
    title: 'La Expansión del Bádminton en México',
    excerpt:
      'De la capital al resto del país: cómo el bádminton mexicano creció hasta convertirse en un deporte presente en todo el territorio nacional.',
    img: '/images/blog-6.png',
    category: 'Cultura',
    readTime: '7 min',
    body: [
      'Hay un momento en la historia de cada deporte en el que deja de ser una práctica de élite o de nicho para convertirse en un fenómeno popular. Para el bádminton mexicano, ese momento no llegó de golpe con un evento masivo ni con un campeón que capturó la imaginación del país. Llegó de forma gradual, impulsado por una suma de factores que confluyen en el siglo XXI con mayor fuerza que en cualquier momento anterior.',
      'El primer factor fue el crecimiento de la clase media urbana con acceso a instalaciones deportivas. Durante las décadas de los noventa y dos mil, la proliferación de centros deportivos y clubes privados en las principales ciudades del país trajo consigo la construcción de canchas de bádminton. No como elemento central de las instalaciones, sino inicialmente como complemento. Sin embargo, una vez que la gente lo probó, muchos se engancharon.',
      'El segundo factor fue la facilidad de acceso en comparación con otros deportes. El bádminton no requiere campo, ni equipo costoso, ni instalaciones enormes. Una cancha, una red y un par de raquetas son suficientes para empezar. Esta accesibilidad atrajo a familias, grupos escolares y comunidades que buscaban una actividad deportiva económica y entretenida.',
      'El tercer factor, quizás el más decisivo en los últimos años, fue el impacto de la competencia internacional. Las transmisiones de torneos de nivel mundial que antes eran prácticamente imposibles de ver en México se volvieron accesibles a través de plataformas digitales. Ver a jugadores de Indonesia, China o Corea del Sur ejecutar golpes imposibles generó fascinación y motivó a muchos jóvenes a buscar dónde aprender.',
      'La distribución geográfica del bádminton en México refleja esta evolución. La Ciudad de México sigue siendo el centro de mayor actividad, con el mayor número de canchas y torneos. Pero estados como Jalisco, Nuevo León, Sonora, Chihuahua, Sinaloa y varios del sureste han desarrollado comunidades activas con ligas regulares y torneos estatales. La Baja California, por su proximidad con los Estados Unidos y su comunidad asiática, tiene también una tradición bañada de bádminton activa.',
      'La participación femenina es uno de los indicadores más positivos de la expansión del deporte en el país. El bádminton es uno de los deportes con mayor paridad de género en su práctica, y en México esa tendencia se replica. Las categorías femeninas en torneos de todos los niveles tienen participación comparable a las masculinas, algo que no ocurre en muchos otros deportes.',
      'El futuro del bádminton en México parece prometedor. La combinación de una base de practicantes más amplia que nunca, una mayor profesionalización en la formación de jugadores y técnicos, y el creciente interés mediático por los deportes olímpicos son ingredientes que señalan en una sola dirección: hacia arriba. El deporte más veloz del mundo sigue ganando velocidad en México.',
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
