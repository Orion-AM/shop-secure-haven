
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Target, Heart } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Security Systems Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      description: "Lead the development of next-generation security systems and IoT devices."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Service",
      location: "Remote",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      description: "Ensure customer satisfaction and drive product adoption."
    },
    {
      title: "Security Installation Technician",
      department: "Field Operations",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "$45,000 - $60,000",
      description: "Install and maintain security systems at customer locations."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$55,000 - $75,000",
      description: "Drive online marketing campaigns and brand awareness."
    },
    {
      title: "Quality Assurance Tester",
      department: "Engineering",
      location: "Seattle, WA",
      type: "Contract",
      salary: "$35/hour",
      description: "Test security products and ensure quality standards."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs"
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Competitive salaries, equity packages, and performance bonuses"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible work schedules, remote options, and unlimited PTO"
    },
    {
      icon: Target,
      title: "Professional Growth",
      description: "Learning stipends, conference attendance, and career development programs"
    }
  ];

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us build the future of home and business security while growing your career
          </p>
        </div>

        {/* Company Culture */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Why Work at SecureHaven?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground mb-4">
                  We're dedicated to making security accessible, reliable, and innovative. 
                  Every team member contributes to protecting families and businesses worldwide.
                </p>
                <h3 className="font-semibold mb-3">Our Values</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Innovation in security technology</li>
                  <li>• Customer-first approach</li>
                  <li>• Integrity in all we do</li>
                  <li>• Collaborative teamwork</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Company Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground">Employees</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Customers</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Benefits & Perks</CardTitle>
            <CardDescription>We invest in our team's success and well-being</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Open Positions */}
        <Card>
          <CardHeader>
            <CardTitle>Open Positions</CardTitle>
            <CardDescription>Join our growing team and make an impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{position.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-primary">
                      {position.salary}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div className="flex gap-2">
                    <Button>Apply Now</Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Don't see a perfect fit? We're always looking for talented individuals.
              </p>
              <Button variant="outline">Send Us Your Resume</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Careers;
