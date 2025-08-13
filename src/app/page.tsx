"use client"

import FormField from "@/app/components/FormField";
import ServicesCheckboxes from "@/app/components/ServicesCheckboxes";



export default function Page() {


  return (
    <main className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-10">

      {/* topic dev */}
      <div className="mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Client Onboarding</h1>
        <p className="mt-1 text-sm text-gray-600 font-semibold">Technical Assessment: Client Onboarding (Next.js
          + React Hook Form + Zod)</p>
      </div>

      {/* form div */}

      <form  className="grid gap-4 rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="fullName" className="block text-sm font-medium"> Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  className="h-10 w-full rounded-lg border px-3 outline-none focus:ring-2"
                />
              <p role="alert" className="text-sm text-red-600">This is error</p>
            </div>
        </div>
      </form>
    </main>
  );
}