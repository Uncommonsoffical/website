import React from "react";

export type BtnProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "className"
> & {
    className: string;
    noArrow?: boolean;
};

export function Btn({ children, className, noArrow, ...props }: BtnProps) {
    return (
        <button
            className={`inline-flex h-8 items-center justify-center gap-2.5 rounded-[5px] px-3 text-xs transition-colors lg:h-11 lg:px-4 lg:text-[13px] ${className}`}
            {...props}
        >
            <div className="translate-y-[0.15em] font-ocr-b-std font-normal uppercase">
                {children}
            </div>

            {!noArrow && (
                <>
                    <div className="h-2 w-[1px] origin-top-left bg-current lg:h-3" />
                    <div className="translate-y-[0.15em] font-ocr-b-std">
                        {">"}
                    </div>
                </>
            )}
        </button>
    );
}
