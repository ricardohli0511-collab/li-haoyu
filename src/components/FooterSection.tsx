export function FooterSection() {
  return (
    <footer id="contact" className="py-20 px-6 bg-bg-secondary border-t border-border-default">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-mono text-xl text-text-primary mb-3">LI HAOYU</h3>
            <p className="text-sm text-text-muted font-serif">Builder · FinTech × FullStack</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs text-text-muted tracking-widest mb-4 uppercase">Contact</h4>
            <div className="space-y-2 text-sm text-text-secondary font-mono">
              <p>lhy2353580715@163.com</p>
              <p>+852 51603547</p>
              <p>+86 15876972967</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs text-text-muted tracking-widest mb-4 uppercase">Links</h4>
            <div className="space-y-2 text-sm font-mono">
              <a
                href="#"
                className="block text-text-secondary hover:text-accent-blue transition-colors"
              >
                GitHub →
              </a>
              <a
                href="#"
                className="block text-text-secondary hover:text-accent-blue transition-colors"
              >
                LinkedIn →
              </a>
              <a
                href="#hero"
                className="block text-text-secondary hover:text-accent-blue transition-colors"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-default flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-mono">
            Built with caffeine and sleepless nights
          </p>
          <p className="text-xs text-text-muted font-mono">
            &copy; {new Date().getFullYear()} Li Haoyu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
