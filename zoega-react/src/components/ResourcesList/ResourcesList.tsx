import React from "react";
import ResourceCard from "../ResourceCard/ResourceCard";
import "./ResourcesList.css";

export default function ResourcesList({ resources, setResources }) {
  return (
    <div className="resourceslist justify-items-center grid grid-cols-4">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          setResources={setResources}
          id={resource.id}
        />
      ))}
    </div>
  );
}
