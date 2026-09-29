# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```


// Description

This app is built using Next.js as the main framework and Typescript as the language. I used shadcn.ui for the styling, the reason I chose shadcn.ui is because it's a collection of ui that you can copy paste into your codebase and you can fully customize it easily. This app utilizes search params as the state management, I chose search params because it can persist the data so that if a user refreshes the page, the data will not be lost. I also implemented framer-motion for the animation and the drag and drop feature. With more time, maybe I can make it more interactive by making it support 3d interaction as well as more props to choose from. This was done in less than 8 hours.