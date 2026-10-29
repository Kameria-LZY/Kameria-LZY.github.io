/**
 * 部署在子路径（例如 /site/<id>/）时，content/*.toml 里写死的绝对资源路径
 * （avatar = "/bio.jpg"、preview = "example.png" 等）不会被 Next 的 basePath
 * 自动加上前缀，需要在这里手工拼一次。
 *
 * 构建时通过 NEXT_PUBLIC_BASE_PATH 注入前缀；部署在根路径时不设该变量即可。
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBasePath(path: string): string {
    return path.startsWith('/') ? `${BASE_PATH}${path}` : path;
}
