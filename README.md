

## Aplicación de comando de tareas por hacer

Esta es una aplicacion de comando, donde se pueden crear tareas, actualizarlas, eliminarlas, obtener un listado de todas las tareas y tareas por filtro.

    
Antes de usar la aplicación, ejecutar
```
npm install
```
    
para usar ejecutar los siguientes
- crear tarea 
    ```
    node app crear -d "descripcion de la tarea" o
    node app crear --descripcion "descripcion de la tarea"
    ```
- modificar tarea 
    ```
    node app actualizar -d "descripcion de la tarea" -c true/false o
    node app actualizar --descripcion "descripcion de la tarea" --completado true/false
    ```
    si no se especifica el -c  se tomará por defecto como true

- borrar tarea 
    ```
    node app borrar -d "descripcion de la tarea" o
    node app borrar --descripcion "descripcion de la tarea"
    ```
- listar tareas 
    ```
    node app listar
    ```

    tambien se puede obtener un listado por filtro, es decir, si la tarea esta completada o no

    ```
    node app listar -c true/false
    node app listar --completado true/false
    ```
    Si se agrega solo el -c por defecto filtrará las tareas realizadas.