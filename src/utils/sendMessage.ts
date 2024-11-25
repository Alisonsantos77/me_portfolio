import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export const sendMessage = async (formData: FormData) => {
  try {
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
    } else {
      console.error("Erro ao enviar mensagem:", error);
    }
    return { success: false, error };
  }
};