const modules = import.meta.glob('./levels/*', { eager: true })

export const levels = Object.values(modules).map((m: any) => m.default);