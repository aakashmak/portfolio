"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      {submitSuccess && (
        <div className="p-4 bg-green/10 border border-green rounded text-green mb-4">
          Thanks for your message! I'll get back to you soon.
        </div>
      )}

      {submitError && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded text-red-500 mb-4">{submitError}</div>
      )}

      <div>
        <label htmlFor="name" className="block text-lightest-slate mb-2 font-mono text-sm">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-light-navy border border-lightest-navy rounded p-4 text-lightest-slate focus:outline-none focus:border-green"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-lightest-slate mb-2 font-mono text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-light-navy border border-lightest-navy rounded p-4 text-lightest-slate focus:outline-none focus:border-green"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-lightest-slate mb-2 font-mono text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-light-navy border border-lightest-navy rounded p-4 text-lightest-slate focus:outline-none focus:border-green"
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="button mt-4 min-w-[150px]">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
