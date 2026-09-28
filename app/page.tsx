

import WorkspaceDesigner from "@/components/workspace-designer";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'monis - Design your workspace',
  description: 'Design your dream workspace with monis',
};

export default function Page() {
  return (
    <Suspense>
      <WorkspaceDesigner />
    </Suspense>
  );
}