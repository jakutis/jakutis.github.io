---
layout: post
title: Church-Turing tezė
date: 2013-04-13
---
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
Pačioje skaičiavimo pradžioje ant juostos nuo kairės yra užrašyta įvestis ir toliau visur - tuščiasis simbolis $$\_$$.

**Apibrėžimas.** Konfigūracija vadinamas juostoje esančių simbolių sekos, pieštuko pozicijos ir mašinos būsenos rinkinys.
Pradinė konfigūracija yra konfigūracija prieš vykdymo pradžią.
Priimančioji konfigūracija yra ta, kurios mašinos būsena yra $$q_p$$.
Atmetančioji konfigūracija yra ta, kurios mašinos būsena yra $$q_a$$.
Priimančioji ir atmetančioji konfigūracija vadinamos stabdančiosiomis konfigūracijomis.
Sakome, kad konfigūracija $$A$$ duoda konfigūraciją $$B$$, jeigu esant konfigūracijoje $$A$$ vieną kartą pritaikius būsenos kaitos funkciją patenkama į konfigūraciją $$B$$.

**Apibrėžimas.** Tiuringo mašina $$M$$ vadinama priimančia įvestį $$\omega$$, jeigu egzistuoja tokia konfigūracijų seka $$C_1, C_2, \dots, C_k$$, kur:

* $$C_1$$ yra pradinė $$M$$ konfigūracija, kai juostoje esanti simbolių seka yra $$\omega$$,
* kiekviena $$C_i$$ duoda $$C_{i+1}$$,
* $$C_k$$ yra priimančioji konfigūracija.
