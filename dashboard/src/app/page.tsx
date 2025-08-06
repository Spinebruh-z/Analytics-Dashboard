"use client"

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimpleLineChart } from "@/components/charts/LineChart";
import { SimpleBarChart } from "@/components/charts/BarChart";
import { SimplePieChart } from "@/components/charts/PieChart";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/app/columns";
import { keyMetrics, lineChartData, barChartData, pieChartData, dataTableData } from "@/data/mock-data";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          {loading ? (
            <>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
              </div>
              <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                  <Skeleton className="h-80" />
                </div>
                <div className="col-span-3">
                  <Skeleton className="h-80" />
                </div>
              </div>
              <div className="mt-4">
                <Skeleton className="h-96" />
              </div>
            </>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {keyMetrics.map((metric) => (
                  <Card key={metric.title}>
                    <CardHeader>
                      <CardTitle>{metric.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <p className="text-xs text-muted-foreground">
                        {metric.change}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <SimpleLineChart data={lineChartData} />
                    </CardContent>
                  </Card>
                </div>
                <div className="col-span-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Conversions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <SimpleBarChart data={barChartData} />
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <DataTable columns={columns} data={dataTableData} />
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
