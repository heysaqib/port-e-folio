"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Environment, MeshDistortMaterial, ContactShadows } from "@react-three/drei"
import * as THREE from "three"

function AnimatedShapes() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2, 1, -2]} castShadow>
          <icosahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#ec4899"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2, -1, 1]} castShadow>
          <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.1} metalness={0.8} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0, 2, -1]} castShadow>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#06b6d4" roughness={0.3} metalness={0.5} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <Environment preset="city" />
      <AnimatedShapes />
      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.5}
        scale={20}
        blur={2.5}
        far={4.5}
      />
    </>
  )
}
