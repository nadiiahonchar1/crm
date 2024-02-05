'use client'
import React from "react";

export interface ErrorComponentProps{
    error: Error;
 }

export default function Error({}: ErrorComponentProps) {
    return (<div>
        <div>Unexpected error inside slot sales</div>
    </div>)
}