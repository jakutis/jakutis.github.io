---
layout: post
title: Šoro algoritmas
date: 2013-05-02
---
## Groverio paieškos algoritmas

## Simono algoritmas

    TODO cite vazirani quantum computing chapter 4.7

*Uždavinys.* Tarkime turime juodąją dėžę, kuri suskaičiuoja du į vieną funkciją $$f: \mathbb{Z}_2^n \rightarrow \mathbb{Z}_2^n$$ (iš $$n$$ bitų sekų į $$n$$ bitų sekas), su pažadu, kad egzistuoja nenulinė seka $$s \in \mathbb{Z}_2^n \setminus \{0\}$$, tokia, kad:

    TODO finish

## Periodo paieškos algoritmas

    TODO cite vazirani quantum computing chapter 5.2

Tarkime turime juodąją dėžę, kuri gali suskaičiuoti periodinę funkciją $$f$$, t.y. funkciją $$f$$ tokią, kad:

$$\begin{equation*}\text{$f(x)=f(y)$ tada ir tik tada, kai $x \equiv y \mod r$.}\end{equation*}$$

Periodio paieškos algoritmo tikslas yra rasti $$r$$.

Periodo paieškos algoritmas yra labai panašus į Simono algoritmą.
Tiesą sakant, galime laikyti, kad jis yra Simono algoritmo apibendrinimas.

    TODO finish

## Šoro algoritmas

    TODO cite vazirani quantum computing chapter 5.3

Skaičiaus faktorizavimas yra jo išskaidymas į sandaugą, kurios visi dauginamieji yra pirminiai skaičiai.
Garsiausias kvantinių kompiuterių algoritmas yra Šoro faktorizavimo algoritmas.
Skaičiavimo laikas, kurio reikia klasikiniu kompiuteriu faktorizuoti skaičių $$N$$, auga polinomiškai nuo $$N$$,
o kvantiniu kompiuteriu skaičiavimo laikas auga polinomiškai nuo $$\log(N)$$.

Ankstesnis skyrelis buvo apie periodo paieškos algoritmą, nes faktorizavimo uždavinys yra naudojant modulinę aritmetiką redukuojamas į periodo paieškos uždavinį.

    TODO finish
