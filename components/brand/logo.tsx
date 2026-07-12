import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
};

/** Circular RS monogram with camera aperture — site brand mark. */
export function Logo({ size = 32, className }: LogoProps) {
  return (
    <Image
      className={className}
      src="/images/brand/ravindra-ssk-mark.png"
      alt=""
      width={size}
      height={size}
      priority
      unoptimized
    />
  );
}

export const brandName = "Ravindra SSK";
export const brandRole = "Researcher | Engineer | Creator";
