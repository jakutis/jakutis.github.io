---
layout: post
title: !binary |-
  QnVzaW5lc3MgUHJvY2VzcyBFeGVjdXRpb24gTGFuZ3VhZ2UgZm9yIFNlbWFu
  dGljIFdlYiBTZXJ2aWNlcw==
wordpress_id: 211
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0yMTE=
date: 2008-12-07 23:57:06.000000000 +00:00
---
Šio įrašo pavadinimas nurodo į neseniai aptiktą trūkstamą Business Process Modelling įrankį Semantic Web'ui kontroliuot. Vienas iš įžanginių straipsnių - http://www.infoq.com/news/2008/11/BPEL4SWS

Bendrai mąstant tai viską galima suskirstyti į lygmenis. Be to, geriausia imti paprasčiausią prasmingą dalį - po tris. Ir šią trejybę galima laisvai pavadinti Model-View-Controller modeliu. Tiksliau Model-Controller-View. Taigi turime: controlleris=BPEL4SWS po savim turi modelį=vidinę DB, ir virš savęs view=RDF. Visi trys lygmenys yra duomenys kuriuos paskui išpildo atitinkamos programos: controleris yra dalis Business Process Modeling software suite'o (Rules Engine, Execution engine ir t.t.), modelis yra dalis storage arba networking informacinės sistemos dalis, view - yra kaip ir rezultatas, kažkoks dalykas, kuris yra naudingas kitoms sistemoms, šiuo atveju RDF panaudoja kitos tokios BPM sistemos arba interneto naršyklės. Taigi. Kontroleris ima ir keičia modelį bei ima ir keičia vaizdą. O patį kontrolerį jau keičia žmogus - jį programuoja rašydamas bpel4sws xml schemą atitinkančius dokumentus.

Taigi, belieka praktikoje išbandyti. Girdėjau, išėjo naujas stabilus JBoss Application Server 5.
