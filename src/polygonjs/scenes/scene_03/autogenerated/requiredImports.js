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
import { CADBooleanSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CADBoolean";
import { CADBoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CADBox";
import { CADFilletSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CADFillet";
import { CADGroupSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CADGroup";
import { CADMirrorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CADMirror";
import { CADTriangulateSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CADTriangulate";
import { CADTubeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CADTube";
import { AreaLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AreaLight";
import { BoxLinesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/BoxLines";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { CopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { HexagonsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hexagons";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";
import { SwitchSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Switch";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";
import { TubeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Tube";

export const requiredImports_scene_03 = {
  nodes: [
    EnvMapCopNode,
    ImageCopNode,
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    MeshStandardMatNode,
    MeshStandardBuilderMatNode,
    CopNetworkObjNode,
    GeoObjNode,
    CADBooleanSopNode,
    CADBoxSopNode,
    CADFilletSopNode,
    CADGroupSopNode,
    CADMirrorSopNode,
    CADTriangulateSopNode,
    CADTubeSopNode,
    AreaLightSopNode,
    BoxLinesSopNode,
    CameraControlsSopNode,
    CopySopNode,
    HemisphereLightSopNode,
    HexagonsSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PolarTransformSopNode,
    SpotLightSopNode,
    SwitchSopNode,
    TransformSopNode,
    TubeSopNode,
  ],
  operations: [],
  jsFunctions: [],
};
