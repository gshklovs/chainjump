// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
declare namespace RuntimeExports {
    let HEAPU8: any;
    let HEAPU16: any;
    let HEAPU32: any;
    function stackSave(): any;
    function stackRestore(val: any): any;
    function stackAlloc(sz: any): any;
}
interface WasmModule {
  _malloc(_0: number): number;
  _free(_0: number): void;
  ___set_stack_limits(_0: number, _1: number): void;
}

type EmbindString = ArrayBuffer|Uint8Array|Uint8ClampedArray|Int8Array|string;
export interface ClassHandle {
  isAliasOf(other: ClassHandle): boolean;
  delete(): void;
  deleteLater(): this;
  isDeleted(): boolean;
  clone(): this;
}
export interface b2Vec2 extends ClassHandle {
  x: number;
  y: number;
  Copy(_0: b2Vec2): b2Vec2;
  Clone(): b2Vec2;
  Add(_0: b2Vec2): b2Vec2;
  Sub(_0: b2Vec2): b2Vec2;
  Mul(_0: b2Vec2): b2Vec2;
  Set(_0: number, _1: number): b2Vec2;
  MulSV(_0: number): b2Vec2;
}

export interface b2CosSin extends ClassHandle {
  cosine: number;
  sine: number;
}

export interface b2Rot extends ClassHandle {
  c: number;
  s: number;
  SetAngle(_0: number): void;
  GetAngle(): number;
}

export interface b2Transform extends ClassHandle {
  p: b2Vec2;
  q: b2Rot;
  ToBytes(): any;
}

export interface b2Mat22 extends ClassHandle {
  cx: b2Vec2;
  cy: b2Vec2;
}

export interface b2AABB extends ClassHandle {
  lowerBound: b2Vec2;
  upperBound: b2Vec2;
}

export interface b2Hull extends ClassHandle {
  count: number;
  getPoint(_0: number): b2Vec2;
}

export interface b2WorldDef extends ClassHandle {
  gravity: b2Vec2;
  enableSleep: boolean;
  enableContinuous: boolean;
  workerCount: number;
  internalValue: number;
  restitutionThreshold: number;
  maxContactPushSpeed: number;
  hitEventThreshold: number;
  contactHertz: number;
  contactDampingRatio: number;
  jointHertz: number;
  jointDampingRatio: number;
  maximumLinearSpeed: number;
}

export interface b2CastOutput extends ClassHandle {
  normal: b2Vec2;
  point: b2Vec2;
  hit: boolean;
  iterations: number;
  fraction: number;
}

export interface b2RayCastInput extends ClassHandle {
  origin: b2Vec2;
  translation: b2Vec2;
  maxFraction: number;
}

export interface b2ManifoldPoint extends ClassHandle {
  point: b2Vec2;
  anchorA: b2Vec2;
  anchorB: b2Vec2;
  persisted: boolean;
  id: number;
  separation: number;
  normalImpulse: number;
  tangentImpulse: number;
  totalNormalImpulse: number;
  normalVelocity: number;
}

export interface b2Manifold extends ClassHandle {
  normal: b2Vec2;
  pointCount: number;
  GetPoint(_0: number): b2ManifoldPoint;
  SetPoint(_0: number, _1: b2ManifoldPoint): void;
}

export interface b2Counters extends ClassHandle {
  bodyCount: number;
  shapeCount: number;
  contactCount: number;
  jointCount: number;
  islandCount: number;
  stackUsed: number;
  staticTreeHeight: number;
  treeHeight: number;
  byteCount: number;
  taskCount: number;
  GetColorCount(_0: number): number;
  SetColorCount(_0: number, _1: number): void;
}

export interface b2SensorEvents extends ClassHandle {
  beginCount: number;
  endCount: number;
  GetBeginEvent(_0: number): b2SensorBeginTouchEvent;
  GetEndEvent(_0: number): b2SensorEndTouchEvent;
}

export interface b2BodyEvents extends ClassHandle {
  moveCount: number;
  GetMoveEvent(_0: number): b2BodyMoveEvent;
}

export interface b2BodyMoveEvent extends ClassHandle {
  transform: b2Transform;
  fellAsleep: boolean;
  bodyId: b2BodyId;
}

export interface b2ContactEvents extends ClassHandle {
  beginCount: number;
  endCount: number;
  hitCount: number;
  GetBeginEvent(_0: number): b2ContactBeginTouchEvent;
  GetEndEvent(_0: number): b2ContactEndTouchEvent;
  GetHitEvent(_0: number): b2ContactHitEvent;
}

export interface b2ContactBeginTouchEvent extends ClassHandle {
  manifold: b2Manifold;
  shapeIdA: b2ShapeId;
  shapeIdB: b2ShapeId;
}

export interface b2ContactData extends ClassHandle {
  manifold: b2Manifold;
  shapeIdA: b2ShapeId;
  shapeIdB: b2ShapeId;
}

export interface b2ContactHitEvent extends ClassHandle {
  point: b2Vec2;
  normal: b2Vec2;
  shapeIdA: b2ShapeId;
  shapeIdB: b2ShapeId;
  approachSpeed: number;
}

export interface b2Profile extends ClassHandle {
  pairs: number;
  collide: number;
  step: number;
  solve: number;
  mergeIslands: number;
  prepareStages: number;
  solveConstraints: number;
  prepareConstraints: number;
  integrateVelocities: number;
  warmStart: number;
  solveImpulses: number;
  integratePositions: number;
  relaxImpulses: number;
  applyRestitution: number;
  storeImpulses: number;
  splitIslands: number;
  transforms: number;
  hitEvents: number;
  refit: number;
  bullets: number;
  sleepIslands: number;
  sensors: number;
}

export interface b2QueryFilter extends ClassHandle {
  categoryBits: number;
  maskBits: number;
  setCategoryBits64(_0: EmbindString): void;
  getCategoryBits64(): string;
  setMaskBits64(_0: EmbindString): void;
  getMaskBits64(): string;
}

export interface b2ExplosionDef extends ClassHandle {
  position: b2Vec2;
  maskBits: number;
  radius: number;
  falloff: number;
  impulsePerLength: number;
}

export interface b2RayResult extends ClassHandle {
  point: b2Vec2;
  normal: b2Vec2;
  hit: boolean;
  shapeId: b2ShapeId;
  nodeVisits: number;
  leafVisits: number;
  fraction: number;
}

export interface BasicWorldInterface extends ClassHandle {
  GetGravity(): b2Vec2;
  GetBodyEvents(): b2BodyEvents;
  GetContactEvents(): b2ContactEvents;
  GetCounters(): b2Counters;
  GetProfile(): b2Profile;
  GetSensorEvents(): b2SensorEvents;
  Destroy(): void;
  SetGravity(_0: b2Vec2): void;
  Draw(_0: b2DebugDraw): void;
  IsValid(): boolean;
  EnableContinuous(_0: boolean): void;
  IsContinuousEnabled(): boolean;
  EnableSleeping(_0: boolean): void;
  IsSleepingEnabled(): boolean;
  EnableWarmStarting(_0: boolean): void;
  IsWarmStartingEnabled(): boolean;
  GetAwakeBodyCount(): number;
  Step(_0: number, _1: number): void;
  SetContactTuning(_0: number, _1: number, _2: number): void;
  SetMaximumLinearSpeed(_0: number): void;
  GetMaximumLinearSpeed(): number;
  SetRestitutionThreshold(_0: number): void;
  GetRestitutionThreshold(): number;
  SetHitEventThreshold(_0: number): void;
  GetHitEventThreshold(): number;
}

export interface WorldRef extends ClassHandle {
}

export interface WorldConstRef extends ClassHandle {
}

export interface World extends BasicWorldInterface {
  CreateBody(_0: b2BodyDef): Body | null;
  GetPointer(): any;
}

export interface b2Circle extends ClassHandle {
  center: b2Vec2;
  radius: number;
}

export interface b2Capsule extends ClassHandle {
  center1: b2Vec2;
  center2: b2Vec2;
  radius: number;
}

export interface b2Segment extends ClassHandle {
  point1: b2Vec2;
  point2: b2Vec2;
}

export interface b2Filter extends ClassHandle {
  groupIndex: number;
  categoryBits: number;
  maskBits: number;
  setCategoryBits64(_0: EmbindString): void;
  getCategoryBits64(): string;
  setMaskBits64(_0: EmbindString): void;
  getMaskBits64(): string;
}

export interface b2ShapeDef extends ClassHandle {
  filter: b2Filter;
  material: b2SurfaceMaterial;
  isSensor: boolean;
  enableSensorEvents: boolean;
  enableContactEvents: boolean;
  enableHitEvents: boolean;
  enablePreSolveEvents: boolean;
  invokeContactCreation: boolean;
  updateBodyMass: boolean;
  density: number;
}

export interface b2ShapeProxy extends ClassHandle {
  count: number;
  radius: number;
  getPoint(_0: number): b2Vec2;
  setPoint(_0: number, _1: b2Vec2): void;
}

