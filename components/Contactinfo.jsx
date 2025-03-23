import { ReactNode } from "react";
export default function ContactInfo({ title, description, items }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-orange-100 opacity-30"></div>
      <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-blue-100 opacity-30"></div>

      <div className="relative">
        <h2 className="text-2xl font-bold text-blue-900">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>

        {/* Vertical line */}
        <div className="absolute left-[27px] top-[90px] w-0.5 h-[calc(100%-90px)] bg-gray-200 z-0"></div>

        <div className="flex flex-col space-y-6 relative">
          {items.map((item, index) => (
            <div key={index} className="bg-orange-50 rounded-lg p-5 border border-white-100 shadow-sm relative z-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-orange-600">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-blue-800">{item.title}</h3>
                  <p className="text-gray-800">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
