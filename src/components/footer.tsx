export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with React, Next.js, and Tailwind CSS.
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
