// actor
import { GetObjectActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/GetObject";
import { GetObjectPropertyActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/GetObjectProperty";
import { OnPlayerEventActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnPlayerEvent";
import { OnScenePlayStateActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnScenePlayState";
import { OnTickActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnTick";
import { PhysicsPlayerUpdateActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/PhysicsPlayerUpdate";
import { PhysicsWorldResetActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/PhysicsWorldReset";
import { PhysicsWorldStepSimulationActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/PhysicsWorldStepSimulation";
import { SetObjectPositionActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectPosition";
// cop
import { EnvMapCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/EnvMap";
import { ImageCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/Image";
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshPhysicalBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshPhysicalBuilder";
import { MeshStandardMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard";
import { MeshStandardBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder";
// obj
import { CopNetworkObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork";
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { AddSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Add";
import { AttribPromoteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribPromote";
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { CapsuleSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Capsule";
import { ColorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Color";
import { CopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy";
import { CurveFromPointsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CurveFromPoints";
import { EmptyObjectSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EmptyObject";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { ObjectPropertiesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/ObjectProperties";
import { PaletteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Palette";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PhysicsGroundSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PhysicsGround";
import { PhysicsPlayerSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PhysicsPlayer";
import { PhysicsRBDAttributesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PhysicsRBDAttributes";
import { PhysicsRBDJointsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PhysicsRBDJoints";
import { PhysicsWorldSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PhysicsWorld";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { ResampleSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Resample";
import { RoundedBoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/RoundedBox";
import { SetChildrenSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SetChildren";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";
import { SubnetSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Subnet";
import { SubnetOutputSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SubnetOutput";
import { TangentSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Tangent";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";
import { TubeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Tube";

export const requiredImports_player = {
  nodes: [
    GetObjectActorNode,
    GetObjectPropertyActorNode,
    OnPlayerEventActorNode,
    OnScenePlayStateActorNode,
    OnTickActorNode,
    PhysicsPlayerUpdateActorNode,
    PhysicsWorldResetActorNode,
    PhysicsWorldStepSimulationActorNode,
    SetObjectPositionActorNode,
    EnvMapCopNode,
    ImageCopNode,
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    MeshPhysicalBuilderMatNode,
    MeshStandardMatNode,
    MeshStandardBuilderMatNode,
    CopNetworkObjNode,
    GeoObjNode,
    ActorSopNode,
    AddSopNode,
    AttribPromoteSopNode,
    BoxSopNode,
    CameraControlsSopNode,
    CapsuleSopNode,
    ColorSopNode,
    CopySopNode,
    CurveFromPointsSopNode,
    EmptyObjectSopNode,
    HemisphereLightSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    ObjectPropertiesSopNode,
    PaletteSopNode,
    PerspectiveCameraSopNode,
    PhysicsGroundSopNode,
    PhysicsPlayerSopNode,
    PhysicsRBDAttributesSopNode,
    PhysicsRBDJointsSopNode,
    PhysicsWorldSopNode,
    PolarTransformSopNode,
    ResampleSopNode,
    RoundedBoxSopNode,
    SetChildrenSopNode,
    SphereSopNode,
    SpotLightSopNode,
    SubnetSopNode,
    SubnetOutputSopNode,
    TangentSopNode,
    TransformSopNode,
    TubeSopNode,
  ],
  operations: [],
};
