"use client";

import { useRouter } from "next/router";

export default function ModalBackDrop() {
    const router = useRouter();

    return <div className="modal-backdrop" onClick={router.back} />;
}
