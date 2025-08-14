"use client"
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { OnboardInput, OnboardSchema } from "./lib/validation";
import { SERVICES } from "./lib/validation";


export default function Page() {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(OnboardSchema),
    mode: "onBlur"
  });

  async function onSubmit(formData: OnboardInput) {
    console.log(formData)

  }


  return (
    <main className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-10">

      {/* topic dev */}
      <div className="mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Client Onboarding</h1>
        <p className="mt-1 text-sm text-gray-600 font-semibold">Technical Assessment: Client Onboarding (Next.js
          + React Hook Form + Zod)</p>
      </div>

      {/* form div */}

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-2xl border bg-white p-4 shadow-sm sm:p-6">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="fullName" className="block text-sm font-medium"> Full Name</label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              className="h-10 w-full rounded-lg border px-3 outline-none focus:ring-2"
              {...register("fullName")}
            />
            {errors.fullName?.message && (
              <p role="alert" className="text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium"> Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="h-10 w-full rounded-lg border px-3 outline-none focus:ring-2"
              {...register("email")}
            />
            {errors.email?.message && (
              <p role="alert" className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="companyName" className="block text-sm font-medium"> Company name</label>
          <input
            id="companyName"
            type="text"
            className="h-10 w-full rounded-lg border px-3 outline-none focus:ring-2"
            {...register("companyName")}
          />
          {errors.companyName?.message && (
            <p role="alert" className="text-sm text-red-600">{errors.companyName.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Services interested in</label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {SERVICES.map((service) => (
              <label
                key={service}
                className="flex items-center gap-2 rounded-lg border p-2 hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  value={service}
                  {...register("services")}
                  className="h-4 w-4"
                />
                <span className="text-sm">{service}</span>
              </label>
            ))}

            {errors.services?.message && (
              <p role="alert" className="col-span-full text-sm text-red-600">
                {String(errors.services.message)}
              </p>
            )}
          </div>
        </div>


        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="budgetUsd" className="block text-sm font-medium"> Budget (USD)</label>
            <input
              id="budgetUsd"
              type="string"
              inputMode="numeric"
              min={100}
              max={1000000}
              className="h-10 w-full rounded-lg border px-3 outline-none focus:ring-2"
              {...register("budgetUsd", {
                setValueAs: (v) => {
                  if (v === "" || v === null || typeof v === "undefined") return undefined; // optional field
                  const n = Number(v);
                  return Number.isNaN(n) ? undefined : n;
                },
              })}
            />
            {errors.budgetUsd?.message && (
              <p role="alert" className="text-sm text-red-600">{errors.budgetUsd.message}</p>
            )}
          </div>

        </div>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4" {...register("acceptTerms")} />
          <span className="text-sm">I accept the terms</span>
        </label>


        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-black px-4 text-white shadow-sm transition-opacity disabled:opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}