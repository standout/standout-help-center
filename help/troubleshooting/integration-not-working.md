---
sidebar_position: 2
title: Integration does not work
description: Troubleshooting steps when your integration is not reacting on new events or doesn't start when new events are detected
keywords: [integration not working, integration not syncing, troubleshooting integration, integration errors]
tags: [troubleshooting, integrations, errors]
---

# Integration does not work

Troubleshooting steps when your integration is not reacting on new events or
doesn't start when new events are detected.

## Quick checks

1. **Verify integration status**
   - Check if integration is live and active, it must be active to react to new events and live to automatically start when new events are detected.
   - Check settings for the integration trigger, some of them have filters that could filter out your events.
   - Review recent run history, when was the last time the integration ran? Have you made any changes to the integration that could have caused it to stop?

2. **Check connection**
   - Go to the connection for the steps and triggers you are using
   - Verify that the connection is working and that the credentials are correct.
   - Look for any known issues with the connection to that service, for example if the service is down. Often you can try to manually login to the service to see if it is working.
   - Ensure that the service you are connecting to is still active and that you have the correct permissions to access the data you need.

3. **Review the organization settings**
   - Verify that you still have credits to run the integration.
   - Check if any invoices from us are overdue, if so, you may need to pay to continue using the integration.
   - Check that you are still subscribed to the plan that allows you to run the integration.

## Common issues

- The integration is not active or live.
- The connection to the service is not working.
- The organization is not subscribed to the plan that allows you to run the integration.
- The organization has no credits left to run the integration.
- The organization has overdue invoices.
- The integration is not configured correctly.
