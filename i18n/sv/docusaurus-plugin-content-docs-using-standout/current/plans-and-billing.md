---
sidebar_position: 10
title: Planer och fakturering
description: Lär dig hur du visar planer, hanterar faktureringsinformation, ändrar planer och hanterar fakturor
keywords: [planer, fakturering, fakturor, prenumerationer, krediter, ändra plan]
tags: [using-standout, billing]
---

Faktureringssidan visar din nuvarande plan, prenumerationsdetaljer, fakturor och alternativ för att köpa extra krediter om du behöver fler krediter än din plan tillåter.

Endast användare med Adminroll kan visa Faktureringssidan. Om ditt konto hanteras av en partner eller agent kanske du inte har tillgång till fakturerings- eller planalternativ från oss. Kontakta din partner eller agent för att få mer information om dina alternativ.

## Visa din nuvarande plan

På Faktureringssidan kan du se:

- **Nuvarande plan**: Planen du är prenumerant på
- **Pris**: Månadskostnad för planen
- **Krediter per månad**: Hur många krediter som ingår
- **Planfunktioner**: Vad som ingår i din plan
- **Prenumerationer**: Aktiva prenumerationer och deras status
- **Fakturor**: Tidigare fakturor och deras status
- **Krediter**: Nuvarande krediter och deras status

## Redigera faktureringsinformation

**Obs**: Endast användare med Adminroll kan redigera faktureringsinformation.

För att uppdatera faktureringsdetaljer:

1. Gå till Faktureringssidan
2. Klicka på "Redigera" i faktureringssektionen
3. Uppdatera faktureringsdetaljer.
4. Konfigurera en betalningsmetod. Kort eller faktura. Faktura är endast tillgängligt för organisationer i Sverige för närvarande.
5. Klicka på "Spara" för att tillämpa ändringarna

## Ändra din plan

_Observera att vissa organisationer inte kan ändra planer. Det kan vara låst beroende på ditt avtal med oss eller med din partner som hanterar ditt konto._

För att byta till en annan plan:

1. Gå till Faktureringssidan (Adminroll krävs)
2. Klicka på "Redigera" under plansektionen
3. Visa tillgängliga planer och deras funktioner
4. Välj den plan du vill ha
5. Bekräfta ändringen

## Köpa extra krediter

Om du får slut på krediter kan du köpa extra krediter för att fortsätta använda integrationerna utan att uppgradera din plan. De flesta planer tillåter dig att köpa extra krediter. Men vissa, som Starter-planen, gör inte det.

Om du behöver fler krediter:

1. Gå till Faktureringssidan
2. Klicka på "Köp extra krediter"
3. Välj det kreditpaket du vill ha
4. Slutför köpet
5. Krediter läggs till på ditt konto

## Prenumerationer

Prenumerationssektionen visar:

- **Nuvarande prenumerationer**: Aktiva planer och kreditpaket
- **Historik**: Tidigare prenumerationer och deras status
- **Datum**: När prenumerationer startade och slutade

## Fakturor

Fakturasektionen listar alla dina fakturor:

- **Fakturanummer**: Unik identifierare
- **Status**: Betald, väntande eller förfallen
- **Förfallodatum**: När betalning ska ske
- **Belopp**: Total kostnad

Klicka på en faktura för att:

- Visa fullständiga detaljer
- Ladda ner fakturan
- Se vad som debiterades

## Förstå krediter

Krediter används när integrationer körs:

- En integrationskörning förbrukar 1 kredit.
- Integrationer som tar längre tid att köra kan förbruka fler krediter. 1 kredit per startad 30 sekunder körtid.
- Mer avancerade steg i integrationen kan förbruka ytterligare krediter.
- Iteratorn förbrukar 1 extra kredit per iteration.
- Exempel: En körning med en iterator och 1 iteration förbrukar minst 2 krediter (1 för körningen + 1 för iterationen).
- Exempel: En körning med en iterator och 2 iterationer förbrukar minst 3 krediter (1 för körningen + 2 för iterationerna).
- Varje plan inkluderar en månadsvis kredittilldelning
- Krediter återställs månadsvis
- Du kan köpa extra krediter om det behövs och de kommer oftast att ha en längre giltighet än plankrediterna.
- Oanvända krediter går ut i slutet av den nuvarande prenumerationsperioden eller när kreditpaketet går ut.
