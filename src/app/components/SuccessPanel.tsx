import React from 'react'
import { OnboardInput } from '../lib/validation'

const SuccessPanel = ({ data }: { data: OnboardInput }) => {
  return (
    <div className="rounded-xl border border-green-300 bg-green-50 p-4">
    <h3 className="mb-2 text-lg font-semibold">Submission successful</h3>
    <p className="text-sm text-gray-700">Here is what you submitted:</p>
    <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
      <li>
        <strong>Name:</strong> {data.fullName}
      </li>
      <li>
        <strong>Email:</strong> {data.email}
      </li>
      <li>
        <strong>Company:</strong> {data.companyName}
      </li>
      <li>
        <strong>Services:</strong> {data.services.join(", ")}
      </li>
      {typeof data.budgetUsd === "number" && (
        <li>
          <strong>Budget (USD):</strong> {data.budgetUsd}
        </li>
      )}
      <li>
        <strong>Start Date:</strong> {data.projectStartDate}
      </li>
    </ul>
  </div>
  )
}

export default SuccessPanel