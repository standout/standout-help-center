import React from 'react';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import styles from './faq.module.css';

export default function FAQ(): React.ReactElement {
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
              <h2>Getting Started</h2>

              <details>
                <summary>How do I create my first account?</summary>
                <div>
                  <p>
                    To create your first account, go to <a href="https://app.standout.se">app.standout.se</a> and click "Sign up".
                    Fill in your details, verify your email address, and complete your profile setup.
                  </p>
                  <p>
                    For more detailed instructions, see our guide on <a href="/help/getting-started/create-your-account">create your account</a>.
                  </p>
                </div>
              </details>

              <details>
                <summary>How do I invite teammates to my workspace?</summary>
                <div>
                  <p>
                    Go to your workspace settings, click on "Team members", then "Invite member".
                    Enter the email address, select the role and permissions, and send the invitation.
                  </p>
                  <p>
                    Learn more in our guide on <a href="/help/getting-started/inviting-teammates">inviting teammates</a>.
                  </p>
                </div>
              </details>

              <details>
                <summary>What are the different user roles and permissions?</summary>
                <div>
                  <p>
                    Standout offers three main roles:
                  </p>
                  <ul>
                    <li><strong>Admin</strong>: Full access to all features and settings</li>
                    <li><strong>Member</strong>: Can view and manage integrations</li>
                    <li><strong>Viewer</strong>: Read-only access to view integrations and data</li>
                  </ul>
                </div>
              </details>
            </div>

            <div className={styles.faqSection}>
              <h2>Using Standout</h2>

              <details>
                <summary>How do I create a new integration?</summary>
                <div>
                  <p>
                    Go to the Integrations page, click "New integration", select the integration type,
                    configure the settings, test the connection, and activate the integration.
                  </p>
                  <p>
                    See our guide on <a href="/help/using-standout/managing-integrations">managing integrations</a> for more details.
                  </p>
                </div>
              </details>

              <details>
                <summary>How do I view and manage invoices?</summary>
                <div>
                  <p>
                    Navigate to the Invoices section in Standout. You can filter by date, status, or integration,
                    view details, and download or print invoices as needed.
                  </p>
                  <p>
                    Learn more about <a href="/help/using-standout/viewing-and-controlling-invoices">viewing and controlling invoices</a>.
                  </p>
                </div>
              </details>

              <details>
                <summary>What should I do if a run fails?</summary>
                <div>
                  <p>
                    If a run fails, first check the error message and review the logs. Verify your connections
                    and credentials. You can restart failed runs from the run history.
                  </p>
                  <p>
                    For detailed troubleshooting steps, see our guide on <a href="/help/troubleshooting/job-failed-what-to-do-next">job failed: what to do next</a>.
                  </p>
                </div>
              </details>
            </div>

            <div className={styles.faqSection}>
              <h2>Integrations</h2>

              <details>
                <summary>Which systems can I integrate with Standout?</summary>
                <div>
                  <p>
                    Standout supports integration with many popular business systems and APIs.
                    Check the integrations page in your workspace to see available options, or contact support
                    to inquire about specific integrations.
                  </p>
                </div>
              </details>

              <details>
                <summary>How often do integrations sync?</summary>
                <div>
                  <p>
                    Sync frequency depends on your integration settings. You can configure integrations to sync:
                  </p>
                  <ul>
                    <li>In real-time (when data changes)</li>
                    <li>On a schedule (hourly, daily, weekly, etc.)</li>
                    <li>Manually (on-demand)</li>
                  </ul>
                  <p>
                    Each integration can have its own sync schedule configured.
                  </p>
                </div>
              </details>

              <details>
                <summary>What happens if an integration stops working?</summary>
                <div>
                  <p>
                    If an integration stops working, Standout will notify you about the failure.
                    Check the error logs for details, verify your credentials are still valid, and ensure
                    the external system is accessible.
                  </p>
                  <p>
                    See our <a href="/help/troubleshooting/integration-not-syncing">troubleshooting guide</a> for more help.
                  </p>
                </div>
              </details>
            </div>

            <div className={styles.faqSection}>
              <h2>Account & Billing</h2>

              <details>
                <summary>How do I update my account information?</summary>
                <div>
                  <p>
                    Go to your account settings in Standout. You can update your profile information,
                    email address, password, and notification preferences from there.
                  </p>
                </div>
              </details>

              <details>
                <summary>How do I cancel my subscription?</summary>
                <div>
                  <p>
                    Contact your account administrator or reach out to our support team to cancel your subscription.
                    We're here to help and can assist with any questions you may have.
                  </p>
                </div>
              </details>

              <details>
                <summary>Who can I contact for billing questions?</summary>
                <div>
                  <p>
                    For billing questions, please contact our support team through the{' '}
                    <a href="https://standoutab.atlassian.net/servicedesk/customer/portal/5">Support Portal</a>
                    {' '}or reach out to your account manager.
                  </p>
                </div>
              </details>
            </div>

            <div className={styles.faqSection}>
              <h2>Support</h2>

              <details>
                <summary>How can I get help if I'm stuck?</summary>
                <div>
                  <p>
                    We offer several ways to get help:
                  </p>
                  <ul>
                    <li>Browse our <a href="/">Help Center</a> for guides and tutorials</li>
                    <li>Check our <a href="/help/troubleshooting">troubleshooting section</a> for common issues</li>
                    <li>Contact support through our <a href="https://standoutab.atlassian.net/servicedesk/customer/portal/5">Support Portal</a></li>
                  </ul>
                </div>
              </details>

              <details>
                <summary>What are your support hours?</summary>
                <div>
                  <p>
                    Our support team is available during business hours. For urgent issues,
                    please contact us through the Support Portal and we'll respond as quickly as possible.
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
