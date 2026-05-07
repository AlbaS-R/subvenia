import emailjs from '@emailjs/browser';

export type ContactEmailPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function getRequiredEnv(key: 'VITE_EMAILJS_SERVICE_ID' | 'VITE_EMAILJS_TEMPLATE_ID' | 'VITE_EMAILJS_PUBLIC_KEY') {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Falta configurar ${key} en el archivo .env`);
  }
  return value;
}

export function validateEmailJsConfig() {
  const requiredKeys: Array<'VITE_EMAILJS_SERVICE_ID' | 'VITE_EMAILJS_TEMPLATE_ID' | 'VITE_EMAILJS_PUBLIC_KEY'> = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY',
  ];

  const missing = requiredKeys.filter((key) => !import.meta.env[key]);
  return {
    ok: missing.length === 0,
    missing,
  };
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const serviceId = getRequiredEnv('VITE_EMAILJS_SERVICE_ID');
  const templateId = getRequiredEnv('VITE_EMAILJS_TEMPLATE_ID');
  const publicKey = getRequiredEnv('VITE_EMAILJS_PUBLIC_KEY');

  return emailjs.send(
    serviceId,
    templateId,
    {
      to_email: payload.email,
      from_name: payload.name,
      from_email: payload.email,
      company: payload.company,
      message: payload.message,
      demo_link: 'https://subvenis-platform.vercel.app/',
      sent_at: new Date().toISOString(),
    },
    {publicKey},
  );
}
