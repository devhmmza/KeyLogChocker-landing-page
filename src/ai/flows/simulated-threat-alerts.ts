// This is a server-side file.
'use server';

/**
 * @fileOverview Generates simulated security alerts for demonstration purposes.
 *
 * - generateThreatAlerts - A function that returns a list of simulated threat alerts.
 * - ThreatAlertInput - The input type for the generateThreatAlerts function (currently empty).
 * - ThreatAlertOutput - The return type for the generateThreatAlerts function, an array of strings.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ThreatAlertInputSchema = z.object({});
export type ThreatAlertInput = z.infer<typeof ThreatAlertInputSchema>;

const ThreatAlertOutputSchema = z.array(z.string());
export type ThreatAlertOutput = z.infer<typeof ThreatAlertOutputSchema>;

export async function generateThreatAlerts(input: ThreatAlertInput): Promise<ThreatAlertOutput> {
  return threatAlertsFlow(input);
}

const threatAlertsPrompt = ai.definePrompt({
  name: 'threatAlertsPrompt',
  input: {schema: ThreatAlertInputSchema},
  output: {schema: ThreatAlertOutputSchema},
  prompt: `You are a cybersecurity expert creating realistic but fake security alert messages for a demo.

  Generate a list of 5 different security alert messages that might be displayed to a user of a keylogger detection application. The alerts should sound plausible but must be entirely fictional and for demonstration purposes only.  Do not include any real threats or vulnerabilities.

  Format the response as a JSON array of strings.
  `,
});

const threatAlertsFlow = ai.defineFlow(
  {
    name: 'threatAlertsFlow',
    inputSchema: ThreatAlertInputSchema,
    outputSchema: ThreatAlertOutputSchema,
  },
  async input => {
    const {output} = await threatAlertsPrompt(input);
    return output!;
  }
);
