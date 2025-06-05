
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Lock, UserCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Our Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              At SecureHaven, we take your privacy seriously. This policy explains how we collect, 
              use, and protect your personal information when you use our services, visit our website, 
              or purchase our security products.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Personal Information</h3>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Name, email address, and phone number</li>
                <li>• Billing and shipping addresses</li>
                <li>• Payment information (processed securely by our payment partners)</li>
                <li>• Account credentials and preferences</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Technical Information</h3>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• IP address and browser information</li>
                <li>• Device identifiers and operating system details</li>
                <li>• Usage patterns and website interactions</li>
                <li>• Cookies and similar tracking technologies</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Product Usage Data</h3>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Security system performance metrics</li>
                <li>• Device connectivity and status information</li>
                <li>• Installation and configuration data</li>
                <li>• Customer support interactions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Service Delivery</h3>
              <p className="text-muted-foreground">
                We use your information to process orders, deliver products, provide customer support, 
                and maintain your security systems.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Communication</h3>
              <p className="text-muted-foreground">
                We may contact you about your orders, security alerts, product updates, 
                and promotional offers (which you can opt out of at any time).
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Improvement and Analytics</h3>
              <p className="text-muted-foreground">
                We analyze usage patterns to improve our products, enhance security features, 
                and optimize the user experience.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Legal Compliance</h3>
              <p className="text-muted-foreground">
                We may use information to comply with legal obligations, enforce our terms, 
                and protect the rights and safety of our users.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              How We Protect Your Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Security Measures</h3>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• SSL encryption for all data transmission</li>
                <li>• Secure data centers with 24/7 monitoring</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Employee training on data protection practices</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Access Controls</h3>
              <p className="text-muted-foreground">
                We limit access to personal information to authorized personnel who need it 
                to perform their job functions. All access is logged and monitored.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Data Retention</h3>
              <p className="text-muted-foreground">
                We retain personal information only as long as necessary to provide services 
                or as required by law. Account data is deleted within 30 days of account closure.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Access and Control</h3>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Access your personal information in your account</li>
                <li>• Update or correct your information</li>
                <li>• Delete your account and associated data</li>
                <li>• Export your data in a portable format</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Communication Preferences</h3>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Opt out of marketing communications</li>
                <li>• Control notification settings</li>
                <li>• Manage cookie preferences</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Third Parties */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Service Providers</h3>
              <p className="text-muted-foreground">
                We work with trusted partners for payment processing, shipping, analytics, 
                and customer support. These partners are bound by strict data protection agreements.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">No Sale of Personal Data</h3>
              <p className="text-muted-foreground">
                We do not sell, rent, or lease your personal information to third parties 
                for their marketing purposes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> privacy@securehaven.com</p>
              <p><strong>Phone:</strong> 1-800-SECURE-1</p>
              <p><strong>Mail:</strong> SecureHaven Privacy Team, 123 Security Blvd, San Francisco, CA 94105</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
