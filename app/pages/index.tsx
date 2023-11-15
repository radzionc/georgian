import { makeWebsitePage } from 'layout/makeWebsitePage'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default makeWebsitePage(() => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/en')
  }, [router])

  return null
})
