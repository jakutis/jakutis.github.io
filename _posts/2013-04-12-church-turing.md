---
layout: post
title: Church-Turing tezė
date: 2013-04-14
---
Church-Turing teze vadinamas sąryšis tarp neformalios algoritmo sąvokos ir tikslaus apibrėžimo.

## Tiuringo mašina

1936 m. Alan Turing pasiūlė galingą skaičiavimo įrenginių modelį.

**Apibrėžimas.** Tiuringo mašina yra 7 elementų kortežas $$(Q, \Sigma, \Gamma, \delta, q_0, q_p, q_a)$$; čia:

0. $$Q$$ yra baigtinė būsenų aibė,
0. $$\Sigma$$ yra įvesties alfabetas be tuščiojo simbolio $$\_$$,
0. $$\Gamma$$ yra juostos alfabetas, $$\_ \in \Gamma \wedge \Sigma \subseteq \Gamma$$,
0. $$\delta: Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$$ yra būsenos kaitos funkcija,
0. $$q_0 \in Q$$ yra pradinė būsena,
0. $$q_p \in Q$$ yra priimančioji būsena,
0. $$q_a \in Q$$ yra atmetančioji būsena, $$q_a \neq q_p$$.

Tiuringo mašiną galima įsivaizduoti begalinio ilgio juostos ir pieštuko pagalba.
Būsenos kaitos funkcija nuskaito juosto simbolį po kuriuo yra pieštukas ir priklausomai nuo to kokioje būsenoje yra mašina, įrašo kokį nors simbolį toje pačioje juostos vietoje, pakeičia mašinos būseną į kokią nors kitą ir pastumia pieštuką į kairę arba į dešinę.
Pačioje skaičiavimo pradžioje pieštukas yra juostos kairėje, o ant juostos nuo kairės yra užrašyta įvestis ir toliau visur - tuščiasis simbolis $$\_$$.

**Apibrėžimas.** Konfigūracija vadinamas juostoje esančių simbolių sekos, pieštuko pozicijos ir mašinos būsenos rinkinys.
Pradinė konfigūracija yra konfigūracija prieš vykdymo pradžią.
Priimančioji konfigūracija yra ta, kurios mašinos būsena yra $$q_p$$.
Atmetančioji konfigūracija yra ta, kurios mašinos būsena yra $$q_a$$.
Priimančioji ir atmetančioji konfigūracija vadinamos stabdančiosiomis konfigūracijomis.
Sakome, kad konfigūracija $$A$$ duoda konfigūraciją $$B$$, jeigu esant konfigūracijoje $$A$$ vieną kartą pritaikius būsenos kaitos funkciją patenkama į konfigūraciją $$B$$.

**Apibrėžimas.** Tiuringo mašina $$M$$ vadinama priimančia (arba atpažįstančia) įvestį $$\omega$$, jeigu egzistuoja tokia konfigūracijų seka $$C_1, C_2, \dots, C_k$$, kur:

* $$C_1$$ yra pradinė $$M$$ konfigūracija, kai juostoje esanti simbolių seka yra $$\omega$$,
* kiekviena $$C_i$$ duoda $$C_{i+1}$$,
* $$C_k$$ yra priimančioji konfigūracija.

**Apibrėžimas.** Aibė $$A=\{\omega: \text{Tiuringo mašina $M$ atpažįsta įvestį $\omega$}\}$$ vadinama Tiuringo mašinos $$M$$ kalba, arba kalba, kurią atpažįsta Tiuringo mašina $$M$$, žymima $$L(M) = A$$.

**Apibrėžimas.** Kalba $$A$$ yra vadinama Tiuringo atpažįstama, jeigu $$\exists M: L(M) = A$$.

Pastebėkime, kad pradėjus skaičiavimą Tiuringo mašina gali turėti tris baigtis - priimti įvestį, atmesti arba užsiciklinti.

**Apibrėžimas.** Tiuringo mašina $$M$$ vadinama nusprendėja, jeigu $$M$$ gali turėti tik dvi baigtis - priimti arba atmesti įvestį.

**Apibrėžimas.** Jeigu $$M$$ yra nusprendėja ir $$M$$ atpažįsta kalbą $$A$$, tai sakome, kad $$M$$ nusprendžia kalbą $$A$$.

**Apibrėžimas.** Kalba $$A$$ yra vadinama Tiuringo nusprendžiama arba tiesiog nusprendžiama, jeigu $$\exists \text{nusprendėja $M$}: L(M) = A$$.

## Algoritmas

