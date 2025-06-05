
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Phone, Mail, MessageCircle } from "lucide-react";

const Help = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order by logging into your account and visiting the 'My Orders' section. You'll receive tracking information via email once your order ships."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. International shipping may take 7-14 business days."
    },
    {
      question: "Can I cancel my order?",
      answer: "Orders can be cancelled within 2 hours of placement. After that, please contact customer service for assistance."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes, we offer professional installation services for security systems. Contact us for a quote and scheduling."
    },
    {
      question: "What's your warranty policy?",
      answer: "All products come with manufacturer warranties. We also offer extended warranty options for additional protection."
    }
  ];

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Help Center</h1>
        
        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How can we help you?</CardTitle>
            <CardDescription>Search our knowledge base or contact support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search for help..." className="pl-10" />
              </div>
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Phone Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-2">Available 24/7</p>
              <p className="font-semibold">1-800-SECURE-1</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Email Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-2">Response within 24 hours</p>
              <p className="font-semibold">support@securehaven.com</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle className="text-lg">Live Chat</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-2">Available 9 AM - 6 PM EST</p>
              <Button className="w-full">Start Chat</Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
