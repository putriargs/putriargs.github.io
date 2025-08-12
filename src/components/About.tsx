import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Zap, Target } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep expertise in neural networks, NLP, computer vision, and modern AI frameworks."
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Proficient in React, Python, Node.js, and cloud technologies for scalable solutions."
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Passionate about pushing boundaries and creating cutting-edge AI applications."
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Expert at translating complex business challenges into elegant technical solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm an AI engineer dedicated to creating intelligent systems that solve real-world problems. 
            With a passion for innovation and a deep understanding of cutting-edge technologies, 
            I transform ideas into impactful AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                My journey in AI began with a fascination for how machines can learn and adapt. 
                Over the years, I've worked on diverse projects ranging from natural language processing 
                systems to computer vision applications. I believe in the power of AI to augment human 
                capabilities and create positive impact across industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;