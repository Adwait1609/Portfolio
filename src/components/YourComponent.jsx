// ...existing code...

const validateGeometry = (geometry) => {
  const position = geometry.attributes.position.array;
  for (let i = 0; i < position.length; i++) {
    if (isNaN(position[i])) {
      console.error(`NaN value found at index ${i} in position attribute`);
      position[i] = 0; // or handle the NaN value appropriately
    }
  }
  geometry.attributes.position.needsUpdate = true;
  geometry.computeBoundingSphere();
};

// ...existing code where geometry is created or updated...
validateGeometry(yourGeometry); // Call this function after creating or updating the geometry
// ...existing code...
