"use client"

import { useState } from "react"
import { BarChart, LineChart, PieChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bar,
  BarChart as RechartsBarChart,
  Line,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const salesData = [
  { month: "Jan", revenue: 4000, profit: 2400, target: 3000 },
  { month: "Feb", revenue: 3000, profit: 1398, target: 3000 },
  { month: "Mar", revenue: 9800, profit: 2000, target: 3000 },
  { month: "Apr", revenue: 3908, profit: 2780, target: 3000 },
  { month: "May", revenue: 4800, profit: 1890, target: 3000 },
  { month: "Jun", revenue: 3800, profit: 2390, target: 3000 },
  { month: "Jul", revenue: 4300, profit: 3490, target: 3000 },
]

const customerData = [
  { name: "New", value: 400 },
  { name: "Returning", value: 300 },
  { name: "Inactive", value: 200 },
  { name: "Churned", value: 100 },
]

const marketShareData = [
  { category: "Product A", value: 35 },
  { category: "Product B", value: 25 },
  { category: "Product C", value: 20 },
  { category: "Product D", value: 15 },
  { category: "Others", value: 5 },
]

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]

export function DataVisualizationSection() {
  const [activeTab, setActiveTab] = useState("sales")

  return (
    <section id="visualizations" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Data Visualizations</h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Interactive visualizations that transform complex data into actionable insights
          </p>
        </div>

        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="sales" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="sales" className="flex items-center gap-2">
                  <LineChart className="h-4 w-4" />
                  Sales Performance
                </TabsTrigger>
                <TabsTrigger value="customers" className="flex items-center gap-2">
                  <PieChart className="h-4 w-4" />
                  Customer Segments
                </TabsTrigger>
                <TabsTrigger value="market" className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  Market Share
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="sales" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Performance Analysis</CardTitle>
                  <CardDescription>
                    Monthly revenue, profit, and target metrics for the current fiscal year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart
                        data={salesData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#FF6384" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="profit" stroke="#36A2EB" />
                        <Line type="monotone" dataKey="target" stroke="#4BC0C0" strokeDasharray="5 5" />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>Key insights:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>March shows the highest revenue spike of the year</li>
                      <li>Profit margins are consistently maintained around 40-50%</li>
                      <li>Revenue has exceeded targets for 5 out of 7 months</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customers" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Segmentation</CardTitle>
                  <CardDescription>Breakdown of customer base by engagement status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={customerData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={150}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {customerData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>Key insights:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>New customers make up the largest segment at 40%</li>
                      <li>Returning customers represent 30% of the total base</li>
                      <li>Customer retention opportunity: focus on the 20% inactive segment</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="market" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Market Share Analysis</CardTitle>
                  <CardDescription>Product category distribution across the market</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={marketShareData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" name="Market Share %" fill="#FF6384" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>Key insights:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Product A dominates with 35% market share</li>
                      <li>Top 3 products account for 80% of the market</li>
                      <li>Opportunity to consolidate the "Others" category (5%)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