export interface b2SurfaceMaterial extends ClassHandle {
  userMaterialId: number;
  customColor: number;
  friction: number;
  restitution: number;
  rollingResistance: number;
  tangentSpeed: number;
}

export interface b2Polygon extends ClassHandle {
  centroid: b2Vec2;
  count: number;
  radius: number;
  GetVertex(_0: number): b2Vec2;
  SetVertex(_0: number, _1: b2Vec2): void;
  GetNormal(_0: number): b2Vec2;
  SetNormal(_0: number, _1: b2Vec2): void;
}

export interface b2ChainDef extends ClassHandle {
  filter: b2Filter;
  isLoop: boolean;
  enableSensorEvents: boolean;
  materialCount: number;
  count: number;
  internalValue: number;
  delete(): void;
  GetMaterials(): any;
  SetMaterials(_0: any): void;
  GetPoints(): any;
  SetPoints(_0: any): void;
}

export interface BasicChainInterface extends ClassHandle {
  GetWorld(): WorldRef;
  Destroy(): void;
  IsValid(): boolean;
  GetSegmentCount(): number;
  SetFriction(_0: number): void;
  GetFriction(): number;
  SetRestitution(_0: number): void;
  GetRestitution(): number;
}

export interface Chain extends BasicChainInterface {
  GetSegments(): any;
  GetPointer(): any;
}

export interface b2ChainSegment extends ClassHandle {
  ghost1: b2Vec2;
  segment: b2Segment;
  ghost2: b2Vec2;
  chainId: number;
}

export interface b2ShapeTypeValue<T extends number> {
  value: T;
}
export type b2ShapeType = b2ShapeTypeValue<0>|b2ShapeTypeValue<1>|b2ShapeTypeValue<2>|b2ShapeTypeValue<3>|b2ShapeTypeValue<4>|b2ShapeTypeValue<5>;

export interface BasicShapeInterface extends ClassHandle {
  GetAABB(): b2AABB;
  GetFilter(): b2Filter;
  GetClosestPoint(_0: b2Vec2): b2Vec2;
  RayCast(_0: b2RayCastInput): b2CastOutput;
  GetType(): b2ShapeType;
  GetWorld(): WorldRef;
  GetBody(): BodyRef;
  GetParentChain(): ChainRef;
  SetFilter(_0: b2Filter): void;
  Destroy(_0: boolean): void;
  IsValid(): boolean;
  EnableContactEvents(_0: boolean): void;
  AreContactEventsEnabled(): boolean;
  EnableHitEvents(_0: boolean): void;
  AreHitEventsEnabled(): boolean;
  IsSensor(): boolean;
  EnablePreSolveEvents(_0: boolean): void;
  ArePreSolveEventsEnabled(): boolean;
  TestPoint(_0: b2Vec2): boolean;
  GetContactCapacity(): number;
  GetSensorCapacity(): number;
  GetDensity(): number;
  SetDensity(_0: number, _1: boolean): void;
  GetFriction(): number;
  SetFriction(_0: number): void;
  GetRestitution(): number;
  SetRestitution(_0: number): void;
}

export interface Shape extends BasicShapeInterface {
  GetContactData(): any;
  GetSensorOverlaps(): any;
  GetPointer(): any;
}

export interface b2MassData extends ClassHandle {
  center: b2Vec2;
  mass: number;
  rotationalInertia: number;
}

export interface b2BodyTypeValue<T extends number> {
  value: T;
}
export type b2BodyType = b2BodyTypeValue<0>|b2BodyTypeValue<1>|b2BodyTypeValue<2>|b2BodyTypeValue<3>;

export interface b2BodyDef extends ClassHandle {
  type: b2BodyType;
  position: b2Vec2;
  rotation: b2Rot;
  linearVelocity: b2Vec2;
  enableSleep: boolean;
  isAwake: boolean;
  fixedRotation: boolean;
  isBullet: boolean;
  isEnabled: boolean;
  allowFastRotation: boolean;
  internalValue: number;
  angularVelocity: number;
  linearDamping: number;
  angularDamping: number;
  gravityScale: number;
  sleepThreshold: number;
}

export interface BasicBodyInterface extends ClassHandle {
  GetMassData(): b2MassData;
  ComputeAABB(): b2AABB;
  GetLinearVelocity(): b2Vec2;
  GetLocalCenterOfMass(): b2Vec2;
  GetLocalPoint(_0: b2Vec2): b2Vec2;
  GetLocalVector(_0: b2Vec2): b2Vec2;
  GetPosition(): b2Vec2;
  GetRotation(): b2Rot;
  GetTransform(): b2Transform;
  GetType(): b2BodyType;
  GetWorld(): WorldRef;
  GetWorldCenterOfMass(): b2Vec2;
  GetWorldPoint(_0: b2Vec2): b2Vec2;
  GetWorldVector(_0: b2Vec2): b2Vec2;
  Destroy(): void;
  Enable(): void;
  Disable(): void;
  ApplyMassFromShapes(): void;
  SetMassData(_0: b2MassData): void;
  SetLinearVelocity(_0: b2Vec2): void;
  SetTransform(_0: b2Vec2, _1: b2Rot): void;
  SetType(_0: b2BodyType): void;
  IsValid(): boolean;
  IsEnabled(): boolean;
  ApplyForce(_0: b2Vec2, _1: b2Vec2, _2: boolean): void;
  ApplyForceToCenter(_0: b2Vec2, _1: boolean): void;
  ApplyLinearImpulse(_0: b2Vec2, _1: b2Vec2, _2: boolean): void;
  ApplyLinearImpulseToCenter(_0: b2Vec2, _1: boolean): void;
  SetAwake(_0: boolean): void;
  IsAwake(): boolean;
  EnableSleep(_0: boolean): void;
  IsSleepEnabled(): boolean;
  SetBullet(_0: boolean): void;
  IsBullet(): boolean;
  EnableContactEvents(_0: boolean): void;
  SetFixedRotation(_0: boolean): void;
  IsFixedRotation(): boolean;
  EnableHitEvents(_0: boolean): void;
  GetContactCapacity(): number;
  GetJointCount(): number;
  GetShapeCount(): number;
  SetAngularDamping(_0: number): void;
  GetAngularDamping(): number;
  SetAngularVelocity(_0: number): void;
  GetAngularVelocity(): number;
  ApplyAngularImpulse(_0: number, _1: boolean): void;
  ApplyTorque(_0: number, _1: boolean): void;
  GetMass(): number;
  GetRotationalInertia(): number;
  SetSleepThreshold(_0: number): void;
  GetSleepThreshold(): number;
  SetGravityScale(_0: number): void;
  GetGravityScale(): number;
  SetLinearDamping(_0: number): void;
  GetLinearDamping(): number;
}

export interface Body extends BasicBodyInterface {
  CreateChain(_0: b2ChainDef): Chain | null;
  CreateCapsuleShape(_0: b2ShapeDef, _1: b2Capsule): Shape | null;
  CreateCircleShape(_0: b2ShapeDef, _1: b2Circle): Shape | null;
  CreatePolygonShape(_0: b2ShapeDef, _1: b2Polygon): Shape | null;
  CreateSegmentShape(_0: b2ShapeDef, _1: b2Segment): Shape | null;
  GetContactData(): any;
  GetJoints(): any;
  GetShapes(): any;
  GetPointer(): any;
}

export interface b2JointTypeValue<T extends number> {
  value: T;
}
export type b2JointType = b2JointTypeValue<0>|b2JointTypeValue<2>|b2JointTypeValue<3>|b2JointTypeValue<1>|b2JointTypeValue<4>|b2JointTypeValue<5>|b2JointTypeValue<6>|b2JointTypeValue<7>;

export interface BodyRef extends ClassHandle {
}

export interface BodyConstRef extends ClassHandle {
}

export interface ChainRef extends ClassHandle {
}

export interface ChainConstRef extends ClassHandle {
}

export interface BasicJointInterface extends ClassHandle {
  GetBodyA(): BodyRef;
  GetBodyB(): BodyRef;
  GetConstraintForce(): b2Vec2;
  GetLocalAnchorA(): b2Vec2;
  GetLocalAnchorB(): b2Vec2;
  GetType(): b2JointType;
  GetWorld(): WorldRef;
  Destroy(): void;
  WakeBodies(): void;
  IsValid(): boolean;
  SetCollideConnected(_0: boolean): void;
  GetCollideConnected(): boolean;
  GetConstraintTorque(): number;
}

export interface Joint extends BasicJointInterface {
  GetPointer(): any;
}

export interface JointRef extends ClassHandle {
}

export interface JointConstRef extends ClassHandle {
}

export interface DistanceJointRef extends ClassHandle {
}

export interface DistanceJointConstRef extends ClassHandle {
}

export interface MotorJointRef extends ClassHandle {
}

