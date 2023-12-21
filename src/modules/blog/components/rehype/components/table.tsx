import React from "react";

export function Table(props: React.PropsWithChildren<{}>) {
    return (
        <div className="px-5">
            <div className="overflow-hidden rounded-xl border border-index-mid-grey/20">
                <table
                    className="box-content w-full border-collapse"
                    {...props}
                />
            </div>
        </div>
    );
}
