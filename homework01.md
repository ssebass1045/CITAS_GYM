# Proyecto Integrador del Módulo 3

## Introducción

En este proyecto, desarrollaremos una aplicación para la gestión de turnos de clases personalizadas en un gimnasio. El usuario deberá poder interactuar con el FrontEnd, agendar su turno en una fecha y hora determinados para asistir a ser atendido en un determinado lugar.

## Actividad 1: Planificación

### User Stories

1. **Registro de Usuario**: Como usuario, quiero registrarme en la plataforma para poder agendar turnos.
2. **Inicio de Sesión**: Como usuario registrado, quiero iniciar sesión en la plataforma para acceder a mis funciones.
3. **Agendar Turno**: Como usuario autenticado, quiero agendar un turno para asistir a una clase en el gimnasio.
4. **Cancelar Turno**: Como usuario autenticado, quiero cancelar un turno agendado hasta el día anterior.
5. **Recibir Confirmación por Email**: Como usuario, quiero recibir una confirmación por email al agendar o cancelar un turno.
6. **Subir Foto de Perfil**: Como usuario, quiero subir una foto de perfil a mi cuenta para personalizar mi perfil.
7. **navegar por la Home**: Como usuario no registrado, quiero poder navegar en la Home y ver la informacion del gym

## UX/UI
- Tematica del gimnasio
- Home con la informacion sobre el gimnasio
- Redireccion automatica luego del login
- mostrar visualmente horarios y fechas disponibles para entrenar
- Formularios
    - Mostrar errores en tiempo real de tipo de dato esperado
    - intuitivo mostrando paso a paso
    - seguridad en las contraseñas
    - deshabilitar boton hasta completar todo
    - despliegue de calendario para seleccionar turno

### Esquema de la Base de Datos

#### Tabla `Usuarios`

| Column Name    | Data Type     | Constraints                          |
|----------------|---------------|--------------------------------------|
| id             | INT           | PRIMARY KEY, AUTO_INCREMENT          |
| nombre         | VARCHAR(255)  | NOT NULL                             |
| email          | VARCHAR(255)  | UNIQUE, NOT NULL                     |
| fecha_registro | DATETIME      | NOT NULL                             |
| foto_perfil    | VARCHAR(255)  | NULL (URL o ruta del archivo de la imagen) |

#### Tabla `Credenciales`

| Column Name              | Data Type     | Constraints                                                              |
|--------------------------|---------------|--------------------------------------------------------------------------|
| id                       | INT           | PRIMARY KEY, AUTO_INCREMENT                                              |
| usuario_id               | INT           | NOT NULL, FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)               |
| contraseña               | VARCHAR(255)  | NOT NULL                                                                 |
| fecha_ultima_actualizacion | DATETIME      | NOT NULL                                                                 |

#### Tabla `Turnos`

| Column Name   | Data Type     | Constraints                                                              |
|---------------|---------------|--------------------------------------------------------------------------|
| id            | INT           | PRIMARY KEY, AUTO_INCREMENT                                              |
| usuario_id    | INT           | NOT NULL, FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)               |
| fecha_turno   | DATETIME      | NOT NULL                                                                 |
| estado        | VARCHAR(50)   | NOT NULL (valores posibles: 'reservado', 'cancelado')                    |

### Relaciones entre las tablas

- Un usuario puede tener múltiples turnos (relación uno a muchos).
- Un usuario tiene una credencial asociada (relación uno a uno).

