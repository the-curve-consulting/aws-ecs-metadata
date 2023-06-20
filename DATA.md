# Task metadata endpoint version 4 paths
From the AWS Docs: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-metadata-endpoint-v4.html

The following task metadata endpoint paths are available to containers.

## ${ECS_CONTAINER_METADATA_URI_V4}

This path returns metadata for the container.

## ${ECS_CONTAINER_METADATA_URI_V4}/task

This path returns metadata for the task, including a list of the container IDs and names for all of the containers associated with the task. For more information about the response for this endpoint, see Task metadata JSON response.

## ${ECS_CONTAINER_METADATA_URI_V4}/taskWithTags

This path returns the metadata for the task included in the /task endpoint in addition to the task and container instance tags that can be retrieved using the ListTagsForResource API. Any errors received when retrieving the tag metadata will be included in the Errors field in the response.


> Note
> The Errors field is only in the response for tasks hosted on Amazon EC2 Linux instances running at least version 1.50.0 of the container agent. For Amazon EC2 Windows instances that use awsvpc network mode, the Amazon ECS container agent must be at least version 1.54.0

This endpoint requires the ecs.ListTagsForResource permission.

## ${ECS_CONTAINER_METADATA_URI_V4}/stats

This path returns Docker stats for the specific container. For more information about each of the returned stats, see ContainerStats in the Docker API documentation.

For Amazon ECS tasks that use the awsvpc or bridge network modes hosted on Amazon EC2 Linux instances running at least version 1.43.0 of the container agent, there will be additional network rate stats included in the response. For all other tasks, the response will only include the cumulative network stats.

## ${ECS_CONTAINER_METADATA_URI_V4}/task/stats
This path returns Docker stats for all of the containers associated with the task. This can be used by sidecar containers to extract network metrics. For more information about each of the returned stats, see ContainerStats in the Docker API documentation.

For Amazon ECS tasks that use the awsvpc or bridge network modes hosted on Amazon EC2 Linux instances running at least version 1.43.0 of the container agent, there will be additional network rate stats included in the response. For all other tasks, the response will only include the cumulative network stats.