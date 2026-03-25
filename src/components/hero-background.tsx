"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Scene from "@/components/scene"

export default function HeroBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
