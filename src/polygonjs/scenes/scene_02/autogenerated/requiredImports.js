// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshBasicBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshBasicBuilder";
import { PointsBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/PointsBuilder";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { AttribIdSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribId";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { CameraFrameModeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraFrameMode";
import { DeleteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Delete";
import { InstanceSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { ParticlesSystemGpuSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/ParticlesSystemGpu";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PointSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Point";
import { RestAttributesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/RestAttributes";
import { ScatterSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Scatter";
import { SortSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sort";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";
import { TextSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Text";

// named functions
import { divideNumber } from "@polygonjs/polygonjs/dist/src/engine/functions/divideNumber";
import { globalsRayFromCursor } from "@polygonjs/polygonjs/dist/src/engine/functions/globalsRayFromCursor";
import { globalsTime } from "@polygonjs/polygonjs/dist/src/engine/functions/globalsTime";
import { globalsTimeDelta } from "@polygonjs/polygonjs/dist/src/engine/functions/globalsTimeDelta";
import { multScalarVector3 } from "@polygonjs/polygonjs/dist/src/engine/functions/multScalarVector3";
import { particlesSystemReset } from "@polygonjs/polygonjs/dist/src/engine/functions/particlesSystemReset";
import { particlesSystemStepSimulation } from "@polygonjs/polygonjs/dist/src/engine/functions/particlesSystemStepSimulation";
import { planeSet } from "@polygonjs/polygonjs/dist/src/engine/functions/planeSet";
import { previousValueVector3 } from "@polygonjs/polygonjs/dist/src/engine/functions/previousValueVector3";
import { rayIntersectPlane } from "@polygonjs/polygonjs/dist/src/engine/functions/rayIntersectPlane";
import { setParamVector3 } from "@polygonjs/polygonjs/dist/src/engine/functions/setParamVector3";
import { subtractVector } from "@polygonjs/polygonjs/dist/src/engine/functions/subtractVector";

export const requiredImports_scene_02 = {
  nodes: [
    CameraOrbitControlsEventNode,
    MeshBasicBuilderMatNode,
    PointsBuilderMatNode,
    GeoObjNode,
    ActorSopNode,
    AttribIdSopNode,
    CameraControlsSopNode,
    CameraFrameModeSopNode,
    DeleteSopNode,
    InstanceSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    ParticlesSystemGpuSopNode,
    PerspectiveCameraSopNode,
    PointSopNode,
    RestAttributesSopNode,
    ScatterSopNode,
    SortSopNode,
    SphereSopNode,
    TextSopNode,
  ],
  operations: [],
  jsFunctions: [
    divideNumber,
    globalsRayFromCursor,
    globalsTime,
    globalsTimeDelta,
    multScalarVector3,
    particlesSystemReset,
    particlesSystemStepSimulation,
    planeSet,
    previousValueVector3,
    rayIntersectPlane,
    setParamVector3,
    subtractVector,
  ],
};
