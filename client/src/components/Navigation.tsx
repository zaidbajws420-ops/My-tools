import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const tools = [
    { name: "Password Generator", path: "/tools/password-generator" },
    { name: "Age Calculator", path: "/tools/age-calculator" },
    { name: "YouTube Thumbnail", path: "/tools/youtube-thumbnail-downloader" },
    { name: "Image Compressor", path: "/tools/image-compressor" },
    { name: "Instagram Bio", path: "/tools/instagram-bio-generator" },
    { name: "QR Code Generator", path: "/tools/qr-code-generator" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">MyTools</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/">
            <Button variant="ghost" className="text-foreground hover:text-accent">
              Home
            </Button>
          </Link>
          <div className="relative group">
            <Button variant="ghost" className="text-foreground hover:text-accent">
              Tools ▼
            </Button>
            <div className="absolute left-0 mt-0 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {tools.map((tool) => (
                <Link key={tool.path} href={tool.path}>
                  <div className="px-4 py-2 hover:bg-secondary text-foreground hover:text-accent transition-colors first:rounded-t-lg last:rounded-b-lg">
                    {tool.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/blog/password-generator">
            <Button variant="ghost" className="text-foreground hover:text-accent">
              Blog
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 space-y-2">
            <Link href="/">
              <div className="px-4 py-2 text-foreground hover:text-accent hover:bg-secondary rounded transition-colors">
                Home
              </div>
            </Link>
            <div className="px-4 py-2 font-semibold text-foreground">Tools</div>
            {tools.map((tool) => (
              <Link key={tool.path} href={tool.path}>
                <div className="px-8 py-2 text-foreground hover:text-accent hover:bg-secondary rounded transition-colors">
                  {tool.name}
                </div>
              </Link>
            ))}
            <Link href="/blog/password-generator">
              <div className="px-4 py-2 text-foreground hover:text-accent hover:bg-secondary rounded transition-colors">
                Blog
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
