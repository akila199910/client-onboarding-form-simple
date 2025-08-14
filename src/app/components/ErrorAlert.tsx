"use client";
import React from 'react'

const ErrorAlert = ({ message }: { message: string }) => {
  if (!message) return null;
  return (
    <div className="rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-700">
    {message}
  </div>
  )
}

export default ErrorAlert