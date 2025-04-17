"use client"

import { skills, techStack } from "@/lib/data"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Server, GitBranch, Shield, Layout, Layers, Cpu } from "lucide-react"

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <motion.div
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  )
}

const TechIcon = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-primary/10 transition-colors">
      <div className="w-12 h-12 flex items-center justify-center mb-2 text-primary">
        {icon === "html" && <Layout className="w-8 h-8" />}
        {icon === "css" && <Layout className="w-8 h-8" />}
        {icon === "javascript" && <Code className="w-8 h-8" />}
        {icon === "typescript" && <Code className="w-8 h-8" />}
        {icon === "react" && <Code className="w-8 h-8" />}
        {icon === "nextjs" && <Code className="w-8 h-8" />}
        {icon === "tailwind" && <Layout className="w-8 h-8" />}
        {icon === "bootstrap" && <Layout className="w-8 h-8" />}
        {icon === "nodejs" && <Server className="w-8 h-8" />}
        {icon === "express" && <Server className="w-8 h-8" />}
        {icon === "mongodb" && <Database className="w-8 h-8" />}
        {icon === "postgresql" && <Database className="w-8 h-8" />}
        {icon === "mysql" && <Database className="w-8 h-8" />}
        {icon === "api" && <Layers className="w-8 h-8" />}
        {icon === "graphql" && <Layers className="w-8 h-8" />}
        {icon === "git" && <GitBranch className="w-8 h-8" />}
        {icon === "github" && <GitBranch className="w-8 h-8" />}
        {icon === "vscode" && <Code className="w-8 h-8" />}
        {icon === "postman" && <Layers className="w-8 h-8" />}
        {icon === "docker" && <Cpu className="w-8 h-8" />}
        {icon === "jwt" && <Shield className="w-8 h-8" />}
        {icon === "oauth" && <Shield className="w-8 h-8" />}
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Skills & Technologies</h2>
        </motion.div>

        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="skills">Skills Proficiency</TabsTrigger>
            <TabsTrigger value="tech">Tech Stack</TabsTrigger>
          </TabsList>

          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                      <Code className="mr-2 h-5 w-5" /> Programming Languages
                    </h3>
                    <div className="space-y-4">
                      {skills.languages.map((lang) => (
                        <SkillBar key={lang.name} name={lang.name} level={lang.level} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                      <Layers className="mr-2 h-5 w-5" /> Frameworks
                    </h3>
                    <div className="space-y-4">
                      {skills.frameworks.map((framework) => (
                        <SkillBar key={framework.name} name={framework.name} level={framework.level} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                      <Database className="mr-2 h-5 w-5" /> Databases
                    </h3>
                    <div className="space-y-4">
                      {skills.databases.map((db) => (
                        <SkillBar key={db.name} name={db.name} level={db.level} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                      <Shield className="mr-2 h-5 w-5" /> Authentication & Security
                    </h3>
                    <div className="space-y-4">
                      {skills.authSecurity.map((auth) => (
                        <SkillBar key={auth.name} name={auth.name} level={auth.level} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="tech">
            <div className="space-y-12">
              {techStack.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {category.technologies.map((tech) => (
                      <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Skills
