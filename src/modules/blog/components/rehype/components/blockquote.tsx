import React from "react";

export const Blockquote = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <blockquote className="my-4 rounded-2xl bg-gray-50/50 p-4 lg:px-8 lg:py-6">
            <svg
                aria-hidden="true"
                className="h-8 w-8 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                />
            </svg>
            {children}
        </blockquote>
    );
};
