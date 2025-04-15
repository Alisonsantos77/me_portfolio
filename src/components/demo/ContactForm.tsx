import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormValidation } from "@/utils/useFormValidation";
import { sendMessage } from "@/utils/sendMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { errors, validateField, validateForm } = useFormValidation();
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm(formData)) {
      toast.error(t("error"));
      return;
    }

    setLoading(true);
    gsap.to(".submit-button", { scale: 1.05, duration: 0.3 });

    const response = await sendMessage(formData);

    gsap.to(".submit-button", { scale: 1, duration: 0.3 });
    setLoading(false);

    if (response.success) {
      toast.success(t("success"));
      setFormData({ name: "", email: "", reason: "", message: "" });
    } else {
      toast.error(t("error"));
    }
  };

  useEffect(() => {
    if (formRef.current) {
      gsap.from(formRef.current.children, {
        duration: 1,
        y: 50,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 lg:px-16">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        toastStyle={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      />
      <h1 className="text-4xl font-extrabold text-center mb-10 text-foreground">
        {t("contacttitle")}
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        {t("contactsub")}
      </p>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-lg"
      >
        <div className="col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("name")}
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder={t("name")}
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("email")}
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("reason")}
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="">{t("selectOption")}</option>
            <option value="projects">{t("projects")}</option>
            <option value="partnership">{t("partnership")}</option>
            <option value="questions">{t("questions")}</option>
          </select>
          {errors.reason && (
            <p className="mt-1 text-sm text-destructive">{errors.reason}</p>
          )}
        </div>

        <div className="col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("message")}
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder={t("message")}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full h-32 resize-none mb-4 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive">{errors.message}</p>
          )}
        </div>

        <div className="col-span-2">
          <Button
            type="submit"
            className="submit-button w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? t("sending") : t("send")}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
