import type { Metadata } from "next"

import { LoginForm } from "@/components/admin/login-form"

export const metadata: Metadata = {
  title: "Login | Admin Dashboard",
  description: "Login to access the admin dashboard",
}

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold font-serif mb-8 text-center">Admin Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}
