
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About SecureHaven</h1>
        
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&q=80&w=1200" 
            alt="SecureHaven office" 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            At SecureHaven, we believe that everyone deserves to feel safe and protected. 
            Founded in 2018, our mission is to provide high-quality security products that give our 
            customers peace of mind in an increasingly complex world. We carefully select and 
            test each product in our catalog to ensure it meets our rigorous standards for 
            reliability, durability, and ease of use.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-medium mb-2">Trust</h3>
              <p className="text-sm text-muted-foreground">
                We build trust through transparency, honesty, and delivering on our promises.
              </p>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-medium mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                We continuously search for cutting-edge security solutions to keep our customers protected.
              </p>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-medium mb-2">Customer First</h3>
              <p className="text-sm text-muted-foreground">
                Your safety and satisfaction are our top priorities in everything we do.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-muted-foreground mb-6">
            Our team consists of security experts, product specialists, and customer service professionals 
            who are passionate about helping you find the right security solutions for your needs. 
            With decades of combined experience in the security industry, we have the knowledge and 
            expertise to guide you through selecting and using our products.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Quality Guarantee</h2>
          <p className="text-muted-foreground mb-8">
            We stand behind every product we sell with our quality guarantee. If you're not completely 
            satisfied with your purchase, we offer a 30-day return policy and dedicated customer support 
            to resolve any issues you may encounter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg">
              <Link to="/products">Browse Our Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
