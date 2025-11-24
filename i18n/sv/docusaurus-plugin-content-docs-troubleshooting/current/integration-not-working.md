---
sidebar_position: 3
title: Integration fungerar inte
description: Felsökningssteg när din integration inte reagerar på nya händelser eller inte startar när nya händelser upptäcks
keywords: [integration fungerar inte, integration synkar inte, felsökning integration, integrationsfel]
tags: [troubleshooting, integrations, errors]
---

# Integration fungerar inte

Felsökningssteg när din integration inte reagerar på nya händelser eller inte startar när nya händelser upptäcks.

## Snabbkontroller

1. **Verifiera integrationsstatus**
   - Kontrollera om integrationen är live och aktiv, den måste vara aktiv för att reagera på nya händelser och live för att automatiskt starta när nya händelser upptäcks.
   - Kontrollera inställningarna för integrationens trigger, vissa av dem har filter som kan filtrera bort dina händelser.
   - Granska senaste körningshistoriken, när körde integrationen senast? Har du gjort några ändringar i integrationen som kan ha orsakat att den stoppade?

2. **Kontrollera anslutning**
   - Gå till anslutningen för stegen och triggers du använder
   - Verifiera att anslutningen fungerar och att inloggningsuppgifterna är korrekta.
   - Leta efter eventuella kända problem med anslutningen till den tjänsten, till exempel om tjänsten är nere. Ofta kan du försöka logga in manuellt till tjänsten för att se om den fungerar.
   - Säkerställ att tjänsten du ansluter till fortfarande är aktiv och att du har rätt behörigheter för att komma åt den data du behöver.

3. **Granska organisationsinställningarna**
   - Verifiera att du fortfarande har krediter för att köra integrationen.
   - Kontrollera om några fakturor från oss är förfallna, i så fall kan du behöva betala för att fortsätta använda integrationen.
   - Kontrollera att du fortfarande är prenumerant på planen som tillåter dig att köra integrationen.

## Vanliga problem

- Integrationen är inte aktiv eller live.
- Anslutningen till tjänsten fungerar inte.
- Organisationen är inte prenumerant på planen som tillåter dig att köra integrationen.
- Organisationen har inga krediter kvar för att köra integrationen.
- Organisationen har förfallna fakturor.
- Integrationen är inte korrekt konfigurerad.
