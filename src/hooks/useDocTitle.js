import { useEffect } from 'react'
export default function useDocTitle(title) {
  useEffect(() => { document.title = title ? `${title} | FireGuard` : 'FireGuard'; window.scrollTo(0, 0) }, [title])
}
