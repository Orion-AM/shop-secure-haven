
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react";

const Terms = () => {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              By accessing and using SecureHaven's website, products, and services, you agree to be bound 
              by these Terms of Service. If you disagree with any part of these terms, you may not access 
              our services.
            </p>
          </CardContent>
        </Card>

        {/* Use of Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Use of Our Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Permitted Use</h3>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Purchase security products for personal or business use</li>
                <li>• Access customer support and product information</li>
                <li>• Use our website for legitimate security research</li>
                <li>• Share product reviews and feedback</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Prohibited Activities</h3>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Using products for illegal surveillance or activities</li>
                <li>• Attempting to hack or compromise our systems</li>
                <li>• Reselling products without proper authorization</li>
                <li>• Violating others' privacy rights with security equipment</li>
                <li>• Providing false information during registration or purchase</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Product Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Product Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Product Availability</h3>
              <p className="text-muted-foreground">
                Product availability, specifications, and pricing are subject to change without notice. 
                We reserve the right to limit quantities and discontinue products.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Installation Services</h3>
              <p className="text-muted-foreground">
                Professional installation services are provided by certified technicians. 
                Installation scheduling is subject to availability and may require additional fees.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Warranties</h3>
              <p className="text-muted-foreground">
                Products come with manufacturer warranties. Additional protection plans are available 
                for purchase. Warranty claims must be processed according to manufacturer guidelines.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Account Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Account Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Account Security</h3>
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Accurate Information</h3>
              <p className="text-muted-foreground">
                You must provide accurate, current, and complete information during registration 
                and keep your account information updated.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Account Termination</h3>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate accounts that violate these terms 
                or engage in fraudulent activities.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Payment and Billing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Payment Processing</h3>
              <p className="text-muted-foreground">
                We accept major credit cards, PayPal, and other approved payment methods. 
                Payment processing is handled by secure third-party providers.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Pricing and Taxes</h3>
              <p className="text-muted-foreground">
                All prices are in USD and subject to applicable taxes. Prices may vary by location 
                and are subject to change without notice.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Refunds and Returns</h3>
              <p className="text-muted-foreground">
                Refunds and returns are processed according to our Returns & Refunds policy. 
                Certain products may be subject to restocking fees or return restrictions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Liability and Disclaimers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5" />
              Liability and Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Service Disclaimer</h3>
              <p className="text-muted-foreground">
                Our services are provided "as is" without warranties of any kind. We do not guarantee 
                uninterrupted service or complete security from all threats.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Limitation of Liability</h3>
              <p className="text-muted-foreground">
                Our liability is limited to the amount paid for products or services. We are not 
                liable for indirect, incidental, or consequential damages.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Security Equipment Use</h3>
              <p className="text-muted-foreground">
                Users are responsible for complying with local laws regarding security equipment 
                installation and use. We are not liable for misuse of our products.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Changes to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Changes will be posted on this page 
              with an updated date. Continued use of our services after changes constitutes acceptance 
              of the new terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> legal@securehaven.com</p>
              <p><strong>Phone:</strong> 1-800-SECURE-1</p>
              <p><strong>Mail:</strong> SecureHaven Legal Department, 123 Security Blvd, San Francisco, CA 94105</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
