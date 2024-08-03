$( '#pj2-d, #pjMurdoc, #pjNoodle, #pjRussel' ).on(
    'click',
    function( ){
        $( '#modal' ).css('display', 'flex');
    }
)

$( '#pj2-d' ).on(
    'click',
    function( ){
        $( '#modal > div' ).attr('class', 'modal-pj2-d');
        $( '#personajeImg' ).attr('src', 'img/personajes/2-d.jpg');
        $( '#personajeImg' ).attr('alt', 'Foto de 2-D');
        $( '#personajeNombre' ).html('2-D' );
        $( '#personajeInstrumento' ).html('Cantante y pianista');
        $( '#personajeGenero' ).html('<abbr title="Masculino">M</abbr>');
        $( '#personajeAnioNacimiento' ).html('1978');
        $( '#personajeNacionalidad' ).html('<abbr title="Estados Unidos">EEUU</abbr>');
        $( '#personajeDetalles' ).html(`

            <p>2-D es el vocalista principal y tecladista de la banda virtual Gorillaz. Creado por Damon Albarn y Jamie Hewlett, 2-D, cuyo nombre real es Stuart Harold Pot, se caracteriza por su apariencia única: cabello azul, ojos generalmente blancos debido a accidentes, y una figura delgada. La personalidad de 2-D es tranquila y algo ingenua, a menudo en contraste con los otros miembros más excéntricos y conflictivos de la banda. Su voz suave y melódica es una de las características distintivas de la música de Gorillaz.</p>

            <p>En la narrativa ficticia de Gorillaz, 2-D fue descubierto por Murdoc Niccals, el bajista y autoproclamado líder de la banda, después de sufrir dos accidentes que le dejaron con sus característicos ojos blancos. A pesar de la naturaleza abusiva de su relación con Murdoc, 2-D sigue siendo el rostro público de Gorillaz, aportando una voz emotiva y un carisma involuntario que ha resonado con los fans desde el lanzamiento de su primer álbum en el año 2001.<p>

            `);
});

$( '#pjMurdoc' ).on(
    'click',
    function( ){
        $( '#modal > div' ).attr('class', 'modal-pjmurdoc');
        $( '#personajeImg' ).attr('src', 'img/personajes/murdoc.jpg');
        $( '#personajeImg' ).attr('alt', 'Foto de Murdoc');
        $( '#personajeNombre' ).html('Murdoc' );
        $( '#personajeInstrumento' ).html('Bajista');
        $( '#personajeGenero' ).html('<abbr title="Masculino">M</abbr>');
        $( '#personajeAnioNacimiento' ).html('1966');
        $( '#personajeNacionalidad' ).html('Alemania');
        $( '#personajeDetalles' ).html(`

            <p>Murdoc es conocido por su apariencia demoniaca, con piel verde, cabello negro y una actitud cínica y rebelde. A menudo actúa como el antihéroe del grupo, siendo el personaje más conflictivo y problemático. Murdoc tiene una personalidad arrogante y manipuladora, y su historia está llena de controversias y comportamiento caótico, desde secuestrar a 2-D para que se uniera a la banda hasta numerosos enfrentamientos con la ley.</p>

            <p>Murdoc Niccals es responsable de la formación de la banda. Se considera a sí mismo un genio musical y ha sido una figura central en la creación del sonido y la imagen de Gorillaz. A pesar de su comportamiento destructivo y su relación tóxica con otros miembros de la banda, Murdoc ha demostrado ser un componente indispensable, aportando un borde oscuro y satírico que ha contribuido significativamente al atractivo y la identidad única de Gorillaz. Su carácter complejo y sus travesuras han hecho de él uno de los personajes más memorables y discutidos de la banda.<p>

            `);
    }
)

$( '#pjNoodle' ).on(
    'click',
    function( ){
        $( '#modal > div' ).attr('class', 'modal-pjnoodle');
        $( '#personajeImg' ).attr('src', 'img/personajes/noodle.jpg');
        $( '#personajeImg' ).attr('alt', 'Foto de Noodle');
        $( '#personajeNombre' ).html('Noodle' );
        $( '#personajeInstrumento' ).html('Guitarrista y cantante');
        $( '#personajeGenero' ).html('<abbr title="Femenino">F</abbr>');
        $( '#personajeAnioNacimiento' ).html('1990');
        $( '#personajeNacionalidad' ).html('Japón');
        $( '#personajeDetalles' ).html(`

            <p>Noodle es una prodigio musical originaria de Japón, que fue enviada a la banda en una caja cuando era solo una niña. Con su característico cabello morado y su estilo inconfundible, Noodle aporta una energía juvenil y una habilidad instrumental excepcional a la banda. A lo largo de los años, ha crecido tanto en edad como en presencia dentro de la narrativa de Gorillaz, convirtiéndose en una figura central y respetada.<p>

            <p>Noodle llegó a la banda sin saber inglés, pero rápidamente demostró su destreza en la guitarra y su capacidad para adaptarse y aprender. Ha participado en misiones y aventuras que van desde enfrentarse a villanos hasta descubrir secretos ocultos, consolidando su papel no solo como una talentosa música, sino también como una heroína en la compleja trama de la banda. Su evolución de una niña misteriosa a una joven fuerte e independiente ha sido una de las narrativas más fascinantes dentro de la historia de la banda.</p>

            `);
    }
)

$( '#pjRussel' ).on(
    'click',
    function( ){
        $( '#modal > div' ).attr('class', 'modal-pjrussel');
        $( '#personajeImg' ).attr('src', 'img/personajes/russel.jpg');
        $( '#personajeImg' ).attr('alt', 'Foto de Russel');
        $( '#personajeNombre' ).html('Russel' );
        $( '#personajeInstrumento' ).html('Baterista');
        $( '#personajeGenero' ).html('<abbr title="Masculino">M</abbr>');
        $( '#personajeAnioNacimiento' ).html('1975');
        $( '#personajeNacionalidad' ).html('<abbr title="Estados Unidos">EEUU</abbr>');
        $( '#personajeDetalles' ).html(`

            <p>Russel es un personaje de gran tamaño y con un estilo distintivo, siempre visto con su gorra de béisbol y gafas de sol. Su personalidad es tranquila pero profunda, marcada por experiencias sobrenaturales y un pasado complicado. Es conocido por su habilidad excepcional en la batería y por aportar ritmos hipnóticos y poderosos a la música de Gorillaz.<p>

            <p>Su historia es única y oscura. Después de ser poseído por los espíritus de sus amigos asesinados, Russel se convierte en un medio para estos espíritus, lo que añade una dimensión espiritual y mística a su personaje. Este aspecto de su historia se refleja en su música y en su comportamiento introspectivo. A pesar de los desafíos que ha enfrentado, Russel actúa como una figura protectora y sabia dentro de la banda, equilibrando las personalidades más excéntricas de sus compañeros con su serenidad y profundidad.<p>

            `);
    }
)

$( '#btnCerrarModal' ).on(
    'click',
    function( ){
        $( '#modal' ).css('display', 'none');
    }
)