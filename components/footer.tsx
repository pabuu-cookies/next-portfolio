"use client"

import { personalInfo } from "@/lib/data"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <Link href="/" className="text-2xl font-bold text-primary">
              PK
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              &copy; {new Date().getFullYear()} Pabitra Kharel. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
