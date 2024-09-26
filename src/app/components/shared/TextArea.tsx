'use client';
import { InputHTMLAttributes } from "react";

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label: string
    className?: string
}

export default function TextArea (props: TextAreaProps) {
    return (
        <div className="flex flex-col gap-1">
            <label>{props.label}</label>
            <textarea {...props} className={`bg-zinc-800 p-2 rounded-md outline-none ${props.className ?? ''}`} />
        </div>
    )
}