export function Logo() {
  return (
    // The official HalaByte/HalaPOS brand logo. On narrow screens the Layout
    // clips this to the leftmost icon via `w-10 overflow-hidden`.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/halabyte.webp"
      alt="HalaPOS"
      width={400}
      height={128}
      className="h-9 w-auto"
    />
  )
}
