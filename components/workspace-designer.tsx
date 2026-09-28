"use client"

import { useWorkspaceSelection } from "@/hooks/use-workspace-selection";
import { WorkspacePreview } from "@/components/workspace-preview";
import { SelectionPanel } from "@/components/selection-panel";
import { CheckoutSheet } from "@/components/checkout-sheet";
import { AnimatedThemeToggle } from "@/components/ui/animated-theme-toggle";
const WorkspaceDesigner = () => {
    const {
        desks,
        chairs,
        accessories,
        selectedDesk,
        selectedChair,
        selectedAccessories,
        setDesk,
        setChair,
        toggleAccessory,
        totalPrice,
    } = useWorkspaceSelection();

    return (
        <div className="flex flex-col sm:flex-row h-screen bg-background text-foreground">
            <main className="sm:flex-1 flex flex-col p-6 gap-6">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-medium">Design your workspace</h1>
                        <p className="text-sm text-muted-foreground">Pick a desk, a chair, and the accessories you need.</p>
                    </div>
                    <AnimatedThemeToggle />
                </header>
                <WorkspacePreview desk={selectedDesk} chair={selectedChair} selectedAccessories={selectedAccessories} />
            </main>

            <aside className="w-panel border-l border-border bg-card p-6 flex flex-col gap-6">
                <SelectionPanel
                    desks={desks}
                    chairs={chairs}
                    accessories={accessories}
                    selectedDesk={selectedDesk}
                    selectedChair={selectedChair}
                    selectedAccessories={selectedAccessories}
                    onSelectDesk={setDesk}
                    onSelectChair={setChair}
                    onToggleAccessory={toggleAccessory}
                />
                <CheckoutSheet desk={selectedDesk} chair={selectedChair} accessories={selectedAccessories} total={totalPrice} />
            </aside>
        </div>
    );
}

export default WorkspaceDesigner