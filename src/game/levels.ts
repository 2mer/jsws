import { alphabetical } from "radash";

const modules = import.meta.glob('./levels/*', { eager: true })

export const levels = alphabetical(Object.entries(modules), e => e[0]).map(e => e[1]).map((m: any) => m.default);