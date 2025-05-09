import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  variant: string;
  className: string;
};

export default function SectionDiv({ children, variant, className }: Props) {
  return (
    <div
      className={clsx(
        {
          "bg-dark text-light": variant === "dark",
          "bg-light text-dark": variant === "light",
        },
        "py-[8rem] pb-[20rem]"
      )}
    >
      <div
        className={clsx(
          "md:max-w-[60rem] lg:max-w-[70rem]  mx-auto px-8",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
