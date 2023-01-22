function solve(worker) {
  if (worker.dizziness) {
    return {
      ...worker,
      levelOfHydrated: worker.weight * 0.1 * worker.experience,
      dizziness: false,
    };
    
  }
  //     if(worker.dizziness){
  //         worker.levelOfHydrated = worker.weight * 0.1 * worker.experience;
  //         worker.dizziness = false;
  //     }
  // return worker;
  return {...worker}
}
solve({
  weight: 80,

  experience: 1,

  levelOfHydrated: 0,

  dizziness: true,
});
solve({
  weight: 120,

  experience: 20,

  levelOfHydrated: 200,

  dizziness: true,
});
solve({
  weight: 95,

  experience: 3,

  levelOfHydrated: 0,

  dizziness: false,
});
