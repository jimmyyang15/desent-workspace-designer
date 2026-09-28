// lib/constants.ts

import { Category } from "@/lib/types";


export const STAGE_ASPECT = 1264 / 848;

export const LAYER_Z: Record<Category, number> = {
    chair: 10,
    desk: 20,
    accessory: 30,
};