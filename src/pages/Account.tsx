
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock order history
const mockOrders = [
  {
    id: "ORD-1234",
    date: "2023-05-15",
    total: 379.98,
    status: "Delivered",
    items: [
      { name: "Smart Home Security Camera", quantity: 1, price: 129.99 },
      { name: "Biometric Door Lock", quantity: 1, price: 249.99 }
    ]
  },
  {
    id: "ORD-5678",
    date: "2023-04-02",
    total: 189.99,
    status: "Delivered",
    items: [
      { name: "Smart Doorbell with HD Video", quantity: 1, price: 189.99 }
    ]
  },
  {
    id: "ORD-9012",
    date: "2023-03-18",
    total: 119.98,
    status: "Delivered",
    items: [
      { name: "Password Manager", quantity: 2, price: 39.99 },
      { name: "Personal Safety Alarm", quantity: 1, price: 39.99 }
    ]
  }
];

const Account = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return <div className="container py-12">Loading...</div>;
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-medium">Welcome back, {user.name}!</h2>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
          <Button variant="outline" onClick={logout}>
            Sign Out
          </Button>
        </div>
        
        <Tabs defaultValue="orders">
          <TabsList className="grid w-full grid-cols-3 max-w-md mb-8">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="details">Account Details</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="space-y-6">
            <h3 className="text-xl font-semibold">Order History</h3>
            {mockOrders.length > 0 ? (
              <div className="space-y-4">
                {mockOrders.map(order => (
                  <Card key={order.id}>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                        <div className="text-sm text-muted-foreground mt-1 sm:mt-0">
                          Placed on {order.date}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span>Status</span>
                          <span className="font-medium text-green-500">{order.status}</span>
                        </div>
                        
                        <div className="border-t pt-4">
                          {order.items.map((item, i) => (
                            <div key={i} className="flex justify-between py-2 text-sm">
                              <span>{item.name} × {item.quantity}</span>
                              <span>${item.price.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between pt-2 border-t font-medium">
                          <span>Total</span>
                          <span>${order.total.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex justify-end pt-2">
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
                <Button asChild>
                  <a href="/products">Browse Products</a>
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground">Full Name</label>
                    <p>{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Email</label>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button>Edit Information</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive updates about your orders and promotions</p>
                  </div>
                  <div>
                    <Button variant="outline">Manage</Button>
                  </div>
                </div>
                
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Change Password</h4>
                    <p className="text-sm text-muted-foreground">Update your password regularly for better security</p>
                  </div>
                  <div>
                    <Button variant="outline">Change</Button>
                  </div>
                </div>
                
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-red-600">Delete Account</h4>
                    <p className="text-sm text-muted-foreground">Permanently remove your account and all data</p>
                  </div>
                  <div>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
