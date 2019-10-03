## Generador de modelos con sus foreign key

https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554

## XAMPP

https://simplecodetips.wordpress.com/2018/06/14/instalacion-de-xampp-en-ubuntu-18-04/

## log - Bug

- Cuando ejecutaba un findOne() sin indicar atributos ejecutaba (select * from) incluyendo un atributo no declarado: `categoriumId`. 

Executing (default): SELECT `id`, `nombre`, `descripcion`, `url`, `idCategoria`, `createdAt`, `updatedAt`, `categoriumId` FROM `links` AS `link` WHERE `link`.`id` = '5';
PUT /links/5 500 136.081 ms - 21

-
