export const keyMetrics = [
  { title: "Revenue", value: "$45,231.89", change: "+20.1% from last month" },
  { title: "Users", value: "+2350", change: "+180.1% from last month" },
  { title: "Conversions", value: "+12,234", change: "+19% from last month" },
  { title: "Growth", value: "+573.5%", change: "+20.1% from last month" },
];

export const lineChartData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
];

export const barChartData = [
  { name: "Page A", value: 4000 },
  { name: "Page B", value: 3000 },
  { name: "Page C", value: 2000 },
  { name: "Page D", value: 2780 },
  { name: "Page E", value: 1890 },
  { name: "Page F", value: 2390 },
  { name: "Page G", value: 3490 },
];

export const pieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }

  export const dataTableData: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@example.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@example.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@example.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@example.com",
    },
  ]
