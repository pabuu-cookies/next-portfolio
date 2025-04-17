"use client"

import { experiences } from "@/lib/data"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Work Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-primary">{experience.position}</h3>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {experience.duration}
                        </span>
                      </div>
                      <p className="text-lg font-medium mb-3">{experience.company}</p>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">{experience.description}</p>
                      {experience.projects && (
                        <div className="flex flex-wrap gap-2">
                          {experience.projects.map((project) => (
                            <Badge key={project} variant="secondary">
                              {project}
                            </Badge>
                          ))}
                        </div>
                      )}
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

export default Experience
