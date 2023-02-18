// actor
import { CursorActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Cursor";
import { FloatToVec3ActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/FloatToVec3";
import { MaxActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Max";
import { MultAddActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/MultAdd";
import { OnTickActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnTick";
import { SetMaterialUniformActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetMaterialUniform";
import { SetObjectPolarTransformActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectPolarTransform";
import { SetObjectRotationActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectRotation";
import { Vec2ToFloatActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Vec2ToFloat";
// anim
import { DurationAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/Duration";
import { EasingAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/Easing";
import { NullAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/Null";
import { PlayAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/Play";
import { PropertyNameAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/PropertyName";
import { PropertyValueAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/PropertyValue";
import { TargetAnimNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/anim/Target";
// cop
import { SDFExporterCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/SDFExporter";
import { SDFFromObjectCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/SDFFromObject";
import { SDFFromUrlCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/SDFFromUrl";
import { EnvMapCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/EnvMap";
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// event
import { AnimationEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/Animation";
import { SceneEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/Scene";
// mat
import { AnimationsNetworkMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/AnimationsNetwork";
import { EventsNetworkMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/EventsNetwork";
import { MeshStandardMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard";
import { RayMarchingBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/RayMarchingBuilder";
// obj
import { CopNetworkObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork";
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { BoxLinesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/BoxLines";
import { CopNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CopNetwork";
import { EmptyObjectSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EmptyObject";
import { FileGLTFSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/FileGLTF";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { SetChildrenSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SetChildren";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";

export const requiredImports_rhino = {
  nodes: [
    CursorActorNode,
    FloatToVec3ActorNode,
    MaxActorNode,
    MultAddActorNode,
    OnTickActorNode,
    SetMaterialUniformActorNode,
    SetObjectPolarTransformActorNode,
    SetObjectRotationActorNode,
    Vec2ToFloatActorNode,
    DurationAnimNode,
    EasingAnimNode,
    NullAnimNode,
    PlayAnimNode,
    PropertyNameAnimNode,
    PropertyValueAnimNode,
    TargetAnimNode,
    SDFExporterCopNode,
    SDFFromObjectCopNode,
    SDFFromUrlCopNode,
    EnvMapCopNode,
    ImageEXRCopNode,
    AnimationEventNode,
    SceneEventNode,
    AnimationsNetworkMatNode,
    EventsNetworkMatNode,
    MeshStandardMatNode,
    RayMarchingBuilderMatNode,
    CopNetworkObjNode,
    GeoObjNode,
    ActorSopNode,
    BoxSopNode,
    BoxLinesSopNode,
    CopNetworkSopNode,
    EmptyObjectSopNode,
    FileGLTFSopNode,
    HemisphereLightSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    SetChildrenSopNode,
    TransformSopNode,
  ],
  operations: [],
};
