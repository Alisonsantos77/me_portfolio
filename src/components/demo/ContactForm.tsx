import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { sendMessage } from "@/utils/sendMessage";

const REASONS = ["projects", "partnership", "questions"] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres."),
  email: z.string().email("E-mail inválido."),
  reason: z
    .string()
    .min(1, "Selecione um motivo.")
    .refine((v) => (REASONS as readonly string[]).includes(v), {
      message: "Motivo inválido.",
    }),
  message: z.string().min(10, "Mensagem deve ter ao menos 10 caracteres."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", reason: "", message: "" },
    mode: "onTouched",
  });

  const { contextSafe } = useGSAP(
    () => {
      if (formRef.current) {
        gsap.from(formRef.current.children, {
          duration: 1,
          y: 50,
          stagger: 0.2,
          ease: "power3.out",
        });
      }
    },
    { scope: formRef }
  );

  const pulseSubmit = (scale: number) =>
    contextSafe(() => {
      gsap.to(".submit-button", { scale, duration: 0.3 });
    })();

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    pulseSubmit(1.05);

    const response = await sendMessage(data);

    pulseSubmit(1);
    setLoading(false);

    if (response.success) {
      toast.success(t("success"));
      form.reset({ name: "", email: "", reason: "", message: "" });
    } else {
      toast.error(response.error || t("error"));
    }
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-foreground">
        {t("contacttitle")}
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        {t("contactsub")}
      </p>

      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-lg max-w-4xl mx-auto"
          noValidate
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>{t("name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("name")} autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("email")}
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("reason")}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                >
                  <FormControl>
                    <SelectTrigger aria-label={t("reason")}>
                      <SelectValue placeholder={t("selectOption")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="projects">{t("projects")}</SelectItem>
                    <SelectItem value="partnership">
                      {t("partnership")}
                    </SelectItem>
                    <SelectItem value="questions">{t("questions")}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>{t("message")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("message")}
                    className="h-32 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
      </Form>
    </section>
  );
};

export default ContactForm;
