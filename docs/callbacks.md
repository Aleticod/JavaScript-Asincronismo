# JavaScript Callbacks
A callback is a function passed as an argument to another function.</br>
This technique allows a function to call another function.</br>
A callback function can run after another function has finished.

## Function Sequence
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

## Las funciones son objetos
Lo primero que tenemos que saber es que en JS, las funciones son objetos de primera clase. Como tales, podemos trabajar con ellos de la misma forma que trabajamos con otros objetos, como asignarlos a variables y pasarlos como argumentos a otras funciones. Esto es importante, porque esta ultima tecnica nos permite ampliar la funcionalidad de nuestras aplicaciones.</br>

## Los Callbacks se usan
La mayoria del tiempo estamos creando programasa y aplicaciones que operan en una forma sincrona. En otras palabras, algunos de nuestras operaciones comienzan solo despues de que se hayan completado las anteriores. Usualmente, cuando solicitamos datos desde otras fuentes como una API externa, no siempre sabemos cuando nuestros datos seran devueltos. En estos casos queremos esperar la respuesta, pero no queremos que toda nuestra aplicacion se detenga mientras se recuperan los datos. Estas son situaciones donde las funciones callback resultan utiles.
