import { forwardRef, AnchorHTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";

type NextComposedProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

export const NextLink = forwardRef<HTMLAnchorElement, NextComposedProps>(
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { href, as, replace, scroll, shallow, prefetch, children, ...restProps },
    ref
  ) => (
    <Link
      passHref={true}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={false}
      ref={ref}
      {...restProps}
    >
      {children}
    </Link>
  )
);
NextLink.displayName = "NextLink";
