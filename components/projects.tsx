"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, ExternalLink } from "lucide-react";
import ProjectDialog from "./project-dialog";
import PlaceholderImage from "./placeholder-image";
import Image from "next/image";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const openProjectDialog = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
  };

  const closeProjectDialog = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openProjectDialog(project)}
              className="cursor-pointer"
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={400}
                    height={225}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Code2 className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <ProjectDialog
            isOpen={!!selectedProject}
            onClose={closeProjectDialog}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
