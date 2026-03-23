'use client'

import { useState } from 'react'
import { Search, Package, Truck, CheckCircle2, MapPin, Calendar } from 'lucide-react'

interface TrackingData {
  trackingNumber: string
  status: 'in-transit' | 'delivered' | 'out-for-delivery'
  origin: string
  destination: string
  currentLocation: string
  shippedDate: string
  estimatedDelivery: string
  events: Array<{
    date: string
    time: string
    location: string
    status: string
    description: string
  }>
}

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null)
  const [error, setError] = useState('')

  // Mock tracking data
  const mockData: Record<string, TrackingData> = {
    'SHP123456789': {
      trackingNumber: 'SHP123456789',
      status: 'in-transit',
      origin: 'New York, USA',
      destination: 'London, UK',
      currentLocation: 'In transit to destination',
      shippedDate: '2024-03-20',
      estimatedDelivery: '2024-03-28',
      events: [
        {
          date: '2024-03-24',
          time: '14:30',
          location: 'London, UK',
          status: 'In Transit',
          description: 'Package in transit to local delivery facility',
        },
        {
          date: '2024-03-23',
          time: '10:15',
          location: 'London, UK',
          status: 'Arrived',
          description: 'Package arrived at international hub',
        },
        {
          date: '2024-03-22',
          time: '08:00',
          location: 'New York, USA',
          status: 'Shipped',
          description: 'Package departed from origin facility',
        },
        {
          date: '2024-03-20',
          time: '16:45',
          location: 'New York, USA',
          status: 'Picked Up',
          description: 'Package picked up and sorted',
        },
      ],
    },
    'SHP987654321': {
      trackingNumber: 'SHP987654321',
      status: 'delivered',
      origin: 'Los Angeles, USA',
      destination: 'Sydney, Australia',
      currentLocation: 'Delivered',
      shippedDate: '2024-03-15',
      estimatedDelivery: '2024-03-25',
      events: [
        {
          date: '2024-03-25',
          time: '11:20',
          location: 'Sydney, Australia',
          status: 'Delivered',
          description: 'Package delivered to recipient',
        },
        {
          date: '2024-03-24',
          time: '09:00',
          location: 'Sydney, Australia',
          status: 'Out for Delivery',
          description: 'Package out for delivery',
        },
        {
          date: '2024-03-23',
          time: '15:30',
          location: 'Sydney, Australia',
          status: 'Arrived',
          description: 'Package arrived at local facility',
        },
      ],
    },
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number')
      return
    }

    const data = mockData[trackingNumber.toUpperCase()]
    if (data) {
      setTrackingData(data)
    } else {
      setError('Tracking number not found. Try: SHP123456789 or SHP987654321')
      setTrackingData(null)
    }
  }

  const getStatusColor = (status: string) => {
    if (status === 'Delivered') return 'bg-green-50 border-green-200'
    if (status === 'In Transit') return 'bg-blue-50 border-blue-200'
    if (status === 'Out for Delivery') return 'bg-yellow-50 border-yellow-200'
    return 'bg-gray-50 border-gray-200'
  }

  const getStatusIcon = (status: 'in-transit' | 'delivered' | 'out-for-delivery') => {
    switch (status) {
      case 'delivered':
        return <CheckCircle2 className="text-green-600" size={24} />
      case 'out-for-delivery':
        return <Truck className="text-yellow-600" size={24} />
      default:
        return <Package className="text-blue-600" size={24} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Track Your Shipment
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time tracking updates for your packages. Enter your tracking number to get started.
          </p>
        </div>
      </section>

      {/* Tracking Search Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (e.g., SHP123456789)"
                  className="w-full px-4 py-3 pl-12 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Track
              </button>
            </div>
            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
            <p className="text-xs text-muted-foreground mt-3">
              Demo: Try tracking numbers SHP123456789 (in transit) or SHP987654321 (delivered)
            </p>
          </form>

          {/* Tracking Results */}
          {trackingData && (
            <div className="space-y-8">
              {/* Status Card */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Tracking Number</h2>
                    <p className="text-lg text-muted-foreground font-mono">{trackingData.trackingNumber}</p>
                  </div>
                  <div className="text-right">
                    {getStatusIcon(trackingData.status)}
                    <p className="text-sm font-semibold text-foreground mt-2 capitalize">
                      {trackingData.status === 'in-transit' && 'In Transit'}
                      {trackingData.status === 'out-for-delivery' && 'Out for Delivery'}
                      {trackingData.status === 'delivered' && 'Delivered'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">FROM</p>
                    <p className="font-semibold text-foreground">{trackingData.origin}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">TO</p>
                    <p className="font-semibold text-foreground">{trackingData.destination}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">SHIPPED</p>
                    <p className="font-semibold text-foreground">{trackingData.shippedDate}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground mb-1">EST. DELIVERY</p>
                    <p className="font-semibold text-foreground">{trackingData.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Tracking History</h3>
                <div className="space-y-4">
                  {trackingData.events.map((event, index) => (
                    <div
                      key={index}
                      className={`border rounded-lg p-4 ${getStatusColor(event.status)}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-foreground">{event.status}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                            <Calendar size={14} />
                            {event.date} at {event.time}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin size={14} />
                          {event.location}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!trackingData && !error && (
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <Package size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">
                Enter a tracking number to view package status and history
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Where is my package?</h3>
              <p className="text-sm text-muted-foreground">
                Enter your tracking number above to get real-time updates on your shipment location.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">How often are updates provided?</h3>
              <p className="text-sm text-muted-foreground">
                Tracking information is updated throughout the shipping journey, typically every 2-4 hours.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">What if my package is delayed?</h3>
              <p className="text-sm text-muted-foreground">
                Contact our support team immediately. We'll investigate and work to resolve the issue.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Can I reschedule delivery?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! Contact us before delivery day to arrange an alternative delivery time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
