interface ImportMeta {
	readonly hot?: {
    dispose(callback: () => Promise<void>): void
    decline(): void
    boundary: Record<string, any>
  }
}
