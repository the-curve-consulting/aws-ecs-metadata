export interface Container {
  DockerId: string;
  Name: string;
  DockerName: string;
  Image: string;
  ImageID: string;
  Labels: Labels;
  DesiredStatus: string;
  KnownStatus: string;
  Limits: Limits;
  CreatedAt: string;
  StartedAt: string;
  Type: string;
  Networks: Network[];
  ContainerARN: string;
  LogOptions: LogOptions;
  LogDriver: string;
}

export interface Labels {
  "com.amazonaws.ecs.cluster": string;
  "com.amazonaws.ecs.container-name": string;
  "com.amazonaws.ecs.task-arn": string;
  "com.amazonaws.ecs.task-definition-family": string;
  "com.amazonaws.ecs.task-definition-version": string;
}

export interface Limits {
  CPU: number;
}

export interface Network {
  NetworkMode: string;
  IPv4Addresses: string[];
  AttachmentIndex: number;
  MACAddress: string;
  IPv4SubnetCIDRBlock: string;
  DomainNameServers: string[];
  DomainNameSearchList: string[];
  PrivateDNSName: string;
  SubnetGatewayIpv4Address: string;
}

export interface LogOptions {
  "awslogs-group": string;
  "awslogs-region": string;
  "awslogs-stream": string;
}
