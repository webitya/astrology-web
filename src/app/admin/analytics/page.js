"use client"

import { useState } from "react"
import { Calendar, ArrowDown, ArrowUp } from "lucide-react"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d")

  // Mock data for charts
  const messageStats = {
    total: 1248,
    change: 12.5,
    increasing: true,
    data: [28, 45, 36, 52, 38, 63, 47],
  }

  const responseTimeStats = {
    average: "2m 15s",
    change: 8.3,
    increasing: false,
    data: [180, 150, 120, 160, 140, 130, 135],
  }

  const customerStats = {
    total: 256,
    new: 24,
    change: 15.2,
    increasing: true,
    data: [5, 8, 3, 2, 7, 4, 6],
  }

  const conversionStats = {
    rate: "24.5%",
    change: 3.7,
    increasing: true,
    data: [22, 21, 23, 25, 24, 26, 28],
  }

  // Mock data for top performing channels
  const channels = [
    { name: "Website Chat", conversations: 523, conversions: 128, rate: 24.5 },
    { name: "WhatsApp", conversations: 342, conversions: 87, rate: 25.4 },
    { name: "Facebook Messenger", conversations: 215, conversions: 43, rate: 20.0 },
    { name: "Instagram DM", conversations: 168, conversions: 32, rate: 19.0 },
  ]

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>

        <div className="mt-4 md:mt-0 flex items-center">
          <div className="relative">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="appearance-none pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="12m">Last 12 months</option>
            </select>
            <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Messages */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Messages</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{messageStats.total}</h3>
            </div>
            <div className={`${messageStats.increasing ? "text-green-600" : "text-red-600"} flex items-center`}>
              {messageStats.increasing ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              <span className="text-sm font-medium ml-1">{messageStats.change}%</span>
            </div>
          </div>
          <div className="h-16 flex items-end">
            {messageStats.data.map((value, index) => (
              <div
                key={index}
                className="flex-1 mx-0.5"
                style={{
                  height: `${(value / Math.max(...messageStats.data)) * 100}%`,
                }}
              >
                <div className="w-full h-full bg-purple-600 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Response Time</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{responseTimeStats.average}</h3>
            </div>
            <div className={`${!responseTimeStats.increasing ? "text-green-600" : "text-red-600"} flex items-center`}>
              {!responseTimeStats.increasing ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
              <span className="text-sm font-medium ml-1">{responseTimeStats.change}%</span>
            </div>
          </div>
          <div className="h-16 flex items-end">
            {responseTimeStats.data.map((value, index) => (
              <div
                key={index}
                className="flex-1 mx-0.5"
                style={{
                  height: `${(value / Math.max(...responseTimeStats.data)) * 100}%`,
                }}
              >
                <div className="w-full h-full bg-blue-500 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>

        {/* New Customers */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">New Customers</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{customerStats.new}</h3>
            </div>
            <div className={`${customerStats.increasing ? "text-green-600" : "text-red-600"} flex items-center`}>
              {customerStats.increasing ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              <span className="text-sm font-medium ml-1">{customerStats.change}%</span>
            </div>
          </div>
          <div className="h-16 flex items-end">
            {customerStats.data.map((value, index) => (
              <div
                key={index}
                className="flex-1 mx-0.5"
                style={{
                  height: `${(value / Math.max(...customerStats.data)) * 100}%`,
                }}
              >
                <div className="w-full h-full bg-green-500 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{conversionStats.rate}</h3>
            </div>
            <div className={`${conversionStats.increasing ? "text-green-600" : "text-red-600"} flex items-center`}>
              {conversionStats.increasing ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              <span className="text-sm font-medium ml-1">{conversionStats.change}%</span>
            </div>
          </div>
          <div className="h-16 flex items-end">
            {conversionStats.data.map((value, index) => (
              <div
                key={index}
                className="flex-1 mx-0.5"
                style={{
                  height: `${(value / Math.max(...conversionStats.data)) * 100}%`,
                }}
              >
                <div className="w-full h-full bg-amber-500 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Channels */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Channels</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Channel
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversations
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversions
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion Rate
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {channels.map((channel, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-800">{channel.name}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{channel.conversations}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{channel.conversions}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{channel.rate}%</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Message Volume by Time */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Message Volume by Time of Day</h2>
        <div className="h-64 flex items-end">
          {Array.from({ length: 24 }, (_, i) => {
            // Generate random data for the chart
            const value = Math.floor(Math.random() * 50) + 10
            return (
              <div
                key={i}
                className="flex-1 mx-0.5 group relative"
                style={{
                  height: `${value}%`,
                }}
              >
                <div className="w-full h-full bg-purple-600 bg-opacity-70 hover:bg-opacity-100 transition-colors rounded-sm"></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {`${i}:00 - ${i + 1}:00: ${value} messages`}
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>12 AM</span>
          <span>6 AM</span>
          <span>12 PM</span>
          <span>6 PM</span>
          <span>11 PM</span>
        </div>
      </div>
    </div>
  )
}
