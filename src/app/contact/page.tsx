"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

export default function Contact() {
  return (
    <main className="min-h-screen py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Heading as="h1" size="4xl" className="mb-4 gradient-text">
              Get in Touch
            </Heading>
            <Paragraph size="lg" className="text-gray-600">
              Have a question or want to work together? Feel free to reach out!
            </Paragraph>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 card p-8"
          >
            <Input
              label="Name"
              type="text"
              placeholder="Your name"
              required
              className="hover:border-primary/50 focus:border-primary transition-colors"
            />
            <Input
              label="Email"
              type="email"
              placeholder="your.email@example.com"
              required
              className="hover:border-primary/50 focus:border-primary transition-colors"
            />
            <Textarea
              label="Message"
              placeholder="Your message..."
              required
              className="hover:border-primary/50 focus:border-primary transition-colors"
            />
            <Button
              type="submit"
              className="w-full hover:scale-[1.02] transition-transform"
            >
              Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 card p-8"
          >
            <Heading as="h2" size="2xl" className="mb-4 gradient-text">
              Chat with AI Assistant
            </Heading>
            <Paragraph className="mb-6 text-gray-600">
              Need quick answers? Try our AI assistant below.
            </Paragraph>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <Paragraph size="sm" className="text-gray-500">
                  AI Assistant
                </Paragraph>
                <Paragraph>Hello! How can I help you today?</Paragraph>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 hover:bg-primary/20 transition-colors">
                <Paragraph size="sm" className="text-gray-500">
                  You
                </Paragraph>
                <Paragraph>
                  Hi! I'd like to know more about your services.
                </Paragraph>
              </div>
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 hover:border-primary/50 focus:border-primary transition-colors"
                />
                <Button className="hover:scale-105 transition-transform">
                  Send
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
