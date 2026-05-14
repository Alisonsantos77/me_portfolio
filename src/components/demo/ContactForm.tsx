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
  // honeypot: aceita qualquer valor; detecção real fica em sendMessage para fingir sucesso ao bot
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", reason: "", message: "", website: "" },
    mode: "onTouched",
  });

  const { contextSafe } = useGSAP(
    () => {
      if (!formRef.current) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(formRef.current!.children, {
          duration: 0.6,
          y: 40,
          stagger: 0.08,
          ease: "power3.out",
        });
      });
      return () => mm.revert();
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
      toast.success(t("contact.form.success"));
      form.reset({ name: "", email: "", reason: "", message: "", website: "" });
    } else {
      toast.error(response.error || t("contact.form.error"));
    }
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-foreground text-balance">
        {t("contact.title")}
      </h1>
      <p className="text-center text-muted-foreground mb-8 text-pretty">
        {t("contact.sub")}
      </p>

      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-lg max-w-4xl mx-auto"
          noValidate
        >
          {/* Honeypot anti-bot — invisível para humanos, fora do tab order e do AT tree */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, width: 0, overflow: "hidden" }}>
            <label htmlFor="website-hp">Website</label>
            <input
              id="website-hp"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px", height: 0, width: 0 }}
              {...form.register("website")}
            />
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>{t("contact.form.name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("contact.form.name")} autoComplete="name" {...field} />
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
                <FormLabel>{t("contact.form.email")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("contact.form.email")}
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
                <FormLabel>{t("contact.form.reason")}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                >
                  <FormControl>
                    <SelectTrigger aria-label={t("contact.form.reason")}>
                      <SelectValue placeholder={t("contact.form.selectOption")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="projects">{t("contact.reasons.projects")}</SelectItem>
                    <SelectItem value="partnership">
                      {t("contact.reasons.partnership")}
                    </SelectItem>
                    <SelectItem value="questions">{t("contact.reasons.questions")}</SelectItem>
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
                <FormLabel>{t("contact.form.message")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("contact.form.message")}
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
              className="submit-button w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded"
              disabled={loading}
            >
              {loading ? t("contact.form.sending") : t("contact.form.send")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
