import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { Github, Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export function Team() {
  const team: TeamMember[] = [
    {
      name: "Chakreshkumar Vulli",
      role: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/Chakresh7",
      bio: "A passionate machine learning student and full-stack developer from India. Experienced in Python, C, Java, and DBMS.",
      social: {
        github: "https://github.com/Chakresh7",
        email: "vullichakreshkumar7@gmail.com"
      }
    },
    {
      name: "Sarah Wilson",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Creative designer passionate about creating intuitive and accessible user experiences.",
    },
    {
      name: "Michael Rodriguez",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "Specialized in building scalable microservices and database optimization.",
    },
    {
      name: "Emily Zhang",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      bio: "Expert in modern frontend frameworks and responsive design principles.",
    },
    {
      name: "David Kumar",
      role: "DevOps Engineer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "Focused on CI/CD pipelines and maintaining cloud infrastructure.",
    },
    {
      name: "Lisa Anderson",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/57.jpg",
      bio: "Experienced in agile methodologies and team leadership.",
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          <MotionDiv variants={fadeIn} className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground">
              Meet the talented professionals who make innovation possible
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden border hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    {member.social && (
                      <div className="flex gap-4 mt-4">
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-orange-500 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-orange-500 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.email && (
                          <a
                            href={`mailto:${member.social.email}`}
                            className="text-gray-600 hover:text-orange-500 transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
