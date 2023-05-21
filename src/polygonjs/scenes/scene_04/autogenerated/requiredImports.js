// cop
import { EnvMapCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/EnvMap";
import { ImageCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/Image";
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshStandardMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard";
import { MeshStandardBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder";
// obj
import { CopNetworkObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork";
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { AreaLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AreaLight";
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { CameraFrameModeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraFrameMode";
import { CapsuleSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Capsule";
import { CircleSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Circle";
import { CopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy";
import { DeleteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Delete";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { HexagonsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hexagons";
import { JitterSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Jitter";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PhysicsPlayerSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PhysicsPlayer";
import { PhysicsRBDAttributesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PhysicsRBDAttributes";
import { PhysicsWorldSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PhysicsWorld";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { RoundedBoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/RoundedBox";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";
import { TubeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Tube";

// named functions
import { getPlayerInputDataBackward } from "@polygonjs/polygonjs/dist/src/engine/functions/getPlayerInputDataBackward";
import { getPlayerInputDataForward } from "@polygonjs/polygonjs/dist/src/engine/functions/getPlayerInputDataForward";
import { getPlayerInputDataJump } from "@polygonjs/polygonjs/dist/src/engine/functions/getPlayerInputDataJump";
import { getPlayerInputDataLeft } from "@polygonjs/polygonjs/dist/src/engine/functions/getPlayerInputDataLeft";
import { getPlayerInputDataRight } from "@polygonjs/polygonjs/dist/src/engine/functions/getPlayerInputDataRight";
import { getPlayerInputDataRun } from "@polygonjs/polygonjs/dist/src/engine/functions/getPlayerInputDataRun";
import { keyboardEventMatchesConfig } from "@polygonjs/polygonjs/dist/src/engine/functions/keyboardEventMatchesConfig";
import { physicsWorldReset } from "@polygonjs/polygonjs/dist/src/engine/functions/physicsWorldReset";
import { physicsWorldStepSimulation } from "@polygonjs/polygonjs/dist/src/engine/functions/physicsWorldStepSimulation";
import { playerPhysicsUpdate } from "@polygonjs/polygonjs/dist/src/engine/functions/playerPhysicsUpdate";
import { setPlayerInput } from "@polygonjs/polygonjs/dist/src/engine/functions/setPlayerInput";

export const requiredImports_scene_04 = {
  nodes: [
    EnvMapCopNode,
    ImageCopNode,
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    MeshStandardMatNode,
    MeshStandardBuilderMatNode,
    CopNetworkObjNode,
    GeoObjNode,
    AreaLightSopNode,
    BoxSopNode,
    CameraControlsSopNode,
    CameraFrameModeSopNode,
    CapsuleSopNode,
    CircleSopNode,
    CopySopNode,
    DeleteSopNode,
    HemisphereLightSopNode,
    HexagonsSopNode,
    JitterSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PhysicsPlayerSopNode,
    PhysicsRBDAttributesSopNode,
    PhysicsWorldSopNode,
    PolarTransformSopNode,
    RoundedBoxSopNode,
    SphereSopNode,
    SpotLightSopNode,
    TransformSopNode,
    TubeSopNode,
  ],
  operations: [],
  jsFunctions: [
    getPlayerInputDataBackward,
    getPlayerInputDataForward,
    getPlayerInputDataJump,
    getPlayerInputDataLeft,
    getPlayerInputDataRight,
    getPlayerInputDataRun,
    keyboardEventMatchesConfig,
    physicsWorldReset,
    physicsWorldStepSimulation,
    playerPhysicsUpdate,
    setPlayerInput,
  ],
};