export interface MotorJointConstRef extends ClassHandle {
}

export interface MouseJointRef extends ClassHandle {
}

export interface MouseJointConstRef extends ClassHandle {
}

export interface PrismaticJointRef extends ClassHandle {
}

export interface PrismaticJointConstRef extends ClassHandle {
}

export interface RevoluteJointRef extends ClassHandle {
}

export interface RevoluteJointConstRef extends ClassHandle {
}

export interface WeldJointRef extends ClassHandle {
}

export interface WeldJointConstRef extends ClassHandle {
}

export interface WheelJointRef extends ClassHandle {
}

export interface WheelJointConstRef extends ClassHandle {
}

export interface BasicDistanceJointInterface extends ClassHandle {
  EnableLimit(_0: boolean): void;
  IsLimitEnabled(): boolean;
  EnableMotor(_0: boolean): void;
  IsMotorEnabled(): boolean;
  EnableSpring(_0: boolean): void;
  IsSpringEnabled(): boolean;
  GetCurrentLength(): number;
  SetLength(_0: number): void;
  GetLength(): number;
  SetLengthRange(_0: number, _1: number): void;
  GetMaxLength(): number;
  SetMaxMotorForce(_0: number): void;
  GetMaxMotorForce(): number;
  GetMinLength(): number;
  GetMotorForce(): number;
  SetMotorSpeed(_0: number): void;
  GetMotorSpeed(): number;
  SetSpringDampingRatio(_0: number): void;
  GetSpringDampingRatio(): number;
  SetSpringHertz(_0: number): void;
  GetSpringHertz(): number;
}

export interface BasicMotorJointInterface extends ClassHandle {
  GetLinearOffset(): b2Vec2;
  SetLinearOffset(_0: b2Vec2): void;
  SetAngularOffset(_0: number): void;
  GetAngularOffset(): number;
  SetCorrectionFactor(_0: number): void;
  GetCorrectionFactor(): number;
  SetMaxForce(_0: number): void;
  GetMaxForce(): number;
  SetMaxTorque(_0: number): void;
  GetMaxTorque(): number;
}

export interface BasicMouseJointInterface extends ClassHandle {
  GetTarget(): b2Vec2;
  SetTarget(_0: b2Vec2): void;
  SetMaxForce(_0: number): void;
  GetMaxForce(): number;
  SetSpringDampingRatio(_0: number): void;
  GetSpringDampingRatio(): number;
  SetSpringHertz(_0: number): void;
  GetSpringHertz(): number;
}

export interface BasicPrismaticJointInterface extends ClassHandle {
  EnableLimit(_0: boolean): void;
  IsLimitEnabled(): boolean;
  EnableMotor(_0: boolean): void;
  IsMotorEnabled(): boolean;
  EnableSpring(_0: boolean): void;
  IsSpringEnabled(): boolean;
  SetLimits(_0: number, _1: number): void;
  GetLowerLimit(): number;
  SetMaxMotorForce(_0: number): void;
  GetMaxMotorForce(): number;
  GetMotorForce(): number;
  SetMotorSpeed(_0: number): void;
  GetMotorSpeed(): number;
  GetSpeed(): number;
  SetSpringDampingRatio(_0: number): void;
  GetSpringDampingRatio(): number;
  SetSpringHertz(_0: number): void;
  GetSpringHertz(): number;
  GetTranslation(): number;
  GetUpperLimit(): number;
}

export interface BasicRevoluteJointInterface extends ClassHandle {
  EnableLimit(_0: boolean): void;
  IsLimitEnabled(): boolean;
  EnableMotor(_0: boolean): void;
  IsMotorEnabled(): boolean;
  EnableSpring(_0: boolean): void;
  IsSpringEnabled(): boolean;
  GetAngle(): number;
  SetLimits(_0: number, _1: number): void;
  GetLowerLimit(): number;
  SetMaxMotorTorque(_0: number): void;
  GetMaxMotorTorque(): number;
  SetMotorSpeed(_0: number): void;
  GetMotorSpeed(): number;
  GetMotorTorque(): number;
  SetSpringDampingRatio(_0: number): void;
  GetSpringDampingRatio(): number;
  SetSpringHertz(_0: number): void;
  GetSpringHertz(): number;
  GetUpperLimit(): number;
}

export interface BasicWeldJointInterface extends ClassHandle {
  SetAngularDampingRatio(_0: number): void;
  GetAngularDampingRatio(): number;
  SetAngularHertz(_0: number): void;
  GetAngularHertz(): number;
  SetLinearDampingRatio(_0: number): void;
  GetLinearDampingRatio(): number;
  SetLinearHertz(_0: number): void;
  GetLinearHertz(): number;
  SetReferenceAngle(_0: number): void;
  GetReferenceAngle(): number;
}

export interface BasicWheelJointInterface extends ClassHandle {
  EnableLimit(_0: boolean): void;
  IsLimitEnabled(): boolean;
  EnableMotor(_0: boolean): void;
  IsMotorEnabled(): boolean;
  EnableSpring(_0: boolean): void;
  IsSpringEnabled(): boolean;
  SetLimits(_0: number, _1: number): void;
  GetLowerLimit(): number;
  SetMaxMotorTorque(_0: number): void;
  GetMaxMotorTorque(): number;
  SetMotorSpeed(_0: number): void;
  GetMotorSpeed(): number;
  GetMotorTorque(): number;
  SetSpringDampingRatio(_0: number): void;
  GetSpringDampingRatio(): number;
  SetSpringHertz(_0: number): void;
  GetSpringHertz(): number;
  GetUpperLimit(): number;
}

export interface b2DistanceJointDef extends ClassHandle {
  localAnchorA: b2Vec2;
  localAnchorB: b2Vec2;
  enableSpring: boolean;
  enableLimit: boolean;
  enableMotor: boolean;
  collideConnected: boolean;
  bodyIdA: b2BodyId;
  bodyIdB: b2BodyId;
  length: number;
  hertz: number;
  dampingRatio: number;
  minLength: number;
  maxLength: number;
  maxMotorForce: number;
  motorSpeed: number;
}

export interface b2MotorJointDef extends ClassHandle {
  linearOffset: b2Vec2;
  collideConnected: boolean;
  bodyIdA: b2BodyId;
  bodyIdB: b2BodyId;
  angularOffset: number;
  maxForce: number;
  maxTorque: number;
  correctionFactor: number;
}

export interface b2MouseJointDef extends ClassHandle {
  target: b2Vec2;
  collideConnected: boolean;
  bodyIdA: b2BodyId;
  bodyIdB: b2BodyId;
  hertz: number;
  dampingRatio: number;
  maxForce: number;
}

export interface b2FilterJointDef extends ClassHandle {
  bodyIdA: b2BodyId;
  bodyIdB: b2BodyId;
}

export interface b2PrismaticJointDef extends ClassHandle {
  localAnchorA: b2Vec2;
  localAnchorB: b2Vec2;
  localAxisA: b2Vec2;
  enableSpring: boolean;
  enableLimit: boolean;
  enableMotor: boolean;
  collideConnected: boolean;
  bodyIdA: b2BodyId;
  bodyIdB: b2BodyId;
  referenceAngle: number;
  hertz: number;
  dampingRatio: number;
  lowerTranslation: number;
  upperTranslation: number;
  maxMotorForce: number;
  motorSpeed: number;
}

export interface b2RevoluteJointDef extends ClassHandle {
  localAnchorA: b2Vec2;
  localAnchorB: b2Vec2;
  enableSpring: boolean;
  enableLimit: boolean;
  enableMotor: boolean;
  collideConnected: boolean;
  bodyIdA: b2BodyId;
  bodyIdB: b2BodyId;
  referenceAngle: number;
  hertz: number;
  dampingRatio: number;
  lowerAngle: number;
  upperAngle: number;
  maxMotorTorque: number;
  motorSpeed: number;
  drawSize: number;
}

export interface b2WeldJointDef extends ClassHandle {
  localAnchorA: b2Vec2;
  localAnchorB: b2Vec2;
  collideConnected: boolean;
  bodyIdA: b2BodyId;
  bodyIdB: b2BodyId;
  referenceAngle: number;
  linearHertz: number;
  angularHertz: number;
  linearDampingRatio: number;
  angularDampingRatio: number;
}

export interface b2WheelJointDef extends ClassHandle {
  localAnchorA: b2Vec2;
  localAnchorB: b2Vec2;
  localAxisA: b2Vec2;
  enableSpring: boolean;
  enableLimit: boolean;
  enableMotor: boolean;
  collideConnected: boolean;
  bodyIdA: b2BodyId;
  bodyIdB: b2BodyId;
  hertz: number;
  dampingRatio: number;
  lowerTranslation: number;
  upperTranslation: number;
  maxMotorTorque: number;
  motorSpeed: number;
}

export interface DistanceJoint extends BasicDistanceJointInterface {
}

export interface MotorJoint extends BasicMotorJointInterface {
}

