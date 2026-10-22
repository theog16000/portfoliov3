export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${path.replace(/^\/+/, '')}`;
}

export function getCanonicalUrl(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const hasBase = base && (pathname === base || pathname.startsWith(`${base}/`));
  const canonicalPath = hasBase ? pathname.slice(base.length) || '/' : pathname;

  return new URL(canonicalPath, 'https://theogenty.fr').href;
}
