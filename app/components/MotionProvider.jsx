'use client'

import { MotionConfig } from 'motion/react'

// Wrapping the tree in MotionConfig with reducedMotion="user" makes every
// motion.* component in the app automatically respect the OS-level
// prefers-reduced-motion setting — animations collapse to instant/near-instant
// transitions for anyone who has that preference on, with zero per-component
// changes needed anywhere else in the codebase.
export default function MotionProvider({ children }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}