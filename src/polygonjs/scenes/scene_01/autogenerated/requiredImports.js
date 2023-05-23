// cop
import { EnvMapCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/EnvMap";
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// mat
import { RayMarchingBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/RayMarchingBuilder";
// obj
import { CopNetworkObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork";
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// rop
import { WebGLRendererRopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/rop/WebGLRenderer";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { BoxLinesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/BoxLines";
import { CameraFrameModeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraFrameMode";
import { CameraRendererSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraRenderer";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { HierarchySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { NullSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Null";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";

// named functions
import { eulerSetFromVector3 } from "@polygonjs/polygonjs/dist/src/engine/functions/eulerSetFromVector3";
import { floatToVec3 } from "@polygonjs/polygonjs/dist/src/engine/functions/floatToVec3";
import { globalsCursor } from "@polygonjs/polygonjs/dist/src/engine/functions/globalsCursor";
import { mathFloat_3 } from "@polygonjs/polygonjs/dist/src/engine/functions/mathFloat_3";
import { mathFloat_4 } from "@polygonjs/polygonjs/dist/src/engine/functions/mathFloat_4";
import { multAdd } from "@polygonjs/polygonjs/dist/src/engine/functions/multAdd";
import { setObjectRotation } from "@polygonjs/polygonjs/dist/src/engine/functions/setObjectRotation";
import { smootherstep } from "@polygonjs/polygonjs/dist/src/engine/functions/smootherstep";

export const requiredImports_scene_01 = {
  nodes: [
    EnvMapCopNode,
    ImageEXRCopNode,
    RayMarchingBuilderMatNode,
    CopNetworkObjNode,
    GeoObjNode,
    WebGLRendererRopNode,
    ActorSopNode,
    BoxSopNode,
    BoxLinesSopNode,
    CameraFrameModeSopNode,
    CameraRendererSopNode,
    HemisphereLightSopNode,
    HierarchySopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    NullSopNode,
    PerspectiveCameraSopNode,
    PolarTransformSopNode,
    SpotLightSopNode,
  ],
  operations: [],
  jsFunctions: [
    eulerSetFromVector3,
    floatToVec3,
    globalsCursor,
    mathFloat_3,
    mathFloat_4,
    multAdd,
    setObjectRotation,
    smootherstep,
  ],
};
