import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // allows us to place something on it
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.9 : 1.6}
        position={isMobile ? [0, -6, 1.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //add event listener that changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //set the initial value of the ismobile state variable
    setIsMobile(mediaQuery.matches);

    //define a callback function to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    //add the callback funtion as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //remove the listener when the component  is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  try {
    return (
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    );
  } catch (error) {
    console.log(error);
  }
};

export default ComputersCanvas;
