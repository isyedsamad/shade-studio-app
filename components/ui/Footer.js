import { Github, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="border-t border-[var(--text-secondary)]/30 py-4 px-4 sm:px-6 lg:px-8 mt-7">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} shade.studio. Made with ❤️ for developers.
            </p>
        </div>
    </footer>
    </>
  )
}

export default Footer