export interface MouseJoint extends BasicMouseJointInterface {
}

export interface PrismaticJoint extends BasicPrismaticJointInterface {
}

export interface RevoluteJoint extends BasicRevoluteJointInterface {
}

export interface WeldJoint extends BasicWeldJointInterface {
}

export interface WheelJoint extends BasicWheelJointInterface {
}

export interface b2DebugDraw extends ClassHandle {
  drawingBounds: b2AABB;
  useDrawingBounds: boolean;
  drawShapes: boolean;
  drawJoints: boolean;
  drawJointExtras: boolean;
  drawBounds: boolean;
  drawMass: boolean;
  drawContacts: boolean;
  drawGraphColors: boolean;
  drawContactNormals: boolean;
  drawContactImpulses: boolean;
  drawFrictionImpulses: boolean;
}

export interface b2RayCallbackResult extends ClassHandle {
  point: b2Vec2;
  normal: b2Vec2;
  shapeId: b2ShapeId;
  fraction: number;
}

export interface b2Plane extends ClassHandle {
  normal: b2Vec2;
  offset: number;
}

export interface b2CollisionPlane extends ClassHandle {
  plane: b2Plane;
  clipVelocity: boolean;
  pushLimit: number;
  push: number;
}

export interface b2PlaneSolverResult extends ClassHandle {
  position: b2Vec2;
  iterationCount: number;
}

export type b2PlaneResult = {
  plane: b2Plane,
  hit: boolean
};

export type b2WorldId = {
  index1: number,
  generation: number
};

export type b2BodyId = {
  index1: number,
  world0: number,
  generation: number
};

export type b2ShapeId = {
  index1: number,
  world0: number,
  generation: number
};

export type b2SensorBeginTouchEvent = {
  sensorShapeId: b2ShapeId,
  visitorShapeId: b2ShapeId
};

export type b2SensorEndTouchEvent = {
  sensorShapeId: b2ShapeId,
  visitorShapeId: b2ShapeId
};

export type b2ContactEndTouchEvent = {
  shapeIdA: b2ShapeId,
  shapeIdB: b2ShapeId
};

export type b2OverlapCallbackResult = {
  shapeId: b2ShapeId
};

export type b2TreeStats = {
  nodeVisits: number,
  leafVisits: number
};

export type b2ChainId = {
  index1: number,
  world0: number,
  generation: number
};

export type b2JointId = {
  index1: number,
  world0: number,
  generation: number
};

export type MemoryStats = {
  arena: number,
  ordblks: number,
  smblks: number,
  hblks: number,
  hblkhd: number,
  usmblks: number,
  fsmblks: number,
  uordblks: number,
  fordblks: number,
  keepcost: number,
  allocatedSpace: number,
  freeSpace: number,
  totalSpace: number
};

export interface TaskSystem extends ClassHandle {
  GetActiveTaskCount(): number;
  GetTotalThreadCount(): number;
  ClearTasks(): void;
}

export interface DebugDrawCommandBuffer extends ClassHandle {
  GetDebugDraw(): b2DebugDraw | null;
  GetCommandsData(): number;
  GetCommandsSize(): number;
  GetCommandStride(): number;
  ClearCommands(): void;
}

export interface DebugDrawCommandTypeValue<T extends number> {
  value: T;
}
export type DebugDrawCommandType = DebugDrawCommandTypeValue<0>|DebugDrawCommandTypeValue<1>|DebugDrawCommandTypeValue<2>|DebugDrawCommandTypeValue<3>|DebugDrawCommandTypeValue<4>|DebugDrawCommandTypeValue<5>|DebugDrawCommandTypeValue<6>|DebugDrawCommandTypeValue<7>|DebugDrawCommandTypeValue<8>;

