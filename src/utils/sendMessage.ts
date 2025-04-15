import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

// Simples implementação de rate limiting
const RATE_LIMIT = 3; // Número máximo de tentativas
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora em milissegundos
const attempts = new Map<string, { count: number; timestamp: number }>();

const isRateLimited = (email: string): boolean => {
  const now = Date.now();
  const attempt = attempts.get(email);

  if (!attempt) {
    attempts.set(email, { count: 1, timestamp: now });
    return false;
  }

  if (now - attempt.timestamp > RATE_LIMIT_WINDOW) {
    attempts.set(email, { count: 1, timestamp: now });
    return false;
  }

  if (attempt.count >= RATE_LIMIT) {
    return true;
  }

  attempts.set(email, { count: attempt.count + 1, timestamp: now });
  return false;
};

// Validação mais robusta
const validateFormData = (
  formData: FormData
): { isValid: boolean; error?: string } => {
  // Validação do nome
  if (!formData.name || formData.name.length < 2) {
    return { isValid: false, error: "Nome inválido" };
  }

  // Validação do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    return { isValid: false, error: "Email inválido" };
  }

  // Validação do motivo
  if (!formData.reason) {
    return { isValid: false, error: "Motivo inválido" };
  }

  // Validação da mensagem
  if (!formData.message || formData.message.length < 10) {
    return { isValid: false, error: "Mensagem muito curta" };
  }

  // Validação contra spam
  if (
    formData.message.includes("http://") ||
    formData.message.includes("https://")
  ) {
    return { isValid: false, error: "Mensagem contém links não permitidos" };
  }

  return { isValid: true };
};

export const sendMessage = async (formData: FormData) => {
  try {
    // Verificar rate limiting
    if (isRateLimited(formData.email)) {
      throw new Error(
        "Muitas tentativas de envio. Por favor, tente novamente mais tarde."
      );
    }

    // Validar dados
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      throw new Error(validation.error);
    }

    const templateParams = {
      to_name: "Alison santos",
      from_name: formData.name,
      from_email: formData.email,
      reason: formData.reason,
      message: formData.message,
    };

    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID!
    );

    console.log("Mensagem enviada com sucesso:", result);
    return { success: true, result };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao enviar mensagem:", error.message);
      return { success: false, error: error.message };
    } else {
      console.error("Erro ao enviar mensagem:", error);
      return { success: false, error: "Erro desconhecido ao enviar mensagem" };
    }
  }
};
