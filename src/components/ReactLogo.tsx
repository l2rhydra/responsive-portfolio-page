import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ReactLogo() {
  const groupRef = useRef<THREE.Group>();
  const innerRef = useRef<THREE.Group>();
  const outerRef = useRef<THREE.Group>();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (innerRef.current && outerRef.current && groupRef.current) {
      // Floating animation for the entire logo
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
      
      // Rotate inner orbit
      innerRef.current.rotation.z = time * 0.5;
      
      // Rotate outer orbits
      outerRef.current.rotation.z = -time * 0.3;
      outerRef.current.rotation.x = Math.sin(time * 0.2) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#61dafb"
          metalness={0.8}
          roughness={0.2}
          emissive="#61dafb"
          emissiveIntensity={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Inner orbit */}
      <group ref={innerRef}>
        <mesh>
          <torusGeometry args={[3, 0.2, 16, 100]} />
          <meshPhysicalMaterial
            color="#61dafb"
            metalness={0.8}
            roughness={0.2}
            emissive="#61dafb"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>

      {/* Outer orbits */}
      <group ref={outerRef}>
        <mesh rotation-x={Math.PI / 3}>
          <torusGeometry args={[3, 0.2, 16, 100]} />
          <meshPhysicalMaterial
            color="#61dafb"
            metalness={0.8}
            roughness={0.2}
            emissive="#61dafb"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
        <mesh rotation-x={-Math.PI / 3}>
          <torusGeometry args={[3, 0.2, 16, 100]} />
          <meshPhysicalMaterial
            color="#61dafb"
            metalness={0.8}
            roughness={0.2}
            emissive="#61dafb"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </group>
  );
}