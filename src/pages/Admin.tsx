import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Users, ShoppingCart, Package, DollarSign, TrendingUp, TrendingDown, Plus, Edit, Trash2, Eye } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

// Mock data for the admin panel
const statsData = {
  totalUsers: 1247,
  totalOrders: 892,
  totalProducts: 156,
  totalRevenue: 45678.90,
  userGrowth: 12.5,
  orderGrowth: 8.2,
  productGrowth: 5.1,
  revenueGrowth: 15.3
};

const chartData = [
  { month: "Jan", revenue: 4000, orders: 80, users: 120 },
  { month: "Feb", revenue: 3000, orders: 75, users: 110 },
  { month: "Mar", revenue: 5000, orders: 95, users: 140 },
  { month: "Apr", revenue: 4500, orders: 88, users: 135 },
  { month: "May", revenue: 6000, orders: 105, users: 160 },
  { month: "Jun", revenue: 5500, orders: 98, users: 155 }
];

const categoryData = [
  { name: "Security Cameras", value: 35, color: "#8884d8" },
  { name: "Door Locks", value: 25, color: "#82ca9d" },
  { name: "Smart Doorbells", value: 20, color: "#ffc658" },
  { name: "Alarm Systems", value: 15, color: "#ff7300" },
  { name: "Other", value: 5, color: "#00ff00" }
];

const recentOrders = [
  { id: "#12345", customer: "John Doe", product: "Smart Security Camera", amount: 129.99, status: "completed", date: "2024-06-01" },
  { id: "#12346", customer: "Jane Smith", product: "Biometric Door Lock", amount: 249.99, status: "processing", date: "2024-06-02" },
  { id: "#12347", customer: "Bob Johnson", product: "Smart Doorbell", amount: 189.99, status: "shipped", date: "2024-06-03" },
  { id: "#12348", customer: "Alice Brown", product: "Wireless Security System", amount: 399.99, status: "completed", date: "2024-06-04" }
];

const recentUsers = [
  { id: "USR001", name: "John Doe", email: "john@example.com", joined: "2024-05-15", orders: 3, spent: 456.78 },
  { id: "USR002", name: "Jane Smith", email: "jane@example.com", joined: "2024-05-18", orders: 1, spent: 249.99 },
  { id: "USR003", name: "Bob Johnson", email: "bob@example.com", joined: "2024-05-20", orders: 2, spent: 389.98 },
  { id: "USR004", name: "Alice Brown", email: "alice@example.com", joined: "2024-05-22", orders: 1, spent: 399.99 }
];

