---
layout: post
title: Redukcija ir skaičiuojamoji sudėtingumo teorija
date: 2013-04-18
---
## Redukcija

**Apibrėžimas.** Funkcija $$f: \Sigma^\ast \rightarrow \Sigma^\ast$$ yra vadinama apskaičiuojama, jeigu egzistuoja tokia Tiuringo mašina $$M$$, kuriai sustojus su kiekviena įvestimi $$\omega$$ kaskart ant juostos būna tik $$f(\omega)$$.

**Apibrėžimas.** Kalba $$A \subseteq \Sigma_1$$ yra redukuojama atvaizdžiu (arba tiesiog redukuojama) į kalbą $$B \subseteq \Sigma_2$$ (angliškai "mapping reducibility" arba "many-one reducibility"), žym. $$A \leq_{m} B$$,
jeigu egzistuoja tokia apskaičiuojama funkcija $$f: \Sigma_1^\ast \rightarrow \Sigma_2^\ast$$,
su kuria kiekvienai įvesčiai $$w \in \Sigma_1^\ast$$ turime, kad $$w \in A$$ tada ir tik tada, kai $$f(\omega) \in B$$.
Funkcija $$f$$ yra vadinama redukcija iš $$A$$ į $$B$$.

**Teorema.** Jeigu $$A \leq_m B$$ ir $$B$$ yra nusprendžiama, tai $$A$$ yra nusprendžiama.

**Įrodymas.** Tarkime turime kalbos $$B$$ nusprendėją $$M$$ ir redukciją $$f$$ iš $$A$$ į $$B$$.
Apibūdinsime kalbos $$A$$ nusprendėją $$N$$ tokiu būdu:

* Su įvestimi $$\omega$$:
  0. Apskaičiuojame $$f(\omega)$$.
  0. Simuliuojame $$M$$ su įvestimi $$f(\omega)$$.
  0. Išvedame tai, ką išvedė $$M$$ simuliacija.

Jeigu $$\omega \in A$$, tai akivaizdu, kad $$f(\omega) \in B$$, nes $$f$$ yra redukcija iš $$A$$ į $$B$$.
Todėl $$M$$ priima $$f(\omega)$$, kai tik $$\omega \in A$$.
Todėl $$N$$ yra $$A$$ nusprendėja ir dėl $$A$$ nusprendėjos egzistavimo $$A$$ yra nusprendžiama.
QED.

Dar yra ir vadinamoji redukcija pagal Tiuringą, tačiau jai dar reikia žinoti orakulo Tiuringo mašinas, be to ši redukcija mums nėra šiuo metu svarbi, todėl, jei reikia, plačiau skaitykite *sipser2006introduction* 232 puslapyje.

## Skaičiuojamoji sudėtingumo teorija

**Apibrėžimas.** Algoritmo sudėtingumas yra reikiamų resursų priklausomybė nuo įvesties ilgio.

**Apibrėžimas.** Laikas yra resursas lygus Tiuringo mašinos konfigūracijų sekos ilgiui nuo pradedančiosios iki stabdančiosios.

**Apibrėžimas.** Tarkime $$M$$ yra nusprendėja.
$$M$$ vykdymo laiku (arba laiko sudėtingumu) vadinsime funkciją $$f: \mathbb{N} \rightarrow \mathbb{N}$$,
kur $$f(n)$$ yra laikas, kurį mašina $$M$$ sunaudoja su tam tikra $$n$$ ilgio įvestimi.
Taip pat sakome, kad jeigu $$f(n)$$ yra $$M$$ vykdymo laikas, tai $$M$$ veikia per laiką $$f(n)$$ ir $$M$$ yra $$f(n)$$ laiko Tiuringo mašina.
$$n$$ paprastai visur žymėsime įvesties ilgį.

**Apibrėžimas.** Blogiausio atvejo analizė nurodo, kam yra lygus laiko sudėtingumo $$f(n)$$ maksimumas.

**Apibrėžimas.** Vidutinio atvejo analizė nurodo, kam yra lygus laiko sudėtingumo $$f(n)$$ vidurkis.

**Apibrėžimas.** Tarkime funkcijos $$f, g: \mathbb{N} \rightarrow \mathbb{R}^+$$.
Sakome, kad $$f(n) = O(g(n))$$, jeigu $$\exists c, n_0 \in \mathbb{N}: \forall n \geq n_0: f(n) \leq c g(n)$$.
$$g(n)$$ tokiu atveju yra vadinama asimptotiniu viršutiniu $$f(n)$$ rėžiu.
Tai yra vadinamoji "didžiosios o" notacija.

**Pavyzdys.** Jeigu $$f(n) = 2 n^3 + 4 n^2 + 8 n + 15$$, tai $$f(n) = O(n^3)$$. Taip pat ir $$f(n) = O(n^4)$$.

