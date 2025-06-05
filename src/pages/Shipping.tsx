
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, Clock, Globe } from "lucide-react";

const Shipping = () => {
  const shippingRates = [
    { method: "Standard Shipping", time: "3-5 business days", cost: "$4.99", description: "Delivered by ground transport" },
    { method: "Express Shipping", time: "1-2 business days", cost: "$9.99", description: "Priority delivery service" },
    { method: "Overnight Shipping", time: "Next business day", cost: "$19.99", description: "Guaranteed next-day delivery" },
    { method: "Free Standard", time: "3-5 business days", cost: "FREE", description: "On orders over $50" }
  ];

  const internationalRates = [
    { region: "Canada", time: "5-7 business days", cost: "$14.99" },
    { region: "Europe", time: "7-12 business days", cost: "$24.99" },
    { region: "Asia-Pacific", time: "10-15 business days", cost: "$29.99" },
    { region: "Other Countries", time: "10-20 business days", cost: "$34.99" }
  ];

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shipping Information</h1>
        
        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Shipping Overview
            </CardTitle>
            <CardDescription>
              Fast, reliable shipping to get your security products delivered safely
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Processing Time</h3>
                <p className="text-muted-foreground">Orders are processed within 1-2 business days. Custom installations may require additional processing time.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Package Tracking</h3>
                <p className="text-muted-foreground">All shipments include tracking numbers sent to your email address.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Domestic Shipping */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Domestic Shipping (US)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Shipping Method</TableHead>
                  <TableHead>Delivery Time</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shippingRates.map((rate, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{rate.method}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {rate.time}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold">{rate.cost}</TableCell>
                    <TableCell className="text-muted-foreground">{rate.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* International Shipping */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              International Shipping
            </CardTitle>
            <CardDescription>
              We ship worldwide with customs documentation included
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Delivery Time</TableHead>
                  <TableHead>Starting Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {internationalRates.map((rate, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{rate.region}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {rate.time}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold">{rate.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> International orders may be subject to customs duties and taxes. 
                Delivery times may vary due to customs processing.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Special Services */}
        <Card>
          <CardHeader>
            <CardTitle>Special Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">White Glove Delivery</h3>
                <p className="text-muted-foreground">Premium delivery service with unpacking and setup assistance. Available for security systems over $500.</p>
              </div>
              <div>
                <h3 className="font-semibold">Installation Service</h3>
                <p className="text-muted-foreground">Professional installation by certified technicians. Schedule during checkout or contact customer service.</p>
              </div>
              <div>
                <h3 className="font-semibold">Secure Delivery</h3>
                <p className="text-muted-foreground">Signature required delivery for high-value items. Ensures your security equipment reaches you safely.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Shipping;
