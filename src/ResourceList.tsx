import React from 'react';

import { useResources } from './customHooks/useResources';

interface Props {
  resourceName: string;
}

const ResourceList = ({ resourceName }: Props) => {
  const resourcesContent = useResources(resourceName).map((resource) => <li key={resource.id}>{resource.title}</li>);

  return <ul>{resourcesContent}</ul>;
};

export default ResourceList;
