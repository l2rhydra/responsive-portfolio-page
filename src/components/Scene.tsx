import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ReactLogo from './ReactLogo';

export function Scene() {
  return (
    <Canvas className="w-full h-[500px]">
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls 
        enableZoom={false}
        autoRotate
        autoRotateSpeed={7}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <ReactLogo />
    </Canvas>
  );
}