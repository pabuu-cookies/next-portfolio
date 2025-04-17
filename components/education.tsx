"use client"

import { education } from "@/lib/data"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const Education = () => {
  return (
    <section id="education" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Education</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{edu.duration}</span>
                      </div>
                      <p className="text-lg font-medium mb-1">{edu.institution}</p>
                      <p className="text-slate-600 dark:text-slate-400">{edu.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
