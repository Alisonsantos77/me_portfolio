import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = "";

    if (!value) {
      error = "Este campo é obrigatório.";
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Email inválido.";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (formData: FormData) => {
    const formErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        formErrors[key] = "Este campo é obrigatório.";
      } else if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        formErrors[key] = "Email inválido.";
      }
    });
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  return { errors, validateField, validateForm };
};
