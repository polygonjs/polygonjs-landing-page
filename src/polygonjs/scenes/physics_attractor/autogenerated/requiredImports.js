// actor
import { GetChildrenPhysicsRBDPropertiesActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/GetChildrenPhysicsRBDProperties";
import { GetChildrenPropertiesActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/GetChildrenProperties";
import { GetObjectActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/GetObject";
import { GetObjectPropertyActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/GetObjectProperty";
import { MultScalarActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/MultScalar";
import { NegateActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Negate";
import { NormalizeActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Normalize";
import { OnScenePlayStateActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnScenePlayState";
import { OnTickActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnTick";
import { PhysicsRBDApplyImpulseActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/PhysicsRBDApplyImpulse";
import { PhysicsWorldResetActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/PhysicsWorldReset";
import { PhysicsWorldStepSimulationActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/PhysicsWorldStepSimulation";
import { PlaneActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Plane";
import { RayFromCursorActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/RayFromCursor";
import { RayIntersectPlaneActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/RayIntersectPlane";
import { SetGeometryInstanceAttributeActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetGeometryInstanceAttribute";
import { SetGeometryInstanceTransformsActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetGeometryInstanceTransforms";
import { SetPhysicsRBDPositionActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetPhysicsRBDPosition";
// cop
import { EnvMapCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/EnvMap";
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshPhysicalBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshPhysicalBuilder";
import { MeshStandardBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// post
import { NormalPostNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/post/Normal";
import { ChromaticAberrationPostNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/post/ChromaticAberration";
import { NullPostNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/post/Null";
import { ScreenSpaceAmbientOcclusionPostNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/post/ScreenSpaceAmbientOcclusion";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { AreaLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AreaLight";
import { AttribCreateSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCreate";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { CameraPostProcessSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraPostProcess";
import { CopNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CopNetwork";
import { CopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy";
import { DeleteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Delete";
import { FuseSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Fuse";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { HierarchySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy";
import { IcosahedronSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Icosahedron";
import { InstanceSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { ObjectPropertiesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/ObjectProperties";
import { PaletteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Palette";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PhysicsRBDAttributesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PhysicsRBDAttributes";
import { PhysicsWorldSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PhysicsWorld";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";

export const requiredImports_physics_attractor = {
  nodes: [
    GetChildrenPhysicsRBDPropertiesActorNode,
    GetChildrenPropertiesActorNode,
    GetObjectActorNode,
    GetObjectPropertyActorNode,
    MultScalarActorNode,
    NegateActorNode,
    NormalizeActorNode,
    OnScenePlayStateActorNode,
    OnTickActorNode,
    PhysicsRBDApplyImpulseActorNode,
    PhysicsWorldResetActorNode,
    PhysicsWorldStepSimulationActorNode,
    PlaneActorNode,
    RayFromCursorActorNode,
    RayIntersectPlaneActorNode,
    SetGeometryInstanceAttributeActorNode,
    SetGeometryInstanceTransformsActorNode,
    SetPhysicsRBDPositionActorNode,
    EnvMapCopNode,
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    MeshPhysicalBuilderMatNode,
    MeshStandardBuilderMatNode,
    GeoObjNode,
    NormalPostNode,
    ChromaticAberrationPostNode,
    NullPostNode,
    ScreenSpaceAmbientOcclusionPostNode,
    ActorSopNode,
    AreaLightSopNode,
    AttribCreateSopNode,
    CameraControlsSopNode,
    CameraPostProcessSopNode,
    CopNetworkSopNode,
    CopySopNode,
    DeleteSopNode,
    FuseSopNode,
    HemisphereLightSopNode,
    HierarchySopNode,
    IcosahedronSopNode,
    InstanceSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    ObjectPropertiesSopNode,
    PaletteSopNode,
    PerspectiveCameraSopNode,
    PhysicsRBDAttributesSopNode,
    PhysicsWorldSopNode,
    PolarTransformSopNode,
    SphereSopNode,
    SpotLightSopNode,
    TransformSopNode,
  ],
  operations: [],
};
