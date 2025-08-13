import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Zap, Target } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: "AI & LLM Engineering",
      description: "Applying advanced AI concepts to solve complex challenges in information retrieval and generative AI"
    },
    {
      icon: Zap,
      title: "Data & Cloud Engineering",
      description: "Designing and scaling robust data pipelines and cloud infrastructure for enterprise-level applications."
    },
    {
      icon: Code2,
      title: "Programming",
      description: "Core languages for building data-intensive and high-performance applications using Python and Java."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            I am an engineer with deep expertise across the full technology stack from data pipelines and cloud architecture to scalable mobile applications.
            My current focus is on AI engineering, where I apply my problem-solving skills to build next-generation intelligent systems. 
            I apply my background in system optimization to design cost-efficient AI solutions, including advanced RAG systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="border-none shadow-elegant hover:shadow-glow transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-none shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                My Journey
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My career has always been about the journey of data from engineering the pipelines that carry it to building the applications that use it.
                This led me to pivot my focus to AI, where I now apply my deep experience in system architecture to build intelligent applications that augment human capabilities and create real-world impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;