export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display text-xl">KAIRO<span className="text-primary">.</span></div>
        <div>© {new Date().getFullYear()} Kairo Vance. Crafted frame by frame.</div>
      </div>
    </footer>
  );
}
