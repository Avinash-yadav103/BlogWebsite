"use client"

import { useRouter, useSearchParams } from "next/navigation"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set("category", value)
    } else {
      params.delete("category")
    }

    router.push(`/blog?${params.toString()}`)
  }

  return (
    <Select value={currentCategory} onValueChange={handleCategoryChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        <SelectItem value="technology">Technology</SelectItem>
        <SelectItem value="design">Design</SelectItem>
        <SelectItem value="development">Development</SelectItem>
        <SelectItem value="lifestyle">Lifestyle</SelectItem>
      </SelectContent>
    </Select>
  )
}
