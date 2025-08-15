Client Onboarding Form

This is a small Next.js project that collects client onboarding information using React Hook Form and Zod for validation.

1 -------------Features --------------

   * Validation: All fields validated with Zod + RHF.

   * Responsive UI: Works on mobile and desktop, accessible labels and focus states.

   * External Submit: Sends data to an external API (set in .env).

   * Error & Success Handling: Shows messages for errors and a summary on success.

2 ------------Bonus-------------

   * Pre-fill fields from URL query params (e.g. ?service=UI%2FUX&email=test@example.com).

   * Unit tests for the Zod schema. 


3 ------How to Setup------

   * Install dependencies -> npm install

   * Set environment variable -> Create .env in the project root and set  NEXT_PUBLIC_ONBOARD_URL var like
      NEXT_PUBLIC_ONBOARD_URL=https://example.com/api/onboard

   * Run the app -> npm run dev

   * Open http://localhost:3000


4 -------------How to Use------------

* Fill out the form:

      Name, Email, Company
      Choose at least one service
      (Optional) Budget
      Project start date (today or later)
      Accept the terms
      Click Submit.

   If successful, you’ll see a summary of your submission.

5 ------------Query Param Prefill-------------

   	You can prefill fields using query params. 

      Example: 
      http://localhost:3000?fullName=Akila%20Umayanga&email=akilaumayangaw@gmail.com&companyName=Demo%20Inc&service=UI%2FUX& service=Branding&budgetUsd=500&projectStartDate=2025-08-20

6 -----------------Validation Rules--------------------

   * Full name: 2–80 chars, letters/spaces/apostrophes/dashes.
   * Email: Must be valid.
   * Company name: 2–100 chars.
   * Services: Choose at least 1.
   * Budget (USD): Optional integer between 100–1,000,000.
   * Start date: Today or later.
   * Accept terms: Must be checked.

7 -----------Testing----------------

   Run unit tests for the Zod schema: npm test


8 ------------Known Notes---------------

   * Make sure your API endpoint supports CORS for local testing.
   * No file uploads required.