**Apibrėžimas.** Turime funkciją $$t: \mathbb{N} \rightarrow \mathbb{R}^+$$.
Laiko sudėtingumo klase, kurią žymėsime $$\mathbf{TIME}(t(n))$$, vadinsime visų kalbų, kurios yra nusprendžiamos $$O(t(n))$$ laiko Tiuringo mašina, rinkinį.
$$O(t(n))$$ laiko Tiuringo mašina yra vadinama polinominio laiko Tiuringo mašina.

**Pavyzdys.** Koks yra kalbos $$A=\{0^k 1^k: k \geq 0\}$$, akivaizdu, kad nusprendžiamos Tiuringo mašina, atpažinimo algoritmo vykdymo laikas?
Čia paskutinį kartą pateiksime detalų Tiuringo mašinos $$M_1$$ aprašymą kartu su kiekvieno žingsnio sudėtingumu:

* Su įvestimi $$\omega$$:
  0. iš eilės skaitome juostą ir atmetame, jeigu radome `0` į dešinę nuo `1`. ($$O(n)$$).
  0. Kartojame tol, kol bent vienas nulis ir bent vienas vienetas yra ant juostos ($$O(n)$$):
     0. Iš eilės skaitome juostą nubraukdami po nulį kiekvienam vienetui. ($$O(n)$$).
  0. Jeigu liko bent vienas nulis arba bent vienas vienetas, atmetame. ($$O(n)$$).
  Kitu atveju, priimame.

Įrodymą, kad $$M_1$$ tikrai nusprendžia $$A$$, praleisime.
Svarbu suvokti, kad $$A \in \mathbf{TIME}(n^2)$$, nes sudarydami $$M_1$$ įrodėme, kad egzistuoja tokia Tiuringo mašina, kuri kalbą $$A$$ nusprendžia per laiką $$O(n^2)$$.
Beje, egzistuoja ir tokia Tiuringo mašina, kuri $$A$$ nusprendžia per laiką $$O(n log_2 n)$$.
Ją aprašę ir parodę, kad ji nusprendžia $$A$$, įrodytume, kad $$A \in \mathbf{TIME}(n log_2 n)$$.

**Apibrėžimas.** $$\displaystyle \mathbf{P} = \bigcup_k \mathbf{TIME}(n^k)$$.

**Apibrėžimas.** Kalbos $$A$$ tikrintoju vadinsime algoritmą $$V$$, kur $$A=\{\omega: \text{$V$ priima $\langle \omega, c \rangle$ kokiai nors simbolių sekai $c$}\}$$, informacija $$c$$ yra vadinama įrodymu.
Kalba $$A$$ yra polinomiškai patikrinama, jeigu ji turi polinominio laiko tikrintoją.

**Apibrėžimas.** $$\mathbf{NP}$$ yra polinomiškai patikrinamų kalbų rinkinys.

## NP-pilnų uždavinių redukcija

**Apibrėžimas.** Funkcija $$f: \Sigma^\ast \rightarrow \Sigma^\ast$$ yra vadinama polinomiškai apskaičiuojama, jeigu egzistuoja tokia polinominio laiko Tiuringo mašina $$M$$, kuriai sustojus su kiekviena įvestimi $$\omega$$ kaskart ant juostos būna tik $$f(\omega)$$.

**Apibrėžimas.** Kalba $$A \subseteq \Sigma_1$$ yra polinomiškai redukuojama atvaizdžiu (arba tiesiog polinomiškai redukuojama) į kalbą $$B \subseteq \Sigma_2$$ , žym. $$A \leq_P B$$,
jeigu egzistuoja tokia polinomiškai apskaičiuojama funkcija $$f: \Sigma_1^\ast \rightarrow \Sigma_2^\ast$$,
su kuria kiekvienai įvesčiai $$w \in \Sigma_1^\ast$$ turime, kad $$w \in A$$ tada ir tik tada, kai $$f(\omega) \in B$$.
Funkcija $$f$$ yra vadinama polinomine redukcija iš $$A$$ į $$B$$.

**Apibrėžimas.** Kalba $$B$$ yra NP-sunki, jeigu $$\forall A \in \mathbf{NP}: A \leq_P B$$.

**Apibrėžimas.** Kalba $$B$$ yra NP-pilna, jeigu $$B$$ yra NP-sunki ir $$B \in \mathbf{NP}$$.

**Apibrėžimas.** Kalba $$SAT=\{\langle \varphi \rangle: \text{$\varphi$ yra patenkinama Būlio formulė}\}$$.

**(Cook-Levin) Teorema.** Kalba $$SAT$$ yra NP-pilna.

