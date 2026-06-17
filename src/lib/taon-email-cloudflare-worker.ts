export interface TaonEmailContactPayload {
  name?: string;
  email?: string;
  message?: string;
  turnstileToken?: string;
  website?: string; // honeypot field
}

export namespace TaonEmailCloudflareUtils {
  export const contactPrefix = '/contact';
}

export interface TaonEmailContactEnv {
  /**
   * Should be set with secret
   * example: 'user@gmail.com'
   */
  USER_EMAIL: string;
  /**
   * Should be set with secret
   * example: 'contact@website-emails.sitedomain.pl'
   * It doesn't need to be real email connected
   * to domain -> just resend.com verfication needed
   */
  SENDER_EMAIL?: string;
  /**
   * Should be set with secret
   */
  SENDER_NAME?: string;
  /**
   * Prevent cross origin use in production
   * Should be set with secret
   */
  CORS_DOMAIN?: string;
  /**
   * Cloud flare captcha API KEY
   * (Should be set with secret)
   */
  TURNSTILE_SECRET: string;
  /**
   * Email sender https://resend.com API KEY
   * (Should be set with secret)
   */
  RESEND_API_KEY: string;
}
