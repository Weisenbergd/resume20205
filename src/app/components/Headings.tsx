import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: Props) {
  return (
    <h1 className={clsx("text-5xl md:text-6xl", className)}>{children}</h1>
  );
}

export function H2({ children, className }: Props) {
  return (
    <h2 className={clsx("text-5xl md:text-6xl pb-32", className)}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: Props) {
  return (
    <h2 className={clsx("text-2xl md:text-3xl pb-4", className)}>{children}</h2>
  );
}