1900 m. David Hilbert paskelbė savo žymųjį 23 matematinių uždavinių sąrašą.
Dešimtasis uždavinys buvo sukurti algoritmą, kuris pasakytų, ar duotas daugianaris turi sveikųjų sprendinių.
Tada jis vartojo ne žodį "algoritmas", o frazę "procesas, kuris pateiktų atsakymą per baigtinį skaičių operacijų".
Tačiau Hilbert manė perdaug - tokio algoritmo sukurti negalima, nes jis net teoriškai ir neegzistuoja.
Bet tuo metu įrodymui, kad toks algoritmas neegzistuoja, nebuvo įrankių.
Tik 1936 m. Alonzo Church ir Alan Turing paskelbė straipsnius, kuriuose pirmą kartą buvo formaliai apibrėžta algoritmo sąvoka.
Church tai padarė naudodamas savo $$\lambda$$ skaičiavimų teoriją, o Turing - naudodamas Tiuringo mašinas.
Buvo parodyta, kad abudu algoritmo apibrėžimai yra ekvivalentūs.
Taigi, tik 1970 m. buvo įrodyta, kad dešimtasis Hilbert uždavinys yra neišsprendžiamas.
Mūsų terminais šis uždavinys yra klausimas, ar kalba $$D=\{p: \text{$p$ yra polinomas su sveikąja šaknimi}\}$$ yra Tiuringo nusprendžiama.
Atsakymas yra neigiamas, nors ir kalba $$D$$ yra Tiuringo atpažįstama.

Ar egzistuoja toks algoritmas, kuris pasakytų, ar duota Tiuringo mašina tiksliai įgyvendina duotą matematinį aprašymą, ką ta Tiuringo mašina turi padaryti?
Atsakymas yra neigiamas - bendru atveju algoritminis algoritmo korektiškumo nustatymas negali būti įgyvendinamas Tiuringo mašina.
Toliau esanti teorema yra šio teiginio formalus užrašymas.

**Apibrėžimas.** Objekto $$O$$ užkodavimu yra objekto $$O$$ pateikimas simbolių eilute ir žymimas $$\langle O \rangle$$.

**Teorema.** Kalba $$A_{TM} = \{ \langle M, \omega \rangle: \text{$M$ yra Tiuringo mašina ir $M$ priima $\omega$}\}$$ yra nenusprendžiama.

**Apibrėžimas.** Kalba $$A_{TM}$$ yra vadinama priėmimo uždaviniu.

Negana to, kadangi skirtingų Tiuringo mašinų aibė yra skaitli, o skirtingų kalbų - ne, tai reiškia, kad yra kalbų, kurios nėra Tiuringo atpažįstamos.

**Teorema.** $$\exists A: \neg \exists M: L(M) = A$$.

**Teorema.** Kalba $$A$$ yra nusprendžiama tada ir tik tada, kai $$A$$ ir $$\overline{A}=\{\omega: \omega \notin A\}$$ yra atpažįstamos.

## Reduktyvumas

Pagrindinis metodas, naudojamas įrodyti uždavinių nenusprendžiamumui, yra reduktyvumas.
Redukcija yra procesas, kurio metu vienas uždavinys pertvarkomas į antrą taip, kad antro uždavinio sprendinys gali būti panaudojamas pirmosios sprendimui.
Jeigu $$A$$ yra redukuojamas į $$B$$ ir $$B$$ yra nusprendžiamas, tai $$A$$ taip pat yra nusprendžiamas.
Jeigu $$A$$ yra nenusprendžiamas ir redukuojamas į $$B$$, tai $$B$$ yra nenusprendžiamas.
Be panaudojimo uždavinių klasifikavimui pagal nusprendžiamumą, reduktyvumas vaidina svarbų vaidmenį ir sudėtingumo teorijoje.

**Teorema.** Kalba $$HALT_{TM} = \{ \langle M, \omega \rangle: \text{$M$ yra Tiuringo mašina ir $M$ priima arba atmeta $\omega$}\}$$ yra nenusprendžiama.

**Apibrėžimas.** Kalba $$HALT_{TM}$$ yra vadinama sustojimo uždaviniu.

**Įrodymas.** Tarkime turime Tiuringo mašiną $$R$$, kuri nusprendžia $$HALT_{TM}$$.
Tada galime apibrėžti Tiuringo mašiną $$S$$, kuri nusprendžia $$A_{TM}$$:

0. Simuliuojame $$R$$ su įvestimi $$\langle M, \omega \rangle$$.
0. Jeigu $$R$$ atmetė, $$S$$ atmeta, kitu atveju simuliuojame $$M$$ su įvestimi $$\omega$$.
0. Jeigu $$M$$ priėmė, $$S$$ priima, kitu atveju $$S$$ atmeta.

Kadangi $$A_{TM}$$ yra nenusprendžiama ir redukuojama į $$HALT_{TM}$$, tai $$HALT_{TM}$$ yra nenusprendžiamas.

**(Rice) Teorema.** Betkokios savybės apie Tiuringo mašina atpažįstą kalbą testavimas yra nenusprendžiamas uždavinys.

Galima paminėti, kad kalbų teorijoje naudojamas dar ir redukcijos pagal skaičiavimų istorijas metodas.
Taip pat vertas dėmesio yra vienas paprastesnių nenusprendžiamų uždavinių - Post korespondencijos uždavinys (angliškai Post correspondence problem).
Apie šias temas, kaip ir apie viską aukščiau galima sužinoti *sipser2006introduction* knygoje.
