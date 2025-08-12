import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Assistant",
      description: "Intelligent conversational AI powered by advanced NLP models with context awareness and multi-turn dialogue capabilities.",
      tags: ["Python", "Transformers", "React", "WebSockets"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Computer Vision Analytics",
      description: "Real-time object detection and tracking system for retail analytics using state-of-the-art YOLO models.",
      tags: ["PyTorch", "OpenCV", "FastAPI", "Docker"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Predictive Analytics Platform",
      description: "Machine learning platform for time series forecasting with automated feature engineering and model selection.",
      tags: ["Scikit-learn", "TensorFlow", "Streamlit", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "NLP Document Processor",
      description: "Automated document analysis tool with sentiment analysis, entity extraction, and summarization capabilities.",
      tags: ["spaCy", "NLTK", "Flask", "MongoDB"],
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering system with deep learning for personalized content recommendations.",
      tags: ["PyTorch", "Neo4j", "Redis", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "AI-Powered Image Generator",
      description: "Creative AI tool using diffusion models for generating unique artwork and designs from text prompts.",
      tags: ["Stable Diffusion", "CUDA", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest AI projects and innovations. Each project demonstrates 
            different aspects of artificial intelligence and machine learning applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-none shadow-elegant overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 border-none"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="p-2"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="p-2"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
