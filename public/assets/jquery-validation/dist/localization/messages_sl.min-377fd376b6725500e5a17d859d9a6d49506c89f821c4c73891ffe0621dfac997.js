/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */

!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return a.extend(a.validator.messages,{required:"To polje je obvezno.",remote:"Prosimo popravite to polje.",email:"Prosimo vnesite veljaven email naslov.",url:"Prosimo vnesite veljaven URL naslov.",date:"Prosimo vnesite veljaven datum.",dateISO:"Prosimo vnesite veljaven ISO datum.",number:"Prosimo vnesite veljavno število.",digits:"Prosimo vnesite samo števila.",creditcard:"Prosimo vnesite veljavno številko kreditne kartice.",equalTo:"Prosimo ponovno vnesite vrednost.",extension:"Prosimo vnesite vrednost z veljavno končnico.",maxlength:a.validator.format("Prosimo vnesite največ {0} znakov."),minlength:a.validator.format("Prosimo vnesite najmanj {0} znakov."),rangelength:a.validator.format("Prosimo vnesite najmanj {0} in največ {1} znakov."),range:a.validator.format("Prosimo vnesite vrednost med {0} in {1}."),max:a.validator.format("Prosimo vnesite vrednost manjše ali enako {0}."),min:a.validator.format("Prosimo vnesite vrednost večje ali enako {0}.")}),a});
