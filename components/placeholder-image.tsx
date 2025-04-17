import Image from "next/image";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function PlaceholderImage({
  src,
  alt,
  className,
  width = 400,
  height = 400,
}: PlaceholderImageProps) {
  // If the src starts with "/", it's a local path, so use a placeholder
  const imageSrc = src.startsWith("/")
    ? `/placeholder.svg?height=${height}&width=${width}`
    : src;

  return (
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
