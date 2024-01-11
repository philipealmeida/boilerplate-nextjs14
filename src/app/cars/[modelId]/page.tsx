import React from "react";

export default function CarDetailPage({
  params,
}: Readonly<{ params: { modelId: string } }>) {
  return <div>Car Detail Page {params.modelId}</div>;
}
