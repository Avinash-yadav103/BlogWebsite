import { redirect } from "next/navigation"
import type { Metadata } from "next"

import { AdminDashboard } from "@/components/admin/dashboard"
import { checkAuth } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Admin Dashboard | My Blog",
  description: "Manage your blog posts",
}

export default async function AdminPage() {
  const isAuthenticated = await checkAuth()

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  return <AdminDashboard />
}
