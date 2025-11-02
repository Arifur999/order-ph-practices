const arr = Array.from({ length: 3 });

// ans hobe undifind undifind undifind

const arr2 = Array.from({ length: 3 }).fill(0);
// ans hobe [0,0,0]

const arr3 = Array.from({ length: 3 }, (_, i) => i);

// ans [0,1,2]   ata diye index onujai bosai dey

// -------------------------------------------------------
// range

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil(stop - start) / step },
    (_, i) => start + i * step
  );

  console.log(range(0,10,1));