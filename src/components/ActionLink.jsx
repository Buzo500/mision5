export default function ActionLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-moss dark:bg-leaf dark:text-ink dark:hover:bg-white"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  )
}