interface EmbindModule {
  b2Vec2: {
    new(): b2Vec2;
    new(_0: number, _1: number): b2Vec2;
  };
  b2Vec2_zero: b2Vec2;
  b2CosSin: {
    new(): b2CosSin;
  };
  b2Rot: {
    new(): b2Rot;
  };
  b2Rot_identity: b2Rot;
  b2Transform: {
    new(): b2Transform;
  };
  b2Mat22: {
    new(): b2Mat22;
  };
  b2AABB: {
    new(): b2AABB;
  };
  b2Hull: {
    new(): b2Hull;
  };
  b2WorldDef: {
    new(): b2WorldDef;
    new(_0: b2WorldDef): b2WorldDef;
  };
  b2CastOutput: {
    new(): b2CastOutput;
  };
  b2RayCastInput: {
    new(): b2RayCastInput;
  };
  b2ManifoldPoint: {
    new(): b2ManifoldPoint;
  };
  b2Manifold: {
    new(): b2Manifold;
  };
  b2Counters: {
    new(): b2Counters;
  };
  b2SensorEvents: {
    new(): b2SensorEvents;
  };
  b2BodyEvents: {
    new(): b2BodyEvents;
  };
  b2BodyMoveEvent: {};
  b2ContactEvents: {
    new(): b2ContactEvents;
  };
  b2ContactBeginTouchEvent: {};
  b2ContactData: {};
  b2ContactHitEvent: {};
  b2Profile: {
    new(): b2Profile;
  };
  b2QueryFilter: {
    new(): b2QueryFilter;
  };
  b2DefaultQueryFilter(): b2QueryFilter;
  b2ExplosionDef: {
    new(): b2ExplosionDef;
  };
  b2DefaultExplosionDef(): b2ExplosionDef;
  b2RayResult: {
    new(): b2RayResult;
  };
  BasicWorldInterface: {};
  WorldRef: {};
  WorldConstRef: {};
  World: {
    new(): World;
    new(_0: b2WorldDef): World;
  };
  b2Circle: {
    new(): b2Circle;
  };
  b2Capsule: {
    new(): b2Capsule;
  };
  b2Segment: {
    new(): b2Segment;
  };
  b2Filter: {
    new(): b2Filter;
  };
  b2ShapeDef: {
    new(): b2ShapeDef;
  };
  b2ShapeProxy: {
    new(): b2ShapeProxy;
  };
  b2SurfaceMaterial: {
    new(): b2SurfaceMaterial;
  };
  b2DefaultSurfaceMaterial(): b2SurfaceMaterial;
  b2Polygon: {
    new(): b2Polygon;
    GetMaxVertices(): number;
  };
  b2ChainDef: {
    new(): b2ChainDef;
  };
  b2DefaultChainDef(): b2ChainDef;
  BasicChainInterface: {};
  Chain: {
    new(): Chain;
  };
  b2ChainSegment: {
    new(): b2ChainSegment;
  };
  b2MakeOffsetPolygon(_0: b2Hull | null, _1: b2Vec2, _2: b2Rot): b2Polygon;
  b2TransformPolygon(_0: b2Transform, _1: b2Polygon | null): b2Polygon;
  b2ComputeCircleAABB(_0: b2Circle | null, _1: b2Transform): b2AABB;
  b2ComputeCapsuleAABB(_0: b2Capsule | null, _1: b2Transform): b2AABB;
  b2ComputePolygonAABB(_0: b2Polygon | null, _1: b2Transform): b2AABB;
  b2ComputeSegmentAABB(_0: b2Segment | null, _1: b2Transform): b2AABB;
  b2ShapeType: {b2_circleShape: b2ShapeTypeValue<0>, b2_capsuleShape: b2ShapeTypeValue<1>, b2_segmentShape: b2ShapeTypeValue<2>, b2_polygonShape: b2ShapeTypeValue<3>, b2_chainSegmentShape: b2ShapeTypeValue<4>, b2_shapeTypeCount: b2ShapeTypeValue<5>};
  BasicShapeInterface: {};
  Shape: {
    new(): Shape;
  };
  b2DefaultShapeDef(): b2ShapeDef;
  b2MassData: {
    new(): b2MassData;
  };
  b2BodyType: {b2_staticBody: b2BodyTypeValue<0>, b2_kinematicBody: b2BodyTypeValue<1>, b2_dynamicBody: b2BodyTypeValue<2>, b2_bodyTypeCount: b2BodyTypeValue<3>};
  b2BodyDef: {
    new(): b2BodyDef;
    new(_0: b2BodyDef): b2BodyDef;
  };
  BasicBodyInterface: {};
  Body: {
    new(): Body;
  };
  b2JointType: {b2_distanceJoint: b2JointTypeValue<0>, b2_motorJoint: b2JointTypeValue<2>, b2_mouseJoint: b2JointTypeValue<3>, b2_filterJoint: b2JointTypeValue<1>, b2_prismaticJoint: b2JointTypeValue<4>, b2_revoluteJoint: b2JointTypeValue<5>, b2_weldJoint: b2JointTypeValue<6>, b2_wheelJoint: b2JointTypeValue<7>};
  BodyRef: {};
  BodyConstRef: {};
  ChainRef: {};
  ChainConstRef: {};
  BasicJointInterface: {};
  Joint: {
    new(): Joint;
  };
  JointRef: {};
  JointConstRef: {};
  DistanceJointRef: {};
  DistanceJointConstRef: {};
  MotorJointRef: {};
  MotorJointConstRef: {};
  MouseJointRef: {};
  MouseJointConstRef: {};
  PrismaticJointRef: {};
  PrismaticJointConstRef: {};
  RevoluteJointRef: {};
  RevoluteJointConstRef: {};
  WeldJointRef: {};
  WeldJointConstRef: {};
  WheelJointRef: {};
  WheelJointConstRef: {};
  BasicDistanceJointInterface: {};
  BasicMotorJointInterface: {};
  BasicMouseJointInterface: {};
  BasicPrismaticJointInterface: {};
  BasicRevoluteJointInterface: {};
  BasicWeldJointInterface: {};
  BasicWheelJointInterface: {};
  b2DistanceJointDef: {
    new(): b2DistanceJointDef;
    new(_0: b2DistanceJointDef): b2DistanceJointDef;
  };
  b2MotorJointDef: {
    new(): b2MotorJointDef;
    new(_0: b2MotorJointDef): b2MotorJointDef;
  };
  b2MouseJointDef: {
    new(): b2MouseJointDef;
    new(_0: b2MouseJointDef): b2MouseJointDef;
  };
  b2FilterJointDef: {
    new(): b2FilterJointDef;
    new(_0: b2FilterJointDef): b2FilterJointDef;
  };
  b2PrismaticJointDef: {
    new(): b2PrismaticJointDef;
    new(_0: b2PrismaticJointDef): b2PrismaticJointDef;
  };
  b2RevoluteJointDef: {
    new(): b2RevoluteJointDef;
    new(_0: b2RevoluteJointDef): b2RevoluteJointDef;
  };
  b2WeldJointDef: {
    new(): b2WeldJointDef;
    new(_0: b2WeldJointDef): b2WeldJointDef;
  };
  b2WheelJointDef: {
    new(): b2WheelJointDef;
    new(_0: b2WheelJointDef): b2WheelJointDef;
  };
  DistanceJoint: {
    new(): DistanceJoint;
  };
  MotorJoint: {
    new(): MotorJoint;
  };
  MouseJoint: {
    new(): MouseJoint;
  };
  PrismaticJoint: {
    new(): PrismaticJoint;
  };
  RevoluteJoint: {
    new(): RevoluteJoint;
  };
  WeldJoint: {
    new(): WeldJoint;
  };
  WheelJoint: {
    new(): WheelJoint;
  };
  b2DebugDraw: {
    new(): b2DebugDraw;
    new(_0: b2DebugDraw): b2DebugDraw;
  };
  b2DefaultDebugDraw(): b2DebugDraw;
  b2DefaultWorldDef(): b2WorldDef;
  b2RayCallbackResult: {
    new(): b2RayCallbackResult;
  };
  b2Plane: {
    new(): b2Plane;
  };
  b2CollisionPlane: {
    new(): b2CollisionPlane;
  };
  b2PlaneSolverResult: {
    new(): b2PlaneSolverResult;
  };
  b2DefaultBodyDef(): b2BodyDef;
  b2DefaultDistanceJointDef(): b2DistanceJointDef;
  b2DefaultMotorJointDef(): b2MotorJointDef;
  b2DefaultMouseJointDef(): b2MouseJointDef;
  b2DefaultFilterJointDef(): b2FilterJointDef;
  b2DefaultPrismaticJointDef(): b2PrismaticJointDef;
  b2DefaultRevoluteJointDef(): b2RevoluteJointDef;
  b2DefaultWeldJointDef(): b2WeldJointDef;
  b2DefaultWheelJointDef(): b2WheelJointDef;
  b2LeftPerp(_0: b2Vec2): b2Vec2;
  b2RightPerp(_0: b2Vec2): b2Vec2;
  b2Add(_0: b2Vec2, _1: b2Vec2): b2Vec2;
  b2Sub(_0: b2Vec2, _1: b2Vec2): b2Vec2;
  b2Neg(_0: b2Vec2): b2Vec2;
  b2Mul(_0: b2Vec2, _1: b2Vec2): b2Vec2;
  b2Abs(_0: b2Vec2): b2Vec2;
  b2Min(_0: b2Vec2, _1: b2Vec2): b2Vec2;
  b2Max(_0: b2Vec2, _1: b2Vec2): b2Vec2;
  b2Clamp(_0: b2Vec2, _1: b2Vec2, _2: b2Vec2): b2Vec2;
  b2Normalize(_0: b2Vec2): b2Vec2;
  b2NormalizeRot(_0: b2Rot): b2Rot;
  b2Rot_GetXAxis(_0: b2Rot): b2Vec2;
  b2Rot_GetYAxis(_0: b2Rot): b2Vec2;
  b2MulRot(_0: b2Rot, _1: b2Rot): b2Rot;
  b2InvMulRot(_0: b2Rot, _1: b2Rot): b2Rot;
  b2RotateVector(_0: b2Rot, _1: b2Vec2): b2Vec2;
  b2InvRotateVector(_0: b2Rot, _1: b2Vec2): b2Vec2;
  b2TransformPoint(_0: b2Transform, _1: b2Vec2): b2Vec2;
  b2InvTransformPoint(_0: b2Transform, _1: b2Vec2): b2Vec2;
  b2MulTransforms(_0: b2Transform, _1: b2Transform): b2Transform;
  b2InvMulTransforms(_0: b2Transform, _1: b2Transform): b2Transform;
  b2MulMV(_0: b2Mat22, _1: b2Vec2): b2Vec2;
  b2GetInverse22(_0: b2Mat22): b2Mat22;
  b2Solve22(_0: b2Mat22, _1: b2Vec2): b2Vec2;
  b2AABB_Center(_0: b2AABB): b2Vec2;
  b2AABB_Extents(_0: b2AABB): b2Vec2;
  b2AABB_Union(_0: b2AABB, _1: b2AABB): b2AABB;
  b2PointInCircle(_0: b2Vec2, _1: b2Circle | null): boolean;
  b2PointInCapsule(_0: b2Vec2, _1: b2Capsule | null): boolean;
  b2PointInPolygon(_0: b2Vec2, _1: b2Polygon | null): boolean;
  b2IsValidRay(_0: b2RayCastInput | null): boolean;
  b2IsNormalized(_0: b2Vec2): boolean;
  b2IsValidPlane(_0: b2Plane): boolean;
  b2AABB_Contains(_0: b2AABB, _1: b2AABB): boolean;
  b2CreateWorld(_0: b2WorldDef | null): b2WorldId;
  b2DestroyWorld(_0: b2WorldId): void;
  b2World_Draw(_0: b2WorldId, _1: b2DebugDraw | null): void;
  b2World_GetBodyEvents(_0: b2WorldId): b2BodyEvents;
  b2World_GetSensorEvents(_0: b2WorldId): b2SensorEvents;
  b2World_GetContactEvents(_0: b2WorldId): b2ContactEvents;
  b2World_EnableSleeping(_0: b2WorldId, _1: boolean): void;
  b2World_IsSleepingEnabled(_0: b2WorldId): boolean;
  b2World_EnableWarmStarting(_0: b2WorldId, _1: boolean): void;
  b2World_IsWarmStartingEnabled(_0: b2WorldId): boolean;
  b2World_EnableContinuous(_0: b2WorldId, _1: boolean): void;
  b2World_IsContinuousEnabled(_0: b2WorldId): boolean;
  b2World_GetProfile(_0: b2WorldId): b2Profile;
  b2World_GetCounters(_0: b2WorldId): b2Counters;
  b2World_CastRayClosest(_0: b2WorldId, _1: b2Vec2, _2: b2Vec2, _3: b2QueryFilter): b2RayResult;
  b2World_SetGravity(_0: b2WorldId, _1: b2Vec2): void;
  b2World_GetGravity(_0: b2WorldId): b2Vec2;
  b2World_Explode(_0: b2WorldId, _1: b2ExplosionDef | null): void;
  b2World_RebuildStaticTree(_0: b2WorldId): void;
  b2World_EnableSpeculative(_0: b2WorldId, _1: boolean): void;
  b2CreateBody(_0: b2WorldId, _1: b2BodyDef | null): b2BodyId;
  b2DestroyBody(_0: b2BodyId): void;
  b2Body_GetPosition(_0: b2BodyId): b2Vec2;
  b2Body_GetRotation(_0: b2BodyId): b2Rot;
  b2Body_GetTransform(_0: b2BodyId): b2Transform;
  b2Body_SetTransform(_0: b2BodyId, _1: b2Vec2, _2: b2Rot): void;
  b2Body_GetLocalPoint(_0: b2BodyId, _1: b2Vec2): b2Vec2;
  b2Body_GetWorldPoint(_0: b2BodyId, _1: b2Vec2): b2Vec2;
  b2Body_GetLocalVector(_0: b2BodyId, _1: b2Vec2): b2Vec2;
  b2Body_GetWorldVector(_0: b2BodyId, _1: b2Vec2): b2Vec2;
  b2Body_GetLocalCenterOfMass(_0: b2BodyId): b2Vec2;
  b2Body_GetWorldCenterOfMass(_0: b2BodyId): b2Vec2;
  b2Body_SetMassData(_0: b2BodyId, _1: b2MassData): void;
  b2Body_GetMassData(_0: b2BodyId): b2MassData;
  b2Body_ApplyMassFromShapes(_0: b2BodyId): void;
  b2Body_GetLinearVelocity(_0: b2BodyId): b2Vec2;
  b2Body_SetLinearVelocity(_0: b2BodyId, _1: b2Vec2): void;
  b2Body_ApplyForce(_0: b2BodyId, _1: b2Vec2, _2: b2Vec2, _3: boolean): void;
  b2Body_ApplyForceToCenter(_0: b2BodyId, _1: b2Vec2, _2: boolean): void;
  b2Body_ApplyLinearImpulse(_0: b2BodyId, _1: b2Vec2, _2: b2Vec2, _3: boolean): void;
  b2Body_ApplyLinearImpulseToCenter(_0: b2BodyId, _1: b2Vec2, _2: boolean): void;
  b2Body_GetType(_0: b2BodyId): b2BodyType;
  b2Body_SetType(_0: b2BodyId, _1: b2BodyType): void;
  b2Body_IsAwake(_0: b2BodyId): boolean;
  b2Body_SetAwake(_0: b2BodyId, _1: boolean): void;
  b2Body_IsEnabled(_0: b2BodyId): boolean;
  b2Body_Enable(_0: b2BodyId): void;
  b2Body_Disable(_0: b2BodyId): void;
  b2Body_IsSleepEnabled(_0: b2BodyId): boolean;
  b2Body_EnableSleep(_0: b2BodyId, _1: boolean): void;
  b2Body_SetFixedRotation(_0: b2BodyId, _1: boolean): void;
  b2Body_IsFixedRotation(_0: b2BodyId): boolean;
  b2Body_SetBullet(_0: b2BodyId, _1: boolean): void;
  b2Body_IsBullet(_0: b2BodyId): boolean;
  b2Body_EnableContactEvents(_0: b2BodyId, _1: boolean): void;
  b2Body_EnableHitEvents(_0: b2BodyId, _1: boolean): void;
  b2Body_ComputeAABB(_0: b2BodyId): b2AABB;
  b2Body_GetWorld(_0: b2BodyId): b2WorldId;
  b2Body_GetLocalPointVelocity(_0: b2BodyId, _1: b2Vec2): b2Vec2;
  b2Body_GetWorldPointVelocity(_0: b2BodyId, _1: b2Vec2): b2Vec2;
  b2CreatePolygonShape(_0: b2BodyId, _1: b2ShapeDef | null, _2: b2Polygon | null): b2ShapeId;
  b2CreateCircleShape(_0: b2BodyId, _1: b2ShapeDef | null, _2: b2Circle | null): b2ShapeId;
  b2CreateCapsuleShape(_0: b2BodyId, _1: b2ShapeDef | null, _2: b2Capsule | null): b2ShapeId;
  b2CreateSegmentShape(_0: b2BodyId, _1: b2ShapeDef | null, _2: b2Segment | null): b2ShapeId;
  b2DestroyShape(_0: b2ShapeId, _1: boolean): void;
  b2Shape_GetBody(_0: b2ShapeId): b2BodyId;
  b2Shape_GetWorld(_0: b2ShapeId): b2WorldId;
  b2Shape_IsValid(_0: b2ShapeId): boolean;
  b2Shape_IsSensor(_0: b2ShapeId): boolean;
  b2Shape_TestPoint(_0: b2ShapeId, _1: b2Vec2): boolean;
  b2Shape_RayCast(_0: b2ShapeId, _1: b2RayCastInput | null): b2CastOutput;
  b2Shape_GetFilter(_0: b2ShapeId): b2Filter;
  b2Shape_SetFilter(_0: b2ShapeId, _1: b2Filter): void;
  b2Shape_EnableSensorEvents(_0: b2ShapeId, _1: boolean): void;
  b2Shape_AreSensorEventsEnabled(_0: b2ShapeId): boolean;
  b2Shape_EnableContactEvents(_0: b2ShapeId, _1: boolean): void;
  b2Shape_AreContactEventsEnabled(_0: b2ShapeId): boolean;
  b2Shape_EnablePreSolveEvents(_0: b2ShapeId, _1: boolean): void;
  b2Shape_ArePreSolveEventsEnabled(_0: b2ShapeId): boolean;
  b2Shape_EnableHitEvents(_0: b2ShapeId, _1: boolean): void;
  b2Shape_AreHitEventsEnabled(_0: b2ShapeId): boolean;
  b2Shape_GetType(_0: b2ShapeId): b2ShapeType;
  b2Shape_GetCircle(_0: b2ShapeId): b2Circle;
  b2Shape_GetSegment(_0: b2ShapeId): b2Segment;
  b2Shape_GetChainSegment(_0: b2ShapeId): b2ChainSegment;
  b2Shape_GetCapsule(_0: b2ShapeId): b2Capsule;
  b2Shape_GetPolygon(_0: b2ShapeId): b2Polygon;
  b2Shape_SetCircle(_0: b2ShapeId, _1: b2Circle | null): void;
  b2Shape_SetCapsule(_0: b2ShapeId, _1: b2Capsule | null): void;
  b2Shape_SetSegment(_0: b2ShapeId, _1: b2Segment | null): void;
  b2Shape_SetPolygon(_0: b2ShapeId, _1: b2Polygon | null): void;
  b2Shape_GetAABB(_0: b2ShapeId): b2AABB;
  b2Shape_GetMassData(_0: b2ShapeId): b2MassData;
  b2Shape_GetClosestPoint(_0: b2ShapeId, _1: b2Vec2): b2Vec2;
  b2CreateChain(_0: b2BodyId, _1: b2ChainDef | null): b2ChainId;
  b2DestroyChain(_0: b2ChainId): void;
  b2Shape_GetParentChain(_0: b2ShapeId): b2ChainId;
  b2DestroyJoint(_0: b2JointId): void;
  b2CreateDistanceJoint(_0: b2WorldId, _1: b2DistanceJointDef | null): b2JointId;
  b2CreateMotorJoint(_0: b2WorldId, _1: b2MotorJointDef | null): b2JointId;
  b2CreateMouseJoint(_0: b2WorldId, _1: b2MouseJointDef | null): b2JointId;
  b2CreateFilterJoint(_0: b2WorldId, _1: b2FilterJointDef | null): b2JointId;
  b2CreatePrismaticJoint(_0: b2WorldId, _1: b2PrismaticJointDef | null): b2JointId;
  b2CreateRevoluteJoint(_0: b2WorldId, _1: b2RevoluteJointDef | null): b2JointId;
  b2CreateWeldJoint(_0: b2WorldId, _1: b2WeldJointDef | null): b2JointId;
  b2CreateWheelJoint(_0: b2WorldId, _1: b2WheelJointDef | null): b2JointId;
  b2Joint_IsValid(_0: b2JointId): boolean;
  b2Joint_GetType(_0: b2JointId): b2JointType;
  b2Joint_GetBodyA(_0: b2JointId): b2BodyId;
  b2Joint_GetBodyB(_0: b2JointId): b2BodyId;
  b2Joint_GetWorld(_0: b2JointId): b2WorldId;
  b2Joint_GetLocalAnchorA(_0: b2JointId): b2Vec2;
  b2Joint_GetLocalAnchorB(_0: b2JointId): b2Vec2;
  b2Joint_SetCollideConnected(_0: b2JointId, _1: boolean): void;
  b2Joint_GetCollideConnected(_0: b2JointId): boolean;
  b2Joint_WakeBodies(_0: b2JointId): void;
  b2Joint_GetConstraintForce(_0: b2JointId): b2Vec2;
  b2MouseJoint_SetTarget(_0: b2JointId, _1: b2Vec2): void;
  b2MouseJoint_GetTarget(_0: b2JointId): b2Vec2;
  b2DistanceJoint_EnableSpring(_0: b2JointId, _1: boolean): void;
  b2DistanceJoint_IsSpringEnabled(_0: b2JointId): boolean;
  b2DistanceJoint_EnableLimit(_0: b2JointId, _1: boolean): void;
  b2DistanceJoint_IsLimitEnabled(_0: b2JointId): boolean;
  b2DistanceJoint_EnableMotor(_0: b2JointId, _1: boolean): void;
  b2DistanceJoint_IsMotorEnabled(_0: b2JointId): boolean;
  b2MotorJoint_SetLinearOffset(_0: b2JointId, _1: b2Vec2): void;
  b2MotorJoint_GetLinearOffset(_0: b2JointId): b2Vec2;
  b2PrismaticJoint_EnableSpring(_0: b2JointId, _1: boolean): void;
  b2PrismaticJoint_IsSpringEnabled(_0: b2JointId): boolean;
  b2PrismaticJoint_EnableLimit(_0: b2JointId, _1: boolean): void;
  b2PrismaticJoint_IsLimitEnabled(_0: b2JointId): boolean;
  b2PrismaticJoint_EnableMotor(_0: b2JointId, _1: boolean): void;
  b2PrismaticJoint_IsMotorEnabled(_0: b2JointId): boolean;
  b2RevoluteJoint_EnableSpring(_0: b2JointId, _1: boolean): void;
  b2RevoluteJoint_IsSpringEnabled(_0: b2JointId): boolean;
  b2RevoluteJoint_EnableLimit(_0: b2JointId, _1: boolean): void;
  b2RevoluteJoint_IsLimitEnabled(_0: b2JointId): boolean;
  b2RevoluteJoint_EnableMotor(_0: b2JointId, _1: boolean): void;
  b2RevoluteJoint_IsMotorEnabled(_0: b2JointId): boolean;
  b2WheelJoint_EnableSpring(_0: b2JointId, _1: boolean): void;
  b2WheelJoint_IsSpringEnabled(_0: b2JointId): boolean;
  b2WheelJoint_EnableLimit(_0: b2JointId, _1: boolean): void;
  b2WheelJoint_IsLimitEnabled(_0: b2JointId): boolean;
  b2WheelJoint_EnableMotor(_0: b2JointId, _1: boolean): void;
  b2WheelJoint_IsMotorEnabled(_0: b2JointId): boolean;
  b2World_GetAwakeBodyCount(_0: b2WorldId): number;
  b2Shape_GetContactCapacity(_0: b2ShapeId): number;
  b2Shape_GetSensorCapacity(_0: b2ShapeId): number;
  b2Body_GetShapeCount(_0: b2BodyId): number;
  b2Body_GetJointCount(_0: b2BodyId): number;
  b2Body_GetContactCapacity(_0: b2BodyId): number;
  B2_HASH_INIT: number;
  RandomInt(): number;
  b2World_DeleteCallback(_0: number): void;
  GetMemoryStats(): MemoryStats;
  b2MakePolygon(_0: b2Hull | null, _1: number): b2Polygon;
  b2MakeOffsetRoundedPolygon(_0: b2Hull | null, _1: b2Vec2, _2: b2Rot, _3: number): b2Polygon;
  b2MakeSquare(_0: number): b2Polygon;
  b2MakeBox(_0: number, _1: number): b2Polygon;
  b2MakeRoundedBox(_0: number, _1: number, _2: number): b2Polygon;
  b2MakeOffsetBox(_0: number, _1: number, _2: b2Vec2, _3: b2Rot): b2Polygon;
  b2MakeOffsetRoundedBox(_0: number, _1: number, _2: b2Vec2, _3: b2Rot, _4: number): b2Polygon;
  b2MakeProxy(_0: b2Vec2 | null, _1: number, _2: number): b2ShapeProxy;
  b2MakeOffsetProxy(_0: b2Vec2 | null, _1: number, _2: number, _3: b2Vec2, _4: b2Rot): b2ShapeProxy;
  b2ComputeCircleMass(_0: b2Circle | null, _1: number): b2MassData;
  b2ComputeCapsuleMass(_0: b2Capsule | null, _1: number): b2MassData;
  b2ComputePolygonMass(_0: b2Polygon | null, _1: number): b2MassData;
  b2World_Step(_0: b2WorldId, _1: number, _2: number): void;
  b2World_SetRestitutionThreshold(_0: b2WorldId, _1: number): void;
  b2World_GetRestitutionThreshold(_0: b2WorldId): number;
  b2World_SetHitEventThreshold(_0: b2WorldId, _1: number): void;
  b2World_GetHitEventThreshold(_0: b2WorldId): number;
  b2World_SetContactTuning(_0: b2WorldId, _1: number, _2: number, _3: number): void;
  b2World_SetJointTuning(_0: b2WorldId, _1: number, _2: number): void;
  b2World_SetMaximumLinearSpeed(_0: b2WorldId, _1: number): void;
  b2World_GetMaximumLinearSpeed(_0: b2WorldId): number;
  b2World_CastMover(_0: b2WorldId, _1: b2Capsule | null, _2: b2Vec2, _3: b2QueryFilter): number;
  b2Shape_SetDensity(_0: b2ShapeId, _1: number, _2: boolean): void;
  b2Shape_GetDensity(_0: b2ShapeId): number;
  b2Shape_SetFriction(_0: b2ShapeId, _1: number): void;
  b2Shape_GetFriction(_0: b2ShapeId): number;
  b2Shape_SetRestitution(_0: b2ShapeId, _1: number): void;
  b2Shape_GetRestitution(_0: b2ShapeId): number;
  b2Body_SetTargetTransform(_0: b2BodyId, _1: b2Transform, _2: number): void;
  b2Body_GetMass(_0: b2BodyId): number;
  b2Body_GetRotationalInertia(_0: b2BodyId): number;
  b2Body_GetAngularVelocity(_0: b2BodyId): number;
  b2Body_SetAngularVelocity(_0: b2BodyId, _1: number): void;
  b2Body_ApplyTorque(_0: b2BodyId, _1: number, _2: boolean): void;
  b2Body_ApplyAngularImpulse(_0: b2BodyId, _1: number, _2: boolean): void;
  b2Body_SetLinearDamping(_0: b2BodyId, _1: number): void;
  b2Body_GetLinearDamping(_0: b2BodyId): number;
  b2Body_SetAngularDamping(_0: b2BodyId, _1: number): void;
  b2Body_GetAngularDamping(_0: b2BodyId): number;
  b2Body_SetGravityScale(_0: b2BodyId, _1: number): void;
  b2Body_GetGravityScale(_0: b2BodyId): number;
  b2Body_SetSleepThreshold(_0: b2BodyId, _1: number): void;
  b2Body_GetSleepThreshold(_0: b2BodyId): number;
  b2Joint_GetConstraintTorque(_0: b2JointId): number;
  b2MouseJoint_SetSpringHertz(_0: b2JointId, _1: number): void;
  b2MouseJoint_GetSpringHertz(_0: b2JointId): number;
  b2MouseJoint_SetSpringDampingRatio(_0: b2JointId, _1: number): void;
  b2MouseJoint_GetSpringDampingRatio(_0: b2JointId): number;
  b2MouseJoint_SetMaxForce(_0: b2JointId, _1: number): void;
  b2MouseJoint_GetMaxForce(_0: b2JointId): number;
  b2DistanceJoint_SetLength(_0: b2JointId, _1: number): void;
  b2DistanceJoint_GetLength(_0: b2JointId): number;
  b2DistanceJoint_SetSpringHertz(_0: b2JointId, _1: number): void;
  b2DistanceJoint_SetSpringDampingRatio(_0: b2JointId, _1: number): void;
  b2DistanceJoint_GetSpringHertz(_0: b2JointId): number;
  b2DistanceJoint_GetSpringDampingRatio(_0: b2JointId): number;
  b2DistanceJoint_SetLengthRange(_0: b2JointId, _1: number, _2: number): void;
  b2DistanceJoint_GetMinLength(_0: b2JointId): number;
  b2DistanceJoint_GetMaxLength(_0: b2JointId): number;
  b2DistanceJoint_GetCurrentLength(_0: b2JointId): number;
  b2DistanceJoint_SetMotorSpeed(_0: b2JointId, _1: number): void;
  b2DistanceJoint_GetMotorSpeed(_0: b2JointId): number;
  b2DistanceJoint_SetMaxMotorForce(_0: b2JointId, _1: number): void;
  b2DistanceJoint_GetMaxMotorForce(_0: b2JointId): number;
  b2DistanceJoint_GetMotorForce(_0: b2JointId): number;
  b2MotorJoint_SetAngularOffset(_0: b2JointId, _1: number): void;
  b2MotorJoint_GetAngularOffset(_0: b2JointId): number;
  b2MotorJoint_SetMaxForce(_0: b2JointId, _1: number): void;
  b2MotorJoint_GetMaxForce(_0: b2JointId): number;
  b2MotorJoint_SetMaxTorque(_0: b2JointId, _1: number): void;
  b2MotorJoint_GetMaxTorque(_0: b2JointId): number;
  b2MotorJoint_SetCorrectionFactor(_0: b2JointId, _1: number): void;
  b2MotorJoint_GetCorrectionFactor(_0: b2JointId): number;
  b2PrismaticJoint_SetSpringHertz(_0: b2JointId, _1: number): void;
  b2PrismaticJoint_GetSpringHertz(_0: b2JointId): number;
  b2PrismaticJoint_SetSpringDampingRatio(_0: b2JointId, _1: number): void;
  b2PrismaticJoint_GetSpringDampingRatio(_0: b2JointId): number;
  b2PrismaticJoint_GetLowerLimit(_0: b2JointId): number;
  b2PrismaticJoint_GetUpperLimit(_0: b2JointId): number;
  b2PrismaticJoint_SetLimits(_0: b2JointId, _1: number, _2: number): void;
  b2PrismaticJoint_SetMotorSpeed(_0: b2JointId, _1: number): void;
  b2PrismaticJoint_GetMotorSpeed(_0: b2JointId): number;
  b2PrismaticJoint_SetMaxMotorForce(_0: b2JointId, _1: number): void;
  b2PrismaticJoint_GetMaxMotorForce(_0: b2JointId): number;
  b2PrismaticJoint_GetMotorForce(_0: b2JointId): number;
  b2PrismaticJoint_GetTranslation(_0: b2JointId): number;
  b2PrismaticJoint_GetSpeed(_0: b2JointId): number;
  b2RevoluteJoint_SetSpringHertz(_0: b2JointId, _1: number): void;
  b2RevoluteJoint_GetSpringHertz(_0: b2JointId): number;
  b2RevoluteJoint_SetSpringDampingRatio(_0: b2JointId, _1: number): void;
  b2RevoluteJoint_GetSpringDampingRatio(_0: b2JointId): number;
  b2RevoluteJoint_GetAngle(_0: b2JointId): number;
  b2RevoluteJoint_GetLowerLimit(_0: b2JointId): number;
  b2RevoluteJoint_GetUpperLimit(_0: b2JointId): number;
  b2RevoluteJoint_SetLimits(_0: b2JointId, _1: number, _2: number): void;
  b2RevoluteJoint_SetMotorSpeed(_0: b2JointId, _1: number): void;
  b2RevoluteJoint_GetMotorSpeed(_0: b2JointId): number;
  b2RevoluteJoint_GetMotorTorque(_0: b2JointId): number;
  b2RevoluteJoint_SetMaxMotorTorque(_0: b2JointId, _1: number): void;
  b2RevoluteJoint_GetMaxMotorTorque(_0: b2JointId): number;
  b2WeldJoint_GetReferenceAngle(_0: b2JointId): number;
  b2WeldJoint_SetReferenceAngle(_0: b2JointId, _1: number): void;
  b2WeldJoint_SetLinearHertz(_0: b2JointId, _1: number): void;
  b2WeldJoint_GetLinearHertz(_0: b2JointId): number;
  b2WeldJoint_SetLinearDampingRatio(_0: b2JointId, _1: number): void;
  b2WeldJoint_GetLinearDampingRatio(_0: b2JointId): number;
  b2WeldJoint_SetAngularHertz(_0: b2JointId, _1: number): void;
  b2WeldJoint_GetAngularHertz(_0: b2JointId): number;
  b2WeldJoint_SetAngularDampingRatio(_0: b2JointId, _1: number): void;
  b2WeldJoint_GetAngularDampingRatio(_0: b2JointId): number;
  b2WheelJoint_SetSpringHertz(_0: b2JointId, _1: number): void;
  b2WheelJoint_GetSpringHertz(_0: b2JointId): number;
  b2WheelJoint_SetSpringDampingRatio(_0: b2JointId, _1: number): void;
  b2WheelJoint_GetSpringDampingRatio(_0: b2JointId): number;
  b2WheelJoint_GetLowerLimit(_0: b2JointId): number;
  b2WheelJoint_GetUpperLimit(_0: b2JointId): number;
  b2WheelJoint_SetLimits(_0: b2JointId, _1: number, _2: number): void;
  b2WheelJoint_SetMotorSpeed(_0: b2JointId, _1: number): void;
  b2WheelJoint_GetMotorSpeed(_0: b2JointId): number;
  b2WheelJoint_SetMaxMotorTorque(_0: b2JointId, _1: number): void;
  b2WheelJoint_GetMaxMotorTorque(_0: b2JointId): number;
  b2WheelJoint_GetMotorTorque(_0: b2JointId): number;
  B2_PI: number;
  b2Dot(_0: b2Vec2, _1: b2Vec2): number;
  b2Cross(_0: b2Vec2, _1: b2Vec2): number;
  b2CrossVS(_0: b2Vec2, _1: number): b2Vec2;
  b2CrossSV(_0: number, _1: b2Vec2): b2Vec2;
  b2Lerp(_0: b2Vec2, _1: b2Vec2, _2: number): b2Vec2;
  b2MulSV(_0: number, _1: b2Vec2): b2Vec2;
  b2MulAdd(_0: b2Vec2, _1: number, _2: b2Vec2): b2Vec2;
  b2MulSub(_0: b2Vec2, _1: number, _2: b2Vec2): b2Vec2;
  b2Length(_0: b2Vec2): number;
  b2Distance(_0: b2Vec2, _1: b2Vec2): number;
  b2IntegrateRotation(_0: b2Rot, _1: number): b2Rot;
  b2LengthSquared(_0: b2Vec2): number;
  b2DistanceSquared(_0: b2Vec2, _1: b2Vec2): number;
  b2MakeRot(_0: number): b2Rot;
  b2NLerp(_0: b2Rot, _1: b2Rot, _2: number): b2Rot;
  b2ComputeAngularVelocity(_0: b2Rot, _1: b2Rot, _2: number): number;
  b2Rot_GetAngle(_0: b2Rot): number;
  b2RelativeAngle(_0: b2Rot, _1: b2Rot): number;
  b2UnwindAngle(_0: number): number;
  b2UnwindLargeAngle(_0: number): number;
  b2MaxFloat(_0: number, _1: number): number;
  RandomIntRange(_0: number, _1: number): number;
  RandomFloat(): number;
  RandomFloatRange(_0: number, _1: number): number;
  RandomVec2(_0: number, _1: number): b2Vec2;
  RandomPolygon(_0: number): b2Polygon;
  b2World_GetPointer(_0: b2WorldId): any;
  b2World_SetFrictionCallback(_0: b2WorldId, _1: any): void;
  b2World_SetRestitutionCallback(_0: b2WorldId, _1: any): void;
  b2SolvePlanes(_0: b2Vec2, _1: any): b2PlaneSolverResult;
  b2ClipVector(_0: b2Vec2, _1: any): b2Vec2;
  b2World_OverlapAABB(_0: b2WorldId, _1: b2AABB, _2: b2QueryFilter, _3: any): b2TreeStats;
  b2World_OverlapShape(_0: b2WorldId, _1: b2ShapeProxy | null, _2: b2QueryFilter, _3: any): b2TreeStats;
  b2World_CastRay(_0: b2WorldId, _1: b2Vec2, _2: b2Vec2, _3: b2QueryFilter, _4: any): b2TreeStats;
  b2World_CastShape(_0: b2WorldId, _1: b2ShapeProxy | null, _2: b2Vec2, _3: b2QueryFilter, _4: any): b2TreeStats;
  b2World_CollideMover(_0: b2WorldId, _1: b2Capsule | null, _2: b2QueryFilter, _3: any): void;
  b2World_SetCustomFilterCallback(_0: b2WorldId, _1: any): number;
  b2World_SetPreSolveCallback(_0: b2WorldId, _1: any): number;
  b2Shape_GetPointer(_0: b2ShapeId): any;
  b2Shape_GetContactData(_0: b2ShapeId, _1: number): any;
  b2Shape_GetSensorOverlaps(_0: b2ShapeId, _1: number): any;
  b2Body_GetPointer(_0: b2BodyId): any;
  b2Body_GetShapes(_0: b2BodyId, _1: number): any;
  b2Body_GetJoints(_0: b2BodyId): any;
  b2Body_GetContactData(_0: b2BodyId, _1: number): any;
  b2Joint_GetPointer(_0: b2JointId): any;
  b2ComputeHull(_0: any): b2Hull;
  B2_ID_EQUALS(_0: any, _1: any): boolean;
  b2Hash(_0: number, _1: any): number;
  TaskSystem: {
    new(_0: number): TaskSystem;
  };
  b2CreateThreadedWorld(_0: b2WorldDef, _1: TaskSystem): b2WorldId;
  DebugDrawCommandBuffer: {
    new(): DebugDrawCommandBuffer;
    new(_0: number): DebugDrawCommandBuffer;
  };
  DebugDrawCommandType: {e_polygon: DebugDrawCommandTypeValue<0>, e_solidPolygon: DebugDrawCommandTypeValue<1>, e_circle: DebugDrawCommandTypeValue<2>, e_solidCircle: DebugDrawCommandTypeValue<3>, e_solidCapsule: DebugDrawCommandTypeValue<4>, e_segment: DebugDrawCommandTypeValue<5>, e_transform: DebugDrawCommandTypeValue<6>, e_point: DebugDrawCommandTypeValue<7>, e_string: DebugDrawCommandTypeValue<8>};
}

export type MainModule = WasmModule & typeof RuntimeExports & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
