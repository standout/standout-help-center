import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './faq.module.css';

export default function FAQ(): React.ReactElement {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale || i18n.defaultLocale || 'en';
  const isDefaultLocale = currentLocale === i18n.defaultLocale;
  const localePrefix = isDefaultLocale ? '' : `/${currentLocale}`;

  // Helper function to create localized links with translated text
  // Uses translate() function which can be statically analyzed by write-translations
  const getLocalizedLink = (url: string, translationKey: string, defaultText: string) => {
    const linkText = translate({
      id: translationKey,
      message: defaultText,
      description: `Link text for ${url}`,
    });

    if (url.startsWith('http') || url.startsWith('//')) {
      // External link, use regular anchor tag
      return <a href={url}>{linkText}</a>;
    }
    // Internal link, use Docusaurus Link with locale prefix
    return <Link to={`${localePrefix}${url}`}>{linkText}</Link>;
  };
  return (
    <Layout title="FAQ" description="Frequently asked questions about Standout">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>
              <Translate id="faq.title" description="FAQ page title">
                Frequently Asked Questions
              </Translate>
            </h1>
            <p className="margin-bottom--lg">
              <Translate id="faq.description" description="FAQ page description">
                Find answers to common questions about Standout and our integration platform.
              </Translate>
            </p>

            <div className={styles.faqSection}>
              <h2>
                <Translate id="faq.section.gettingStarted" description="Getting Started section title">
                  Getting Started
                </Translate>
              </h2>

              <details>
                <summary>
                  <Translate id="faq.gettingStarted.createAccount.question" description="Question about creating first account">
                    How do I create my first account?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate
                      id="faq.gettingStarted.createAccount.answer"
                      description="Answer about creating first account"
                      values={{
                        appLink: <a href="https://app.integrationer.se">app.integrationer.se</a>,
                      }}
                    >
                      {'To create your first account, go to {appLink} and click "Sign up". Fill in your details, verify your email address, and complete your profile setup.'}
                    </Translate>
                  </p>
                  <p>
                    <Translate
                      id="faq.gettingStarted.createAccount.moreInfo"
                      description="Link to more information about creating account"
                      values={{
                        guideLink: getLocalizedLink('/help/getting-started/creating-your-first-account', 'faq.link.creatingFirstAccount', 'creating your first account'),
                      }}
                    >
                      {'For more detailed instructions, see our guide on {guideLink}.'}
                    </Translate>
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <Translate id="faq.gettingStarted.inviteTeammates.question" description="Question about inviting teammates">
                    How do I invite teammates to my workspace?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.gettingStarted.inviteTeammates.answer" description="Answer about inviting teammates">
                      Go to your organization, click on "Members", then "New member". Enter the email address, select the role and permissions, and send the invitation.
                    </Translate>
                  </p>
                  <p>
                    <Translate
                      id="faq.gettingStarted.inviteTeammates.moreInfo"
                      description="Link to more information about inviting teammates"
                      values={{
                        guideLink: getLocalizedLink('/help/getting-started/inviting-teammates', 'faq.link.invitingTeammates', 'inviting teammates'),
                      }}
                    >
                      {'Learn more in our guide on {guideLink}.'}
                    </Translate>
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <Translate id="faq.gettingStarted.roles.question" description="Question about user roles">
                    What are the different user roles and permissions?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.gettingStarted.roles.intro" description="Introduction to roles">
                      Standout offers three main roles:
                    </Translate>
                  </p>
                  <ul>
                    <li>
                      <strong>
                        <Translate id="faq.gettingStarted.roles.admin.name" description="Admin role name">Admin</Translate>
                      </strong>
                      :{' '}
                      <Translate id="faq.gettingStarted.roles.admin.description" description="Admin role description">
                        Full access to all features and settings
                      </Translate>
                    </li>
                    <li>
                      <strong>
                        <Translate id="faq.gettingStarted.roles.collaborator.name" description="Collaborator role name">Collaborator</Translate>
                      </strong>
                      :{' '}
                      <Translate id="faq.gettingStarted.roles.collaborator.description" description="Collaborator role description">
                        Can create and edit integrations and accounts
                      </Translate>
                    </li>
                    <li>
                      <strong>
                        <Translate id="faq.gettingStarted.roles.reader.name" description="Reader role name">Reader</Translate>
                      </strong>
                      :{' '}
                      <Translate id="faq.gettingStarted.roles.reader.description" description="Reader role description">
                        Read-only access to view integrations and data
                      </Translate>
                    </li>
                  </ul>
                </div>
              </details>
            </div>

            <div className={styles.faqSection}>
              <h2>
                <Translate id="faq.section.usingStandout" description="Using Standout section title">
                  Using Standout
                </Translate>
              </h2>

              <details>
                <summary>
                  <Translate id="faq.usingStandout.createIntegration.question" description="Question about creating integration">
                    How do I create a new integration?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.usingStandout.createIntegration.answer" description="Answer about creating integration">
                      Go to the organization page, click "New integration", select the trigger, add steps, configure the settings, and save the integration.
                    </Translate>
                  </p>
                  <p>
                    <Translate
                      id="faq.usingStandout.createIntegration.moreInfo"
                      description="Link to more information about integrations"
                      values={{
                        guideLink: getLocalizedLink('/help/using-standout/integrations', 'faq.link.integrations', 'integrations'),
                      }}
                    >
                      {'See our guide on {guideLink} for more details.'}
                    </Translate>
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <Translate id="faq.usingStandout.invoices.question" description="Question about invoices">
                    How do I view and manage invoices?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.usingStandout.invoices.answer" description="Answer about invoices">
                      Navigate to the Plans and billing section in your organization. You can view details, download invoices, and manage your subscription.
                    </Translate>
                  </p>
                  <p>
                    <Translate
                      id="faq.usingStandout.invoices.moreInfo"
                      description="Link to more information about billing"
                      values={{
                        guideLink: getLocalizedLink('/help/using-standout/plans-and-billing', 'faq.link.plansAndBilling', 'plans and billing'),
                      }}
                    >
                      {'Learn more about {guideLink}.'}
                    </Translate>
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <Translate id="faq.usingStandout.failedRuns.question" description="Question about failed runs">
                    What should I do if a run fails?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.usingStandout.failedRuns.answer" description="Answer about failed runs">
                      If a run fails, first check the error message and review the logs. Verify your connections and credentials. You can restart failed runs from the run history.
                    </Translate>
                  </p>
                  <p>
                    <Translate
                      id="faq.usingStandout.failedRuns.moreInfo"
                      description="Link to more information about runs with errors"
                      values={{
                        guideLink: getLocalizedLink('/help/using-standout/runs-with-errors', 'faq.link.runsWithErrors', 'runs with errors'),
                      }}
                    >
                      {'For detailed troubleshooting steps, see our guide on {guideLink}.'}
                    </Translate>
                  </p>
                </div>
              </details>
            </div>

            <div className={styles.faqSection}>
              <h2>
                <Translate id="faq.section.integrations" description="Integrations section title">
                  Integrations
                </Translate>
              </h2>

              <details>
                <summary>
                  <Translate id="faq.integrations.systems.question" description="Question about which systems can be integrated">
                    Which systems can I integrate with Standout?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.integrations.systems.answer" description="Answer about available integrations">
                      Standout supports integration with many popular business systems and APIs. Check the accounts page in your organization to see available options, or contact support to inquire about specific integrations.
                    </Translate>
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <Translate id="faq.integrations.syncFrequency.question" description="Question about sync frequency">
                    How often do integrations sync?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.integrations.syncFrequency.intro" description="Introduction to sync frequency">
                      Sync frequency depends on your integration settings. You can configure integrations to sync:
                    </Translate>
                  </p>
                  <ul>
                    <li>
                      <Translate id="faq.integrations.syncFrequency.realtime" description="Real-time sync option">
                        In real-time (when data changes)
                      </Translate>
                    </li>
                    <li>
                      <Translate id="faq.integrations.syncFrequency.scheduled" description="Scheduled sync option">
                        On a schedule (hourly, daily, weekly, etc.)
                      </Translate>
                    </li>
                    <li>
                      <Translate id="faq.integrations.syncFrequency.manual" description="Manual sync option">
                        Manually (on-demand)
                      </Translate>
                    </li>
                  </ul>
                  <p>
                    <Translate id="faq.integrations.syncFrequency.note" description="Note about sync schedule">
                      Each integration can have its own sync schedule configured.
                    </Translate>
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <Translate id="faq.integrations.stoppedWorking.question" description="Question about integration not working">
                    What happens if an integration stops working?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.integrations.stoppedWorking.answer" description="Answer about integration not working">
                      If an integration stops working, Standout will notify you about the failure. Check the error logs for details, verify your credentials are still valid, and ensure the external system is accessible.
                    </Translate>
                  </p>
                  <p>
                    <Translate
                      id="faq.integrations.stoppedWorking.moreInfo"
                      description="Link to troubleshooting guide"
                      values={{
                        guideLink: getLocalizedLink('/help/troubleshooting/integration-not-working', 'faq.link.troubleshootingGuide', 'troubleshooting guide'),
                      }}
                    >
                      {'See our {guideLink} for more help.'}
                    </Translate>
                  </p>
                </div>
              </details>
            </div>

            <div className={styles.faqSection}>
              <h2>
                <Translate id="faq.section.accountBilling" description="Account & Billing section title">
                  Account & Billing
                </Translate>
              </h2>

              <details>
                <summary>
                  <Translate id="faq.billing.updateAccount.question" description="Question about updating account">
                    How do I update my account information?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.billing.updateAccount.answer" description="Answer about updating account">
                      Go to your organization settings in Standout. You can update your profile information, email address, password, and notification preferences from there.
                    </Translate>
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <Translate id="faq.billing.cancelSubscription.question" description="Question about canceling subscription">
                    How do I cancel my subscription?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.billing.cancelSubscription.answer" description="Answer about canceling subscription">
                      Contact your account administrator or reach out to our support team to cancel your subscription. We're here to help and can assist with any questions you may have.
                    </Translate>
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <Translate id="faq.billing.contactBilling.question" description="Question about billing contact">
                    Who can I contact for billing questions?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate
                      id="faq.billing.contactBilling.answer"
                      description="Answer about billing contact"
                      values={{
                        supportLink: <a href="https://standoutab.atlassian.net/servicedesk/customer/portal/5">Support Portal</a>,
                      }}
                    >
                      {'For billing questions, please contact our support team through the {supportLink} or reach out to your account manager.'}
                    </Translate>
                  </p>
                </div>
              </details>
            </div>

            <div className={styles.faqSection}>
              <h2>
                <Translate id="faq.section.support" description="Support section title">
                  Support
                </Translate>
              </h2>

              <details>
                <summary>
                  <Translate id="faq.support.getHelp.question" description="Question about getting help">
                    How can I get help if I'm stuck?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.support.getHelp.intro" description="Introduction to help options">
                      We offer several ways to get help:
                    </Translate>
                  </p>
                  <ul>
                    <li>
                      <Translate
                        id="faq.support.getHelp.helpCenter"
                        description="Help center link"
                        values={{
                          helpLink: getLocalizedLink('/', 'faq.link.helpCenter', 'Help Center'),
                        }}
                      >
                        {'Browse our {helpLink} for guides and tutorials'}
                      </Translate>
                    </li>
                    <li>
                      <Translate
                        id="faq.support.getHelp.troubleshooting"
                        description="Troubleshooting link"
                        values={{
                          troubleshootingLink: getLocalizedLink('/help/troubleshooting', 'faq.link.troubleshootingSection', 'troubleshooting section'),
                        }}
                      >
                        {'Check our {troubleshootingLink} for common issues'}
                      </Translate>
                    </li>
                    <li>
                      <Translate
                        id="faq.support.getHelp.supportPortal"
                        description="Support portal link"
                        values={{
                          supportLink: <a href="https://standoutab.atlassian.net/servicedesk/customer/portal/5">Support Portal</a>,
                        }}
                      >
                        {'Contact support through our {supportLink}'}
                      </Translate>
                    </li>
                  </ul>
                </div>
              </details>

              <details>
                <summary>
                  <Translate id="faq.support.hours.question" description="Question about support hours">
                    What are your support hours?
                  </Translate>
                </summary>
                <div>
                  <p>
                    <Translate id="faq.support.hours.answer" description="Answer about support hours">
                      Our support team is available during business hours. For urgent issues, please contact us through the Support Portal and we'll respond as quickly as possible.
                    </Translate>
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
