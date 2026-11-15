import Image from "next/image";
import type { ReactNode } from "react";

import { assetUrl } from "@/lib/asset-url";

type KickerProps = {
  readonly children: ReactNode;
  readonly inverse?: boolean;
};

export function Kicker({ children, inverse = false }: KickerProps) {
  return <p className={inverse ? "kicker kicker-inverse" : "kicker"}>{children}</p>;
}

type AvatarStackProps = {
  readonly label?: string;
  readonly inverse?: boolean;
};

export function AvatarStack({
  label = "Trusted by 24,000+ learners",
  inverse = false,
}: AvatarStackProps) {
  const textClass = inverse ? "text-white/85" : "text-ink";

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2" aria-label="A group of Luma learners">
        {["avatar-learner-1.webp", "avatar-learner-2.webp", "avatar-learner-3.webp"].map(
          (file, index) => (
            <Image
              key={file}
              src={assetUrl(`/images/${file}`)}
              alt={`Luma learner ${index + 1}`}
              width={34}
              height={34}
              unoptimized
              className="size-8 rounded-full border-2 border-white object-cover"
            />
          ),
        )}
      </div>
      <p className={`text-sm font-semibold ${textClass}`}>{label}</p>
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  readonly href: string;
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <a className={`arrow-link ${className}`} href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