const productData = [
  { id: "PRD001", name: "Smart Security Camera", category: "Cameras", price: 129.99, stock: 45, sold: 123 },
  { id: "PRD002", name: "Biometric Door Lock", category: "Locks", price: 249.99, stock: 23, sold: 87 },
  { id: "PRD003", name: "Smart Doorbell", category: "Doorbells", price: 189.99, stock: 34, sold: 76 },
  { id: "PRD004", name: "Wireless Security System", category: "Systems", price: 399.99, stock: 12, sold: 54 }
];

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const StatCard = ({ title, value, icon: Icon, growth, isGrowthPositive }: any) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          {isGrowthPositive ? (
            <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
          ) : (
            <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
          )}
          <span className={isGrowthPositive ? "text-green-500" : "text-red-500"}>
            {growth}%
          </span>
          <span className="ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "processing": return "bg-yellow-500";
      case "shipped": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const handleAddUser = () => {
    toast.success("Add User functionality would open a form");
    // In a real app, this would open a modal or navigate to a form
  };

  const handleEditUser = (userId: string) => {
    setEditingUser(userId);
    toast.info(`Editing user ${userId}`);
    // In a real app, this would open an edit form
  };

  const handleDeleteUser = (userId: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      toast.success(`User ${userId} deleted`);
      // In a real app, this would make an API call to delete the user
    }
  };

  const handleAddProduct = () => {
    toast.success("Add Product functionality would open a form");
    // In a real app, this would open a modal or navigate to a form
  };

  const handleEditProduct = (productId: string) => {
    setEditingProduct(productId);
    toast.info(`Editing product ${productId}`);
    // In a real app, this would open an edit form
  };

  const handleDeleteProduct = (productId: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      toast.success(`Product ${productId} deleted`);
      // In a real app, this would make an API call to delete the product
    }
  };

  const handleViewOrder = (orderId: string) => {
    toast.info(`Viewing order ${orderId}`);
    // In a real app, this would navigate to order details
  };

  const handleUpdateOrderStatus = (orderId: string) => {
    toast.success(`Order ${orderId} status updated`);
    // In a real app, this would open a status update modal
  };

  const handleUpdateStock = (productId: string, newStock: number) => {
    toast.success(`Product ${productId} stock updated to ${newStock}`);
    // In a real app, this would make an API call to update stock
  };

  // Check if user is admin
  if (!user || user.role !== 'admin') {
    navigate('/auth/admin-login');
    return null;
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={() => navigate('/products')}>
            View Store
          </Button>
          <Button onClick={() => toast.success("Export functionality would download a report")}>
            Export Data
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Users"
              value={statsData.totalUsers.toLocaleString()}
              icon={Users}
              growth={statsData.userGrowth}
              isGrowthPositive={true}
            />
            <StatCard
              title="Total Orders"
              value={statsData.totalOrders.toLocaleString()}
              icon={ShoppingCart}
              growth={statsData.orderGrowth}
              isGrowthPositive={true}
            />
            <StatCard
              title="Total Products"
              value={statsData.totalProducts.toLocaleString()}
              icon={Package}
              growth={statsData.productGrowth}
              isGrowthPositive={true}
            />
            <StatCard
              title="Total Revenue"
              value={`$${statsData.totalRevenue.toLocaleString()}`}
              icon={DollarSign}
              growth={statsData.revenueGrowth}
              isGrowthPositive={true}
            />
          </div>

          {/* Charts */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ChartContainer
                  config={{
                    revenue: { label: "Revenue", color: "hsl(var(--chart-1))" }
                  }}
                  className="h-[350px]"
                >
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="revenue" fill="var(--color-revenue)" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    category: { label: "Category" }
                  }}
                  className="h-[350px]"
                >
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell className="truncate max-w-[150px]">{order.product}</TableCell>
                        <TableCell>${order.amount}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Newly registered users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">${user.spent}</p>
                        <p className="text-xs text-muted-foreground">{user.orders} orders</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage registered users and their permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
                <Button onClick={handleAddUser}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">User</Badge>
                      </TableCell>
                      <TableCell>{user.joined}</TableCell>
                      <TableCell>{user.orders}</TableCell>
                      <TableCell>${user.spent}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditUser(user.id)}
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Management</CardTitle>
              <CardDescription>Manage your product catalog and inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
                <Button onClick={handleAddProduct}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Sold</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productData.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>
                        <Badge variant={product.stock < 20 ? "destructive" : "default"}>
                          {product.stock}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={product.stock === 0 ? "destructive" : "default"}>
                          {product.stock === 0 ? "Out of Stock" : "In Stock"}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.sold}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditProduct(product.id)}
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Management</CardTitle>
              <CardDescription>Track and manage customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Input
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>${order.amount}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewOrder(order.id)}
                          >
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleUpdateOrderStatus(order.id)}
                          >
                            Update
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Management</CardTitle>
              <CardDescription>Monitor and update product stock levels</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Current Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productData.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <Badge variant={product.stock < 10 ? "destructive" : product.stock < 20 ? "secondary" : "default"}>
                          {product.stock} units
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {product.stock === 0 && <Badge variant="destructive">Critical - Out of Stock</Badge>}
                        {product.stock > 0 && product.stock < 10 && <Badge variant="secondary">Low Stock</Badge>}
                        {product.stock >= 10 && <Badge variant="default">Good Stock</Badge>}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Input
                            type="number"
                            min="0"
                            defaultValue={product.stock}
                            className="w-20"
                            onChange={(e) => {
                              const newStock = parseInt(e.target.value) || 0;
                              handleUpdateStock(product.id, newStock);
                            }}
                          />
                          <Button 
                            size="sm" 
                            onClick={() => handleUpdateStock(product.id, product.stock + 10)}
                          >
                            +10
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
