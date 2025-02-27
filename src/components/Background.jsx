import { memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles } from '@react-three/drei';

const Background = memo(function Background() {
  return (
    <Canvas className="inset-0 z-0" style={{ position: 'absolute', background: '#11111A' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Stars radius={150} depth={70} count={5000} factor={5} saturation={0} fade />

      <Sparkles
        count={250}
        size={2}
        speed={0.3}
        opacity={0.6}
        color="#FFF7CF"
        position={[0, 0, -5]}
        scale={[20, 20, 20]}
      />

      <OrbitControls enableZoom={true} />
    </Canvas>
  );
});

export default Background;
