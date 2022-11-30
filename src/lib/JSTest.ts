export function bench(test: () => any) {
  //console.time("test")
  var start = new Date();
  test();
  var end = new Date();
  var final = end.getTime() - start.getTime();
  //console.log(":::: ", final)
  //console.timeEnd("test")
  return final;
}
export function benchAverage(f: () => any, rotations: number = 1000) {
  var time = 0;
  for (var i = 0; i < rotations; i++) {
    time += bench(f);
  }
  time /= rotations;
  return time;
}

export function testIf(f: () => any) {
  var check = () => {
    return f();
  };
  var shouldBe = (data: any) => {
    if (check() == data) return true;
    return false;
  };
  return { shouldBe };
}

