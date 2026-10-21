

import { Button } from "@/components/ui/button"

export default function Bouton({
  href = "/contact",
  className,
  children = "WORK TOGETHER !",
}) {
  return (
    <Button render={<a href={href} />} className={className}>
      {children}
    </Button>
  )
}
