export interface TaskStats {
  [key: string]: TaskStat;
}

export interface TaskStat {
  read: string
  preread: string
  pids_stats: PidsStats
  blkio_stats: BlkioStats
  num_procs: number
  storage_stats: StorageStats
  cpu_stats: CpuStats
  precpu_stats: PrecpuStats
  memory_stats: MemoryStats
  name: string
  id: string
  networks: Networks
  network_rate_stats: NetworkRateStats
}

export interface PidsStats {}

export interface BlkioStats {
  io_service_bytes_recursive: IoServiceBytesRecursive[]
  io_serviced_recursive: IoServicedRecursive[]
  io_queue_recursive: any[]
  io_service_time_recursive: any[]
  io_wait_time_recursive: any[]
  io_merged_recursive: any[]
  io_time_recursive: any[]
  sectors_recursive: any[]
}

export interface IoServiceBytesRecursive {
  major: number
  minor: number
  op: string
  value: number
}

export interface IoServicedRecursive {
  major: number
  minor: number
  op: string
  value: number
}

export interface StorageStats {}

export interface CpuStats {
  cpu_usage: CpuUsage
  system_cpu_usage: number
  online_cpus: number
  throttling_data: ThrottlingData
}

export interface CpuUsage {
  total_usage: number
  percpu_usage: number[]
  usage_in_kernelmode: number
  usage_in_usermode: number
}

export interface ThrottlingData {
  periods: number
  throttled_periods: number
  throttled_time: number
}

export interface PrecpuStats {
  cpu_usage: CpuUsage2
  system_cpu_usage: number
  online_cpus: number
  throttling_data: ThrottlingData2
}

export interface CpuUsage2 {
  total_usage: number
  percpu_usage: number[]
  usage_in_kernelmode: number
  usage_in_usermode: number
}

export interface ThrottlingData2 {
  periods: number
  throttled_periods: number
  throttled_time: number
}

export interface MemoryStats {
  usage: number
  max_usage: number
  stats: Stats
  limit: number
}

export interface Stats {
  active_anon: number
  active_file: number
  cache: number
  dirty: number
  hierarchical_memory_limit: number
  hierarchical_memsw_limit: number
  inactive_anon: number
  inactive_file: number
  mapped_file: number
  pgfault: number
  pgmajfault: number
  pgpgin: number
  pgpgout: number
  rss: number
  rss_huge: number
  total_active_anon: number
  total_active_file: number
  total_cache: number
  total_dirty: number
  total_inactive_anon: number
  total_inactive_file: number
  total_mapped_file: number
  total_pgfault: number
  total_pgmajfault: number
  total_pgpgin: number
  total_pgpgout: number
  total_rss: number
  total_rss_huge: number
  total_unevictable: number
  total_writeback: number
  unevictable: number
  writeback: number
}

export interface Networks {
  eth1: Eth1
}

export interface Eth1 {
  rx_bytes: number
  rx_packets: number
  rx_errors: number
  rx_dropped: number
  tx_bytes: number
  tx_packets: number
  tx_errors: number
  tx_dropped: number
}

export interface NetworkRateStats {
  rx_bytes_per_sec: number
  tx_bytes_per_sec: number
}
