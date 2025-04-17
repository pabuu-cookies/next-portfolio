"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import PlaceholderImage from "./placeholder-image";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-primary">Pabitra</span> Kharel
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-600 dark:text-slate-300">
                Backend Developer
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-2xl mb-8"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300">
                {personalInfo.about}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <Button asChild>
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/pabitra_resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex space-x-4 mt-8 justify-center md:justify-start"
            >
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-primary/50 shadow-xl h-64 w-64 md:h-80 md:w-80">
                <Image
                  src={personalInfo.profileImage}
                  alt="Pabitra Kharel"
                  className="object-cover w-full h-full"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
