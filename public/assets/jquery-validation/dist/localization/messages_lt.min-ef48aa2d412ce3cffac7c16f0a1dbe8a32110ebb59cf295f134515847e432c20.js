/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */

!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return a.extend(a.validator.messages,{required:"Šis laukas yra privalomas.",remote:"Prašau pataisyti šį lauką.",email:"Prašau įvesti teisingą elektroninio pašto adresą.",url:"Prašau įvesti teisingą URL.",date:"Prašau įvesti teisingą datą.",dateISO:"Prašau įvesti teisingą datą (ISO).",number:"Prašau įvesti teisingą skaičių.",digits:"Prašau naudoti tik skaitmenis.",creditcard:"Prašau įvesti teisingą kreditinės kortelės numerį.",equalTo:"Prašau įvestį tą pačią reikšmę dar kartą.",extension:"Prašau įvesti reikšmę su teisingu plėtiniu.",maxlength:a.validator.format("Prašau įvesti ne daugiau kaip {0} simbolių."),minlength:a.validator.format("Prašau įvesti bent {0} simbolius."),rangelength:a.validator.format("Prašau įvesti reikšmes, kurių ilgis nuo {0} iki {1} simbolių."),range:a.validator.format("Prašau įvesti reikšmę intervale nuo {0} iki {1}."),max:a.validator.format("Prašau įvesti reikšmę mažesnę arba lygią {0}."),min:a.validator.format("Prašau įvesti reikšmę didesnę arba lygią {0}.")}),a});
