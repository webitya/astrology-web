"use client"

import { useState, useEffect } from "react"
import { MessageSquare, Users, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function DashboardPage() {
  const [stats, setStats] = useState({
    newMessages: 0,
    totalCustomers: 0,
    revenue: 0,
    growth: 0,
  })

  useEffect(() => {
    // Simulate fetching dashboard data
    const fetchDashboardData = async () => {
      // In a real app, this would be an API call
      setStats({
        newMessages: 12,
        totalCustomers: 256,
        revenue: 15840,
        growth: 24.5,
      })
    }

    fetchDashboardData()
  }, [])

  const statCards = [
    {
      title: "New Messages",
      value: stats.newMessages,
      icon: MessageSquare,
      color: "bg-blue-500",
      change: 8.2,
      up: true,
    },
    {
      title: "Total Customers",
      value: stats.totalCustomers,
      icon: Users,
      color: "bg-purple-500",
      change: 12.5,
      up: true,
    },
    {
      title: "Revenue",
      value: `$${stats.revenue.toLocaleString()}`,
      icon: DollarSign,
      color: "bg-green-500",
      change: 3.2,
      up: false,
    },
    {
      title: "Growth",
      value: `${stats.growth}%`,
      icon: TrendingUp,
      color: "bg-amber-500",
      change: 5.7,
      up: true,
    },
  ]

  const recentActivity = [
    { id: 1, type: "message", user: "John Doe", time: "10 minutes ago", content: "Asked about astrology services" },
    { id: 2, type: "message", user: "Sarah Smith", time: "25 minutes ago", content: "Requested a callback" },
    { id: 3, type: "message", user: "Michael Brown", time: "1 hour ago", content: "Inquired about pricing" },
    { id: 4, type: "message", user: "Emily Johnson", time: "2 hours ago", content: "Asked about tarot reading" },
    { id: 5, type: "message", user: "Robert Wilson", time: "3 hours ago", content: "Requested appointment" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
              </div>
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                <stat.icon size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className={`flex items-center ${stat.up ? "text-green-600" : "text-red-600"}`}>
                {stat.up ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span className="text-sm font-medium ml-1">{stat.change}%</span>
              </div>
              <span className="text-sm text-gray-500 ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentActivity.map((activity) => (
                <tr key={activity.id}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                        {activity.user.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-800">{activity.user}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <p className="text-sm text-gray-600">{activity.content}</p>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
