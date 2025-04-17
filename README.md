
# API-TASK
## Descripción 
**API-TASK** es una API REST desarrollada en **Node.js** que permite la gestión de tareas, implementando operaciones CRUD (Crear, Leer, Actualizar y Eliminar).
## Funcionalidades

- **CREATE**: Permite crear nuevas tareas. 
- **READ**: Obtiene la lista completa de tareas o una tarea específica.
- **UPDATE**: Permite modificar los detalles de una tarea existente. 
- **DELETE**: Elimina una tarea por su ID.  

## Tecnologías utilizadas
- Node.js  
- Express.js  
- MongoDB  
- Mongoose

## Instalación

1.- Clonar el repositorio
```bash
git clone git@github.com:UrbanoTrejoOrlando/API_TASK.git
```
2.- Navegar al directorio del proyecto
```bash
cd API_TASK
```
3.- Instala las dependencias
```bash
npm install
```
4.- Inicia el servidor
- En **modo desarrollo**
```bash
npm run dev
```
- En **modo producción**
```bash
npm start
```  

## Rutas de la API

| Método | Ruta         | Descripción                    |
|--------|--------------|--------------------------------|
| POST   | `/tasks`     | Crear una nueva tarea          |
| GET    | `/tasks`     | Obtener todas las tareas       |
| GET    | `/tasks/:id` | Obtener una tarea específica   |
| PUT    | `/tasks/:id` | Actualizar una tarea existente |
| DELETE | `/tasks/:id` | Eliminar una tarea             |
