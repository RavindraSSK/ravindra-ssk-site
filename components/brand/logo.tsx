import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Circular RS monogram with camera aperture — site brand mark.
 * Renders both theme variants; CSS (html[data-theme]) decides which one is
 * visible, so the correct logo shows immediately without any client JS,
 * hydration mismatch, or flash during theme load.
 */
export function Logo({ size = 52, className }: LogoProps) {
  return (
    <span className={className ? `brand__logo ${className}` : "brand__logo"}>
      <Image
        className="brand__logo-img brand__logo-img--light"
        src="/branding/logo-light.png"
        alt=""
        width={size}
        height={size}
        priority
      />
      <Image
        className="brand__logo-img brand__logo-img--dark"
        src="/branding/logo-dark.png"
        alt=""
        width={size}
        height={size}
        priority
      />
    </span>
  );
}

export const brandName = "Ravindra SSK";
export const brandRole = "ML & AI Engineer";
