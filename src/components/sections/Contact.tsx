import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "@/components/animations/ScrollAnimations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <FadeInUp
            as="h2"
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            Get in Touch
          </FadeInUp>
          <FadeInUp delay={0.1} className="mx-auto max-w-2xl">
            <p className="text-muted-foreground text-lg">
              Have a question or ready to start your project? Reach out to us
              today.
            </p>
          </FadeInUp>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <FadeInLeft>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form or contact us directly using the information
                  below.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="flex p-6 items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">
                        Office Address
                      </h4>
                      <p className="text-muted-foreground">
                        123 Tech Street, Silicon Valley, CA 94043, USA
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex p-6 items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">
                        Email Address
                      </h4>
                      <a
                        href="mailto:info@danielsnetwork.com"
                        className="text-primary hover:underline"
                      >
                        info@danielsnetwork.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex p-6 items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone Number</h4>
                      <a
                        href="tel:+12345678901"
                        className="text-primary hover:underline"
                      >
                        +1 (234) 567-8901
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-xl overflow-hidden h-64 md:h-72">
                {/* Placeholder for Google Maps */}
                <div className="bg-muted h-full w-full flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">
                    Google Maps will be embedded here
                  </span>
                </div>
              </div>
            </div>
          </FadeInLeft>

          {/* Contact Form */}
          <FadeInRight>
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        {...register("name")}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          {...register("email")}
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your Phone (Optional)"
                          {...register("phone")}
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        {...register("subject")}
                        aria-invalid={errors.subject ? "true" : "false"}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Textarea
                        id="message"
                        placeholder="Your Message"
                        rows={5}
                        {...register("message")}
                        aria-invalid={errors.message ? "true" : "false"}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default Contact;
