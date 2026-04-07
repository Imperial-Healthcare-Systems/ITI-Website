import Image from "next/image"

export default function ItiBrandLogo({
  className,
  src,
  priority = false,
}: {
  className: string
  src: string
  priority?: boolean
}) {
  return (
    <span className={`iti-logo-shell ${className}`}>
      <Image
        src={src}
        alt="Imperial Tech Innovations"
        fill
        priority={priority}
        sizes="(max-width: 640px) 140px, 260px"
        className="iti-logo-image"
      />
    </span>
  )
}
