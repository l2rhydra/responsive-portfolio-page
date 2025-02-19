import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const SKILLS = [
  { name: 'React.js', level: 95, color: '#61DAFB' },
  { name: 'Next.js', level: 90, color: '#000000' },
  { name: 'TypeScript', level: 88, color: '#3178C6' },
  { name: 'Node.js', level: 85, color: '#339933' },
  { name: 'TailwindCSS', level: 92, color: '#38B2AC' },
  { name: 'Redux', level: 85, color: '#764ABC' },
  { name: 'MongoDB', level: 82, color: '#47A248' },
  { name: 'PostgreSQL', level: 80, color: '#336791' },
  { name: 'GraphQL', level: 78, color: '#E535AB' },
  { name: 'Docker', level: 75, color: '#2496ED' },
  { name: 'AWS', level: 72, color: '#FF9900' },
  { name: 'Git', level: 88, color: '#F05032' }
];

export function SkillsModel() {
  const groupRef = useRef<THREE.Group>();
  const sphereRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    SKILLS.forEach((_, index) => {
      if (sphereRefs.current[index]) {
        // Create a double helix pattern
        const angle = (index / SKILLS.length) * Math.PI * 4; // Multiply by 4 for two complete rotations
        const radius = 4;
        const heightScale = 0.8;
        
        // Calculate position with a double helix pattern
        const x = Math.sin(angle + time * 0.2) * radius;
        const y = (index / SKILLS.length) * heightScale * 8 - 4; // Spread vertically
        const z = Math.cos(angle + time * 0.2) * radius;
        
        sphereRefs.current[index].position.set(x, y, z);
        
        // Dynamic scale based on skill level
        const baseScale = 0.6 + (SKILLS[index].level / 100) * 0.4;
        const pulse = Math.sin(time * 2 + index) * 0.1;
        sphereRefs.current[index].scale.setScalar(baseScale + pulse);
      }
    });

    if (groupRef.current) {
      // Gentle rotation of the entire structure
      groupRef.current.rotation.y = time * 0.1;
      groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Spine */}
      <Box args={[0.1, 10, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#4a9eff"
          emissive="#4a9eff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </Box>

      {/* Skill Nodes */}
      {SKILLS.map((skill, i) => (
        <group key={skill.name}>
          {/* Connection to spine */}
          <Box
            args={[2, 0.05, 0.05]}
            position={[1, 0, 0]}
          >
            <meshStandardMaterial
              color={skill.color}
              emissive={skill.color}
              emissiveIntensity={0.3}
              transparent
              opacity={0.3}
            />
          </Box>

          {/* Skill sphere */}
          <Sphere
            ref={(el) => (sphereRefs.current[i] = el!)}
            args={[0.3, 16, 16]}
          >
            <meshStandardMaterial
              color={skill.color}
              emissive={skill.color}
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>

          {/* Skill label */}
          <Text
            position={[0.8, 0, 0]}
            fontSize={0.35}
            color={skill.color}
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            {`${skill.name}\n${skill.level}%`}
          </Text>
        </group>
      ))}
    </group>
  );
}