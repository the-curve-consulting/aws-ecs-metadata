import { Container } from "./Container";

export interface Task {
  Cluster: string
  TaskARN: string
  Family: string
  Revision: string
  DesiredStatus: string
  KnownStatus: string
  Limits: Limits
  PullStartedAt: string
  PullStoppedAt: string
  AvailabilityZone: string
  Containers: Container[]
  LaunchType: string
  ClockDrift: ClockDrift
  EphemeralStorageMetrics: EphemeralStorageMetrics
}

export interface Limits {
  CPU: number
  Memory: number
}


export interface ClockDrift {
  ClockErrorBound: number
  ReferenceTimestamp: string
  ClockSynchronizationStatus: string
}

export interface EphemeralStorageMetrics {
  Utilized: number
  Reserved: number
}
