import Link from "next/link";
import Image from "next/image";
import { Github, Link2Icon } from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
    console.log(project);
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader className="p-0">
                <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary
                 dark:bg-sky-200 xl:bg-yellow-100 overflow-hidden">
                    <Image className="absolute bottom-0 shadow-2xl"
                        src={project.image} width={247} height={250} alt="" priority />
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
                    {project.category}
                </Badge>
                <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg">{project.description}</p>
            </div>
        </Card>
    )
}

export default ProjectCard
