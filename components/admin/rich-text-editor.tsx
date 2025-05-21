"use client"

import { useState } from "react"
import { Bold, Italic, Link, List, ListOrdered, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [activeTab, setActiveTab] = useState<string>("write")

  const handleInsertMarkdown = (markdownSymbol: string, placeholder = "") => {
    const textarea = document.querySelector("textarea") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    const beforeText = value.substring(0, start)
    const afterText = value.substring(end)

    let newText = ""

    if (selectedText) {
      newText = beforeText + markdownSymbol + selectedText + markdownSymbol + afterText
    } else {
      newText = beforeText + markdownSymbol + placeholder + markdownSymbol + afterText
    }

    onChange(newText)

    // Set focus back to textarea and adjust cursor position
    setTimeout(() => {
      textarea.focus()
      const newCursorPos = start + markdownSymbol.length + (selectedText ? selectedText.length : placeholder.length)
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  const handleInsertLink = () => {
    const textarea = document.querySelector("textarea") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    const beforeText = value.substring(0, start)
    const afterText = value.substring(end)

    let newText = ""

    if (selectedText) {
      newText = beforeText + `[${selectedText}](url)` + afterText
    } else {
      newText = beforeText + `[link text](url)` + afterText
    }

    onChange(newText)

    // Set focus back to textarea
    setTimeout(() => {
      textarea.focus()
      const linkTextEnd = beforeText.length + (selectedText ? selectedText.length + 2 : 10)
      textarea.setSelectionRange(linkTextEnd + 2, linkTextEnd + 5) // Select "url"
    }, 0)
  }

  const handleInsertList = (ordered: boolean) => {
    const textarea = document.querySelector("textarea") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const beforeText = value.substring(0, start)
    const afterText = value.substring(start)

    const prefix = ordered ? "1. " : "- "
    const newText =
      beforeText + "\n" + prefix + "List item\n" + prefix + "List item\n" + prefix + "List item\n" + afterText

    onChange(newText)

    // Set focus back to textarea
    setTimeout(() => {
      textarea.focus()
      const newCursorPos = start + 2 + prefix.length
      textarea.setSelectionRange(newCursorPos, newCursorPos + 9) // Select "List item"
    }, 0)
  }

  const handleInsertQuote = () => {
    const textarea = document.querySelector("textarea") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    const beforeText = value.substring(0, start)
    const afterText = value.substring(end)

    let newText = ""

    if (selectedText) {
      newText = beforeText + "> " + selectedText + afterText
    } else {
      newText = beforeText + "> Blockquote text" + afterText
    }

    onChange(newText)

    // Set focus back to textarea
    setTimeout(() => {
      textarea.focus()
      if (!selectedText) {
        const newCursorPos = start + 2
        textarea.setSelectionRange(newCursorPos, newCursorPos + 14) // Select "Blockquote text"
      }
    }, 0)
  }

  return (
    <div className="border rounded-md">
      <Tabs defaultValue="write" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between border-b px-4">
          <TabsList className="grid w-[200px] grid-cols-2">
            <TabsTrigger value="write">Write</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          {activeTab === "write" && (
            <div className="flex items-center">
              <Button type="button" variant="ghost" size="icon" onClick={() => handleInsertMarkdown("**", "bold text")}>
                <Bold className="h-4 w-4" />
                <span className="sr-only">Bold</span>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => handleInsertMarkdown("*", "italic text")}
              >
                <Italic className="h-4 w-4" />
                <span className="sr-only">Italic</span>
              </Button>
              <Button type="button" variant="ghost" size="icon" onClick={handleInsertLink}>
                <Link className="h-4 w-4" />
                <span className="sr-only">Link</span>
              </Button>
              <Button type="button" variant="ghost" size="icon" onClick={() => handleInsertList(false)}>
                <List className="h-4 w-4" />
                <span className="sr-only">Bullet List</span>
              </Button>
              <Button type="button" variant="ghost" size="icon" onClick={() => handleInsertList(true)}>
                <ListOrdered className="h-4 w-4" />
                <span className="sr-only">Numbered List</span>
              </Button>
              <Button type="button" variant="ghost" size="icon" onClick={handleInsertQuote}>
                <Quote className="h-4 w-4" />
                <span className="sr-only">Quote</span>
              </Button>
            </div>
          )}
        </div>

        <TabsContent value="write" className="p-0">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[400px] border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
            placeholder="Write your content here using Markdown..."
          />
        </TabsContent>

        <TabsContent value="preview" className="p-4">
          {value ? (
            <div
              className="prose prose-sm sm:prose max-w-none dark:prose-invert blog-content"
              dangerouslySetInnerHTML={{
                __html: convertMarkdownToHtml(value),
              }}
            />
          ) : (
            <p className="text-muted-foreground">Nothing to preview</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Simple markdown to HTML converter (in a real app, use a proper library like marked.js)
function convertMarkdownToHtml(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    // Links
    .replace(/\[(.*?)\]$$(.*?)$$/gim, '<a href="$2">$1</a>')
    // Lists
    .replace(/^- (.*$)/gim, "<ul><li>$1</li></ul>")
    .replace(/^\d+\. (.*$)/gim, "<ol><li>$1</li></ol>")
    // Blockquotes
    .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")
    // Paragraphs
    .replace(/\n\s*\n/g, "</p><p>")

  // Wrap with paragraph tags if not already wrapped
  if (!html.startsWith("<h") && !html.startsWith("<p>")) {
    html = "<p>" + html + "</p>"
  }

  return html
}
