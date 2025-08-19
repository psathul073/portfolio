import { Canvas } from "@react-three/fiber";
import { PositionalAudio, PerformanceMonitor } from "@react-three/drei";
import { useRef, memo, useState } from "react";
import Drone from './Robo-drone';
import '../styles/_robo-drone.scss'


const DroneViewer = memo(function RoboDrone() {

  const audioRef = useRef();
  const [isMobileLowSpec, setIsMobileLowSpec] = useState(false);


  return (

    <div className="drone-container" >
      <Canvas
        shadows={!isMobileLowSpec}
        gl={{ alpha: !isMobileLowSpec, antialias: !isMobileLowSpec }}
        camera={{ position: [0, 0, 5], fov: isMobileLowSpec ? 65 : 75 }}
        dpr={isMobileLowSpec ? 0.7 : 1.5}
      >

        {/* Optimize for weak device */}
        <PerformanceMonitor onDecline={() => setIsMobileLowSpec(true)} />

        {!isMobileLowSpec && <ambientLight intensity={2.4} />}

        <spotLight
          position={[0, 3, 2]}
          intensity={isMobileLowSpec ? 0.5 : 1.9}
          castShadow={!isMobileLowSpec}
        />

        {/* <OrbitControls
            enableDamping={!isMobileLowSpec}
            dampingFactor={0.05}
            enableRotate={!isMobileLowSpec}
            enableZoom={false}
            rotateSpeed={isMobileLowSpec ? 0.5 : 1}
          /> */}

        <Drone lowSpec={isMobileLowSpec} audioRef={audioRef} />

        {!isMobileLowSpec && (
          <mesh position={[0, -1, 0]} receiveShadow>
            <cylinderGeometry args={[1.3, 1, 0.4, 32]} />
            <meshStandardMaterial color="#238636" metalness={0.2} roughness={0.7} />
          </mesh>
        )}


        {!isMobileLowSpec && <PositionalAudio
          ref={audioRef}
          url="/sound/r2_d2_sound.mp3"
          distance={5}
          loop={false}
          autoplay={false} />
        }

      </Canvas>

    </div>
  );
});

export default DroneViewer;
