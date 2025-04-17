"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";
import PlaceholderImage from "./placeholder-image";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="rounded-lg overflow-hidden shadow-lg border border-border h-full">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={personalInfo.aboutImage}
                  alt="Pabitra Kharel"
                  className="object-cover"
                  width={400}
                  height={533}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  My Journey
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  {personalInfo.about}
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-8">
                  I'm constantly learning and improving my skills to deliver
                  high-quality, maintainable code that solves real-world
                  problems efficiently.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {personalInfo.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {personalInfo.email}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
