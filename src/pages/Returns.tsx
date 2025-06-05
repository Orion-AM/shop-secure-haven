
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Shield, CreditCard, Package2 } from "lucide-react";

const Returns = () => {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Returns & Refunds</h1>
        
        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5" />
              Return Policy Overview
            </CardTitle>
            <CardDescription>
              We want you to be completely satisfied with your security products
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Badge className="w-6 h-6">30</Badge>
                </div>
                <h3 className="font-semibold">30-Day Returns</h3>
                <p className="text-sm text-muted-foreground">Return most items within 30 days</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Full Refunds</h3>
                <p className="text-sm text-muted-foreground">Get your money back quickly</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Package2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Free Returns</h3>
                <p className="text-sm text-muted-foreground">No restocking fees on most items</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Return Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Return an Item</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                <div>
                  <h3 className="font-semibold">Contact Customer Service</h3>
                  <p className="text-muted-foreground">Email support@securehaven.com or call 1-800-SECURE-1 to initiate a return.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                <div>
                  <h3 className="font-semibold">Receive Return Authorization</h3>
                  <p className="text-muted-foreground">We'll email you a Return Merchandise Authorization (RMA) number and instructions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                <div>
                  <h3 className="font-semibold">Package Your Item</h3>
                  <p className="text-muted-foreground">Include all original packaging, accessories, and documentation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                <div>
                  <h3 className="font-semibold">Ship the Item</h3>
                  <p className="text-muted-foreground">Use the prepaid return label we provide or ship at your own expense.</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button>Start Return Process</Button>
            </div>
          </CardContent>
        </Card>

        {/* Return Conditions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Return Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-600 mb-2">Eligible for Return:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Items in original, unopened packaging</li>
                  <li>• Products purchased within the last 30 days</li>
                  <li>• Items with all accessories and documentation</li>
                  <li>• Non-personalized security equipment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-2">Not Eligible for Return:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Custom-configured security systems</li>
                  <li>• Software licenses and digital products</li>
                  <li>• Items damaged by misuse or installation</li>
                  <li>• Products purchased more than 30 days ago</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warranty Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Warranty & Protection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Manufacturer Warranty</h3>
                <p className="text-muted-foreground">All products include manufacturer warranties ranging from 1-5 years depending on the item.</p>
              </div>
              <div>
                <h3 className="font-semibold">Extended Protection Plans</h3>
                <p className="text-muted-foreground">Purchase additional coverage for accidents, power surges, and extended repairs.</p>
              </div>
              <div>
                <h3 className="font-semibold">Professional Installation Warranty</h3>
                <p className="text-muted-foreground">Our installation services come with a 1-year warranty on workmanship.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Returns;