**Įrodymo idėja.** Akivaizdu, kad $$SAT \in \mathbf{NP}$$.
Dabar pateiksime redukcijos iš betkurios $$A \in \mathbf{NP}$$ į $$SAT$$ koncepciją.
Redukcija kalbai $$A$$ paima įvestį $$\omega$$ ir sukonstruoja Būlio formulę $$\varphi$$, kuri simuliuoja kalbos $$A$$ nedeterministinę Tiuringo mašiną su įvestimi $$\omega$$.
Mes esame praleidę nedeterministinės Tiuringo mašinos apibrėžimą, bet čia mūsų intuicijai užtenka žinoti tai, kad nedeterministinė Tiuringo mašina yra toks pat deterministinės Tiuringo mašinos analogas, kaip ir nedeterministinė baigtinė būsenų mašina yra deterministinės baigtinės būsenų mašinos analogas.
Tai yra užtenka fakto, kad visas nedeterministines Tiuringo mašinas galima simuliuoti su deterministine Tiuringo mašina.
Taigi, jei susimuliuota nedeterministinė Tiuringo mašina priima, tai $$\varphi$$ turi patenkinantįjį priskyrimą, kuris atitinka priimantįjį skaičiavimą.
Kitu atveju, toks $$\varphi$$ priskyrimas neegzistuoja.
Todėl $$\omega \in A$$ tada ir tik tada, kai $$\varphi$$ yra patenkinama.

Jeigu sukonstruotume pilną ir teisingą įrodymą būtų nenuostabu, kad Būlio operatoriais $$\wedge$$, $$\vee$$ ir $$\neg$$ galima sukonstruoti tokią formulę, kuri simuliuoja Tiuringo mašiną, nes ji yra elektroninių kompiuterių veikimo modelis.

**Apibrėžimas.** Kalba $$3SAT=\{\langle \varphi \rangle: \text{$\varphi$ yra patenkinama Būlio formulė su $3$ kintamaisiais}\}$$.

**Teorema.** Kalba $$3SAT$$ yra NP-pilna.

## Pavyzdžiai

![Redukcijų medis](web.jpg)

### Iš 3SAT į INDSET

**Apibrėžimas.** Nepriklausomos aibės uždaviniu vadinama ir žymima kalba $$INDSET=\{\langle G, g \rangle: \left\vert H \right\vert \geq g \}$$, čia $$g \in \mathbb{N}$$, $$G$$ - grafas, $$H$$ - $$G$$ viršūnių poaibis, kuriame jokios dvi viršūnės neturi bendros briaunos.

**Teorema.** $$INDSET$$ yra NP-pilnas.

**Įrodymas.** Sudarysime $$3SAT$$ nusprendėją, kuri naudos $$INDSET$$ nusprendėją.
Konstruokime grafą $$G$$.
Kiekvieną formulės sąlygą atitiks viršūnės, pažymėtos sąlygos kintamųjų formulėmis, sujungtos briaunomis.
Jei sąlygoje vienas kintamasis, tai bus tik viena viršūnė ir nulis briaunų.
Jei sąlygoje du kintiemieji, tai bus dvi viršūnės sujungtos viena briauna.
Jei sąlygoje trys kintamieji, tai bus trys viršūnės ir trys briaunos.
Į turimą grafą dar pridedame briaunų tarp tų viršūnių, kurių kintamųjų formulės yra nesutaikomos.

![G atitinkantis (ne x arba y arba ne z)(x arba ne y arba z)(x arba y arba z)(ne x arba ne y)](indset.jpg)
{:latexwidth="12cm"}

Simuliuojame $$INDSET$$ kalbos nusprendėją su įvestimi $$\langle G, g \rangle$$, kur $$g$$ - formulėje esančių sąlygų skaičius.
Jeigu $$INDSET$$ nusprendėjas priėmė, tai $$3SAT$$ nusprendėjas irgi turi priimti,
nes $$H$$ turės $$g$$ viršūnių, kurių visos bus iš skirtingų sąlygų ir nebus nesutaikomų miniformulių.
Taigi priskyrus viršūnės kintamiesiems `1`, jeigu formulė yra be neigimo operatoriaus, ir `0` - jeigu su, turėsime patenkintą formulę.
Jeigu $$INDSET$$ nusprendėjas atmetė, $$3SAT$$ nusprendėjas taip pat turi atmesti,
nes norint, kad $$H$$ turėtų bent vieną papildomą viršūnę reikš, kad bus jau dvi miniformulės iš tos pačios sąlygos, arba dvi miniformulės bus nesutaikomos, to paties kintamojo.
O tokiu atveju formulė tikrai nepatenkinama.

### Iš INDSET į CLIQUE

**Apibrėžimas.** Klikos uždaviniu vadinama ir žymima kalba $$CLIQUE = \{ \langle G, g \rangle: \left\vert H \right\vert \geq g \}$$, čia $$g \in \mathbb{N}$$, $$G$$ - grafas, $$H$$ - $$G$$ viršūnių poaibis, kurio visos poros turi bendrą briauną.

**Teorema.** $$CLIQUE$$ yra NP-pilnas.

**Įrodymas.** Pastebėkime, kad jeigu paimtume $$INDSET$$ nusprendėjo įvestį, pridėtume briauną ten, kur jos nėra, ir atimtume iš ten, kur yra, tai gautume $$CLIQUE$$ nusprendėjo įvestį, kuri būtų priimta, tada ir tik tada, kai $$CLIQUE$$ įvestis turėtų būti priimta.
