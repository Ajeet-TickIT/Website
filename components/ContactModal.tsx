"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handlePhoneCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  const handleWhatsApp = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`, "_self")
  }

  const handleGoogleMaps = () => {
    window.open("https://maps.google.com/?q=G-70,+Lower+Ground+Floor,+Office+No.+001,+Sector+63,+Noida,+Gautam+Buddha+Nagar,+Uttar+Pradesh,+201301", "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">Contact Us</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 p-2">
          {/* Call Us Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </h3>
            <div className="grid gap-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Piyush Singhal</p>
                  <p className="text-blue-600 font-mono">+91 8860303034</p>
                </div>
                <Button 
                  onClick={() => handlePhoneCall("+918860303034")}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm"
                >
                  Call
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Manu Vaibhav</p>
                  <p className="text-blue-600 font-mono">+91 9953760804</p>
                </div>
                <Button 
                  onClick={() => handlePhoneCall("+919953760804")}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm"
                >
                  Call
                </Button>
              </div>
            </div>
          </div>

          {/* WhatsApp Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              💬 WhatsApp
            </h3>
            <div className="grid gap-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Piyush Singhal</p>
                  <p className="text-green-600">Chat Now</p>
                </div>
                <Button 
                  onClick={() => handleWhatsApp("918860303034")}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 text-sm"
                >
                  Chat
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Manu Vaibhav</p>
                  <p className="text-green-600">Chat Now</p>
                </div>
                <Button 
                  onClick={() => handleWhatsApp("919953760804")}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 text-sm"
                >
                  Chat
                </Button>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              📧 Email
            </h3>
            <div className="grid gap-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Piyush Singhal</p>
                  <p className="text-red-600 text-sm break-all">piyush.singhal30@gmail.com</p>
                </div>
                <Button 
                  onClick={() => handleEmail("piyush.singhal30@gmail.com")}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm"
                >
                  Email
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Manu Vaibhav</p>
                  <p className="text-red-600 text-sm break-all">jkumarbuildtech@gmail.com</p>
                </div>
                <Button 
                  onClick={() => handleEmail("jkumarbuildtech@gmail.com")}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm"
                >
                  Email
                </Button>
              </div>
            </div>
          </div>

          {/* Office Location Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              📍 Office Location
            </h3>
            <div className="p-4 bg-gray-50 rounded-lg space-y-2">
              <p className="font-medium text-gray-900">JKUMAR BUILDTECH PRIVATE LIMITED</p>
              <p className="text-gray-700">G-70, Lower Ground Floor, Office No. 001, Sector 63, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301</p>
              <p className="text-sm text-gray-600">GSTIN/UIN: 09AADCJ9672K1ZV</p>
              <p className="text-sm text-gray-600">State Name: Uttar Pradesh, Code: 09</p>
              
              <Button 
                onClick={handleGoogleMaps}
                className="mt-3 bg-purple-600 hover:bg-purple-700 w-full"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                📌 View on Google Maps
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
