"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import PlaceholderImage from "./placeholder-image";
import Image from "next/image";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    image: string;
    demoLink?: string;
    githubLink?: string;
  };
}

const ProjectDialog = ({ isOpen, onClose, project }: ProjectDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base text-foreground/80 mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 rounded-lg overflow-hidden border border-border">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
            width={800}
            height={450}
          />
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
          <p className="text-foreground/80">{project.longDescription}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          {project.demoLink && (
            <Button asChild>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button variant="outline" asChild>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> View Code
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
