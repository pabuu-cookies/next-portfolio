"use client";

import type React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const PUBLIC_KEY = "7Sks3j3qCnEatJX1q";

      await emailjs.send(
        "service_uhcvdmj", // your EmailJS service ID
        "template_jx0y5g6", // your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Pabitra Kharel",
        },
        PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Oops! Something went wrong.",
        description: "Could not send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Contact Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {personalInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
