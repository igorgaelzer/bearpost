/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */

!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return a.extend(a.validator.messages,{required:"Este campo es obligatorio.",remote:"Por favor, llene este campo.",email:"Por favor, escriba un correo electrónico válido.",url:"Por favor, escriba una URL válida.",date:"Por favor, escriba una fecha válida.",dateISO:"Por favor, escriba una fecha (ISO) válida.",number:"Por favor, escriba un número válido.",digits:"Por favor, escriba sólo dígitos.",creditcard:"Por favor, escriba un número de tarjeta válido.",equalTo:"Por favor, escriba el mismo valor de nuevo.",extension:"Por favor, escriba un valor con una extensión permitida.",maxlength:a.validator.format("Por favor, no escriba más de {0} caracteres."),minlength:a.validator.format("Por favor, no escriba menos de {0} caracteres."),rangelength:a.validator.format("Por favor, escriba un valor entre {0} y {1} caracteres."),range:a.validator.format("Por favor, escriba un valor entre {0} y {1}."),max:a.validator.format("Por favor, escriba un valor menor o igual a {0}."),min:a.validator.format("Por favor, escriba un valor mayor o igual a {0}."),nifES:"Por favor, escriba un NIF válido.",nieES:"Por favor, escriba un NIE válido.",cifES:"Por favor, escriba un CIF válido."}),a});
