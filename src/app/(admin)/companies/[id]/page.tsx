'use client'
import React, { useEffect } from "react";
import Header from "@/app/components/header";

export interface PageProps{ 
    params: { id: string };
}

export default function Page({ params }: PageProps) {
    return (<>
        <Header>Companies ({params.id})</Header>
        <p>{ new Date().toTimeString()}</p>
    </>)
}